<template>
    <ion-page>
        <ion-header>

            <div class="page-header">


                <div class="topbar-icon-container-left">
                    <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>

                </div>
                




                <div class="title-elements">
                    <h3>Social Health</h3>
                </div>
            </div>
        </ion-header>

        <ion-content>
            <ion-grid class="emotionalbody">
                <div><ion-row>
                    <ion-col>
                        <a style="display: block; text-decoration: none; color: inherit;" href="/connectionGoals" ><ion-card class="ph-card-col">
                            <div class="container">
                                <ion-card-header>Connection Goals</ion-card-header>
                            <ion-card-content></ion-card-content>
                            </div>
                        </ion-card></a>
                    </ion-col>

                    
                </ion-row>
                
                <ion-row>
                    <ion-col>
                        <a style="display: block; text-decoration: none; color: inherit;" href="/friendshipReflections" ><ion-card class="ph-card-col">
                            <div class="container">
                                <ion-card-header>Frienship Reflections</ion-card-header>
                            <ion-card-content></ion-card-content>
                            </div>
                        </ion-card></a>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <a style="display: block; text-decoration: none; color: inherit;" href="/communityResources" ><ion-card class="ph-card-col">
                            <div class="container">
                                <ion-card-header>Community Resources</ion-card-header>
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
    import { book, logoIonic, person, settings,arrowBack } from 'ionicons/icons';
    import { defineComponent } from 'vue';
</script>

  <script>
  export default {
    name: 'SocialHealthPage',
  }
  </script>
  
  <style scoped>
  ion-card {
    background: #f5f5dc; /* Light beige for harmony with the app's color scheme */
    --ion-background-color: #e6e8e1;
  }
  ion-card-title {
    color: #4a635d;
  }
  ion-card-content {
    color: #5f6e5c;
  }
  a {
    display: block;
  }
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