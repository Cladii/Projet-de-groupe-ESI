<template>
    <div>
        <h1>LISTE DES PREREQUIS</h1><br><br>
        <prerequis-form
        :ue="ue"
        v-on:my-event="addPrerequis($event)"/>
        <prerequis-table
        :prerequis="prerequis"/>
    </div>
</template>

<script>

import PrerequisForm from "@/components/PrerequisForm.vue";
import PrerequisTable from "@/components/PrerequisTable.vue";

const API_PRE = "http://127.0.0.1:8000/prerequis/";
const API_UE = "http://127.0.0.1:8000/ue";
const API_AUTH = {
  username: "admin",
  password: "admin",
};
import axios from "axios";
export default {
    name:"prerequis",
    components: {
        PrerequisForm,
        PrerequisTable
    },
    data(){
        return {
            ue:[],
            prerequis:[],
            error_message: "",
        };
    },
    methods: {
        getUes() {
          console.log(API_UE);
          this.error_message = "";
          axios({
            method: "get",
            url: API_UE,
            auth: API_AUTH,
          })
            .then((response) => {
                response.data.forEach(element => {
                    this.ue.push(element.acronyme)
                });
            })
            .catch((error) => {
              this.error_message = "Impossible de charger les données.";
              console.log("Erreur status : " + error.response.status);
              console.log("Erreur data : " + JSON.stringify(error.response.data));
            });
        },
        getPrerequis() {
          console.log(API_PRE)
          this.error_message = "";
          axios({
            method: "get",
            url: API_PRE,
            auth: API_AUTH,
          }).then((response) => (this.prerequis = response.data))
              .catch((error) => {
                this.error_message = "Impossible de consulter les données.";
                console.log("Erreur status : " + error.response.status);
                console.log("Erreur data : " + JSON.stringify(error.response.data));
              });
        },
        addPrerequis(pre) {
          this.error_message = "";
          axios({
            method: "post",
            url: API_PRE,
            data: pre,
            auth: API_AUTH,
          })
            .then((response) => {
              this.pre = {
                selected: response.data.selected,
                prerequis: response.data.prerequis,
              };
              this.prerequis.push(this.pre);
            })
            .catch((error) => {
              this.error_message = "Impossible de mettre à jour les données";
              console.log("Erreur status : " + error.response.status);
              console.log("Erreur data : " + JSON.stringify(error.response.data));
            });
    },
    },
    computed: {
    showAlert() {
      return this.error_message.length > 0
    }
  },
  mounted() {
    this.getUes();
    this.getPrerequis();
  },
}
</script>

<style scoped>

</style>