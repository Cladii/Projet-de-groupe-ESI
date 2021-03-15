<template>
    <div id="form-ue" v-if="this.$store.getters.isDirector">
      <b-form @submit="onSubmit" data-cy="form-add-pre">
        <h3>Choisissez un cours pour lequel vous voulez ajouter un prerequis</h3><br>
        <b-select v-model="selecteda" :options="this.ue" data-cy="ue_selected"></b-select>
        <div class="mt-3">Cours sélectionné : <strong>{{ selecteda }}</strong></div>
        <br><br>
        <h3>Choisissez un prérequis</h3><br>
        <b-select v-model="selectedb" :options="options" data-cy="prerequis_selected"></b-select>
        <div class="mt-3">Prérequis Sélectionné : <strong>{{ selectedb }}</strong></div>
        <br><br>
        <b-button id="submit" type="submit" variant="primary" data-cy="prerequis_button">Ajouter Prérequis</b-button>
        <br><br>
      </b-form>
    </div>
</template>

<script>
export default {
    name:"prerequis-form",
    data(){
        return {
            selecteda: null,
            selectedb: null,
            options: [
              {value: null, text: 'Veuillez sélectionnez un prérequis.'},
              {
                label : 'Cours Du Q1 : ',
                options: [
                  {value: 'CAI1', text: 'CAI1'},
                  {value: 'CPT1', text: 'CPT1'},
                  {value: 'DEV1', text: 'DEV1'},
                  {value: 'INT1', text: 'INT1'},
                  {value: 'MAT1', text: 'MAT1'},
                ]
              },
              {
                label : 'Cours Du Q2 : ',
                options : [
                  {value: 'CAI2', text: 'CAI2'},
                  {value: 'DEV2', text: 'DEV2'},
                  {value: 'DON2', text: 'DON2'},
                  {value: 'STA2', text: 'STA2'},
                  {value: 'SYS2', text: 'SYS2'},
                  {value: 'WEBG2', text: 'WEBG2'},
                  {value: 'PHYIR2', text: 'PHYIR2'},
                  {value: 'RESIR2', text: 'RESIR2'},
                ]
              },
              {
                label : 'Cours Du Q3 : ',
                options : [
                  {value: 'ALG3', text: 'ALG3'},
                  {value: 'ANA3', text: 'ANA3'},
                  {value: 'ATLG3', text: 'ATLG3'},
                  {value: 'CAIG3', text: 'CAIG3'},
                  {value: 'DEV3', text: 'DEV3'},
                  {value: 'DONG3', text: 'DONG3'},
                  {value: 'DONIR3', text: 'DONIR3'},
                  {value: 'DRTG3', text: 'DRTG3'},
                  {value: 'AUTI3', text: 'AUTI3'},
                  {value: 'SYSIR3', text: 'SYSIR3'},
                  {value: 'LANR3', text: 'LANR3'},
                  {value: 'PHYR3', text: 'PHYR3'},
                ]
              },
              {
                label : 'Cours Du Q4 : ',
                options : [
                  {value: 'AGRR4', text: 'AGRR4'},
                  {value: 'WANR4', text: 'WANR4'},
                  {value: 'WEBR4', text: 'WEBR4'},
                  {value: 'WIRR4', text: 'WIRR4'},
                  {value: 'ATLIR4', text: 'ATLIR4'},
                  {value: 'AVAI4', text: 'AVAI4'},
                  {value: 'DONIR4', text: 'DONIR4'},
                  {value: 'EMBI4', text: 'EMBI4'},
                  {value: 'RESIR4', text: 'RESIR4'},
                  {value: 'RLII4', text: 'RLII4'},
                  {value: 'ATLG4', text: 'ATLG4'},
                  {value: 'CPTG4', text: 'CPTG4'},
                  {value: 'DEV4', text: 'DEV4'},
                  {value: 'DONG4', text: 'DONG4'},
                  {value: 'ECOG4', text: 'ECOG4'},
                  {value: 'RESG4', text: 'RESG4'},
                  {value: 'SYSG4', text: 'SYSG4'},
                  {value: 'WEBG4', text: 'WEBG4'},
                ]
              },
              {
                label : 'Cours Du Q5 : ',
                options : [
                  {value: 'AGRR5', text: 'AGRR5'},
                  {value: 'IXVR5', text: 'IXVR5'},
                  {value: 'SECR5', text: 'SECR5'},
                  {value: 'DONG5', text: 'DONG5'},
                  {value: 'ERPG5', text: 'ERPG5'},
                  {value: 'MOBG5', text: 'MOBG5'},
                  {value: 'ORGG5', text: 'ORGG5'},
                  {value: 'PRJG5', text: 'PRJG5'},
                  {value: 'SYSG5', text: 'SYSG5'},
                  {value: 'TEX5', text: 'TEX5'},
                  {value: 'WEBG5', text: 'WEBG5'},
                  {value: 'ATLIR5', text: 'ATLIR5'},
                  {value: 'AUTI5', text: 'AUTI5'},
                  {value: 'IAI5', text: 'IAI5'},
                  {value: 'IMGI5', text: 'IMGI5'},
                  {value: 'INTI5', text: 'INTI5'},
                  {value: 'ORGIR5', text: 'ORGIR5'},
                  {value: 'ROBI5', text: 'ROBI5'},
                  {value: 'SECI5', text: 'SECI5'},
                ]
              },
              {
                label : 'Cours Du Q6 : ',
                options : [
                  {value: 'ETE6', text: 'ETE6'},
                ]
              }
            ]
        }
    },
    methods: {
      onSubmit(evt) {
      evt.preventDefault();
      let pre = {
        selected: this.selecteda,
        prerequis: this.selectedb
      }
      this.$emit("my-event", pre);
    },
    },
    props: {
      ue: {
        type: Array,
        default: function () {
          return [].value;
        },
      },
    }
}
</script>