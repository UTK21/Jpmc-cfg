import React from 'react'
import './CSS/status.css'

function Status() {
  return (
    <div>
      <div class = "container-fluid pt-3 mx-2">
        {/* <div class ="row"> */}
          {/* <div class="col-1 m-5">
            <div class="d-flex flex-column align-content-between">  
              <button type="button"class="btn btn-info btn-circle btn-lg selected"></button>
              <div class="vertical-divider"></div>
              <button type="button"class="btn btn-info btn-circle btn-lg" onclick="onboard.html"></button>
              <div class="vertical-divider"></div>
              <button type="button"class="btn btn-info btn-circle btn-lg" onclick="fund.html"></button>    
            </div>
          </div> */}
          <div class="col-9 w-100">
            <div class="d-flex flex-column align-content-between h-100">
              <div class="col border h-50 my-2 bg-dark text-light w-100">
                <div class='row'>
                  <div class='col-6'>
                    <div class="h1 font-weight-bold txt-lg mx-1" >
                      Startup Name
                    </div>
                    <div class="h3 text-light mt-3 mx-3">
                      Email@email.com
                    </div>
                    <div class="h3 text-secondary mt-1 mx-3">
                      Businsess Model: <span class="text-light">B2B</span> 
                    </div>
                    <div class="h3 text-secondary mt-1 mx-3">
                      Startup status: <span class="text-primary">Incubation</span> 
                    </div>
                    <div class="h3 text-secondary mt-1 mx-3">
                      Website: <span class="text-warning">https://something.somewhere</span> 
                    </div>
                  </div>
                  <div class='col-6'>
                    <img src='../../svg_img/undraw_term_sheet_re_ju7s.svg'/>
                  </div>
                </div>
                <div class="col border h-50 my-2 bg-secondary align-right">
                  <div class="status">
                    <h2>Check back to see your status here</h2>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Status