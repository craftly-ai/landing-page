import React from "react"
import imgstep1 from "../images/copyright1.png"
import imgstep2 from "../images/copyright2.png"
import imgstep3 from "../images/copyright3.png"

const CopyRightSeaction = () => {
  return (
    <div className="copyright-section-raw section ptb100">
      <div className="container">
        <div className="title-raw section">
          <h2>Copywriting doesn’t have to be so hard</h2>
          <p>
            How can any human be expected to turn out mountains of engaging,
            creative, eye catching, content at <br />
            scale without compromising quality (or burning out)? They’d have to
            be a machine! Or... a robot.
          </p>
          <h4>
            Let your new AI assistant boost your creativity in{" "}
            <span>3 easy steps:</span>
          </h4>
        </div>
        <div className="copyright-section-col section">
          <div className="row">
            <div className="col-sm-4 col-12 li1">
              <div className="img-box">
                <img src={imgstep1} alt="" className="img-fluid" />
              </div>
              <h4>Select your sidekick </h4>
              <p>
                Choose from our wide range of writing tools. Anything from blog
                intros to rewrites!{" "}
              </p>
            </div>
            <div className="col-sm-4 col-12 li1">
              <div className="img-box">
                <img src={imgstep2} alt="" className="img-fluid" />
              </div>
              <h4>Tell us what you want to write </h4>
              <p>
                Our natural language processor works by analyzing endless
                amounts of data to give the best possible output.
              </p>
            </div>
            <div className="col-sm-4 col-12 li1">
              <div className="img-box">
                <img src={imgstep3} alt="" className="img-fluid" />
              </div>
              <h4>Craft it</h4>
              <p>
                You receive variations that you can like or copy. Keep
                generating till you craft what you love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRightSeaction
