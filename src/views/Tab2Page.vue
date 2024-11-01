<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="border: solid 3px burlywood;">
        
        <center><h1>My Calendar</h1></center>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding" color="light">
      <ion-list lines="none">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Add Event</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label position="stacked">Event Title</ion-label>
              <ion-input v-model="newEvent.title" placeholder="e.g., Study Session"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Date</ion-label>
              <ion-datetime v-model="newEvent.date" display-format="MM/DD/YYYY" placeholder="Select Date"></ion-datetime>
            </ion-item>
            <ion-button expand="block" color="success" class="ion-margin-top" @click="saveEvent">
              Save Event
            </ion-button>
          </ion-card-content>
        </ion-card>
        
        <ion-button expand="block" color="primary" @click="toggleViewEvents">
          {{ showEvents ? 'Hide Events' : 'View Events' }}
        </ion-button>
        
        <ion-list v-if="showEvents && events.length > 0">
          <ion-item v-for="(event, index) in events" :key="index">
            <ion-label>
              <h2>{{ event.title }}</h2>
              <p>{{ formatDate(event.date) }}</p>
            </ion-label>
            <ion-button color="danger" slot="end" @click="deleteEvent(index)">
              Delete
            </ion-button>
          </ion-item>
        </ion-list>
        <ion-text v-if="showEvents && events.length === 0" class="ion-text-center">
          No events added yet.
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonDatetime, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';

export default {
  name: 'CalendarPage',
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
    IonDatetime,
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
        date: '',
      },
      events: [],
      showEvents: false,
    };
  },
  methods: {
    saveEvent() {
      if (this.newEvent.title && this.newEvent.date) {
        this.events.push({ ...this.newEvent });
        localStorage.setItem('events', JSON.stringify(this.events));
        this.newEvent = { title: '', date: '' };
        alert('Event saved successfully!');
        this.showEvents = true;
      } else {
        alert('Please fill in all fields.');
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
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
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

ion-item p {
  color: #5f6e5c;
}

.topbar-icon-container-left {
  position: absolute;
  left: 0;
}

.icon {
  font-size: x-large;
  opacity: 100%;
  margin: 0.415rem;
}
.ion-text-center {
  text-align: center;
  font-size: 1.2em;
  margin-top: 20px;
}
</style>
