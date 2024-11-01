<template>
    <ion-page>
      <ion-header>
        <ion-toolbar style="border: solid 3px burlywood;">
                    <div class="topbar-icon-container-left">
                    <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
                    
                </div>
                <center><h1>Mood Tracker</h1></center>
  </ion-toolbar>    
      </ion-header>
  
      <ion-content class="ion-padding" color="light">
        <ion-item>
          <ion-label position="stacked">How are you feeling today?</ion-label>
          <ion-select v-model="mood" placeholder="Select mood">
            <ion-select-option>Happy</ion-select-option>
            <ion-select-option>Sad</ion-select-option>
            <ion-select-option>Angry</ion-select-option>
            <ion-select-option>Anxious</ion-select-option>
            <ion-select-option>Calm</ion-select-option>
          </ion-select>
        </ion-item>
  
        <ion-item>
          <ion-label position="stacked">Notes</ion-label>
          <ion-textarea v-model="notes" placeholder="Add any details..."></ion-textarea>
        </ion-item>
  
        <ion-button expand="block" color="success" class="ion-margin-top" @click="saveDetails">
          Save Mood
        </ion-button>
      </ion-content>
    </ion-page>
  </template>
  


<script setup>

import { IonIcon } from '@ionic/vue';
import { book, logoIonic, person, settings,arrowBack, bookOutline, roseOutline, leafOutline, callOutline, newspaperOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

</script>

  <script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonTextarea, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';
  
  export default {
    name: 'MoodTrackerPage',
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonItem,
      IonLabel,
      IonTextarea,
      IonSelect,
      IonSelectOption,
      IonButton
    },
    data() {
      return {
        mood: '',
        notes: ''
      };
    },
    methods: {
      saveDetails() {
        const userDetails = {
          mood: this.mood,
          notes: this.notes
        };
        // Save to localStorage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        // Show a confirmation message
        alert('Details saved successfully!');
      },
      loadDetails() {
        const savedData = localStorage.getItem('userDetails');
        if (savedData) {
          const userDetails = JSON.parse(savedData);
          this.mood = userDetails.mood || '';
          this.notes = userDetails.notes || '';
        }
      }
    },
    mounted() {
      this.loadDetails();
    }
  };
  </script>
  
<style>
.topbar-icon-container-left {
    position: absolute;
    left: 0;
}
.icon{
    font-size: x-large;
}
</style>