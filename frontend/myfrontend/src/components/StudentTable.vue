<template>
  <div>
    <div id="tab_students" data-cy="tab_students">
      <b-table
          :fields="tableFields"
          :items="this.students"
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
  name: "students-table",
  data() {
    return {
      tableFields:  [
        {key: "number", label: "Matricule", sortable: true},
        {key: "first_name", label: "Prénom"},
        {key: "last_name", label: "Nom"},
      ],
    };
  },
  props: {
    students: {
      type: Array,
      default: function () {
        return [];
      },
    },
  }
}
</script>

<style scoped>
#tab_students {
  margin: 10px;
  padding: 10px;
}
</style>
