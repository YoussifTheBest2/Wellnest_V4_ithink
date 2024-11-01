<template>
    <ion-content>
      <div class="date-marker" v-if="savedDate">
        Last Saved: {{ formattedSavedDate }}
      </div>
      <ion-textarea
        v-model="text"
        placeholder="Start writing here..."
        rows="20"
        clear-on-edit
      ></ion-textarea>
      <ion-button expand="full" @click="saveWriting">Save</ion-button>
    </ion-content>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import { format } from 'date-fns';
  import useLocalStorage from 'vue-ls';
  
  export default defineComponent({
    name: 'JournalPage',
    setup() {
      const localStorage = useLocalStorage();
  
      const text = ref(localStorage.get('journalContent', ''));
      const savedDate = ref(localStorage.get('savedDate', null));
      const formattedSavedDate = ref('');
  
      const saveWriting = () => {
        localStorage.set('journalContent', text.value);
        localStorage.set('savedDate', new Date().toISOString());
        savedDate.value = new Date();
        formattedSavedDate.value = format(savedDate.value, 'MMMM Do, YYYY, h:mm a');
      };
  
      return {
        text,
        savedDate,
        formattedSavedDate,
        saveWriting,
      };
    },
  });
  </script>
  
  <style scoped>
  .date-marker {
    font-size: 1.2em;
    text-align: center;
    margin: 16px 0;
  }
  </style>