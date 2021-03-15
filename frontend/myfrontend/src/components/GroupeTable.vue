<template>
  <div>
    <div id="tab_groupe" data-cy="tab-groupe">
      <b-table
        :fields="tableFields"
        :items="this.groupes"
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
  name: "groupes-table",
  data() {
    return {
      tableFields: [
        { key: "nom", label: "Nom" },
        { key: "bloc", label: "Bloc", sortable: true },
      ],
    };
  },
  props: {
    groupes: {
      type: Array,
      default: function () {
        return [];
      },
    },
  }
};
</script>
<style scoped>
</style>
