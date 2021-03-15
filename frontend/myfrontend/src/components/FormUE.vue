<template>
  <div>
    <div id="form_ue">
      <b-form inline @submit="onSubmit" data-cy="form-add-ue">
        <!--  Formulaire - Libelle du cours -->
        <b-form-group id="libelle-input-group-1">          
          <b-form-input
            id="form-input-libelle"
            v-model="libelle"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Libelle"
            type="text"
            :state="libelle != null && libelle.length > 2 && libelle.length <= 50 "
            data-cy="form-input-libelle"
          ></b-form-input>
          <b-form-invalid-feedback id="input-1-live-feedback"
            >Le libelle doit être compris entre 3 et 50 caractères.</b-form-invalid-feedback
          >
        </b-form-group>
        <!-- Formulaire - Acronyme du cours -->
        <b-form-group>
          <b-form-input
            id="form-input-acronyme"
            v-model="acronyme"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="acronyme"
            type="text"
            :state="
              acronyme != null && acronyme.length > 2 && acronyme.length <= 5
            "
            data-cy="form-input-acronyme"
          ></b-form-input>
          <b-form-invalid-feedback id="input-1-live-feedback"
            >L'acronyme doit être compris entre 3 et 5 caractères.</b-form-invalid-feedback
          >
        </b-form-group>
        <!-- Formulaire - Crédits du cours -->
        <b-form-group id="credits-input-group-1">
          <b-form-input
            id="form-input-credits"
            v-model="credits"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Credits"
            type="number"
            :state="credits > 0 && credits <= 30"
            data-cy="form-input-credits"
          ></b-form-input>
          <b-form-invalid-feedback id="input-1-live-feedback"
            >Une Ue peut avoir entre 1 et 30 credits.</b-form-invalid-feedback
          >
        </b-form-group>
        <!-- Formulaire - Bouton d'ajout -->
        <b-button id="submit" type="submit" variant="primary">Ajouter</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ue-form",
  data() {
    return {
      libelle: null,
      acronyme: null,
      credits: null,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (
        this.credits <= 30 &&
        this.credits > 0 &&
        this.libelle.length > 2 &&
        this.libelle.length <= 50 &&
        this.acronyme.length > 2 &&
        this.acronyme.length <= 5
      ) {
        let ue = {
          libelle: this.libelle,
          acronyme: this.acronyme,
          credits: this.credits,
        };
        this.$emit("my-event", ue);
      }
    },
  },
};
</script>

<style scoped>
#form_add_users {
  margin: 10px;
  padding: 10px;
}
</style>
