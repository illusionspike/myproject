<template>
<div>
  
  <v-card>
    <v-toolbar
      card
      color="primary"
      dark
    >
    <v-toolbar-title>Sleep Prediction</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      :loading="loading4"
      :disabled="loading4"
      @click="loader = 'loading4'"
    >calibrate
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn>
    </v-toolbar>
    <v-alert
      v-model="alert"
      dismissible
      type="success"
    >
      This calibration is a success that is closable.
    </v-alert>
    <v-card-text>
      <v-layout row>
        <v-flex md6>
          <div class ="sensorTable">
            <table class="sensorTable">
              <tbody>
                <tr class ="sensorTable">
                  <td class ="sensorTable" v-if="sensorVal[0] >=0 && sensorVal[0] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[0] >=50 && sensorVal[0] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[0] >=100 && sensorVal[0] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[0] >300" style="background-color:#FF3333"></td>

                  <td class ="sensorTable" v-if="sensorVal[1] >=0 && sensorVal[1] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[1] > 50 && sensorVal[1] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[1] > 100 && sensorVal[1] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[1] > 300" style="background-color:#FF3333"></td>

                  <td class ="sensorTable" v-if="sensorVal[2] >=0 && sensorVal[2] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[2] > 50 && sensorVal[2] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[2] > 100 && sensorVal[2] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[2] > 300" style="background-color:#FF3333"></td>

                  <td class ="sensorTable" v-if="sensorVal[3] >=0 && sensorVal[3] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[3] > 50 && sensorVal[3] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[3] > 100 && sensorVal[3] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[3] > 300" style="background-color:#FF3333"></td>

                  <td class ="sensorTable" v-if="sensorVal[4] >=0 && sensorVal[4] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[4] > 50 && sensorVal[4] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[4] > 100 && sensorVal[4] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[4] > 300" style="background-color:#FF3333"></td>  
                    
                  <td class ="sensorTable" v-if="sensorVal[5] >=0 && sensorVal[5] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[5] > 50 && sensorVal[5] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[5] > 100 && sensorVal[5] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[5] > 300" style="background-color:#FF3333"></td>
                </tr>
                <tr class ="sensorTable">
                  <td class ="sensorTable" v-if="sensorVal[6] >=0 && sensorVal[6] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[6] > 50 && sensorVal[6] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[6] > 100 && sensorVal[6] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[6] > 300" style="background-color:#FF3333"></td>

                  <td class ="sensorTable" v-if="sensorVal[7] >=0 && sensorVal[7] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[7] > 50 && sensorVal[7] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[7] > 100 && sensorVal[7] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[7] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[8] >=0 && sensorVal[8] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[8] > 50 && sensorVal[8] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[8] > 100 && sensorVal[8] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[8] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[9] >=0 && sensorVal[9] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[9] > 50 && sensorVal[9] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[9] > 100 && sensorVal[9] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[9] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[10] >=0 && sensorVal[10] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[10] > 50 && sensorVal[10] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[10] > 100 && sensorVal[10] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[10] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[11] >=0 && sensorVal[11] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[11] > 50 && sensorVal[11] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[11] > 100 && sensorVal[11] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[11] > 300" style="background-color:#FF3333"></td>
                </tr>
                <tr class ="sensorTable">
                  <td class ="sensorTable" v-if="sensorVal[12] >=0 && sensorVal[12] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[12] > 50 && sensorVal[12] <= 100" style="background-color:yellow"> </td>
                  <td class ="sensorTable" v-if="sensorVal[12] > 100 && sensorVal[12] <= 300" style="color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[12] > 300" style="background-color:#FF3333"></td>      
                        
                  <td class ="sensorTable" v-if="sensorVal[13] >=0 && sensorVal[13] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[13] > 50 && sensorVal[13] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[13] > 100 && sensorVal[13] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[13] > 300" style="background-color:#FF3333"></td>                    
                        
                  <td class ="sensorTable" v-if="sensorVal[14] >=0 && sensorVal[14] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[14] > 50 && sensorVal[14] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[14] > 100 && sensorVal[14] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[14] > 300" style="background-color:#FF3333"></td>                 
                        
                  <td class ="sensorTable" v-if="sensorVal[15] >=0 && sensorVal[15] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[15] > 50 && sensorVal[15] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[15] > 100 && sensorVal[15] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[15] > 300" style="background-color:#FF3333"></td>                 
                        
                  <td class ="sensorTable" v-if="sensorVal[16] >=0 && sensorVal[16] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[16] > 50 && sensorVal[16] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[16] > 100 && sensorVal[16] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[16] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[17] >=0 && sensorVal[17] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[17] > 50 && sensorVal[17] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[17] > 100 && sensorVal[17] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[17] > 300" style="background-color:#FF3333"></td>                    
                </tr>
                <tr class ="sensorTable">
                  <td class ="sensorTable" v-if="sensorVal[18] >=0 && sensorVal[18] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[18] > 50 && sensorVal[18] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[18] > 100 && sensorVal[18] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[18] > 300" style="background-color:#FF3333"></td>                      
                        
                  <td class ="sensorTable" v-if="sensorVal[19] >=0 && sensorVal[19] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[19] > 50 && sensorVal[19] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[19] > 100 && sensorVal[19] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[19] > 300" style="background-color:#FF3333"></td>                      
                        
                  <td class ="sensorTable" v-if="sensorVal[20] >=0 && sensorVal[20] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[20] > 50 && sensorVal[20] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[20] > 100 && sensorVal[20] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[20] > 300" style="background-color:#FF3333"></td>                   
                        
                  <td class ="sensorTable" v-if="sensorVal[21] >=0 && sensorVal[21] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[21] > 50 && sensorVal[21] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[21] > 100 && sensorVal[21] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[21] > 300" style="background-color:#FF3333"></td>                   
                        
                  <td class ="sensorTable" v-if="sensorVal[22] >=0 && sensorVal[22] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[22] > 50 && sensorVal[22] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[22] > 100 && sensorVal[22] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[22] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[23] >=0 && sensorVal[23] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[23] > 50 && sensorVal[23] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[23] > 100 && sensorVal[23] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[23] > 300" style="background-color:#FF3333"></td>                   
                </tr>
                <tr class ="sensorTable">
                  <td class ="sensorTable" v-if="sensorVal[24] >=0 && sensorVal[24] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[24] > 50 && sensorVal[24] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[24] > 100 && sensorVal[24] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[24] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[25] >=0 && sensorVal[25] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[25] > 50 && sensorVal[25] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[25] > 100 && sensorVal[25] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[25] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[26] >=0 && sensorVal[26] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[26] > 50 && sensorVal[26] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[26] > 100 && sensorVal[26] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[26] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[27] >=0 && sensorVal[27] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[27] > 50 && sensorVal[27] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[27] > 100 && sensorVal[27] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[27] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[28] >=0 && sensorVal[28] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[28] > 50 && sensorVal[28] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[28] > 100 && sensorVal[28] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[28] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[29] >=0 && sensorVal[29] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[29] > 50 && sensorVal[29] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[29] > 100 && sensorVal[29] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[29] > 300" style="background-color:#FF3333"></td>                
                </tr>
                <tr class ="sensorTable">
                  <td class ="sensorTable" v-if="sensorVal[30] >=0 && sensorVal[30] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[30] > 50 && sensorVal[30] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[30] > 100 && sensorVal[30] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[30] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[31] >=0 && sensorVal[31] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[31] > 50 && sensorVal[31] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[31] > 100 && sensorVal[31] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[31] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[32] >=0 && sensorVal[32] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[32] > 50 && sensorVal[32] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[32] > 100 && sensorVal[32] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[32] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[33] >=0 && sensorVal[33] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[33] > 50 && sensorVal[33] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[33] > 100 && sensorVal[33] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[33] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[34] >=0 && sensorVal[34] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[34] > 50 && sensorVal[34] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[34] > 100 && sensorVal[34] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[34] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[35] >=0 && sensorVal[35] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[35] > 50 && sensorVal[35] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[35] > 100 && sensorVal[35] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[35] > 300" style="background-color:#FF3333"></td>                 
                </tr>
                <tr class ="sensorTable">
                  <td class ="sensorTable" v-if="sensorVal[36] >=0 && sensorVal[36] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[36] > 50 && sensorVal[36] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[36] > 100 && sensorVal[36] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[36] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[37] >=0 && sensorVal[37] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[37] > 50 && sensorVal[37] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[37] > 100 && sensorVal[37] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[37] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[38] >=0 && sensorVal[38] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[38] > 50 && sensorVal[38] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[38] > 100 && sensorVal[38] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[38] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[39] >=0 && sensorVal[39] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[39] > 50 && sensorVal[39] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[39] > 100 && sensorVal[39] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[39] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[40] >=0 && sensorVal[40] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[40] > 50 && sensorVal[40] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[40] > 100 && sensorVal[40] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[40] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[41] >=0 && sensorVal[41] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[41] > 50 && sensorVal[41] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[41] > 100 && sensorVal[41] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[41] > 300" style="background-color:#FF3333"></td>                   
                </tr>
                <tr class ="sensorTable">
                  <td class ="sensorTable" v-if="sensorVal[42] >=0 && sensorVal[42] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[42] > 50 && sensorVal[42] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[42] > 100 && sensorVal[42] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[42] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[43] >=0 && sensorVal[43] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[43] > 50 && sensorVal[43] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[43] > 100 && sensorVal[43] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[43] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[44] >=0 && sensorVal[44] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[44] > 50 && sensorVal[44] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[44] > 100 && sensorVal[44] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[44] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[45] >=0 && sensorVal[45] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[45] > 50 && sensorVal[45] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[45] > 100 && sensorVal[45] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[45] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[46] >=0 && sensorVal[46] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[46] > 50 && sensorVal[46] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[46] > 100 && sensorVal[46] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[46] > 300" style="background-color:#FF3333"></td>
                        
                  <td class ="sensorTable" v-if="sensorVal[47] >=0 && sensorVal[47] <= 50" style="background-color:white"></td>
                  <td class ="sensorTable" v-if="sensorVal[47] > 50 && sensorVal[47] <= 100" style="background-color:yellow"></td>
                  <td class ="sensorTable" v-if="sensorVal[47] > 100 && sensorVal[47] <= 300" style="background-color:#FF8000"></td>
                  <td class ="sensorTable" v-if="sensorVal[47] > 300" style="background-color:#FF3333"></td>                    
                </tr>
              </tbody>
            </table>
          </div>
        </v-flex>
        <v-flex md6>
          <img src="../assets/supine.png" v-if="classesVal=='Supine'">
          <img src="../assets/outofbed.png" v-if="classesVal=='Out of bed'">
          <img src="../assets/sit.png" v-if="classesVal=='Sit in bed'">
          <img src="../assets/lyingleft.png" v-if="classesVal=='Lying left'">
          <img src="../assets/lyingright.png" v-if="classesVal=='Lying right'">
        </v-flex>
      </v-layout>
    </v-card-text>
    </v-card>
      
</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
export default {
  data(){
  	return{
      username: '',
      loader: null,
      loading4: false,
    	sensors: [],
      sensorVal: [],
      classes: [],
      classesVal: [],
      alert: false
    }
  },
  watch: {
      loader () {

        const l = this.loader
        this[l] = !this[l]
        axios
        .get("http://35.197.155.73:4000/setzero/")
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });

        setTimeout(() =>{
          this[l] = false
          this.alert = true
        }, 60000)
        this.loader = null
      }
  },
  beforeCreate(){
    this.username = this.$localStorage.get('usernameLogin')
    console.log(this.username)
    axios
        .get("http://35.197.155.73:4000/readcal/1")
        .then(response => {
          this.sensors = response.data;
          this.sensorVal = this.sensors[0].data.toString().split("_");
          console.log(this.sensorVal)
        })
        .catch(error => {
          console.log(error);
        });
        axios
        .get('http://35.197.155.73:4000/readpre/'+this.username+'/1')
        .then(response => {
          this.classes = response.data;
          this.classesVal = this.classes[0].class.toString();
          console.log(this.classesVal)
        })
        .catch(error => {
          console.log(error);
        });
  },
  mounted() {
    this.username = this.$localStorage.get('usernameLogin')
    this.handle = setInterval(() => {
      axios
        .get("http://35.197.155.73:4000/readcal/1")
        .then(response => {
          this.sensors = response.data;
          this.sensorVal = this.sensors[0].data.toString().split("_");
          console.log(this.sensorVal)
        })
        .catch(error => {
          console.log(error);
        });
        axios
        .get('http://35.197.155.73:4000/readpre/'+this.username+'/1')
        .then(response => {
          this.classes = response.data;
          this.classesVal = this.classes[0].class.toString();
          console.log(this.classesVal)
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);
  },
  destroyed() {
    clearInterval(this.handle);
  }
};
</script>

<style>
div.sensorVal {
  font-weight: bold;
  font-size: 40px;
  color: black;
  text-align: left;
  padding: 10px 0px 20px 60px;
  margin-top: 0px;
  margin-bottom: 0%;
}
table.sensorTable {
  border: 5px solid black;
  border-collapse: collapse;
  color: black;
  text-align: center;
  margin-left: 48px;
  width: 60%;
  table-layout: fixed;
  margin-bottom: 75px;
}
tr.sensorTable {
  border: 5px solid black;
  height: 60px;
}
td.sensorTable {
  border: 5px solid black;
}

/* button */
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
