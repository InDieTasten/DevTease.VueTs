<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to your Vue.js + TypeScript App"/> -->
    <ManualReport />
    <ejs-datepicker id='datepicker' v-model='startDate' :max='endDate' start='Year' depth='Year' :format='format' :allowEdit='allowEdit'></ejs-datepicker>
    <ejs-datepicker id='datepicker' v-model='endDate' :min='startDate' start='Year' depth='Year' :format='format' :allowEdit='allowEdit'></ejs-datepicker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DateRangePickerPlugin, DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';

import HelloWorld from './components/HelloWorld.vue';
import ManualReport from './components/ManualReport.vue';



Vue.use(DateRangePickerPlugin);
Vue.use(DatePickerPlugin);

@Component({
  components: {
    HelloWorld,
    ManualReport,
  },
})
export default class App extends Vue {
  private startLevel: string = 'Year';
  private depth: string = 'Year';

  private startDate: Date = new Date(2017, 0, 1);
  private endDate: Date = new Date(2017, 11, 31);
  private format: string = 'yyyy-MM';
  private allowEdit: boolean = false;
}
</script>

<style lang="scss">
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
