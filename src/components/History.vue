<template>
  <v-card>
    <v-card-title>
      <v-toolbar-title>History table</v-toolbar-title>
      <v-radio-group v-model="radios" row class="ml-5">
        <v-radio value="radio-1" color="primary">
          <div slot="label"><strong class="black--text">Daily</strong></div>
        </v-radio>
        <v-radio value="radio-2" color="primary">
          <div slot="label"><strong class="black--text">Monthly</strong></div>
        </v-radio>
    </v-radio-group>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headerDay"
      :items="historyDay"
      :search="search"
      :pagination.sync = "pagination"
      v-if="radios=='radio-1'"
    >
      <template slot="items" slot-scope="props">
        <tr @click="nextDaily(props.item.date,props.item.start)">
          <td class="text-xs-left">{{ props.item.date }}</td>
          <td class="text-xs-left">{{ props.item.start }}</td>
          <td class="text-xs-left">{{ props.item.end }}</td>
          <td class="text-xs-left">{{ props.item.total}}</td>
          <td class="text-xs-left">{{ props.item.score_total}}</td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
      <v-data-table
      :headers="headerMonth"
      :items="historyMonth"
      :search="search"
      :pagination.sync = "pagination"
      v-if="radios=='radio-2'"
    >
      <template slot="items" slot-scope="props">
        <tr @click="nextMonth(props.item.date)">
          <td class="text-xs-left">{{ props.item.date }}</td>
          <td class="text-xs-left">{{ props.item.total}}</td>
           <td class="text-xs-left">{{ props.item.score_total}}</td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */ 
import axios from "axios";
import router from '../router'
  export default {
    data () {
      return {
        username:'',
        row: null,
        radios: 'radio-1',
        pagination: {
          rowsPerPage: -1
        },
        search: '',
        headerDay: [
          {
            text: 'Date (YY/MM/DD)',
            align: 'left',
            value: 'date'
          },
          { text: 'Start (HH:MM:SS)', value: 'start' },
          { text: 'End (HH:MM:SS)', value: 'end' },
          { text: 'Total sleep time (Hr)', value: 'total' },
          { text: 'Sleep quality score', value: 'score_total' }
        ],
        headerMonth: [
          {
            text: 'Month',
            align: 'left',
            value: 'date'
          },
          { text: 'Total sleep time (Hr)', value: 'total' },
          { text: 'Sleep quality score', value: 'score_total'}
        ],
        historyDay:[],
        historyMonth:[]
      }
    },
    mounted(){
    this.username = this.$localStorage.get('usernameLogin')
       axios
        .get("http://35.197.155.73:4000/readtable/"+this.username)
        .then(response => {
          this.historyDay = response.data;
        })
        .catch(error => {
          console.log(error);
        });
         axios
        .get("http://35.197.155.73:4000/rtablemonth/"+this.username)
        .then(response => {
          this.historyMonth = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods:{
      nextDaily(hisDate,hisTime){
        var temp1 = this.hisDate
        var temp2 = this.hisTime
        this.$localStorage.set('Date', hisDate)
        this.$localStorage.set('Time', hisTime)
        router.replace('statistic/day')
      },
      nextMonth(hisMonth){
        var temp1 = this.hisMonth
        this.$localStorage.set('Month', hisMonth)
        router.replace('statistic/month')
      }
    }
  }
</script>