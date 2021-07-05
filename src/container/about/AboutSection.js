import React from "react"

const AboutSection = () => {
  return (
    <div className="about-title ptb100 pb-0 section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <h1 className="title">About Craftly.AI</h1>
          </div>
          <div className="col-md-6 col-12 right-col">
            <div className="box">
              <p>
                We’re not your usual content writing platform. <br />
                We’re not a digital marketing company. <br />
                We’re not a copywriter shop either.
              </p>
              <p>
                Cai is your AI-Powered copywriter, and Craftly.AI is your team
                of sidekicks.
              </p>
              <p>
                you are the protagonist of your story. <br />
                The one who fights the dragons and rescues the princess. <br />
                Us? We’re just here to help you look good (and convert).
              </p>
              <h5>
                Content is everywhere. You can’t escape it -{" "}
                <strong>So let us help you embrace it.</strong>{" "}
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="about-image">
              <img src="images/about-image.jpg" alt />
            </div>
          </div>
        </div>
        <div className="row about-box">
          <div className="col-md-12 col-12 pt-60 text-center">
            <p>
              At Craftly.AI, we believe there is a better way to do content. A
              more valuable way where you are inspired rather than stuck. We’re
              obsessively passionate about it, and our mission is to find
              different ways to create with it. We focus on tools using
              artificial intelligence and machine learning to learn how you like
              it. It’s just the beginning and we see that as an opportunity.
              We’re excited to simplify content for everyone through our
              application, education, and community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
