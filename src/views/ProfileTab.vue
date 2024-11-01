<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="border: solid 3px burlywood;">
                    <div class="topbar-icon-container-left">
                    <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
                    
                </div>
                <center><h1>Personal Details</h1></center>
  </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" color="light">
      <ion-list lines="none">
        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input v-model="name" placeholder="Enter your name"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Date of Birth</ion-label>
          <ion-datetime v-model="dateOfBirth" display-format="MM/DD/YYYY" placeholder="Select Date"></ion-datetime>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Current Weight</ion-label>
          <ion-input v-model="currentWeight" type="number" placeholder="Enter weight (kg/lbs)"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Current Height</ion-label>
          <ion-input v-model="currentHeight" type="number" placeholder="Enter height (cm/ft)"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Chronic Diseases</ion-label>
          <ion-textarea v-model="chronicDiseases" placeholder="Describe any chronic conditions"></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Current Sleep Schedule</ion-label>
          <ion-select v-model="sleepSchedule" placeholder="Select schedule">
            <ion-select-option>Regular</ion-select-option>
            <ion-select-option>Irregular</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Current Workout Schedule</ion-label>
          <ion-select v-model="workoutSchedule" placeholder="Select frequency">
            <ion-select-option>Daily</ion-select-option>
            <ion-select-option>Weekly</ion-select-option>
            <ion-select-option>Occasionally</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="success" class="ion-margin-top" @click="saveDetails">
        Save Details
      </ion-button>
    </ion-content>
  </ion-page>
</template>


<script setup>

import { IonIcon } from '@ionic/vue';
import { arrowBack, book, logoIonic, person, settings } from 'ionicons/icons';
import { defineComponent } from 'vue';

</script>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonDatetime, IonTextarea, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';

export default {
  name: 'PersonalDetailsPage',
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
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonButton
  },
  data() {
    return {
      name: '',
      dateOfBirth: '',
      currentWeight: '',
      currentHeight: '',
      chronicDiseases: '',
      sleepSchedule: '',
      workoutSchedule: ''
    };
  },
  methods: {
    saveDetails() {
      const userDetails = {
        name: this.name,
        dateOfBirth: this.dateOfBirth,
        currentWeight: this.currentWeight,
        currentHeight: this.currentHeight,
        chronicDiseases: this.chronicDiseases,
        sleepSchedule: this.sleepSchedule,
        workoutSchedule: this.workoutSchedule
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
        this.name = userDetails.name || '';
        this.dateOfBirth = userDetails.dateOfBirth || '';
        this.currentWeight = userDetails.currentWeight || '';
        this.currentHeight = userDetails.currentHeight || '';
        this.chronicDiseases = userDetails.chronicDiseases || '';
        this.sleepSchedule = userDetails.sleepSchedule || '';
        this.workoutSchedule = userDetails.workoutSchedule || '';
      }
    }
  },
  mounted() {
    this.loadDetails();
  }
}
</script>

<style scoped>
ion-title {
  font-size: 1.5em;
}

ion-content {
  --background: #e0ece4; /* Soft pastel green */
}

ion-button {
  --background: #8fbc8f; /* Muted green */
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

</style>