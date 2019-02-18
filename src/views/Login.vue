<template>
 <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="black">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model='valid' ref='form' lazy-validation>
                  <v-text-field 
                  prepend-icon="person" 
                  v-model="username" 
                  name="login" 
                  label="Login"
                  :rules="usernameRules"
                  type="text"
                  required
                  ></v-text-field>
                  <v-text-field 
                  prepend-icon="lock" 
                  v-model="password" 
                  name="password" 
                  label="Password" 
                  id="password" 
                  type="password"
                  :rules="passwordRules"
                  required
                  ></v-text-field>
                  <p class="text-xs-right">Don't have an account ? 
                    <a href='/signup'>Sign up</a>
                  </p>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click='submit' color="primary" to='/'>Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      valid: true,
      username: "",
      password: "",
      usernameRules: [v => !!v || "Name is required"],
      passwordRules: [v => !!v || "Password is required"],
      right: null
    };
  },
  methods: {
    submit() {
      axios
        .get('http://35.240.187.85:4000/savelog/'+this.username+'/'+this.password)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
