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
      :headers="headers"
      :items="desserts"
      :search="search"
      :pagination.sync = "pagination"
    >
      <template slot="items" slot-scope="props" v-if="radios=='radio-2'">
        <router-link tag="tr" to="/statistic" onclick="window.location.reload(true);">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.calories }}</td>
          <td class="text-xs-left">{{ props.item.fat }}</td>
          <td class="text-xs-left">{{ props.item.carbs }}</td>
          <td class="text-xs-left">{{ props.item.protein }}</td>
        </router-link>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        row: null,
        radios: 'radio-1',
        pagination: {
          rowsPerPage: -1
        },
        search: '',
        headers: [
          {
            text: 'NO',
            align: 'left',
            value: 'name'
          },
          { text: 'Date', value: 'calories' },
          { text: 'Start', value: 'fat' },
          { text: 'End', value: 'carbs' },
          { text: 'Total sleep time', value: 'protein' },
        ],
        desserts: [
          {
            name: 1,
            calories: '29/01/2019',
            fat: 21.00,
            carbs: 6.00,
            protein: 9
          },
          {
            name: 2,
            calories: '30/01/2019',
            fat: 23.00,
            carbs: 6.00,
            protein: 7
          }
        ]
      }
    }
  }
</script>