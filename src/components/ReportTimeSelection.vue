<template>
  <div>
    <h2> Report Period </h2>
    <ejs-datepicker id='datepicker'
      v-model='selectedTimeframe.startDate'
      :max='selectedTimeframe.endDate'
      :min='allowedTimeframe.startDate'
      :start='startLevel'
      :depth='depth'
      :format='format'
      :allowEdit='allowEdit'></ejs-datepicker>
    <ejs-datepicker id='datepicker'
      v-model='selectedTimeframe.endDate'
      :min='selectedTimeframe.startDate'
      :max='allowedTimeframe.endDate'
      :start='startLevel'
      :depth='depth'
      :format='format'
      :allowEdit='allowEdit'></ejs-datepicker>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from 'vue-property-decorator';
import { TimeFrame } from '../Models/TimeFrame';

import { DateRangePickerPlugin, DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(DateRangePickerPlugin);
Vue.use(DatePickerPlugin);

@Component
export default class ReportTimeSelection extends Vue {
  @Model()
  private selectedTimeframe!: TimeFrame;
  @Prop()
  private allowedTimeframe!: TimeFrame;

  // control settings
  private allowEdit: boolean = false;
  private startLevel: string = 'Year';
  private depth: string = 'Year';
  private format: string = 'yyyy-MM';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
