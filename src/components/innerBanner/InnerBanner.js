import React from "react"

const InnerBanner = () => {
  return (
    <div className="inner-banner affiliate-banner section">
      <div className="banner-con">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 m-auto">
              <div className="text-wrap text-center">
                <div className="logo-btn top-action">
                  <h6>Craftly.ai</h6>
                  <a href="/affiliate.html" className="learn-btn">
                    <span>Partner</span>
                  </a>
                </div>
                <h1>
                  Make money monthly. <br />
                  Earn 30% with Craftly.AI
                </h1>
                <p>
                  Our Education Center focuses on training, tutorials, and tips
                  for using your Craftly.AI Copywriting Assistant more
                  effectively. Start training and grow your business.
                </p>
                <div className="banner-cta section">
                  <a
                    href="#header"
                    className="btn-main"
                    onclick="tidioChatApi.open()"
                  >
                    Chat With Us
                  </a>
                  <a
                    href="/index.html#craftly-ai-demo"
                    className="btn-main view"
                  >
                    <i />
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerBanner
