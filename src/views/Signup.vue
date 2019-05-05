<template>
 <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="black">
                <v-toolbar-title>Sign up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <v-text-field
                            v-model="first_name"
                            :error-messages="nameErrors"
                            label="Name"
                            required
                            @blur="$v.first_name.$touch()"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                            v-model="last_name"
                            :error-messages="surnameErrors"
                            label="Surname"
                            required
                            @blur="$v.last_name.$touch()"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                          <v-menu
                            :close-on-content-click="false"
                            v-model="menu2"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                          >
                            <v-text-field
                              label="Date of Birth"
                              slot="activator"
                              v-model="date"
                              :error-messages="dateErrors"
                              prepend-icon="event"
                              @blur="$v.date.$touch()"
                              readonly
                              required
                            ></v-text-field>
                            <v-date-picker v-model="date" @input="menu2 = false" @change="save(date)"></v-date-picker>
                          </v-menu>
                        </v-flex> 
                        <v-flex xs12 md2>
                            <v-text-field
                            label="Age"
                            v-model="age"
                            :error-messages="ageErrors"
                            required
                            @blur="$v.age.$touch()"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md2>
                            <v-text-field
                            label="Height (cm)"
                            v-model="height"
                            :error-messages="heightErrors"
                            required
                            @blur="$v.height.$touch()"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md2>
                            <v-text-field
                            label="Weight (kg)"
                            v-model="weight"
                            :error-messages="weightErrors"
                            required
                            @blur="$v.weight.$touch()"
                            ></v-text-field>
                        </v-flex> 
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <v-text-field
                            label="Username"
                            v-model="username"
                            :error-messages="usernameErrors"
                            required
                            @blur="$v.username.$touch()"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                             v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @blur="$v.email.$touch()"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <v-text-field
                            type="password"
                            v-model="password"
                            :error-messages="passwordErrors"
                            label="Password"
                            required
                            @blur="$v.password.$touch()"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                            label="Confirm password"
                            type="password"
                            v-model="confirm_password"
                            :error-messages="confirmpasswordErrors"
                            required
                            @blur="$v.confirm_password.$touch()"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click='submit' color="primary">Sign up</v-btn>
                <v-btn @click='clear' color="error">Clear</v-btn>
                <v-dialog v-model="dialog" persistent max-width="290">
                  <v-card>
                    <v-card-title class="headline">Submit confirmation</v-card-title>
                    <v-card-text>Are you sure you want to submit this form ?</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
                      <v-btn color="green darken-1" flat @click="confirmSubmit">Agree</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs,between } from 'vuelidate/lib/validators'
import axios from 'axios'
import router from '../router'
  export default {
    mixins: [validationMixin],
    validations: {
      first_name: { required},
      last_name:{required},
      date:{required},
      username:{required,minLength: minLength(2)},
      email: { required, email },
      password: { required},
      confirm_password: {required,sameAsPassword: sameAs('password')},
      age: { required},
      height: { required},
      weight: { required}, 
    },
    data: () => ({
        dialog: false,
        date: null,
        first_name: '',
        last_name: '',
        username: '',
        email:'', 
        password: '',
        confirm_password:'',
        age:'',
        height: '',
        weight: '', 
        menu2: false,
        temp: null
    }),
    computed:{
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.first_name.$dirty) return errors
        !this.$v.first_name.required && errors.push('Name is required.')
        return errors
      },
      surnameErrors () {
        const errors = []
        if (!this.$v.last_name.$dirty) return errors
        !this.$v.last_name.required && errors.push('Surname is required.')
        return errors
      },
      dateErrors () {
        const errors = []
        if (!this.$v.date.$dirty) return errors
        !this.$v.date.required && errors.push('Birthday is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      confirmpasswordErrors () {
        const errors = []
        if (!this.$v.confirm_password.$dirty) return errors
        !this.$v.confirm_password.required && errors.push('Confirm password is required.')
        !this.$v.confirm_password.sameAsPassword && errors.push('Passwords must be identical')
        return errors
      },
      usernameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.minLength && errors.push('Username must have at least '+this.$v.username.$params.minLength.min+' letters')
        !this.$v.username.required && errors.push('Username is required.')
        return errors
      },
      ageErrors () {
        const errors = []
        if (!this.$v.age.$dirty) return errors
        !this.$v.age.required && errors.push('Age is required.')
        return errors
      },
      heightErrors () {
        const errors = []
        if (!this.$v.height.$dirty) return errors
        !this.$v.height.required && errors.push('Height is required.')
        return errors
      },
      weightErrors () {
        const errors = []
        if (!this.$v.weight.$dirty) return errors
        !this.$v.weight.required && errors.push('Weight is required.')
        return errors
      },
    },
    methods: {
      save (dateSelect) {
        this.date = dateSelect;
      },
      clear(){
        this.$v.$reset()
        this.date = null
        this.first_name = ''
        this.last_name = ''
        this.username = ''
        this.email = ''
        this.password = ''
        this.confirm_password = ''
        this.age = ''
        this.height = ''
        this.weight = ''
      },
      submit (){
        this.$v.$touch()
        if (this.$v.$pending || this.$v.$error) return;
        var temp
        var tempCheck
        axios
        .get('http://35.197.155.73:4000/check/'+this.first_name+'/'+this.last_name+'/'+this.username+'/'+this.email)
        .then(response => {
          this.temp = response.data
          this.tempCheck = response.data.split(' ')
          if(this.tempCheck[this.tempCheck.length-1] == 'use'){

          }else if(this.tempCheck[this.tempCheck.length-1] == 'ok'){
            this.dialog = true
          }
        })
        .catch(error => {
          console.log(error);
        });
      },
      confirmSubmit(){
        axios
        .get('http://35.197.155.73:4000/writeinfor/'+this.first_name+'/'+this.last_name+'/'+this.date+'/'+this.age+'/'+this.height+'/'+this.weight+'/'+this.username+'/'+this.email+'/'+this.password)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
        this.dialog = false
        router.replace('login')
      }
    }
  }
</script>