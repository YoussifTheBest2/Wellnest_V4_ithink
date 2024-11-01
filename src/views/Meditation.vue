<template>
    <ion-page>
      <ion-header>
        <ion-toolbar style="border: solid 3px burlywood;">
                    <div class="topbar-icon-container-left">
                    <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
                    
                </div>
                <center><h1>Meditation</h1></center>
  </ion-toolbar>
      </ion-header>
      
      <ion-content class="ion-padding">
        
        
        <ion-text class="instruction">Take a deep breath and relax.</ion-text>
        
        <ion-button expand="block" color="success" class="ion-margin-top" @click="startMeditation" :disabled="isMeditating">
          Start Meditation
        </ion-button>
        
        <ion-button expand="block" color="secondary" class="ion-margin-top" @click="toggleMusic">
          {{ isMusicPlaying ? "Pause Music" : "Play Music" }}
        </ion-button>
        
        <ion-text v-if="isMeditating" class="timer-message">Time left: {{ remainingTime }} seconds</ion-text>
        
        <ion-text v-if="meditationMessage" class="meditation-message">{{ meditationMessage }}</ion-text>
        
        <!-- Hidden audio element for the music -->
        <audio :loop="true" loop ref="meditationMusic" src="/public/verynicemusic.mp3"></audio>
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
    name: 'MeditationPage',
    data() {
      return {
        isMeditating: false,
        meditationMessage: '',
        remainingTime: 60, // 1 minute in seconds
        intervalId: null,
        isMusicPlaying: false, // Track music playing status
      };
    },
    methods: {
      startMeditation() {
        this.isMeditating = true;
        this.meditationMessage = 'Breathe in... Breathe out... Relax.';
        this.remainingTime = 60;
  
        // Start a countdown timer for 1 minute
        this.intervalId = setInterval(() => {
          this.remainingTime--;
          
          // Update the meditation message at specific intervals
          if (this.remainingTime === 45) {
            this.meditationMessage = 'Feel the calmness in your body and mind.';
          } else if (this.remainingTime === 30) {
            this.meditationMessage = 'Focus on your breathing, let go of thoughts.';
          } else if (this.remainingTime === 15) {
            this.meditationMessage = 'You are doing great. Keep breathing deeply.';
          }
  
          // End the meditation session when the timer reaches 0
          if (this.remainingTime <= 0) {
            clearInterval(this.intervalId);
            this.meditationMessage = 'Meditation complete. You can open your eyes now.';
            this.isMeditating = false;
          }
        }, 1000); // Updates every second
      },
      toggleMusic() {
        const music = this.$refs.meditationMusic;
        
        if (this.isMusicPlaying) {
          music.pause();
        } else {
          music.play();
        }
        
        this.isMusicPlaying = !this.isMusicPlaying;
      }
    },
    beforeDestroy() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      const music = this.$refs.meditationMusic;
      if (music) {
        music.pause();
      }
    }
  }
  </script>
  
  <style scoped>
  .meditation-image {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .meditation-image img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
  }
  .instruction {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  .timer-message {
    text-align: center;
    font-size: 1.2em;
    margin-top: 20px;
    color: #8b0000; /* Dark red for countdown */
  }
  .meditation-message {
    text-align: center;
    font-size: 1.2em;
    margin-top: 20px;
    color: #2f4f4f;
  }
  .icon{
    font-size: x-large;
  }
  .topbar-icon-container-left {
    position: absolute;
    left: 0;
}
  </style>