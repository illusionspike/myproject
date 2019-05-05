<template>
    <apexcharts width="550" height="300" type="line" :options="chartOptions" :series="series"></apexcharts>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Timechart',
  components: {
    apexcharts: VueApexCharts,
  },
  data(){
    return {
        series: [
            {
            name: "Supine",
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1]
            },
            {
            name: "Lying left",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]
            },
            {
            name: "Lying right",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]
            },
            {
            name: "Sit on bed",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]
            },
            {
            name: "Get out off bed",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]
            },
        ],
        chartOptions: {
          chart: {
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'stepline'
            },
            xaxis: {
                type: 'category',
                categories: ['20:00', '21:00', '22:00', '23:00', '0:00', '1:00', '2:00', '3:00', '4:00','5:00','6:00','7:00','8:00'],
            },
            legend: {
                position: 'top',
            }
        }
    }
  },
}
</script>