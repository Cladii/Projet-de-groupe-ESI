import Vue from 'vue'
//import Vuex from "vuex" 
import App from './App.vue'
import router from './router'
import store from './store'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
