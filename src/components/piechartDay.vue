<template>
  <div id="piechart2">
    <apexcharts width="425" height="425" type="donut" :options="options" :series="count"></apexcharts>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import VueApexCharts from 'vue-apexcharts'
import axios from "axios";
export default {
  name: 'Piechart',
  components: {
    apexcharts: VueApexCharts,
  },
  data(){
    return {
      options: {
        labels: ['Supine', 'Lying left', 'Lying right', 'Sit on bed','Get out of bed'],
        title: {
          text: 'Sleep posture per day',
          offsetX: 80,
          offsetY: 0,
          style: {
            fontSize:  '20px',
            opacity: 1
          },
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
        }
      },
      currentDate:'',
      currentTime:'',
      postureData:[],
      count: []

    }
  },
  beforeCreate(){
  this.currentDate = this.$localStorage.get('Date')
  this.currentTime = this.$localStorage.get('Time')
  this.username = this.$localStorage.get('usernameLogin')
  console.log(this.currentDate,this.currentTime)
    axios
        .get("http://35.197.155.73:4000/readperday/"+this.username+'/'+this.currentDate+'/'+this.currentTime)
        .then(response => {
          this.postureData = response.data;
          this.postureData = this.postureData[0]
           //console.log(this.postureData);
           //console.log(this.series);
           this.count.push(parseInt(this.postureData.count_supine))
           this.count.push(parseInt(this.postureData.count_left))
           this.count.push(parseInt(this.postureData.count_right))
           this.count.push(parseInt(this.postureData.count_sit))
           this.count.push(parseInt(this.postureData.count_out))
           console.log(this.count)
        })
        .catch(error => {
          console.log(error);
      });
  }
}
</script>
<style>
#piechart2{
  margin-left: 60px;
  margin-top: 60px;
}
</style>
