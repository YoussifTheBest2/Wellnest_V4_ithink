<template>
    <ion-page>
      <ion-header>
        </ion-header>
        <ion-toolbar style="border: solid 3px burlywood;">
                    <div class="topbar-icon-container-left">
                    <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
                    
                </div>
                <center><h1>Anger Management</h1></center>
  </ion-toolbar>
      <ion-content class="ion-padding">
        <ion-text class="instruction">Try these techniques to calm down:</ion-text>
        <ion-list>
          <ion-item>
            <a href="/Anxiety"><ion-label>Take deep breaths</ion-label></a>
          </ion-item>
          <ion-item>
            <ion-label>Go for a walk</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Practice mindfulness</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Count to 10 slowly</ion-label>
          </ion-item>
          <ion-item>
            <a href="/moodtracker"><ion-label>Write down your feelings</ion-label></a>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
<script setup>

import { IonIcon } from '@ionic/vue';
import { arrowBack, book, logoIonic, person, settings } from 'ionicons/icons';
import { defineComponent } from 'vue';

</script>

  <script>
  export default {
    name: 'AngerManagementPage'
  }
  </script>
  
  <style scoped>
  .instruction {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 20px;
  }

  .icon{
    font-size: x-large;
  }
  .topbar-icon-container-left {
    position: absolute;
    left: 0;
}
  </style>