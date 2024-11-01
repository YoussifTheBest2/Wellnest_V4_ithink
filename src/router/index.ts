import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/physicalhealth',
    component: () => import('@/views/PhysicalHealth.vue')
  },
  {
    path: '/mentalhealth',
    component: () => import('@/views/MentalHealth.vue')
  },
  {
    path: '/quotespage',
    component: () => import('@/views/QuotesPage.vue')
  },
  {
    path: '/testpage',
    component: () => import('@/views/TestPage.vue')
  }
  ,
  {
    path: '/emotionalhealth',
    component: () => import('@/views/EmotionalHealth.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/ProfileTab.vue')
  },
  {
    path: '/journalpage',
    component: () => import('@/views/JournalPage.vue')
  }
  ,
  {
    path: '/moodtracker',
    component: () => import('@/views/MoodTracker.vue')
  }
  ,
  {
    path: '/anxiety',
    component: () => import('@/views/Anxiety.vue')
  },
  {
    path: '/angermanagement',
    component: () => import('@/views/AngerManagement.vue')
  },
  {
    path: '/meditation',
    component: () => import('@/views/Meditation.vue')
  },
  {
    path: '/socialHealth',
    component: () => import('@/views/SocialHealth.vue')
  },
  {
    path: '/connectionGoals',
    component: () => import('@/views/ConnectionGoals.vue')
  },
  {
    path: '/friendshipReflections',
    component: () => import('@/views/FriendshipReflections.vue')
  },
  {
    path: '/communityResources',
    component: () => import('@/views/CommunityResources.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router