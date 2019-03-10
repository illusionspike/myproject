<script>
  //Importing Line class from the vue-chartjs 
  // eslint-disable-next-line
  /* eslint-disable */ 
  import { Line } from 'vue-chartjs'

  //Exporting this so it can be used in other components
  export default {
    extends: VueChartJs.Line,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
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
        //Chart.js options that controls the appearance of the chart
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
            display: true
          },
          responsive: true,
          maintainAspectRatio: false,
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>