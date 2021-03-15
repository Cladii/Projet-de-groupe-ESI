<template>
  <div>
    <div id="form_add_groupe" v-if="this.$store.getters.isDirector">
      <b-form inline @submit="onSubmit" data-cy="form-groupe">
        <b-input
          id="form-input-nom"
          v-model="nom"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Nom du groupe"
          required
          trim
          type="text"
          data-cy="form-input-nom"
        ></b-input>
        <b-input
          id="form-input-bloc"
          v-model="bloc"
          class="mb-2 mr-sm-2 mb-sm-0"
          max="3"
          min="1"
          placeholder="Numéro de bloc"
          type="number"
          data-cy="form-input-bloc"
        ></b-input>

        <b-button id="submit" type="submit" variant="primary"><i class="fa fa-plus" aria-hidden="true"></i>  Créer</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "groupe-form",
  data() {
    return {
      nom: null,
      bloc: null,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (
        this.bloc <= 3 &&
        this.bloc >= 1 &&
        this.nom.length > 1
      ) {
        let groupe = {
          nom: this.nom,
          bloc: this.bloc,
        };
        this.$emit("my-event", groupe);
      }
    },
  },
};
</script>

<style scoped>
#form_add_groupes {
  margin: 10px;
  padding: 10px;
}
</style>
