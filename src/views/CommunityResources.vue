<template>
    <ion-page>
      <ion-header>
        </ion-header>
        <ion-toolbar style="border: solid 3px burlywood;">
                    <div class="topbar-icon-container-left">
                    <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
                    
                </div>
                <center><h1>Community Resources</h1></center>
  </ion-toolbar>
      <ion-content class="ion-padding">
        <ion-text class="instruction">Take a look at these resources!</ion-text>
        <ion-list>
          <ion-item>
           <a href="https://www.volunteermatch.org/"><ion-label>Join Local Volunteering Groups</ion-label></a> 
          </ion-item>
          <ion-item>
            
            <a href="https://www.heypeers.com/"><ion-label>Join Support Groups</ion-label></a>
          </ion-item>
          <ion-item>
            <a href="https://www.meetup.com/"><ion-label>Social Clubs and Activities</ion-label>
            </a>
          </ion-item>
          <ion-item>
            <a href="https://discord.com/"> <ion-label>Local events and gatherings</ion-label>
            </a>
          </ion-item>
          <ion-item>
            
            <a href="https://skillsbuild.org/"><ion-label>Skill exchange programs</ion-label></a>
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