<template>
  <div>
    <div>
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
      currentDate:'',
      currentTime:'',
      username:'',
      scoreData:[],
      score: 0,
      PSQI:[],
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
            gradient: {
              shade: 'light',
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
    this.currentDate = this.$localStorage.get('Date')
    this.currentTime = this.$localStorage.get('Time')
    this.username = this.$localStorage.get('usernameLogin')
    console.log(this.currentDate,this.currentTime)
    axios
      .get("http://35.197.155.73:4000/readqua/"+this.username+'/'+this.currentDate+'/'+this.currentTime)
      .then(response => {
        this.scoreData = response.data;
        this.scoreData = this.scoreData[0];
        this.score = parseInt(this.scoreData.score_check) + parseInt(this.scoreData.score_ha) + parseInt(this.scoreData.score_la) + parseInt(this.scoreData.score_out) + parseInt(this.scoreData.score_sleep);
        this.score = Math.round((this.score/15)*100);
        console.log(this.score)
        this.PSQI.push(this.score)
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>
<style>

</style>

