import React from 'react'

export const Home = () => {
  return (
    <div>
      <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>GUSEC seed for your<span class="text-warning"> Startup</span></h1>
                    <p class="lead my-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Qui, molestias pariatur vero dolore veniam, aliquid ipsa
                        nostrum sequi commodi placeat autem omnis minima modi vitae?
                    </p>
                    <button class="btn btn-primary btn-lg d-block m-auto mb-4">Start the Enrolment</button>
                </div>
            </div>
        </div>
      </section>

      {/* <section class="p-5">
        <div class="container">
            <div class="row text-center">
                <div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="h1">
                            <i class="bi bi-laptop"></i>
                        </div>
                        <h3 class="card-title mb-3">
                            Virtual
                        </h3>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officia esse aut consequuntur similique!
                        </p>
                        <a href="#" class="btn btn-primary mx-5 mb-3">Read more</a>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card bg-secondary text-light">
                        <div class="h1">
                            <i class="bi bi-laptop"></i>
                        </div>
                        <h3 class="card-title mb-3">
                            Virtual
                        </h3>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officia esse aut consequuntur similique!
                        </p>
                        <a href="#" class="btn btn-dark mx-5 mb-3">Read more</a>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="h1">
                            <i class="bi bi-laptop"></i>
                        </div>
                        <h3 class="card-title mb-3">
                            Virtual
                        </h3>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias officia esse aut consequuntur similique!
                        </p>
                        <a href="#" class="btn btn-primary mx-5 mb-3">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    <section id="learn" class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          {/* <div class="col-md">
            <img src="img/fundamentals.svg" class="img-fluid" alt="" />
          </div> */}
          <div class="col-md p-5">
            <h2>How we Work</h2>
            <p class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <a href="#" class="btn btn-light mt-3">
              <i class="bi bi-chevron-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="learn" class="p-5 bg-secondary text-light">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h2>Meet our Incubatees</h2>
            <p class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <a href="#" class="btn btn-light mt-3">
              <i class="bi bi-chevron-right"></i> Read More
            </a>
          </div>
          {/* div class="col-md">
            <img src="img/react.svg" class="img-fluid" alt="" />
          </div>< */}
        </div>
      </div>
    </section>
    </div>
  )
}
