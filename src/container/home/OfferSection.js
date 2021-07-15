import React from "react"
import { Link } from "gatsby"

const OfferSection = props => {
  const { title, description, buttonLabel, buttonUrl, img } = props

  return (
    <div className="cta-raw section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 left-conn ptb80">
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p>{description}</p>
            <Link
              to={buttonUrl}
              className="btn-main"
              data-mode="popup"
              data-size={100}
            >
              {buttonLabel}
            </Link>
          </div>
          <div className="col-sm-6 col-12 right-conn text-center">
            <img src={img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferSection
