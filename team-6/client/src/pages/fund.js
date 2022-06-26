import React from 'react';
import "./CSS/fund.css";

const Fund = () => {
  return (
    <>
<div class = "container">
        <div class ="row">
            <div class="col-1 ">
                <div class="container-2">
                    <div class="row row-cols-1">
                        <div class="col">
                            <button type="button"class="btn btn-info btn-circle btn-lg" onclick="status.html"><span>1</span></button>
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button"class="btn btn-info btn-circle btn-lg" onclick="onboard.html"><span>2</span></button>
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button"class="btn btn-info btn-circle btn-lg" onclick="fund.html"><span>3</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-11 funddash">
                                 <div class="dropdown show">
                                        <button class="btn btn-info dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Apply for grants
                                          </button>
                                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdQG1zC8RMLFuX-uTaG4gyTb08h_yNt4rk7QS7rhPbCjGm2iQ/closedform">TIDE Support</a>
                                            <a class="dropdown-item" href="https://gusecindia.typeform.com/to/vRjjNeFu?typeform-source=gusec.edu.in">GUSEC Seed</a>
                                            <a class="dropdown-item" href="https://startup.gujarat.gov.in/home">Startup Gujarat Grant</a>
                                          </div>
                                        </div>
                                        <br/>
                                        <div class="dropdown show">
                                            <button class="btn btn-info dropdown-toggle btn-lg" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Request for resources
                                              </button>
                                              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                <a class="dropdown-item">Conference Hall</a>
                                                <a class="dropdown-item">Google credits</a>
                                                <a class="dropdown-item">Amazon credits</a>
                                                <a class="dropdown-item">Mentor guidance</a>
                                                <a class="dropdown-item" href="https://startup.gujarat.gov.in/home">Startup Gujarat Grant</a>
                                              </div>
                                        </div>
                                        <br/>
                                        <div class="meetapply">
                                            <h4>Schedule a meeting</h4>
                                            <form>
                                                <div class="apply form-group">
                                                  <label for="applyform1">Startup name</label>
                                                  <input type="text" class="form-control" id="applyimputform1" placeholder="Enter details"/>
                                                </div>
                                                <div class="apply form-group">
                                                  <label for="applyform2">Select GUSEC Team Member</label>
                                                  <input type="text" class="form-control" id="applyinputform2" placeholder="Enter details"/>
                                                </div>
                                                <div class="apply form-group">
                                                    <label for="applyform2">Date</label>
                                                    <input type="date" class="form-control" id="applyinputform3" placeholder="Enter details"/>
                                                </div>
                                                <div class="apply form-group">
                                                    <label for="applyform2">Time</label>
                                                    <input type="time" class="form-control" id="applyinputform4" placeholder="Enter details"/>
                                                </div>
                                                <div class="apply form-group">
                                                    <label for="applyform2">Venue</label>
                                                    <input type="text" class="form-control" id="applyinputform5" placeholder="Enter details"/>
                                                </div>
                                                <div class="apply form-group">
                                                    <label for="applyform2">Remarks</label>
                                                    <input type="text" class="form-control" id="applyinputform6" placeholder="Enter details"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
     </>
  )
}

export default Fund;