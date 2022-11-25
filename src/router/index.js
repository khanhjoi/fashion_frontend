import { createRouter, createWebHistory } from 'vue-router';


//import components from './components'
import Home from '../views/Home.vue';
import Item from '../views/Item.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Info from '../views/info.vue';
import Search from '../views/Search.vue';

import UserProfile from '../components/mainPages/profile.vue';
import UserCart from '../components/mainPages/userCart.vue';


const routes = [
    {
        path: "/login", 
        name: "login",
        component: Login,
    },
    {
        path: "/register", 
        component: Register,
    },
    {
        path: "/search", 
        component: Search,
    },
    {
        path: "/info", 
        component: Info,
        children: [
            {
                path: '/profile',
                name: "profile",
                component: UserProfile,
            },
            {
                path: '/cart',
                component: UserCart,
            }
        ]
    },
    {
        path: "/products/:id", 
        component: Item,
    },
    {
        path: "/", 
        component: Home,
    }, 
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


export default router;