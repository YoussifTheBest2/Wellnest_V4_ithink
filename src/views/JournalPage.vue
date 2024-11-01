<template>
    <ion-page>
      <ion-header>
        <ion-toolbar style="border: solid 3px burlywood;">
          <div class="topbar-icon-container-left">
            <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
          </div>
          <center><h1>Journal</h1></center>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <!-- Text area for journal entry -->
        <ion-textarea
          v-model="journalEntry"
          placeholder="Write your journal entry here..."
          rows="10"
        ></ion-textarea>
  
        <!-- Save button -->
        <ion-button expand="block" color="primary" class="ion-margin-top" @click="saveJournalEntry">
          Save Entry
        </ion-button>
  
        <!-- Last entry display -->
        <div v-if="lastEntryDate" class="last-entry">
          <p>Last Entry: {{ lastEntryDate }}</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonIcon } from '@ionic/vue';
  import { arrowBack } from 'ionicons/icons';
  import { ref, onMounted } from 'vue';
  import { IonTextarea, IonButton, IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
  
  // Define reactive references for the journal entry and last entry date
  const journalEntry = ref('');
  const lastEntryDate = ref('');
  
  // Function to load the journal entry and last entry date from localStorage
  function loadJournalEntry() {
    const savedEntry = localStorage.getItem('journalEntry');
    const savedDate = localStorage.getItem('lastEntryDate');
    
    if (savedEntry) {
      journalEntry.value = savedEntry;
    }
    if (savedDate) {
      lastEntryDate.value = savedDate;
    }
  }
  
  // Function to save the journal entry and current date to localStorage
  function saveJournalEntry() {
    const currentDate = new Date().toLocaleString(); // Current date and time
  
    localStorage.setItem('journalEntry', journalEntry.value);
    localStorage.setItem('lastEntryDate', currentDate);
  
    lastEntryDate.value = currentDate; // Update the displayed date
    alert('Journal entry saved!');
  }
  
  // Load the journal entry when the component is mounted
  onMounted(loadJournalEntry);
  </script>
  
  <style scoped>
  ion-textarea {
    width: 100%;
    font-size: 1.2em;
    padding: 10px;
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
  
  ion-button {
    --background: #4a90e2; /* Custom color */
  }
  
  .last-entry {
    margin-top: 15px;
    font-size: 1em;
    color: #6b6b6b;
  }
  </style>
  