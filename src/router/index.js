import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home'
import Login from '../views/Login'
import Pokemons from '../views/Pokemons'
import Account from '../views/Account'
import NotFound from '../views/NotFound'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Accueil'
        },
    },
    {
        name: 'Account',
        path: '/Account',
        component: Account,
        meta: {
            title: 'Mon compte'
        },
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: {
            title: 'Login'
        },
    },
    {
        name: 'Pokemons',
        path: '/pokemons',
        component: Pokemons,
        meta: {
            title: 'Pokemons'
        },
    },
    {
        name: 'Notfound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found'
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to) => {
    document.title = to.meta.title;
})

export default router