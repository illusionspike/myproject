<template>
  <div id="piechart1">
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
          text: 'Sleep posture per month',
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
      currentMonth:'',
      postureData:[],
      count: []

    }
  },
  beforeCreate(){
  this.currentMonth = this.$localStorage.get('Month')
  this.username = this.$localStorage.get('usernameLogin')
  console.log(this.currentMonth)
    axios
        .get("http://35.197.155.73:4000/readpermonth/"+this.username+'/'+this.currentMonth)
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
#piechart1{
  margin-left: 60px;
  margin-top: 60px;
  margin-bottom: 30px;
}
</style>
