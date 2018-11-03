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
@import '../node_modules/@syncfusion/ej2-base/styles/bootstrap.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/bootstrap.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/bootstrap.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/bootstrap.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/bootstrap.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/bootstrap.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
