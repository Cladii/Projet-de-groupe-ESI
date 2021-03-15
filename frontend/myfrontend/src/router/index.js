import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Students from '../views/Students.vue'
import UE from '../views/UE.vue'
import Groupe from '../views/Groupe.vue'
import Login from "../views/Login.vue"
import Secure from "../components/Secure.vue"
import store from '../store'
import Bulletin from '../views/Bulletins.vue'
import Prerequis from '../views/Prerequis.vue'

Vue.use(VueRouter)

const routes = [
    /*{
        path: '/',
        name: 'Home',
        component: Home
    }, */
    /*{
        path: '/',
        redirect: {
            name: "login"
        }
    },*/
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: '/',
        name: "home",
        component: Home,
        /*beforeEnter: (to, from, next) => {
            console.log("state : "+store.state.authenticated);
            if(store.state.authenticated == false) {
                console.log("login");
                next({name: 'login'});
            } else {
                console.log("home");
                next({name: 'home'});
            }
        }*/
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/secure",
        name: "secure",
        component: Secure,
        beforeEnter: (to, from, next) => {
            if (store.state.authenticated == false) {
                next(false);
            } else {
                next();
            }
        }
    },
    {
        path: '/students',
        name: 'Students',
        component: Students,
        beforeEnter: (to, from, next) => {
            if (store.state.authenticated == false) {
                next(false);
            } else {
                next();
            }
        }
    },
    {
        path: '/ue',
        name: 'UE',
        component: UE,
        beforeEnter: (to, from, next) => {
            if (store.state.authenticated == false) {
                next(false);
            } else {
                next();
            }
        }
        /*function(){
            return import('../views/UE.vue')
        }*/
    },
    {
        path: '/users',
        name: 'Users',
        component: function () {
            return import(/* webpackChunkName: "users" */ '../views/Users.vue')
        },
        beforeEnter: (to, from, next) => {
            if (store.state.authenticated == false) {
                next(false);
            } else {
                next();
            }
        }
    },
    {
        path: '/groupe',
        name: 'Groupe',
        component: Groupe,
        beforeEnter: (to, from, next) => {
            if (store.state.authenticated == false) {
                next(false);
            } else {
                next();
            }
        }
    },
    {
        path: '/bulletin',
        name: 'Bulletin',
        component: Bulletin,
        beforeEnter: (to, from, next) => {
            if (store.state.authenticated == false) {
                next(false);
            } else {
                next();
            }
        }
    },
    {
        path: '/prerequis',
        name: 'Prerequis',
        component: Prerequis,
        beforeEnter: (to, from, next) => {
            if (store.state.authenticated == false) {
                next(false);
            } else {
                next();
            }
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
