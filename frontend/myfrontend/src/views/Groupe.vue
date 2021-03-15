<template>
  <div>
    <h3 class="d-flex p-3">Liste des groupes</h3>
    <groupe-form v-on:my-event="addGroupe($event)" />
    <groupe-table :groupes="groupes" />
  </div>
</template>
<script>
import GroupeTable from "@/components/GroupeTable.vue";
import GroupeForm from "@/components/GroupeForm.vue";
const API_URL = "http://127.0.0.1:8000/groupe/";
const API_AUTH = {
  username: "admin",
  password: "admin",
};
import axios from "axios";
export default {
  name: "groupes",
  components: {
    GroupeTable,
    GroupeForm,
  },
  data() {
    return {
      groupes: [],
      error_message: "",
    };
  },
  methods: {
    getGroupe() {
      console.log(API_URL);
      this.error_message = "";
      axios({
        method: "get",
        url: API_URL,
        auth: API_AUTH,
      })
        .then((response) => (this.groupes = response.data))
        .catch((error) => {
          this.error_message = "Impossible de charger les données.";
          console.log("Erreur status : " + error.response.status);
          console.log("Erreur data : " + JSON.stringify(error.response.data));
        });
    },
    addGroupe(groupe) {
      this.error_message = "";
      axios({
        method: "post",
        url: API_URL,
        data: groupe,
        auth: API_AUTH,
      })
        .then((response) => {
          this.groupe = {
            nom: response.data.nom,
            bloc: response.data.bloc,
          };
          this.groupes.push(this.groupe);
        })
        .catch((error) => {
          this.error_message = "Impossible de mettre à jour les données";
          console.log("Erreur status : " + error.response.status);
          console.log("Erreur data : " + JSON.stringify(error.response.data));
        });
    },
    updateErrorMessage(message) {
      this.error_message = message;
    },
  },
  mounted() {
    this.getGroupe();
  },
  computed: {
    showAlert() {
      return this.error_message.length > 0;
    },
  },
};
</script>
<style scoped>
</style>