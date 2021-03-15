<template>
  <div>
    <h1 class="p-3">Liste d'étudiants</h1>
    <b-alert :show="showAlert" variant="danger" data-cy="error-message">
      {{ error_message }}
    </b-alert>
    <div class="div-upload" v-if="this.$store.getters.isDirector">
      <br />
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
    <students-table :students="students" />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentsTable from "@/components/StudentTable.vue";

const API_URL = "http://127.0.0.1:8000/students/";
const API_AUTH = {
  username: "admin",
  password: "admin",
};

import $ from "jquery";

import axios from "axios";

export default {
  name: "Students",

  components: {
    StudentsTable,
  },
  data() {
    return {
      students: [],
      error_message: "",
      file: "",
    };
  },
  methods: {
    getStudents() {
      console.log(API_URL);
      this.error_message = "";
      axios({
        method: "get",
        url: API_URL,
        auth: API_AUTH,
      })
        .then((response) => (this.students = response.data))
        .catch((error) => {
          this.error_message = "Impossible de consulter les données.";
          console.log("Erreur status : " + error.response.status);
          console.log("Erreur data : " + JSON.stringify(error.response.data));
        });
    },
    addStudent(student) {
      this.error_message = "";
      axios({
        method: "post",
        url: API_URL,
        data: student,
        auth: API_AUTH,
      })
        .then((response) => {
          this.student = {
            number: response.data.number,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
          };
          this.students.push(this.student);
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
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      document.getElementById("loading").textContent =
        "Chargement de la base de données, veuillez pattienter...";
      axios
        .post("http://127.0.0.1:8000/students/upload", formData, {
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
          $("#tab_students tr").each(function () {
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
    this.getStudents();
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