<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="border: solid 3px burlywood">
        <div class="topbar-icon-container-left">
          <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
        </div>
        <center><h1>Anxiety</h1></center>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" color="light">
      <ion-text class="instruction"
        >Follow this breathing exercise to reduce anxiety.</ion-text
      >
      <ion-button
        expand="block"
        color="success"
        class="ion-margin-top"
        @click="startBreathing"
        :disabled="isBreathing"
      >
        Start Breathing Exercise
      </ion-button>
      <ion-text v-if="exerciseMessage" class="exercise-message">{{
        exerciseMessage
      }}</ion-text>
      <ion-text v-if="remainingTime > 0" class="timer-message"
        >Time left: {{ remainingTime }} seconds</ion-text
      >
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import { arrowBack, book, logoIonic, person, settings } from "ionicons/icons";
import { defineComponent } from "vue";
</script>

<script>
export default {
  name: "AnxietyPage",
  data() {
    return {
      exerciseMessage: "",
      remainingTime: 60, // 60 seconds for 1 minute
      intervalId: null,
      isBreathing: false,
    };
  },
  methods: {
    startBreathing() {
      const steps = [
        "Breathe in... 4 seconds",
        "Hold... 4 seconds",
        "Breathe out... 4 seconds",
        "Hold... 4 seconds",
      ];
      let stepIndex = 0;
      this.exerciseMessage = steps[stepIndex];
      this.remainingTime = 60;
      this.isBreathing = true;

      // Start a breathing interval that changes steps every 4 seconds
      this.intervalId = setInterval(() => {
        stepIndex = (stepIndex + 1) % steps.length;
        this.exerciseMessage = steps[stepIndex];
      }, 4000);

      // Start a countdown timer for 1 minute
      const countdown = setInterval(() => {
        this.remainingTime--;
        if (this.remainingTime <= 0) {
          clearInterval(countdown);
          clearInterval(this.intervalId);
          this.exerciseMessage = "Exercise complete!";
          this.isBreathing = false;
        }
      }, 1000); // Updates every second
    },
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
};
</script>

<style scoped>
.instruction {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 20px;
}
.exercise-message {
  text-align: center;
  font-size: 1.5em;
  margin-top: 30px;
  color: #2f4f4f;
}
.timer-message {
  text-align: center;
  font-size: 1.2em;
  margin-top: 20px;
  color: #8b0000; /* Dark red */
}

.topbar-icon-container-left {
  position: absolute;
  left: 0;
}
.icon{
    font-size: x-large;
}
</style>
