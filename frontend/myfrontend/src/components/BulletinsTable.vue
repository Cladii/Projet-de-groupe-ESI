<template>
  <div>
    <div id="tab_bulletins" data-cy="tab_bulletins">
      <b-table
            :fields="bulletins"
            :items="this.bulletin"
            class="table-light"
            head-variant="dark"
            hover
            striped
        ></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "bulletins-table",
  data() {
    return {
      bulletins:  [
        {key: "numbers", label: "Matricule", sortable: true},
        {key: "UE", label: "Acronyme Cours"},
        {key: "acquis", label: "Acquis / Non-Acquis"}
      ],
    };
  },
  props: {
    bulletin: {
      type: Array,
      default: function () {
        return [];
      },
    },
  }
}
</script>

<style scoped>
#tab_bulletins {
  margin: 10px;
  padding: 10px;
}
</style>
