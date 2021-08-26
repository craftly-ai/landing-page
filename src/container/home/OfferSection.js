import React from "react"

const OfferSection = props => {
  const { title, description, buttonLabel, buttonUrl, img } = props

  return (
    <div className="cta-raw section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 left-conn ptb80">
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p>{description}</p>
            <a
              href={buttonUrl}
              className="btn-main"
              data-mode="popup"
              data-size={100}
            >
              {buttonLabel}
            </a>
          </div>
          <div className="col-sm-6 col-12 right-conn text-center">
            <img src={img} className="img-fluid" alt="OfferSection" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferSection
