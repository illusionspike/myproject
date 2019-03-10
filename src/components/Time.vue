<template>
    <div id='content1'>
        <canvas ref="linechart"></canvas>
    </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import Chart from 'chart.js';

export default {
    data(){
        return{

        }
    },
    mounted() {
        var chart1 = this.$refs.linechart;
        var ctx1 = chart1.getContext("2d");
        Chart.defaults.global.defaultFontSize = 20;
        var myChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['20:00', '21:00', '22:00', '23:00', '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00'],
        datasets: [
            {
              label: 'Supine',
              borderWidth: 3,
              fill: false,
              borderColor:'rgba(255, 99, 132, 1)',
              backgroundColor:'rgba(255, 99, 132, 1)',
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100,50]
            },{
              label: 'Lying left',
              fill: false,
              borderColor:'rgba(54, 162, 235, 1)',
              backgroundColor:'rgba(54, 162, 235, 1)',
              data: [10,10,10,10,10,10,10,10,10,10,10,10,10]
            },{
              label: 'Lying right',
              borderWidth: 3,
              fill: false,
              borderColor:'rgba(255, 206, 86, 1)',
              backgroundColor:'rgba(255, 206, 86, 1)',
              data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
            },{
              label: 'Sit on bed',
              borderWidth: 3,
              fill: false,
              borderColor:'rgba(75, 192, 192, 1)',
              backgroundColor:'rgba(75, 192, 192, 1)',
              data: [30,30,30,30,30,30,30,30,30,30,30,30,30]
            },{
              label: 'Get out of bed',
              borderWidth: 3,
              fill: false,
              borderColor:'rgba(153, 102, 255, 1)',
              backgroundColor:'rgba(153, 102, 255, 1)',
              data: [40,40,40,40,40,40,40,40,40,40,40,40,40]
            }
        ]
        },
        options: {
            scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    display: true
                }
            }],
            xAxes: [ {
                gridLines: {
                    display: false
                }
            }]
            },
            legend: {
                display: true,
                position: 'right',
            },
            responsive: true,
            plugins: {
                labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
                render: 'value',
                }
            }
            
        }
        });
   }
}
</script>
<style>
</style>
