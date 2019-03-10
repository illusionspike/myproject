<template> 
    <v-app>
    <v-card>
    <v-toolbar
      card
      color="primary"
      dark
      dense
    >
      <v-toolbar-title>Sleep posture</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
        <div id="feild">
            <div id="content">
                <canvas ref="chart"></canvas>
            </div>
        </div>
        <Time/>
    </v-card-text>
    </v-card>
    <br>
    <v-card>
        <v-toolbar
            card
            color="primary"
            dark
            dense
        >
        <v-toolbar-title>Sleep quality</v-toolbar-title>
        </v-toolbar>
        <v-layout row>
            <v-flex md6>
            <v-card-text>
                <div
                    data-type="fill"
                    data-fill-dir="btt"
                    data-img="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ3MnB0IiB2aWV3Qm94PSItMyAwIDQ3MSA0NzIiIHdpZHRoPSI0NzJwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTYwLjUgMjcyYzAgMjIuMDg5ODQ0LTE3LjkxMDE1NiA0MC00MCA0MHMtNDAtMTcuOTEwMTU2LTQwLTQwIDE3LjkxMDE1Ni00MCA0MC00MCA0MCAxNy45MTAxNTYgNDAgNDB6bTAgMCIgZmlsbD0iI2Y5YzE3MCIvPjxwYXRoIGQ9Im0xNDQuNSAyODhjLTEzLS4wMzkwNjItMjUuMTY0MDYyLTYuMzk0NTMxLTMyLjYyODkwNi0xNy4wMzkwNjItNy40NjA5MzgtMTAuNjQwNjI2LTkuMjg1MTU2LTI0LjI0NjA5NC00Ljg5MDYyNS0zNi40ODA0NjktMTcuNTcwMzEzIDYuMjA3MDMxLTI4LjUyMzQzOCAyMy43MTg3NS0yNi40MjE4NzUgNDIuMjM0Mzc1IDIuMTA1NDY4IDE4LjUxMTcxOCAxNi43MTQ4NDQgMzMuMTIxMDk0IDM1LjIyNjU2MiAzNS4yMjY1NjIgMTguNTE1NjI1IDIuMTAxNTYzIDM2LjAyNzM0NC04Ljg1MTU2MiA0Mi4yMzQzNzUtMjYuNDIxODc1LTQuMzI4MTI1IDEuNjAxNTYzLTguOTAyMzQzIDIuNDQxNDA3LTEzLjUxOTUzMSAyLjQ4MDQ2OXptMCAwIiBmaWxsPSIjZmFhMTA4Ii8+PHBhdGggZD0ibTE2LjUgMjQwaDhjOC44MzU5MzggMCAxNiA3LjE2NDA2MiAxNiAxNnYyMDBjMCA4LjgzNTkzOC03LjE2NDA2MiAxNi0xNiAxNmgtOGMtOC44MzU5MzggMC0xNi03LjE2NDA2Mi0xNi0xNnYtMjAwYzAtOC44MzU5MzggNy4xNjQwNjItMTYgMTYtMTZ6bTAgMCIgZmlsbD0iIzcwZGRhOCIvPjxwYXRoIGQ9Im00MjQuNSAzNDRoMjRjOC44MzU5MzggMCAxNiA3LjE2NDA2MiAxNiAxNnY5NmMwIDguODM1OTM4LTcuMTY0MDYyIDE2LTE2IDE2aC04Yy04LjgzNTkzOCAwLTE2LTcuMTY0MDYyLTE2LTE2em0wIDAiIGZpbGw9IiM3MGRkYTgiLz48cGF0aCBkPSJtNzIuNSAzMTJoNjR2MzJoLTY0em0wIDAiIGZpbGw9IiM0MGJmN2MiLz48cGF0aCBkPSJtMzYwLjUgMzQ0djE2YzAgMTcuNjcxODc1LTE0LjMyODEyNSAzMi0zMiAzMmgtMTM2Yy0xNy42NzE4NzUgMC0zMi0xNC4zMjgxMjUtMzItMzJ2LTE2aC0xMjB2ODBoMzg0di04MHptMCAwIiBmaWxsPSIjZmQ0MTJkIi8+PHBhdGggZD0ibTM2MC41IDI5Nmg0MGMxMy4yNTM5MDYgMCAyNCAxMC43NDYwOTQgMjQgMjRzLTEwLjc0NjA5NCAyNC0yNCAyNGgtNDB6bTAgMCIgZmlsbD0iI2Y5YzE3MCIvPjxwYXRoIGQ9Im0zMjguNSAzOTJoLTEzNmMtMTcuNjcxODc1IDAtMzItMTQuMzI4MTI1LTMyLTMydi04Ny40NDE0MDZjMC05Ljc5Mjk2OSA0LjQ4ODI4MS0xOS4wNTA3ODIgMTIuMTc5Njg4LTI1LjExNzE4OCA3LjY4NzUtNi4wNjY0MDYgMTcuNzM0Mzc0LTguMjc3MzQ0IDI3LjI2MTcxOC02bDE1NC4zOTg0MzggMzcuMTE3MTg4YzMuNjkxNDA2Ljg3MTA5NCA2LjI2MTcxOCA0LjIxMDkzNyA2LjE2MDE1NiA4djczLjQ0MTQwNmMwIDE3LjY3MTg3NS0xNC4zMjgxMjUgMzItMzIgMzJ6bTAgMCIgZmlsbD0iIzcwZGRhOCIvPjxwYXRoIGQ9Im0yNzIuNSA4aDE5MnYxOTJoLTE5MnptMCAwIiBmaWxsPSIjNzBkZGE4Ii8+PHBhdGggZD0ibTQwOC41IDE1MmMtNTMuMDE5NTMxIDAtOTYtNDIuOTgwNDY5LTk2LTk2di00OGgtNDB2MTkyaDE5MnYtNDh6bTAgMCIgZmlsbD0iIzQwYmY3YyIvPjxnIGZpbGw9IiNmYWExMDgiPjxwYXRoIGQ9Im0zNjAuNSAxNDMuMTIxMDk0Yy0xNy42NzE4NzUgMC0zMi0xNC4zMjgxMjUtMzItMzIgLjAwNzgxMi0yLjQwMjM0NC4zMDA3ODEtNC43OTI5NjkuODc4OTA2LTcuMTIxMDk0LTE1LjQ2ODc1IDMuNDc2NTYyLTI2LjA2MjUgMTcuNzYxNzE5LTI0Ljg5NDUzMSAzMy41NzgxMjUgMS4xNjc5NjkgMTUuODEyNSAxMy43NDIxODcgMjguMzg2NzE5IDI5LjU1ODU5NCAyOS41NTQ2ODcgMTUuODEyNSAxLjE2Nzk2OSAzMC4wOTc2NTYtOS40MjE4NzQgMzMuNTc4MTI1LTI0Ljg5NDUzMS0yLjMzMjAzMi41NzgxMjUtNC43MjI2NTYuODc1LTcuMTIxMDk0Ljg4MjgxM3ptMCAwIi8+PHBhdGggZD0ibTQyOC41IDk2di00aDRjNC40MTc5NjkgMCA4LTMuNTgyMDMxIDgtOHMtMy41ODIwMzEtOC04LThoLTR2LTRjMC00LjQxNzk2OS0zLjU4MjAzMS04LTgtOHMtOCAzLjU4MjAzMS04IDh2NGgtNGMtNC40MTc5NjkgMC04IDMuNTgyMDMxLTggOHMzLjU4MjAzMSA4IDggOGg0djRjMCA0LjQxNzk2OSAzLjU4MjAzMSA4IDggOHM4LTMuNTgyMDMxIDgtOHptMCAwIi8+PHBhdGggZD0ibTM0NC41IDQ0aC00di00YzAtNC40MTc5NjktMy41ODIwMzEtOC04LThzLTggMy41ODIwMzEtOCA4djRoLTRjLTQuNDE3OTY5IDAtOCAzLjU4MjAzMS04IDhzMy41ODIwMzEgOCA4IDhoNHY0YzAgNC40MTc5NjkgMy41ODIwMzEgOCA4IDhzOC0zLjU4MjAzMSA4LTh2LTRoNGM0LjQxNzk2OSAwIDgtMy41ODIwMzEgOC04cy0zLjU4MjAzMS04LTgtOHptMCAwIi8+PHBhdGggZD0ibTM5Mi41IDQwYzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhzLTgtMy41ODIwMzEtOC04IDMuNTgyMDMxLTggOC04IDggMy41ODIwMzEgOCA4em0wIDAiLz48cGF0aCBkPSJtNDQwLjUgMTYwYzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhzLTgtMy41ODIwMzEtOC04IDMuNTgyMDMxLTggOC04IDggMy41ODIwMzEgOCA4em0wIDAiLz48L2c+PHBhdGggZD0ibTEwNC41IDExMmgtMjAuNzE4NzVsMjYuMzk4NDM4LTI2LjMyMDMxMmMyLjI2OTUzMS0yLjMwMDc4MiAyLjkzMzU5My01Ljc0MjE4OCAxLjY3OTY4Ny04LjcxODc1LTEuMjI2NTYzLTIuOTg4MjgyLTQuMTI4OTA2LTQuOTQ1MzEzLTcuMzU5Mzc1LTQuOTYwOTM4aC00MGMtNC40MTc5NjkgMC04IDMuNTgyMDMxLTggOHMzLjU4MjAzMSA4IDggOGgyMC43MTg3NWwtMjYuMzk4NDM4IDI2LjMyMDMxMmMtMi4yNjk1MzEgMi4zMDA3ODItMi45MzM1OTMgNS43NDIxODgtMS42Nzk2ODcgOC43MTg3NSAxLjIyNjU2MyAyLjk4ODI4MiA0LjEyODkwNiA0Ljk0NTMxMyA3LjM1OTM3NSA0Ljk2MDkzOGg0MGM0LjQxNzk2OSAwIDgtMy41ODIwMzEgOC04cy0zLjU4MjAzMS04LTgtOHptMCAwIiBmaWxsPSIjNDBiZjdjIi8+PHBhdGggZD0ibTE5Mi41IDQ4aC0yOC43MTg3NWwzNC4zOTg0MzgtMzQuMzIwMzEyYzIuMjY5NTMxLTIuMzAwNzgyIDIuOTMzNTkzLTUuNzQyMTg4IDEuNjc5Njg3LTguNzE4NzUtMS4yMjY1NjMtMi45ODgyODItNC4xMjg5MDYtNC45NDUzMTMtNy4zNTkzNzUtNC45NjA5MzhoLTQ4Yy00LjQxNzk2OSAwLTggMy41ODIwMzEtOCA4czMuNTgyMDMxIDggOCA4aDI4LjcxODc1bC0zNC4zOTg0MzggMzQuMzIwMzEyYy0yLjI2OTUzMSAyLjMwMDc4Mi0yLjkzMzU5MyA1Ljc0MjE4OC0xLjY3OTY4NyA4LjcxODc1IDEuMjI2NTYzIDIuOTg4MjgyIDQuMTI4OTA2IDQuOTQ1MzEzIDcuMzU5Mzc1IDQuOTYwOTM4aDQ4YzQuNDE3OTY5IDAgOC0zLjU4MjAzMSA4LThzLTMuNTgyMDMxLTgtOC04em0wIDAiIGZpbGw9IiM0MGJmN2MiLz48cGF0aCBkPSJtMTYwLjUgMTg0aC0xNS4zNTkzNzVsMjEuNTk3NjU2LTI3LjAzOTA2MmMxLjg5NDUzMS0yLjM5MDYyNiAyLjI2OTUzMS01LjY0ODQzOC45NjA5MzgtOC40MDIzNDQtMS4zMjQyMTktMi43NzczNDQtNC4xMjEwOTQtNC41NTA3ODItNy4xOTkyMTktNC41NTg1OTRoLTMyYy00LjQxNzk2OSAwLTggMy41ODIwMzEtOCA4czMuNTgyMDMxIDggOCA4aDE1LjM1OTM3NWwtMjEuNTk3NjU2IDI3LjAzOTA2MmMtMS44OTQ1MzEgMi4zOTA2MjYtMi4yNjk1MzEgNS42NDg0MzgtLjk2MDkzOCA4LjQwMjM0NCAxLjMyNDIxOSAyLjc3NzM0NCA0LjEyMTA5NCA0LjU1MDc4MiA3LjE5OTIxOSA0LjU1ODU5NGgzMmM0LjQxNzk2OSAwIDgtMy41ODIwMzEgOC04cy0zLjU4MjAzMS04LTgtOHptMCAwIiBmaWxsPSIjNDBiZjdjIi8+PHBhdGggZD0ibS41IDM5NC44MDA3ODF2NjEuMTk5MjE5YzAgOC44MzU5MzggNy4xNjQwNjIgMTYgMTYgMTZoOGM4LjgzNTkzOCAwIDE2LTcuMTY0MDYyIDE2LTE2di0xOS4xMjEwOTRjLTE4LjEzMjgxMi04LjUyMzQzNy0zMi40MDYyNS0yMy41MzkwNjItNDAtNDIuMDc4MTI1em0wIDAiIGZpbGw9IiM0MGJmN2MiLz48cGF0aCBkPSJtNDI0LjUgMzkydjY0YzAgOC44MzU5MzggNy4xNjQwNjIgMTYgMTYgMTZoOGM4LjgzNTkzOCAwIDE2LTcuMTY0MDYyIDE2LTE2di0xMS41MTk1MzFjLTE3LjE5OTIxOS03LjUxOTUzMS0zMS42MDE1NjItMjYuNjQwNjI1LTQwLTUyLjQ4MDQ2OXptMCAwIiBmaWxsPSIjNDBiZjdjIi8+PHBhdGggZD0ibTM3Ni41IDM1Mi43MTg3NXYtOC43MTg3NWgtMTZ2MTZjMCAxNy42NzE4NzUtMTQuMzI4MTI1IDMyLTMyIDMyaC0xMzZjLTE3LjY3MTg3NSAwLTMyLTE0LjMyODEyNS0zMi0zMnYtMTZoLTgwdjguNzE4NzVjLjM5NDUzMSAzOS40ODQzNzUgMzIuNTE1NjI1IDcxLjI4NTE1NiA3MiA3MS4yODEyNWgxNTJjMzkuNDg0Mzc1LjAwMzkwNiA3MS42MDU0NjktMzEuNzk2ODc1IDcyLTcxLjI4MTI1em0wIDAiIGZpbGw9IiNkNjMzMmIiLz48cGF0aCBkPSJtMzcyLjE3OTY4OCAyOTZoLTExLjY3OTY4OHY0OGg0MGMzLjI0MjE4OC0uMDExNzE5IDYuNDQ5MjE5LS42NjQwNjIgOS40NDE0MDYtMS45MjE4NzUtMTguMDUwNzgxLTkuOTI1NzgxLTMxLjU3ODEyNS0yNi40Mjk2ODctMzcuNzYxNzE4LTQ2LjA3ODEyNXptMCAwIiBmaWxsPSIjZmFhMTA4Ii8+PHBhdGggZD0ibTE2MC41IDMwNC40ODA0Njl2NTUuNTE5NTMxYzAgMTcuNjcxODc1IDE0LjMyODEyNSAzMiAzMiAzMmgxMzZjOC40MTAxNTYuMDA3ODEyIDE2LjQ4ODI4MS0zLjI5Njg3NSAyMi40ODA0NjktOS4xOTkyMTktODcuNDQxNDA3LTYuMzIwMzEyLTE1OS42Nzk2ODgtMzYuOTYwOTM3LTE5MC40ODA0NjktNzguMzIwMzEyem0wIDAiIGZpbGw9IiM0MGJmN2MiLz48L3N2Zz4="
                    data-img-size="350,350"
                    class="ldBar label-center"
                    id="progressBar"
                    data-value="90"
                ></div>                    
            </v-card-text>
            </v-flex>
            <v-flex md5>
                <v-card color="green accent-1" id="text">
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Suggestion</h3>
                        <br>
                        <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ... Located two hours south of </div>
                    </div>
                </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-card>
    </v-app>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

import Chart from 'chart.js';
import Time from '@/components/Time'
    export default {
        components:{
            Time,
        },
        data(){
           return{

           }
        },
        mounted() {
            var chart = this.$refs.chart;
            var ctx = chart.getContext("2d");
            Chart.defaults.global.defaultFontSize = 20;
            var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Supine", "Lying left", "Lying right", "Sit on bed", "Get out of bed"],
                datasets: [{
                data: [12, 19, 3, 5, 2],
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


                }],
            },
            options: {
                responsive: true,
                
                legend: {
                    position: 'right',
                },
            }
        });
   }
    }
</script>


<style>
/* pie chart */

#feild {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 100px;
}
#content {
  width: 80%;
}
/* progress bar */
#progressBar{
margin-left: 50px ;
  margin-top: 50px;
  margin-bottom: 50px;
}
.ldBar-label {
    color: black;
    font-family: tahoma;
    font-size: 3.5em;
    font-weight: 900;
    padding-top: 350px;
}
#text{
    margin-top: 90px;
}
</style>

