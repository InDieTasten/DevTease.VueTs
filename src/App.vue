<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ManualReport />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ManualReport from './components/ManualReport.vue';

@Component({
  components: {
    ManualReport,
  },
})
export default class App extends Vue {
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
