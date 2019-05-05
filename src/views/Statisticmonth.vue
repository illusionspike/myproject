<template>
  <v-app>
    <v-toolbar app class="black accent-3 white--text">
      <v-icon large color="white" id="iconToolbar">fas fa-bed</v-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>I-Sleep</span>
        <span class="font-weight-light"> Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title></v-toolbar-title>
    </v-toolbar>
    <v-container fluid fill-height>
    <v-layout row>
      <v-flex shrink mr-4>
        <Drawer/>
      </v-flex>
      <v-flex>
        <Sleepmonth/>
      </v-flex>
    </v-layout>
    </v-container>
  </v-app>
  
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
  import Drawer from '../components/Drawer'
  import Sleepmonth from '../components/Sleepmonth'

  export default {
    name: "Statistic",
    components: {
      Drawer,
      Sleepmonth,
    },
    mounted() {
   }
  }
</script>

<style>
/* pie chart */

</style>