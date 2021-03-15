<template>
  <div>
    <div id="tab_prerequis" data-cy="tab_prerequis">
      <b-table
          :fields="tableFields"
          :items="this.prerequis"
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
  name: "prerequis-table",
  data() {
    return {
      tableFields:  [
        {key: "selected", label: "Cours", sortable: true},
        {key: "prerequis", label: "Prérequis"},
      ],
    };
  },
  props: {
    prerequis: {
      type: Array,
      default: function () {
        return [];
      },
    },
  }
}
</script>

<style scoped>
#tab_prerequis {
  margin: 10px;
  padding: 10px;
}
</style>
