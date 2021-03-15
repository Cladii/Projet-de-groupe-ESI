<template>
  <div>
    <div id="form_add_users" v-if="this.$store.getters.isDirector">
      <b-form inline @submit="onSubmit" data-cy="form-user">
        <b-input
          id="form-input-username"
          v-model="username"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Email"
          type="email"
          data-cy="form-input-username"
        ></b-input>

        <b-input
          id="form-input-password"
          v-model="password"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Password"
          type="password"
          data-cy="form-input-password"
        ></b-input>
        <input class="mb-2 mr-sm-2 mb-sm-0" type="checkbox" id="checkbox1" v-model="isStaff" data-cy="form-input-isStaff">
        <label class="mb-2 mr-sm-2 mb-sm-0" for="checkbox1">isStaff</label>

        <input class="mb-2 mr-sm-2 mb-sm-0" type="checkbox" id="checkbox2" v-model="isDirector" data-cy="form-input-isDirector">
        <label class="mb-2 mr-sm-2 mb-sm-0" for="checkbox2">isDirector</label>

        <b-button id="submit" type="submit" variant="primary"><i class="fa fa-plus" aria-hidden="true"></i>Ajouter</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "users-form",
  data() {
    return {
      username: null,
      password: null,
      isStaff: null,
      isDirector: null,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.username.length > 0 && this.password.length > 0) {
        console.log(this.isStaff);
        let user = {
          username: this.username,
          password: this.password,
          isStaff: this.isStaff,
          isDirector: this.isDirector,
        };
        this.$emit("my-event", user);
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