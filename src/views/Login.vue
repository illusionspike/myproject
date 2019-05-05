<template>
 <v-app id="inspire">
    <v-content>
      <v-alert
      v-model="check"
      type="error"
      dismissible
      >{{messageText}}
      </v-alert>
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
                  :error-messages="usernameErrors"
                  required
                  @blur="$v.username.$touch()"
                  type="text"
                  ></v-text-field>
                  <v-text-field 
                  prepend-icon="lock" 
                  v-model="password" 
                  label="Password" 
                  type="password"
                  :error-messages="passwordErrors"
                  @blur="$v.password.$touch()"
                  required
                  ></v-text-field>
                  <p class="text-xs-right">Don't have an account ? 
                    <a href='/signup'>Sign up</a>
                  </p>
                  <p class="text-xs-right">
                    <a href="/">Forgot password</a>
                  </p>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click='submit' color="primary">Login</v-btn>
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
import axios from "axios"
import router from '../router'
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs,between } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
    validations: {
      username:{required,minLength: minLength(2)},
      password: { required},
    },
  data() {
    return {
      valid: true,
      username: "",
      password: "",
      right: null,
      check:false,
      messageText:''
    };
  },
  methods: {
    submit() {
      var temp;
      this.$v.$touch()
      if (this.$v.$pending || this.$v.$error) return;
      // to form submit after this
      axios
        .get('http://35.197.155.73:4000/checkuserpass/'+this.username+'/'+this.password)
        .then(response => {
          this.temp = response.data
          console.log(this.temp)
          if(this.temp == 'invalid user'){
            this.check = true
            this.messageText = 'invalid user'
          }else if(this.temp == 'incorrect password'){
            this.check = true
            this.messageText = 'incorrect password'
          }else if(this.temp == 'ok'){
          axios
            .get('http://35.197.155.73:4000/savelog/'+this.username+'/'+this.password)
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error);
            });
            this.$localStorage.set('usernameLogin', this.username)
            console.log('login success')
            router.replace('home')
          }
        })
        .catch(error => {
          console.log(error);
        });

    }
  },
  computed:{
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.minLength && errors.push('Username must have at least '+this.$v.username.$params.minLength.min+' letters')
      !this.$v.username.required && errors.push('Username is required.')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required.')
      return errors
    },
  }
};
</script>
