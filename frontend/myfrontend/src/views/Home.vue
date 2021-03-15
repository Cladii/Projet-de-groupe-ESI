<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2 id="well-connected" v-if="isConnected()">
      Bienvenue sur le site!
    </h2>
    <h2 id="not-connected" v-else>
      Veuillez vous connecter d'abord !
    </h2>
  </div>
</template>

<script>
//import store from '../store/index';
export default {
  name: 'Home',
  methods:{
  isConnected(){
    return this.$store.state.authenticated;
  },
},
};

</script>