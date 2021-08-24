import React from "react"

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
                  <a href={bannerButtonUrl} className="learn-btn">
                    <span>{bannerButtonLabel}</span>
                  </a>
                </div>
                <h1 dangerouslySetInnerHTML={{ __html: bannerTitle }} />
                <p>{bannerDescription}</p>
                <div className="banner-cta section">
                  <a
                    href={buttomButtonUrl_1}
                    className="btn-main"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {bottomButtonLabel_1}
                  </a>
                  <a
                    href={buttomButtonUrl_2}
                    className={buttomClassButton_2}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={buttomIconButton_2} />
                    {buttomButtonLabel_2}
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
