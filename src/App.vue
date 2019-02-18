<template>
  <v-app id="app">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
</style>

