<template>
    <ion-page>
        <ion-header>

            <div class="page-header">


                <div class="topbar-icon-container-left">
                    <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>

                </div>
                




                <div class="title-elements">
                    <h3>Emotional Health</h3>
                </div>
            </div>
        </ion-header>

        <ion-content>
            <ion-grid class="emotionalbody">
                <div><ion-row>
                    <ion-col>
                        <a style="display: block; text-decoration: none; color: inherit;" href="/moodtracker" ><ion-card class="ph-card-col">
                            <div class="container">
                                <ion-card-header>Mood Tracker</ion-card-header>
                            <ion-card-content></ion-card-content>
                            </div>
                        </ion-card></a>
                    </ion-col>

                    
                </ion-row>

                <ion-row>
                    <ion-col>
                        <a style="display: block; text-decoration: none; color: inherit;" href="/anxiety" ><ion-card class="ph-card-col">
                            <div class="container">
                                <ion-card-header>Anxiety</ion-card-header>
                            <ion-card-content></ion-card-content>
                            </div>
                        </ion-card></a>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <a style="display: block; text-decoration: none; color: inherit;" href="/angermanagement" ><ion-card class="ph-card-col">
                            <div class="container">
                                <ion-card-header>Anger Mangement</ion-card-header>
                            <ion-card-content></ion-card-content>
                            </div>
                        </ion-card></a>
                    </ion-col>
                </ion-row>
                </div>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup>

import { IonIcon } from '@ionic/vue';
import { arrowBack, book, logoIonic, person, settings } from 'ionicons/icons';
import { defineComponent } from 'vue';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";





</script>


<style>
:root {
    --ion-color-yellow: #f1ede1;
}
.emotionalbody{
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
}
ion-card-header{
    text-align: center;

    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: x-large;

    

}
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    
}
ion-card-header{
    color: rgb(52, 113, 78);
}
.page-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: wrap;
    position: relative;
}

.topbar-icon-container-left {
    position: absolute;
    left: 0;
}
.topbar-icon-container-right {
    position: absolute;
    right: 0;
}
.topbar-icon-container{
    margin: 10px;
}

.icon {
    font-size: x-large;
    opacity: 100%;

    margin: 0.415rem;
}

.title-elements {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
}

.ph-card-col{
    width: 20rem;
    height: 8rem;
    border-radius: 15px;
    background-image: linear-gradient(#dad3b5 20%, #8b9e7c 80%);
}
ion-grid{
    position: absolute; 
    top: 10rem; 
    left: 50%;
    transform: translateX(-50%);
  
    
}


</style>