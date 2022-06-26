import React from "react";
import "./CSS/Onboard.css";

const Onboard = () => {
  return (
    <div>
      <section className="OnboardSection">
        <div className="OnBoardContainer">
          <h1 id="title">Onboard Registration</h1>
          <p id="description">
            Thank you for taking the time to complete this form
          </p>

          <form id="survey-form">
            <div className="inputwraps">
              <p className="bolds">Information about startup and team info</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>
            <div className="inputwraps cols">
              <label for="name" id="name-label" className="bolds">
                Founder Name
              </label>
              <input
                className="mt_8"
                type="text"
                id="name"
                required
                placeholder="Enter your Name"
              />
            </div>
            <div className="inputwraps">
              <p className="bolds">Co-Founder Names</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
                placeholder="please fill in the names of co-founders"
              ></textarea>
            </div>
            <div class="inputwrap col">
              <label for="number" id="number-label" class="bold">
                Number of team Members
              </label>
              <input
                class="mt8"
                type="number"
                id="number"
                min="0"
                placeholder="Number of team Members"
              />
            </div>
            <div className="inputwraps cols">
              <label for="incorporationType" id="name-label" className="bolds">
                Type of Incorporation
              </label>
              <input
                className="mt_8"
                type="text"
                id="incorporationType"
                required
                placeholder="Enter your Name"
              />
            </div>
            <div className="inputwraps cols">
              <label for="legalEntity" id="name-label" className="bolds">
                Name of Legal Entity
              </label>
              <input className="mt_8" type="text" id="legalEntity" required />
            </div>
            <div className="inputwraps">
              <p className="bolds">Directors/Partners</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>
            <div className="inputwraps cols">
              <label for="fundStatus" id="fundStatus" className="bolds">
                Funding Status
              </label>
              <select id="dropdown" className="mt_8">
                <option>Status-1</option>
                <option>Status-2</option>
                <option>Status-3</option>
              </select>
            </div>
            <div className="inputwraps">
              <p className="bolds">Funding Requirements</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>
            <div className="inputwraps">
              <p className="bolds">Registered address</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
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

            <div className="inputwraps">
              <p className="bolds">Social Media Links</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
                placeholder="Please put in the links to your Socials"
              ></textarea>
            </div>

            <div className="inputwraps">
              <p className="bolds">Residential address of the founder</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>

            <div className="inputwraps cols">
              <label for="phone" id="phone-label" className="bolds">
                Founder's contact number
              </label>
              <input
                className="mt_8"
                type="tel"
                id="phone"
                name="phone"
                pattern="^[6-9]\d{9}$"
                required
                placeholder="Enter your Mobile Number"
              />
            </div>
            <div className="inputwraps cols">
              <label for="phone" id="phone-label" className="bolds">
                Founder's Secondary contact number
              </label>
              <input
                className="mt_8"
                type="tel"
                id="phone"
                name="phone"
                pattern="^[6-9]\d{9}$"
                required
                placeholder="Enter your Mobile Number"
              />
            </div>

            <div className="inputwraps cols">
              <label for="email" id="email-label" className="bolds">
                Founder's Email Address
              </label>
              <input
                className="mt_8"
                type="email"
                id="email"
                required
                placeholder="Enter your Email"
              />
            </div>

            <div className="inputwraps cols">
              <label for="PAN" id="PAN-label" className="bolds">
                Founder's PAN Number
              </label>
              <input
                className="mt_8"
                type="text"
                id="PAN"
                required
                placeholder="Enter your PAN number"
              />
            </div>

            <div className="inputwraps cols">
              <label for="bankName" id="bankName-label" className="bolds">
                Bank Name
              </label>
              <input
                className="mt_8"
                type="text"
                id="bankName"
                required
                placeholder="Enter your Name"
              />
            </div>
            <div className="inputwraps cols">
              <label for="bankAcc" id="bankAcc-label" className="bolds">
                BankAccount Number
              </label>
              <input className="mt_8" type="text" id="bankAcc" required p />
            </div>
            <div className="inputwraps cols">
              <label for="IFSC" id="IFSC-label" className="bolds">
                IFSC Code
              </label>
              <input className="mt_8" type="text" id="IFSC" required p />
            </div>
            <div className="inputwraps">
              <p className="bolds">Facilities Required</p>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
                placeholder="Please list out the facilities you require"
              ></textarea>
            </div>

            <div className="inputwraps cols">
              <label
                for="frequencyUtility"
                id="frequencyUtility-label"
                className="bolds"
              >
                Frequency of utility
              </label>
              <input
                className="mt_8"
                type="text"
                id="frequencyUtility"
                required
              />
            </div>

            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Onboard;