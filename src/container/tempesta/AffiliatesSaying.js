import React from "react"
import img1 from "../../images/image8-min.jpg"
import img2 from "../../images/headshot-iman-bashir-min.png"
import img3 from "../../images/headshot-megan-apa-min.png"
import img4 from "../../images/headshot-nicole-lytle-min.png"
import img5 from "../../images/2-min.jpg"

const AffiliatesSaying = () => {
  return (
    <div className="affiliates-saying-section testimonial-raw section">
      <div className="container">
        <div className="testimonial-col section">
          <div className="row">
            <div className="col-sm-5 col-12 left-conn justify-content-center align-self-center">
              <h2>
                Here What <br />
                Affiliates
                <br />
                Are Saying
              </h2>
            </div>
            <div className="col-sm-7 col-12 right-conn justify-content-center align-self-center">
              <div className="slider-container">
                <div
                  className="slider-for carouselExample"
                  data-ride="carousel"
                >
                  <div className="item">
                    <h3>
                      <i>Nostrud exerci tation ullamcor</i>
                      <br />
                      <i>suscisdpit lobort nisl</i>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      se diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magn aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud ei tation ullamcorper suscipit lobortis nisl
                      ut aliquip ex ea com consequat. Duis autem vel eum iriure
                      dolor in hendrerit..
                    </p>
                    <div className="item-thumbnail">
                      <div className="img-row">
                        <div className="img-box">
                          <img src={img1} className="img1" />
                        </div>
                        <div className="img-box">
                          <img src={img2} className="img2" />
                        </div>
                        <div className="img-box">
                          <img src={img3} className="img3" />
                        </div>
                        <div className="img-box">
                          <img src={img4} className="img2" />
                        </div>
                        <div className="img-box">
                          <img src={img5} className="img1" />
                        </div>
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

export default AffiliatesSaying
