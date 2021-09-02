import React, { useEffect, createRef } from "react"
import lottie from "lottie-web"
import animationStep1 from "../../../static/Animations/Screen 1.json"
import animationStep2 from "../../../static/Animations/Screen 2.json"
import animationStep3 from "../../../static/Animations/Screen 3.json"

const CopyRightSection = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainerStep1.current,
      animationData: animationStep1,
      renderer: "svg",
      loop: true,
      autoplay: true,
    })
    lottie.loadAnimation({
      container: animationContainerStep2.current,
      animationData: animationStep2,
      renderer: "svg",
      loop: true,
      autoplay: true,
    })
    lottie.loadAnimation({
      container: animationContainerStep3.current,
      animationData: animationStep3,
      renderer: "svg",
      loop: true,
      autoplay: true,
    })
  }, [])

  let animationContainerStep1 = createRef()
  let animationContainerStep2 = createRef()
  let animationContainerStep3 = createRef()

  return (
    <div className="copyright-section-raw section ptb100">
      <div className="container">
        <div className="title-raw section">
          <h2>Copywriting doesn’t have to be so hard</h2>
          <p>
            How can any human be expected to turn out mountains of engaging,
            creative, eye catching, content at{" "}
          </p>
          <h4>
            Let your new AI assistant boost your creativity in 3 easy steps:
          </h4>
        </div>
        <div className="copyright-section-col section">
          <div className="row">
            {/* Step 1 */}
            <div className="col-sm-4 col-12 li1">
              <div ref={animationContainerStep1}></div>
              <h4> Select your Partner In Crime </h4>
              <p>
                Choose from our wide range of writing tools, from blog intros,
                to headlines, to rewrites!
              </p>
            </div>
            {/* Step 2 */}
            <div className="col-sm-4 col-12 li1">
              <div ref={animationContainerStep2}></div>
              <h4> Show Us What You're Working With </h4>
              <p>
                Tell us who you are and give us a little bit more info on what
                you want to write about.
              </p>
            </div>
            {/* Step 3 */}
            <div className="col-sm-4 col-12 li1">
              <div ref={animationContainerStep3}></div>
              <h4> Time to Craft </h4>
              <p>
                You receive variations and can keep generating till you craft
                what you love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRightSection
