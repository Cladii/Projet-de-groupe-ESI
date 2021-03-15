<template>
  <div>
    <div id="form_add_students">
      <b-form inline @submit="onSubmit" data-cy="form-student">
        <b-input
            id="form-input-matricule"
            v-model="matricule"
            class="mb-2 mr-sm-2 mb-sm-0"
            max="99999"
            min="10000"
            placeholder="Matricule"
            type="number"
            data-cy="form-input-matricule"
        ></b-input>

        <b-input
            id="form-input-firstname"
            v-model="first_name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Prénom"
            required
            trim
            type="text"
            data-cy="form-input-firstname"
        ></b-input>

        <b-input
            id="form-input-lastname"
            v-model="last_name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Nom"
            required
            trim
            type="text"
            data-cy="form-input-lastname"
        ></b-input>

        <b-button id="submit" type="submit" variant="primary"><i class="fa fa-plus" aria-hidden="true"></i>Ajouter</b-button>

      </b-form>

    </div>
  </div>
</template>

<script>
export default {
  name: "students-form",
  data() {
    return {
      matricule: null,
      first_name: null,
      last_name: null,
    };
  },
  methods: {
    onSubmit(evt) {
      console.log("APPELLE onSubmit")
      evt.preventDefault();
      if (this.matricule < 100000 && this.matricule > 9999 &&
          this.first_name.length > 0 && this.last_name.length > 0) {
        let student = {
          number: this.matricule,
          first_name: this.first_name,
          last_name: this.last_name,
        };
        this.$emit('my-event',student)
      }
    },
  },
};
</script>

<style scoped>
#form_add_students {
  margin: 10px;
  padding: 10px;
}
</style>
