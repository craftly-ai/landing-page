import React from "react"
import imgmegan from "../images/headshot-megan-apa.png"

const TestimonialSeaction = () => {
  return (
    <div className="testimonial-raw section">
      <div className="container">
        <div className="testimonial-col section">
          <div className="row">
            <div className="col-sm-5 col-12 left-conn justify-content-center align-self-center">
              <h2>
                Here are what <br />
                fellow crafters
                <br />
                are saying
              </h2>
            </div>
            <div className="col-sm-7 col-12 right-conn justify-content-center align-self-center">
              <div className="slider-container">
                <div className="slider-for">
                  <div className="item">
                    <h3>
                      <i>I cannot wait to never write again</i>
                    </h3>
                    <p>
                      Using Craftly.AI has helped me SO much. I've worked as a
                      freelancer for as long as I could remember, so sometimes I
                      feel drained of creativity! Whenever I sit down to write I
                      make sure to have Craftly open for inspiration. The blog
                      post idea feature has saved my life on tight deadlines so
                      many times, and makes content planning a breeze.
                    </p>
                    <div className="item-thumbnail">
                      <div className="img-box">
                        <img src={imgmegan} alt="" />
                      </div>
                      <div className="testi-conn">
                        <h5>Megan Apa</h5>
                        <p>Head of Marketing, Toronto</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSeaction
