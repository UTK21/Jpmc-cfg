import React from "react";
import "./CSS/registrationform.css";

const Register= () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      phonenumber: data.get('phonenumber'),
      student: data.get('student'),
      gujaratUniversityAssocation: data.get('gujaratassociation'),
      institutename: data.get('institute-name'),
      startupstage:data.get('stage'),
      revenue :data.get('revenue')
    }
  }

  return (
    <div>
      {" "}
      <section className="sections">
        <div className="containers">
          <h1 id="title">Startup Registration</h1>
          <p id="description">
            Thank you for taking the time to complete this form
          </p>

          <form id="survey-form" onSubmit={handleSubmit}>
            <div className="inputwraps cols">
              <label for="name" id="name-label" className="bolds">
                Name
              </label>
              <input
                className="mt_8"
                type="text"
                id="name"
                required
                placeholder="Enter your Name"
                name = "name"
              />
            </div>
            <div className="inputwraps cols">
              <label for="phone" id="phone-label" className="bolds">
                Phone number
              </label>
              <input
                className="mt_8"
                type="tel"
                id="phone"
                pattern="^[6-9]\d{9}$"
                required
                placeholder="Enter your Mobile Number"
                name = "phonenumber"
              />
            </div>

            <div className="inputwraps cols">
              <label for="email" id="email-label" className="bolds">
                Email
              </label>
              <input
                className="mt_8"
                type="email"
                id="email"
                required
                placeholder="Enter your Email"
                name = "email"
              />
            </div>

            <div class="inputwraps">
              <p class="bolds">Are you a Student?</p>

              <div class="inputwraps">
                <input type="radio" name="student" id="yes" value="YES"/>
                <label for="yes">Yes</label>
              </div>

              <div class="inputwraps">
                <input type="radio" name="student" id="No" value="NO" />
                <label for="No">No</label>
              </div>
            </div>

            <div class="inputwraps">
              <p class="bolds">
                Are you curren=ly associated with Gujarat University?
              </p>

              <div class="inputwraps">
                <input
                  type="radio"
                  name="GujaratStudent"
                  id="Yes"
                  value="yes"
                />
                <label for="yes">Yes</label>
              </div>

              <div class="inputwraps">
                <input type="radio" name="GujaratStudent" id="No" value="no" />
                <label for="no">No</label>
              </div>
            </div>

            <div className="inputwraps cols">
              <label for="institute-name" id="name-label" className="bolds">
                Institute Name
              </label>
              <input
                className="mt_8"
                type="text"
                id="institute-name"
                required
                placeholder="Enter your Current Institute Name"
                name="institute-name"
              />
            </div>

            <div className="inputwraps cols">
              <label for="name" id="name-label" className="bolds">
                Startup Name
              </label>
              <input
                className="mt_8"
                type="text"
                id="name"
                required
                placeholder="Enter your Startup Name"
                name="startup-name"
              />
            </div>

            <div className="inputwraps">
              <p className="bolds">Brief Description of innovation</p>
              <textarea
                name="comments1"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="inputwraps">
              <p className="bolds">Brief Description of Business Model</p>
              <textarea
                name="comments2"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>
            <div className="inputwraps cols">
              <label for="stage" id="stage" className="bolds">
                Startup Stage
              </label>
              <select id="dropdown" className="mt_8" name = "stage">
                <option>New</option>
                <option>Intermediate</option>
                <option>Well Established</option>
              </select>
            </div>
            <div className="inputwraps">
              <p className="bolds"> Description of Startup innovation Details</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="inputwraps">
              <p className="bolds">
                Why your startup / innovation is innovative
              </p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="inputwraps">
              <p className="bolds">Revenue Information of Startup</p>
              <textarea
                id="comments"
                cols="30"
                rows="7"
                name = "revenue"
              ></textarea>
            </div>
            <div className="inputwraps cols">
              <label for="fund" id="name-label" className="bolds">
                Fund required to move to the next stage
              </label>
              <input className="mt_8" type="number" id="fund" required />
            </div>
            <div className="inputwraps cols">
              <label for="name" id="name-label" className="bolds">
                Startup Establish Date
              </label>
              <input className="mt_8" type="date" id="date" required />
            </div>

            <div className="inputwraps cols">
              <label for="name" id="name-label" className="bolds">
                Name of the Firm
              </label>
              <input
                className="mt_8"
                type="text"
                id="name"
                required
                placeholder="Enter your Firm Name"
              />
            </div>

            <div className="inputwraps">
              <p className="bolds">Facilities to be availed from GUSEC</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="inputwraps">
              <p className="bolds">Co-Founder Information</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
                placeholder="Please put in the details of the co-founders"
              ></textarea>
            </div>

            <div className="inputwraps cols">
              <label for="name" id="name-label" className="bolds">
                Web URL
              </label>
              <input
                className="mt_8"
                type="url"
                id="name"
                required
                placeholder="Enter the URL of your website"
              />
            </div>

            <div className="inputwraps cols">
              <label for="fund-source" id="fund-source" className="bolds">
                Select Fund Source
              </label>
              <select id="dropdown" className="mt_8">
                <option>Source - 1</option>
                <option>Source - 2</option>
              </select>
            </div>

            <div className="inputwraps">
              <p className="bolds">Any additional information we should know?</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}


export default Register;
