<template>
 <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="black">
                <v-toolbar-title>Sign up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model='valid' ref='form' lazy-validation>
                  <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <v-text-field
                            label="Firstname"
                            v-model="User.first_name"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                            label="Lastname"
                            v-model="User.last_name"
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
                              v-model="User.date"
                              prepend-icon="event"
                              readonly
                            ></v-text-field>
                            <v-date-picker v-model="User.date" @input="menu2 = false" @change="save(User.date)"></v-date-picker>
                          </v-menu>
                        </v-flex> 
                        <v-flex xs12 md2>
                            <v-text-field
                            label="Age"
                            v-model="User.age"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md2>
                            <v-text-field
                            label="Height (cm)"
                            v-model="User.height"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md2>
                            <v-text-field
                            label="Weight (kg)"
                            v-model="User.weight"
                            ></v-text-field>
                        </v-flex> 
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <v-text-field
                            label="Username"
                            v-model="User.username"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                            label="E-mail"
                            v-model="User.email"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <v-text-field
                            label="Password"
                            type="password"
                            v-model="User.password"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                            label="Confirm password"
                            type="password"
                            v-model="User.confirm_password"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click='submit' color="primary">Sign up</v-btn>
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
import axios from 'axios'
  export default {
    data: () => ({
      date: null,
      User: {
        first_name: '',
        last_name: '',
        date:'',
        age:'',
        height: '',
        weight: '',
        username: '',
        email: '',
        password: '',
        confirm_password:''
      },
      menu2: false
    }),
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      submit (){
        let newUser = {
          first_name: this.User.first_name,
          last_name: this.User.last_name,
          date: this.User.date,
          age: this.User.age,
          height: this.User.height,
          weight: this.User.weight,
          username: this.User.username,
          email: this.User.email,
          password: this.User.password,
          confirm_password: this.User.confirm_password
        }
        console.log(newUser)
        axios.post('http://localhost:3000/users',newUser)
        .then(function(res){
          console.log(res)
        })
        .catch(function(err){
          console.log(err)
        });
      }
    }
  }
</script>