<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/"><i class="fa fa-home"></i></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/students">Etudiants</router-link>
            <router-link class="nav-link" to="/ue" v-if="isDirector()">UE</router-link>
            <router-link class="nav-link" to="/users">Users</router-link>
            <router-link class="nav-link" to="/groupe">Groupe</router-link>
            <router-link class="nav-link" to="/bulletin">Bulletins</router-link>
            <router-link class="nav-link" to="/prerequis">Prérequis</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item v-if="isConnected()" v-on:click="logout()">Sign Out</b-dropdown-item>
              <b-dropdown-item v-else v-on:click="redirect()">Sign In</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("setAuthentication", false, false);
      this.$router.replace({ name: "login" });
      document.location.reload();
    },
    isConnected() {
      return this.$store.state.authenticated;
    },
    redirect(){
      window.location='#/login';
    },
    isDirector(){
      console.log(this.$store.getters.isDirector);
      return this.$store.getters.isDirector;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
