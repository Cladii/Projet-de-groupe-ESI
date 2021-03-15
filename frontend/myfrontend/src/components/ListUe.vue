<template>
  <div>
    <div id="tab_ues" data-cy="tab-ues">
      <b-table
        :fields="tableFields"
        :items="this.ues"
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
  name: "ues-table",
  data() {
    return {
      tableFields: [
        { key: "libelle", label: "Libellé", sortable: true },
        { key: "acronyme", label: "acronyme" },
        { key: "credits", label: "Nombre de crédits" },
      ],
    };
  },
  props: {
    ues: {
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
