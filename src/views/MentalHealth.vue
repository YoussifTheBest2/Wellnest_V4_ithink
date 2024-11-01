<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="border: solid 3px burlywood;">
        <div class="topbar-icon-container-left">
          <a href="/">
            <ion-icon class="icon" :icon="arrowBack"></ion-icon>
          </a>
        </div>
        <center><h1>Mental Health</h1></center>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="container">
        <div class="img-container">
          <img src="/public/meditationboi (1).png" alt="">
        </div>
        <div class="boxes-container">
          <div class="box-tab">
            <div class="box-row">
              <a href="/meditation">
                <ion-card class="ion-card ion-card-up">
                  <ion-card-content>
                    <center><ion-icon class="icontabs" :icon="roseOutline"></ion-icon></center>
                    <center><h2>Meditation</h2></center>
                  </ion-card-content>
                </ion-card>
              </a>
              <a href="https://www.youtube.com/user/yogawithadriene?themeRefresh=1">
                <ion-card class="ion-card ion-card-up">
                  <ion-card-content>
                    <center><ion-icon class="icontabs" :icon="leafOutline"></ion-icon></center>
                    <center><h2>Stress Management</h2></center>
                  </ion-card-content>
                </ion-card>
              </a>
            </div>
            <div class="box-row">
              <a href="/journalpage">
                <ion-card class="ion-card ion-card-down">
                  <ion-card-content>
                    <center><ion-icon class="icontabs" :icon="bookOutline"></ion-icon></center>
                    <center><h2>Journal</h2></center>
                  </ion-card-content>
                </ion-card>
              </a>
              <a href="https://mentalhealthhotline.org/">
                <ion-card class="ion-card ion-card-down">
                  <ion-card-content>
                    <center><ion-icon class="icontabs" :icon="callOutline"></ion-icon></center>
                    <center><h2>Support Contacts</h2></center>
                  </ion-card-content>
                </ion-card>
              </a>
              <a href="/quotespage">
                <ion-card class="ion-card ion-card-down">
                  <ion-card-content>
                    <center><ion-icon class="icontabs" :icon="newspaperOutline"></ion-icon></center>
                    <center><h2>Quotes</h2></center>
                  </ion-card-content>
                </ion-card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ion-content>

    <div class="footer">
      <center><h2>It's Okay to feel tired sometimes.</h2></center>
    </div>
  </ion-page>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import { arrowBack, bookOutline, roseOutline, leafOutline, callOutline, newspaperOutline } from 'ionicons/icons';
</script>

<style>
h1 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}

h2 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  font-size: 1rem;
}

.container {
  padding-bottom: 5rem; /* Ensures content does not overlap the footer */
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 3rem;
  background-color: rgb(222, 165, 96);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 10;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.img-container img {
  width: 100%;
  max-width: 500px; /* Adjust as needed */
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.box-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.box-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.ion-card {
  width: 8rem;
  height: 8rem;
  border-radius: 15%;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icontabs {
  width: 2.5rem;
  height: 2.5rem;
}

.topbar-icon-container-left {
  position: absolute;
  left: 0;
}

.icon {
  font-size: x-large;
  margin: 0.415rem;
}

/* Responsive styling */
@media (min-width: 768px) {
  .ion-card {
    width: 9rem;
    height: 9rem;
  }
  h2 {
    font-size: 1.1rem;
  }
}

@media (min-width: 1200px) {
  .ion-card {
    width: 10rem;
    height: 10rem;
  }
  h2 {
    font-size: 1.2rem;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem; /* Prevents overlap with footer */
  max-height: calc(100vh - 8rem); /* Adjusts height for cards within viewport */
  overflow-y: auto; /* Allows content to scroll if necessary */
}

.box-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
}

.box-row {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 100%; /* Ensures rows span full width */
}

.ion-card {
  width: 6rem;
  height: 6rem;
  border-radius: 10%;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-container img {
  max-width: 90%; /* Fit image within viewport width */
  height: auto;
  border-radius: 10px;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 2.5rem;
  background-color: rgb(222, 165, 96);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  z-index: 10;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .ion-card {
    width: 7rem;
    height: 7rem;
  }
}

@media (min-width: 1200px) {
  .ion-card {
    width: 8rem;
    height: 8rem;
  }
}

</style>
