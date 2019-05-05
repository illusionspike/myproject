<template> 
    <v-app>
    <v-card>
    <v-toolbar
      card
      color="primary"
      dark
      dense
    >
      <v-toolbar-title>Sleep Dashboard</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
        <v-layout row>
            <v-flex md6>
                <PiechartMonth/>
            </v-flex>
            <v-flex md6>
                <QualitybarMonth/>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-container>
            <v-layout>
                <v-flex>
                    <v-card color="green accent-1" id="text">
                        <v-card-text primary-title>
                            <div class='margin'>
                            <h3 class="headline mb-0 font-weight-bold">Sleep quality score range</h3>
                            <v-divider></v-divider>
                            <p></p>
                            <p><b class="green--text">75% and above : </b>Good sleep quality</p>
                            <p><b class="amber--text">50% to 75% : </b>it is suggested that you get sleep enough.</p>
                            <p><b class="red--text">Less than 50% : </b>it is suggested that you discuss your sleep habits with a healthcare provider</p>
                            <h3 class="headline mb-0 font-weight-bold">Scoring the PSQI</h3>
                            <v-divider></v-divider>
                            <p></p>
                            <p><b>Component 1: </b>Subjective sleep quality</p>
                            <div class="indent">
                                <p>- Sleep / Wake up Time</p>
                                <p>- Number of cycles = Number of hours slept/ 90 (REM Cycles)</p>
                            </div>
                            <p><b>Component 2: </b>Sleep latency</p>
                            <div class="indent">
                                <p>- Time to fall asleep</p>
                            </div>
                            <p><b>Component 3: </b>Sleep duration</p>
                            <div class="indent">
                                <p>- Length of time asleep</p>
                            </div>
                            <p><b>Component 4: </b>Sleep efficiency</p>
                            <div class="indent">
                                <p>- % sleep while in bed = (Number of hours slept/ Number of hours spent in the bed)*100</p>
                            </div>
                            <p><b>Component 5: </b>Sleep disturbance</p>
                            <div class="indent">
                                <p>- The number of Getting out of bed and sitting on bed.</p>
                            </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card-text>
    </v-card>
    </v-app>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import PiechartMonth from '@/components/piechartMonth'
import QualitybarMonth from '@/components/QualitybarMonth'
    export default {
        components:{
            PiechartMonth,QualitybarMonth
        },
        data(){
           return{

           }
        },
    }
</script>


<style>
/* pie chart */

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
.indent{
    text-indent: 50px;
}
.margin{
    margin-left: 50px;
    margin-right: 50px;
}
</style>

