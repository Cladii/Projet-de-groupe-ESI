<template>
  <div>
    <h3 class="d-flex p-3">Liste des users</h3>
    <users-form 
    v-on:my-event="addUser($event)"/>
    <users-table :users="users" />
  </div>
</template>

<script>
import UsersTable from "@/components/UserTable.vue";
import UsersForm from "@/components/UserForm.vue";
const API_URL = "http://127.0.0.1:8000/user/";
const API_AUTH = {
  username: "admin",
  password: "admin",
};
import axios from "axios";
export default {
  name: 'users',
  components: {
    UsersTable,
    UsersForm,
  },
  data() {
    return {
      users: [],
      error_message: "",
    };
  },
   methods: {
    getUsers() {
      console.log(API_URL);
      this.error_message = "";
      axios({
        method: "get",
        url: API_URL,
        auth: API_AUTH,
      })
        .then((response) => (this.users = response.data))
        .catch((error) => {
          this.error_message = "Impossible de charger les données.";
          console.log("Erreur status : " + error.response.status);
          console.log("Erreur data : " + JSON.stringify(error.response.data));
        });
    },
    addUser(user) {
      this.error_message = "";
      axios({
        method: "post",
        url: API_URL,
        data: user,
        auth: API_AUTH,
      })
        .then((response) => {
          console.log("Uwu");
          console.log(response.data.isStaff); 
          console.log(response.data.isDirector);
          let isStaffvar = false;
          if(response.data.isStaff == true){
            isStaffvar = true;
          } 
          let isDirectorvar = false;
          if(response.data.isDirector == true){
            isDirectorvar = true;
          }
          this.user = {
            username: response.data.username,
            password: response.data.password,
            isStaff: isStaffvar,
            isDirector: isDirectorvar,
          };
          this.users.push(this.user);
        })
        .catch((error) => {
          this.error_message = "Impossible de mettre à jour les données";
          console.log("Erreur status : " + error.response.status);
          console.log("Erreur data : " + JSON.stringify(error.response.data));
        });
    },
    updateErrorMessage(message){
      this.error_message = message;
    },
    loadData() {
      console.log("CLICK");
    }
  },
    mounted() {
      this.getUsers();
  },
    computed: {
    showAlert() {
      return this.error_message.length > 0
    }
  },
};
</script>

<style scoped>
h3 {
  margin: 10px 0 0;
}
</style>