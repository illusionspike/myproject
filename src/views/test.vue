<template>
  <div id="app">
    <canvas id="graph" width="400" height="400"></canvas>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import Chart from 'chart.js'
export default {
  mounte(){
    var ctx = document.getElementById('graph').getContext('2d');
    var bar = new Chart(ctx,{
      type: 'bar',
      data:{
        labels:['1','2','3']
      },
      datasets:[{
        label: '# of vote',
        data: [12,14,15]
      }]
    })
  }
}
</script>
