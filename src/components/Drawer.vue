<template>
  <v-navigation-drawer 
  permanent
  width=270
  >
    <v-toolbar flat class="primary"> 
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title white--text">
            Menu
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        router :to="item.route"
        @click="removeLocalstorage(item.title)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line
 /* eslint-disable */
 import axios from "axios"
  export default {
    data () {
      return {
        username: '',
        items: [
          { title: 'Home', icon: 'fas fa-home' , route: '/home'},
          { title: 'History', icon: 'fas fa-th-list', route: '/about'},
          { title: 'Logout', icon: 'fas fa-sign-out-alt', route: '/login'}
        ],
        right: null
      }
    },
    methods:{
      removeLocalstorage(titleName){
        if(titleName=='Logout'){
          this.$localStorage.remove('usernameLogin')
          this.$localStorage.remove('Date')
          this.$localStorage.remove('Time')
          this.$localStorage.remove('Month')
          axios
          .get('http://35.197.155.73:4000/logout')
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error);
          });
        }
        
      }
    }
  }
</script>