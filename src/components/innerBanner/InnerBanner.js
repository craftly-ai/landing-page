import React from "react"
import { Link } from "gatsby"

const InnerBanner = props => {
  const {
    seactionClass,
    bannerLogo,
    bannerButtonLabel,
    bannerButtonUrl,
    bannerTitle,
    bannerDescription,
    bottomButtonLabel_1,
    buttomButtonUrl_1,
    buttomButtonLabel_2,
    buttomButtonUrl_2,
    buttomClassButton_2,
    buttomIconButton_2,
  } = props

  return (
    <div className={seactionClass}>
      <div className="banner-con">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 m-auto">
              <div className="text-wrap text-center">
                <div className="logo-btn top-action">
                  <h6>{bannerLogo}</h6>
                  <Link to={bannerButtonUrl} className="learn-btn">
                    <span>{bannerButtonLabel}</span>
                  </Link>
                </div>
                <h1 dangerouslySetInnerHTML={{ __html: bannerTitle }} />
                <p>{bannerDescription}</p>
                <div className="banner-cta section">
                  <Link
                    to={buttomButtonUrl_1}
                    className="btn-main"
                    onclick="tidioChatApi.open()"
                  >
                    {bottomButtonLabel_1}
                  </Link>
                  <Link to={buttomButtonUrl_2} className={buttomClassButton_2}>
                    <i className={buttomIconButton_2} />
                    {buttomButtonLabel_2}
                  </Link>
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
