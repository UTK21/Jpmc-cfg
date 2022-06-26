import React from 'react';
import "./CSS/onboard2.css";

const Onboard = () => {
  return (
    <>
        <div className = "container">
        <div className ="row">
            <div className="col-1 ">
                <div className="container-2">
                    <div className="row row-cols-1">
                        <div className="col">
                            <button type="button"className="btn btn-info btn-circle btn-lg" onclick={function(){console.log("Hello")}}><span>1</span></button>
                        </div>
                        <div className="col border-left">
                            <div className="vertical-divider"></div>
                        </div>
                        <div className="col">
                            <button type="button"className="btn btn-info btn-circle btn-lg" onclick="onboard.html"><span>2</span></button>
                        </div>
                        <div className="col border-left">
                            <div className="vertical-divider"></div>
                        </div>
                        <div className="col">
                            <button type="button"className="btn btn-info btn-circle btn-lg" onclick="fund.html"><span>3</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-11 onboardform vertical-scrollable">
                <form>
                    <div className="form-group">
                      <label for="form1">Information about startup and team info</label>
                      <input type="text" className="form-control" id="imputform1" placeholder="Enter details"/>
                    </div>
                    <div className="form-group">
                      <label for="form2">Founder Name</label>
                      <input type="text" className="form-control" id="inputform2" placeholder="Founder name"/>
                    </div>
                    <div className="form-group">
                        <label for="form3">Co-founders</label>
                        <input type="text" className="form-control" id="inputform3" placeholder="Co-founder name"/>
                      </div>
                    <div className="form-group">
                        <label for="form4">Number of team members</label>
                        <input type="text" className="form-control" id="inputform4"/>
                    </div>
                    <div className="form-group">
                        <label for="form5">Type of incorporation</label>
                        <input type="text" className="form-control" id="inputform5"/>
                    </div>
                    <div className="form-group">
                        <label for="form6">Name of the legal entity</label>
                        <input type="text" className="form-control" id="inputform6"/>
                    </div>
                    <div className="form-group">
                        <label for="form7">Directors/Partners</label>
                        <input type="text" className="form-control" id="inputform7"/>
                    </div>
                    <div className="form-group">
                        <label for="form8">Funding Status</label>
                        <input type="text" className="form-control" id="inputform8"/>
                    </div>
                    <div className="form-group">
                        <label for="form9">Funding Requirements</label>
                        <input type="text" className="form-control" id="inputform9"/>
                    </div>
                    <div className="form-group">
                        <label for="form10">Registered address</label>
                        <input type="text" className="form-control" id="inputform10"/>
                    </div>
                    <div className="form-group">
                        <label for="form11">Website</label>
                        <input type="text" className="form-control" id="inputform11"/>
                    </div>
                    <div className="form-group">
                        <label for="form12">Social media links</label>
                        <input type="text" className="form-control" id="inputform12"/>
                    </div>
                    <div className="form-group">
                        <label for="form13">Residential address of the founder</label>
                        <input type="text" className="form-control" id="inputform13"/>
                    </div>
                    <div className="form-group">
                        <label for="form14">Founder's contact number</label>
                        <input type="number" className="form-control" id="inputform14"/>
                    </div>
                    <div className="form-group">
                        <label for="form15">Founder's email address</label>
                        <input type="email" className="form-control" id="inputform15"/>
                    </div>
                    <div className="form-group">
                        <label for="form16">Secondary contact number</label>
                        <input type="number" className="form-control" id="inputform16"/>
                    </div>
                    <div className="form-group">
                        <label for="form17">PAN</label>
                        <input type="text" className="form-control" id="inputform17"/>
                    </div>
                    <div className="form-group">
                        <label for="form18">Name of bank</label>
                        <input type="text" className="form-control" id="inputform18"/>
                    </div>
                    <div className="form-group">
                        <label for="form19">Bank account number</label>
                        <input type="text" className="form-control" id="inputform19"/>
                    </div>
                    <div className="form-group">
                        <label for="form20">ISFC code</label>
                        <input type="text" className="form-control" id="inputform20"/>
                    </div>
                    <div className="form-group">
                        <label for="form21">Faxilities required</label>
                        <input type="text" className="form-control" id="inputform21"/>
                    </div>
                    <div className="form-group">
                        <label for="form22">Frequency of utility</label>
                        <input type="text" className="form-control" id="inputform22"/>
                    </div>
                    <div className="submit">
                    <button type="submit" className="btn btn-info">Submit</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Onboard
