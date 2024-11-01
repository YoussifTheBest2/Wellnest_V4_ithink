<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <center><ion-title>Ai Therapist</ion-title></center>
       <center> <a href="https://www.freeaitherapist.com/">If it doesn't work Click this</a></center>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
      
      <iframe src="https://www.freeaitherapist.com/" title="description" class="iframe"></iframe> 
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

<style>
.iframe{
  height: 100%;
  width: 100%;
}
</style>