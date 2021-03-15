<template>
  <div>
    <div id="tab_users" data-cy="tab-users">
      <b-table
        :fields="tableFields"
        :items="this.users"
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
    name:"users-table",
    data(){
        return{
            tableFields:[
                {key: "username", label:"Username (email)",sortable: true },
                {key: "isStaff", label:"IsStaff"},
                {key: "isDirector", label:"IsDirector"},
            ],
        };
    },
    props:{
        users:{
            type: Array,
            default: function(){
                return[];
            },
        },
    }
}
</script>

<style scoped>
#tab_users{
    margin: 10px;
    padding: 10px;
}
</style>