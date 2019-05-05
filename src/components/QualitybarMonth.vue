<template>
  <div>
    <v-flex class="selectMenu" md8>
      <v-select
        v-model='select'
        v-bind:items="items"
        label="Please select date"
        solo
        @input='showItem(select)'
      ></v-select>
    </v-flex>
    <div id="qualitybar">
      <apexcharts width="550" height="550" type="radialBar" :options="chartOptions" :series="PSQI"></apexcharts>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import VueApexCharts from 'vue-apexcharts'
import axios from "axios";
export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data(){
    return {
      username:'',
      currentMonth: '',
      dateTime: [],
      select: null,
      dateData:[],
      items: [],
      PSQI: [0],
      scoreData:[],
      score: 0,
        chartOptions: {
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                name: {
                  fontSize: '30px',
                  color: undefined,
                  offsetY: 15
                },
                value: {
                  offsetY: -50,
                  fontSize: '40px',
                  color: undefined,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            //colors: '#FF0000',
            gradient: {
              shade: "dark",
              type: 'vertical',
              gradientToColors: ["#87D4F9"],
              inverseColors: false,
              stops: [0,100],

            },
          },
          stroke: {
            dashArray: 4
          },
          labels: ['Sleep quality']
        }
    }
  },
  beforeCreate(){
    this.username = this.$localStorage.get('usernameLogin')
    this.currentMonth = this.$localStorage.get('Month')
    axios
    .get("http://35.197.155.73:4000/rquamonth/"+this.username+'/'+this.currentMonth)
    .then(response => {
        var sleepQua = response.data
        this.sleepQua = parseInt(sleepQua[0].score_total)
        this.PSQI = []
        this.PSQI.push(this.sleepQua)
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted(){
  this.currentMonth = this.$localStorage.get('Month')
  this.username = this.$localStorage.get('usernameLogin')
  var tempText
    axios
      .get("http://35.197.155.73:4000/rdayinmonth/"+this.username+'/'+this.currentMonth)
      .then(response => {
        this.dateData = response.data;
        var i = 0
        for (i = 0; i < this.dateData.length; i++) {
          this.tempText = 'Date: '+this.dateData[i].date+' Start: '+this.dateData[i].start
          this.items.push(this.tempText)
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods:{
    showItem(temp){
      console.log(temp)
      this.dateTime = temp.split(" ");
      axios
      .get("http://35.197.155.73:4000/readqua/"+this.username+'/'+this.dateTime[1]+'/'+this.dateTime[3])
      .then(response => {
        this.scoreData = response.data;
        this.scoreData = this.scoreData[0];
        this.score = parseInt(this.scoreData.score_check) + parseInt(this.scoreData.score_ha) + parseInt(this.scoreData.score_la) + parseInt(this.scoreData.score_out) + parseInt(this.scoreData.score_sleep);
        this.score = Math.round((this.score/15)*100);
        this.PSQI = []
        this.PSQI.push(this.score)
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
}
</script>
<style>
#qualitybar{
  margin-top: 35px;
  
  margin-bottom: -100px;
  position: absolute;
}
.selectMenu{
  margin-top: 50px;
  margin-left: 110px;
  position: absolute;
  z-index: 1;
  width: 27%;
}
</style>

