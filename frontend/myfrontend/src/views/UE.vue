<template>
  <div>
    <h3 class="d-flex p-3">Liste des UE</h3>
    <ue-form
    v-on:my-event="addUe($event)"/>
    <ues-table :ues="ues" />
  </div>
</template>
<script>
import UesTable from "@/components/ListUe.vue";
import ueForm from "@/components/FormUE.vue";
const API_URL = "http://127.0.0.1:8000/ue/";
const API_AUTH = {
  username: "admin",
  password: "admin",
};
import axios from "axios";
export default {
  name: 'ues',
  components: {
    UesTable,
    ueForm,
  },
  data() {
    return {
      ues: [],
      error_message: "",
    };
  },
  methods: {
    getUes() {
      console.log(API_URL);
      this.error_message = "";
      axios({
        method: "get",
        url: API_URL,
        auth: API_AUTH,
      })
        .then((response) => (this.ues = response.data))
        .catch((error) => {
          this.error_message = "Impossible de charger les données.";
          console.log("Erreur status : " + error.response.status);
          console.log("Erreur data : " + JSON.stringify(error.response.data));
        });
    },
    addUe(ue) {
      this.error_message = "";
      axios({
        method: "post",
        url: API_URL,
        data: ue,
        auth: API_AUTH,
      })
        .then((response) => {
          this.ue = {
            libelle: response.data.libelle,
            acronyme: response.data.acronyme,
            credits: response.data.credits,
          };
          this.ues.push(this.ue);
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
      this.getUes();
  },
    computed: {
    showAlert() {
      return this.error_message.length > 0
    }
  },
};
</script>
<style scoped>
</style>