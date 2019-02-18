<template>
  <v-app>
    <v-toolbar app class="black accent-3 white--text">
      <v-icon large color="white" id="iconToolbar">fas fa-bed</v-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>I-Sleep</span>
        <span class="font-weight-light"> Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>Supakit Dhamchatsoontree</v-toolbar-title>
    </v-toolbar>
    <v-container fluid fill-height>
    <v-layout row>
      <v-flex shrink mr-4>
        <Drawer/>
      </v-flex>
      <v-flex>
        <Sleep/>
      </v-flex>
    </v-layout>
    </v-container>
  </v-app>
  
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
  import Drawer from '../components/Drawer'
  import Sleep from '../components/Sleep'
  import Timeline from '../components/Timeline'

  export default {
    name: "Statistic",
    components: {
      Drawer,
      Sleep,
      Timeline
    },
    mounted() {
      var chart = this.$refs.chart;
      var ctx = chart.getContext("2d");
      var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Supine", "Lying left", "Lying right", "Sit on bed", "Get out of bed"],
        datasets: [{
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
        }]
      }
    });
   }
  }
</script>

<style>
/* pie chart */

</style>