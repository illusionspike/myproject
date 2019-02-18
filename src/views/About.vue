<template>
  <v-app>
    <v-toolbar app class="black accent-3 white--text">
      <v-icon large color="white" id="iconToolbar">fas fa-bed</v-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>I-Sleep</span>
        <span class="font-weight-light"> Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2 white--text">Supakit Dhamchatsoontree</span>
      </v-btn>
    </v-toolbar>
  <v-container fluid fill-height>
    <v-layout row>
      <v-flex shrink>
        <Drawer/>
      </v-flex>
      <v-flex grow ml-5>
        <History/>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import History from '../components/History'
import Drawer from '../components/Drawer'
  export default {
    components: {
        History,
        Drawer
      ,
      Drawer
    },
    data() {
      return {

      }
    }
  }
</script>