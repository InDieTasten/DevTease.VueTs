<template>
  <div>
    <h1> Manual Report </h1>
    <!-- <ReportTimeSelection v-model="selectedTimeframe" :allowedTimeframe="allowedTimeframe" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ManualReport extends Vue {
  private allowedTimeframe: any;
  private selectedTimeframe: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
