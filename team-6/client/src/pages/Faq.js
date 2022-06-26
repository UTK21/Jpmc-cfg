import React from 'react'

function Faq() {
  return (
    <>
        <div className='container mt-5 pt-5'>
        <h1>Frequently Asked Questions &nbsp;</h1>
        <div class="accordion" id="accordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            What is gusec?
            </button>
          </h2>
         
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Gujarat University Startup and Entrepreneurship Council (GUSEC) is a non-profit, autonomous and independent company promoted by Gujarat University to support student startups, student entrepreneurship, and student innovation.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What is our vision?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                GUSEC's vision is to give an accelerated platform to idea-level entrepreneurs and support them with the necessary resources and mentorship to build real value from their current ideas.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                How can I register a profile on the Website? 
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                Registering a profile is a fairly simple process. 
                Simply click on <strong>Register</strong> and fill in the details as required in the registration form. An OTP will be sent to your registered email address, post submitting which your profile will get created.
            </div>
          </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How can I register a profile on the Website? 
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                  Registering a profile is a fairly simple process. 
                  Simply click on <strong>Register</strong> and fill in the details as required in the registration form. An OTP will be sent to your registered email address, post submitting which your profile will get created.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  How can I register a profile on the Website? 
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                  Registering a profile is a fairly simple process. 
                  Simply click on <strong>Register</strong> and fill in the details as required in the registration form. An OTP will be sent to your registered email address, post submitting which your profile will get created.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  How can I register a profile on the Website? 
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                  Registering a profile is a fairly simple process. 
                  Simply click on <strong>Register</strong> and fill in the details as required in the registration form. An OTP will be sent to your registered email address, post submitting which your profile will get created.
              </div>
            </div>
          </div>
      </div>

        </div>

    </>
  )
}

export default Faq