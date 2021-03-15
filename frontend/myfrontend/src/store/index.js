import Vue from "vue"
import Vuex from "vuex" 

Vue.use(Vuex)

const store = new Vuex.Store(
    {
        state: {
            authenticated: false,
            director:false
        },
        getters: {
            isDirector: state=>{
                return state.director;
            } 
          },
        mutations: {
            setAuthentication(state, {status, direct}) {
                state.authenticated = status;
                state.director = direct;
            },
        },
    }
);

export default store
