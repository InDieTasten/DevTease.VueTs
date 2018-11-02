<template>
  <div>
    <h1> Manual Report </h1>
    <ReportTimeSelection v-model="selectedTimeframe" :allowedTimeframe="allowedTimeframe" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { TimeFrame } from '../Models/TimeFrame';
import ReportTimeSelection from './ReportTimeSelection.vue';

@Component({
  components: {
    ReportTimeSelection,
  },
})
export default class ManualReport extends Vue {
  private allowedTimeframe: TimeFrame = { startDate: new Date(2018, 0, 1), endDate: new Date(2018, 11, 31) };
  private selectedTimeframe: TimeFrame = { startDate: null, endDate: null };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
