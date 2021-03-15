<template>
  <div>
    <h1 class="p-3">Liste des réussite des étudiants</h1>
    <b-alert :show="showAlert" variant="danger" data-cy="error-message">
      {{ error_message }}
    </b-alert>
    <div class="div-upload" v-if="this.$store.getters.isDirector">
      <br />
      <h3>Importer le fichier des bulletins</h3>
      <input
        class="btn btn-light"
        name="students"
        accept=".json"
        required
        type="file"
        id="file"
        ref="file"
        v-on:change="handleFileUpload()"
      />
      <br /><br />
      <button class="btn btn-light" v-on:click="submitFile()">Importer</button>
      <h3 class="p-3" id="loading"></h3>
    </div>
    <br />
    <div class="div-search">
      <br />
      <h2>Rechercher des étudiants</h2>
      <input type="text" name="search" id="search" /> <br /><br />
    </div>
    <bulletins-table :bulletin="bulletin" />
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src

const API_URL = "http://127.0.0.1:8000/bulletins/";
const API_AUTH = {
  username: "admin",
  password: "admin",
};

import axios from "axios";
import BulletinsTable from "@/components/BulletinsTable.vue";
import $ from "jquery";

export default {
  name: "Bulletins",

  components: {
    BulletinsTable,
  },
  data() {
    return {
      bulletin: [],
      error_message: "",
      file: "",
    };
  },
  methods: {
    getBulletins() {
      this.error_message = "";
      axios({
        method: "get",
        url: API_URL,
        auth: API_AUTH,
      })
        .then((response) => (this.bulletin = response.data))
        .catch((error) => {
          this.error_message = "Impossible de consulter les données";
          console.log("Erreur status : " + error.response.status);
          console.log("Erreur data : " + JSON.stringify(error.response.data));
        });
    },
    updateErrorMessage(message) {
      this.error_message = message;
    },
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      document.getElementById("loading").textContent =
        "Chargement de la base de données, veuillez pattienter...";
      axios
        .post("http://127.0.0.1:8000/bulletins/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function () {
          console.log("SUCCESS!!!");
        })
        .catch(function () {
          console.log("FAILURE!!!");
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    searching() {
      $(document).ready(function () {
        $("#search").keyup(function () {
          search_table($(this).val());
        });
        function search_table(value) {
          console.log(value);
          $("#tab_bulletins tr").each(function () {
            var found = "false";
            $(this).each(function () {
              if (
                $(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0
              ) {
                found = "true";
              }
            });
            if (found == "true") {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        }
      });
    },
  },
  computed: {
    showAlert() {
      return this.error_message.length > 0;
    },
  },
  mounted() {
    this.getBulletins();
    this.searching();
  },
};
</script>

<style scoped>
.div-search {
  border-style: solid;
}

.div-upload {
  border-style: solid;
  text-align: center;
}
</style>