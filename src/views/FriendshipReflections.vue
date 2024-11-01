<template>
    <ion-page>
      <ion-header>
        <ion-toolbar style="border: solid 3px burlywood">
        <div class="topbar-icon-container-left">
          <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
        </div>
        <center><h1>Reflection :(</h1></center>
      </ion-toolbar>
      </ion-header>
      
      <ion-content class="ion-padding" color="light">
        <ion-list lines="none">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Add Reflection</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label position="stacked">Item Title</ion-label>
                <ion-input v-model="newEvent.title" placeholder="e.g., Regret leaving her :("></ion-input>
              </ion-item>
              <ion-button expand="block" color="success" class="ion-margin-top" @click="saveEvent">
                Save Reflection
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
      };
    },
    methods: {
      saveEvent() {
        if (this.newEvent.title) {
          this.events.push({ ...this.newEvent });
          localStorage.setItem('events', JSON.stringify(this.events));
          this.newEvent = { title: '' };
          alert('Item saved successfully!');
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
    },
    mounted() {
      this.loadEvents();
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
.icon{
    font-size: x-large;
}
  </style>
  