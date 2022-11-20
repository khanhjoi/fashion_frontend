import { createRouter, createWebHashHistory } from 'vue-router';


//import components from './components'
import Home from '../views/Home.vue';
import Item from '../views/Item.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

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
        path: "/products/:id", 
        component: Item,
    },
    {
        path: "/", 
        component: Home,
    }, 
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});


export default router;