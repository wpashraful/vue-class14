import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue';
import About from './views/About.vue';
import HomePage from './views/HomePage.vue';
import './style.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component:Home},
        {path: '/about', name: 'About', component:About},
        {path: '/home',name: 'HomePage', component: HomePage}
    ]

})

createApp(App).use(router).mount('#app')
