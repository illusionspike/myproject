<script>
  //Importing Line class from the vue-chartjs 
  // eslint-disable-next-line
  /* eslint-disable */ 
  import { Pie } from 'vue-chartjs'

  //Exporting this so it can be used in other components
  export default {
    extends: Pie,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ["Supine", "Lying left", "Lying right", "Sit on bed", "Get out of bed"],
          datasets: [
            {
              backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1,
                hoverBorderWidth:3,
                hoverBorderColor: 'black',
              data: [12, 19, 3, 5, 2],
            },
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false,
          pieceLabels: [
    {
        mode: 'percentage'
    },
    {
        mode: 'label',
        fontColor: '#000',
        position: 'outside'
    }
]
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>