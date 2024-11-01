<template>
    <ion-page>
      <ion-header>
        <ion-toolbar style="border: solid 3px burlywood">
          <div class="topbar-icon-container-left">
            <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
          </div>
          <center><h1>Food Tracker :)</h1></center>
        </ion-toolbar>
      </ion-header>
      
      <ion-content class="ion-padding" color="light">
        <ion-list lines="none">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Food Tracker</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label position="stacked">Food Title</ion-label>
                <ion-input v-model="newEvent.title" placeholder="e.g., Omlet"></ion-input>
              </ion-item>
              <ion-button expand="block" color="success" class="ion-margin-top" @click="saveEvent">
                Save Food
              </ion-button>
            </ion-card-content>
          </ion-card>
          
          <ion-button expand="block" color="primary" @click="toggleViewEvents">
            {{ showEvents ? 'Hide List' : 'View List' }}
          </ion-button>
          
          <ion-list v-if="showEvents && events.length > 0">
            <ion-item v-for="(event, index) in events" :key="index">
              <ion-label>
                <h2>{{ event.title }}</h2>
              </ion-label>
              <ion-button color="danger" slot="end" @click="deleteEvent(index)">
                Delete
              </ion-button>
            </ion-item>
          </ion-list>
          <ion-text v-if="showEvents && events.length === 0" class="ion-text-center">
            No items added yet.
          </ion-text>
  
          <!-- Water Tracker Section -->
          <ion-card>
            <ion-card-header>
              <ion-card-title>Water Tracker</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label position="stacked">Water Intake (liters)</ion-label>
                <ion-input v-model="newWater.intake" type="number" placeholder="e.g., 2.5"></ion-input>
              </ion-item>
              <ion-button expand="block" color="success" class="ion-margin-top" @click="saveWater">
                Save Water Intake
              </ion-button>
            </ion-card-content>
          </ion-card>
  
          <ion-button expand="block" color="primary" @click="toggleViewWaterEvents">
            {{ showWaterEvents ? 'Hide Water List' : 'View Water List' }}
          </ion-button>
          
          <ion-list v-if="showWaterEvents && waterEvents.length > 0">
            <ion-item v-for="(event, index) in waterEvents" :key="index">
              <ion-label>
                <h2>{{ event.intake }} liters</h2>
              </ion-label>
              <ion-button color="danger" slot="end" @click="deleteWaterEvent(index)">
                Delete
              </ion-button>
            </ion-item>
          </ion-list>
          <ion-text v-if="showWaterEvents && waterEvents.length === 0" class="ion-text-center">
            No water intake added yet.
          </ion-text>
  
          <!-- Workout Tracker Section -->
          <ion-card>
            <ion-card-header>
              <ion-card-title>Workout Tracker</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label position="stacked">Workout Title</ion-label>
                <ion-input v-model="newWorkout.title" placeholder="e.g., Running"></ion-input>
              </ion-item>
              <ion-item>
                <ion-label position="stacked">Duration (minutes)</ion-label>
                <ion-input v-model="newWorkout.duration" type="number" placeholder="e.g., 30"></ion-input>
              </ion-item>
              <ion-button expand="block" color="success" class="ion-margin-top" @click="saveWorkout">
                Save Workout
              </ion-button>
            </ion-card-content>
          </ion-card>
  
          <ion-button expand="block" color="primary" @click="toggleViewWorkoutEvents">
            {{ showWorkoutEvents ? 'Hide Workout List' : 'View Workout List' }}
          </ion-button>
          
          <ion-list v-if="showWorkoutEvents && workoutEvents.length > 0">
            <ion-item v-for="(event, index) in workoutEvents" :key="index">
              <ion-label>
                <h2>{{ event.title }} - {{ event.duration }} minutes</h2>
              </ion-label>
              <ion-button color="danger" slot="end" @click="deleteWorkoutEvent(index)">
                Delete
              </ion-button>
            </ion-item>
          </ion-list>
          <ion-text v-if="showWorkoutEvents && workoutEvents.length === 0" class="ion-text-center">
            No workouts added yet.
          </ion-text>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonIcon } from '@ionic/vue';
  import { arrowBack } from 'ionicons/icons';
  </script>
  
  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
  
  export default {
    name: 'ListPage',
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonLabel,
      IonInput,
      IonButton,
      IonCard,
      IonCardHeader,
      IonCardTitle,
      IonCardContent
    },
    data() {
      return {
        newEvent: {
          title: '',
        },
        events: [],
        showEvents: false,
        newWater: {
          intake: null,
        },
        waterEvents: [],
        showWaterEvents: false,
        newWorkout: {
          title: '',
          duration: null,
        },
        workoutEvents: [],
        showWorkoutEvents: false,
      };
    },
    methods: {
      saveEvent() {
        if (this.newEvent.title) {
          this.events.push({ ...this.newEvent });
          localStorage.setItem('events', JSON.stringify(this.events));
          this.newEvent = { title: '' };
          alert('Food item saved successfully!');
          this.showEvents = true;
        } else {
          alert('Please enter an item title.');
        }
      },
      loadEvents() {
        const savedEvents = localStorage.getItem('events');
        if (savedEvents) {
          this.events = JSON.parse(savedEvents);
        }
      },
      toggleViewEvents() {
        if (!this.showEvents) {
          this.loadEvents();
        }
        this.showEvents = !this.showEvents;
      },
      deleteEvent(index) {
        this.events.splice(index, 1);
        localStorage.setItem('events', JSON.stringify(this.events));
      },
  
      // Water Tracker Methods
      saveWater() {
        if (this.newWater.intake) {
          this.waterEvents.push({ ...this.newWater });
          localStorage.setItem('waterEvents', JSON.stringify(this.waterEvents));
          this.newWater = { intake: null };
          alert('Water intake saved successfully!');
          this.showWaterEvents = true;
        } else {
          alert('Please enter water intake.');
        }
      },
      loadWaterEvents() {
        const savedWaterEvents = localStorage.getItem('waterEvents');
        if (savedWaterEvents) {
          this.waterEvents = JSON.parse(savedWaterEvents);
        }
      },
      toggleViewWaterEvents() {
        if (!this.showWaterEvents) {
          this.loadWaterEvents();
        }
        this.showWaterEvents = !this.showWaterEvents;
      },
      deleteWaterEvent(index) {
        this.waterEvents.splice(index, 1);
        localStorage.setItem('waterEvents', JSON.stringify(this.waterEvents));
      },
  
      // Workout Tracker Methods
      saveWorkout() {
        if (this.newWorkout.title && this.newWorkout.duration) {
          this.workoutEvents.push({ ...this.newWorkout });
          localStorage.setItem('workoutEvents', JSON.stringify(this.workoutEvents));
          this.newWorkout = { title: '', duration: null };
          alert('Workout saved successfully!');
          this.showWorkoutEvents = true;
        } else {
          alert('Please enter both workout title and duration.');
        }
      },
      loadWorkoutEvents() {
        const savedWorkoutEvents = localStorage.getItem('workoutEvents');
        if (savedWorkoutEvents) {
          this.workoutEvents = JSON.parse(savedWorkoutEvents);
        }
      },
      toggleViewWorkoutEvents() {
        if (!this.showWorkoutEvents) {
          this.loadWorkoutEvents();
        }
        this.showWorkoutEvents = !this.showWorkoutEvents;
      },
      deleteWorkoutEvent(index) {
        this.workoutEvents.splice(index, 1);
        localStorage.setItem('workoutEvents', JSON.stringify(this.workoutEvents));
      },
    },
    mounted() {
      this.loadEvents();
      this.loadWaterEvents();
      this.loadWorkoutEvents();
    }
  };
  </script>
  
  <style scoped>
  ion-header {
    --background: #f5f5dc; /* Light beige */
  }
  
  ion-title {
    font-size: 1.5em;
  }
  
  ion-content {
    --background: #e0ece4; /* Soft pastel green */
  }
  
  ion-button {
    --background: #8fbc8f; /* Muted green */
    margin-top: 10px;
  }
  
  ion-card {
    background: #e6e8e1;
  }
  
  ion-item h2 {
    font-weight: bold;
  }
  
  .ion-text-center {
    text-align: center;
    font-size: 1.2em;
    margin-top: 20px;
  }
  
  .topbar-icon-container-left {
    position: absolute;
    left: 0;
  }
  
  .icon {
    font-size: x-large;
  }
  </style>
  