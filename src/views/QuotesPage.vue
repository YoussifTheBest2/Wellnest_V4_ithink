<template>
    <ion-page>
        <ion-header>
            
            <ion-toolbar>
                <a href="/"><div class="topbar-icon-container-left">
                    <ion-icon class="icon" :icon="arrowBack"></ion-icon>

                </div></a>
                
                <center><ion-title class="quotetitle">Quote of the day</ion-title></center>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <div class="container">
                <ion-card>
                <ion-card-header>
                    <ion-button @click="getRandomQuote()">Generate New Quote</ion-button>
                    <ion-card-title>{{ randomQuote }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>

                </ion-card-content>
            </ion-card>
            </div>
                    </ion-col>

                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>


<script setup>
import { IonIcon } from '@ionic/vue';
import { book, logoIonic, person, settings, arrowBack, bookOutline, roseOutline, leafOutline, callOutline, newspaperOutline } from 'ionicons/icons';
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


<script>
export default {
    data() {
        return {
            quotes: [
                "And now that you don't have to be perfect, you can be good.",
                "Lighten up on yourself. No one is perfect. Gently accept your humanness.",
                "To love oneself is the beginning of a lifelong romance.",
                "The only person who can pull me down is myself, and I'm not going to let myself pull me down anymore.",
                "Of all the judgments we pass in life, none is more important than the judgment we pass on ourselves.",

                "People who love themselves come across as very loving, generous, and kind; they express their self-confidence through humility, forgiveness, and inclusiveness.",

                "If you don’t love yourself, nobody will. Not only that, you won’t be good at loving anyone else. Loving starts with the self.",

                "To accept ourselves as we are means to value our imperfections as much as our perfections.",
                "You are magnificent beyond measure, perfect in your imperfections, and wonderfully made.",
                "Each life is made up of mistakes and learning, waiting and growing, practicing patience and being persistent.",
                "Self-love has very little to do with how you feel about your outer self. It’s about accepting all of yourself.",
                "Forgiveness isn’t just the absence of anger. I think it’s also the presence of self-love, when you actually begin to value  yourself.",
                "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.",

                "The challenge is not to be perfect—it is to be whole.",
                "When you recover or discover something that nourishes your soul and brings joy, care enough about yourself to make room for it in your life.",

                "When we give ourselves compassion, we  are opening our hearts in a way that can transform our lives.",
                "Self-care is how you take your power back.",
                "Nourishing yourself in a way that helps you blossom in the direction you want to go is attainable, and you are worth the effort.",
                "Self-compassion is simply giving the same kindness to ourselves that we would give to others.",
                "When you are compassionate with yourself, you trust in your soul, which you let guide your life. Your soul knows the geography of your destiny better than  you do.",
                "If your compassion does not include yourself, it is incomplete.",
                "There are days I drop words of comfort on myself like falling leaves and remember that it is enough to be taken care of by myself.",

                "Every one of us needs to show how much we care for each other and, in the process, care for ourselves.",
                "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",

                "Be patient with yourself. Self-growth is tender; it’s holy ground. There’s no greater investment.",
                "Do something nice for yourself today. Find some quiet, sit in stillness, breathe. Put your problems on pause. You deserve a break.",

                "Have patience with all things. But, first of all with yourself.",
                "Take the time today to love yourself. You deserve it.",
                "Self-care is not a waste of time. Self-care makes your use of time more sustainable.",
                "Love yourself enough to set boundaries. Your time and energy are precious. You get to choose how you use it. You teach people how to treat you by deciding what you will and won't accept.",

                "Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape.",

                "Rest and self-care are so important. When you take time to replenish your spirit, it allows you to serve others from the overflow. You cannot serve from an empty vessel.",

                "Take time to do what makes your soul happy.",
                "It's not selfish to love yourself, take care of yourself, and to make your happiness a priority. It's necessary.",
                "Time you enjoy wasting is not wasted time.",
                "Until you value yourself, you won’t value your time. Until you value your time, you will not do anything with it.",
                "Life should be touched, not strangled. You've got to relax, let it happen at times, and at others move forward with it.",
                "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
                "Self-care means giving yourself permission to pause.",
                "Just when you feel you have no time to relax, know that this is the moment you most need to make time to relax.",
                "Keep taking time for yourself until you are you again.",
                "Those who think they have not time for bodily exercise will sooner or later have to find time for illness.",
                "It's good to do uncomfortable things. It's weight training for life.",
                "I have come to believe that caring for myself is not self indulgent. Caring for myself is an act of survival.",
                "Everybody is different, and every body is different.",
                "Sometimes the most important thing in a whole day is the rest we take between two deep breaths.",
                "Almost everything will work again if you unplug it for a few minutes, including you.",

                "Self-care equals success. You’re going to be more successful if you take care of yourself and you’re healthy.",
                "As important as it is to have a plan for doing work, it is perhaps more important to have a plan for rest, relaxation, self-care, and sleep.",

                "Self-care has become a new priority—the revelation that it’s perfectly permissible to listen to your body and do what it needs."

            ],
            randomQuote: ''
        };
    },
    mounted() {
        this.getRandomQuote();
    },
    methods: {
        getRandomQuote() {
            const randomIndex = Math.floor(Math.random() * this.quotes.length);
            this.randomQuote = this.quotes[randomIndex];
        }
    }
};
</script>


<style>
template{
    margin: 0%;
    padding: 0%;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.topbar-icon-container-left {
    position: absolute;
    left: 0;
}
.topbar-icon-container-left a{
    width: 40px;
    height: 40px;
}
.quotetitle{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 600;
}



.topbar-icon-container-left ion-icon {
    font-size: xx-large;
}

ion-card{
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-style: oblique;
    

}
</style>
