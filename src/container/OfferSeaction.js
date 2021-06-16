import React from "react"
import { Link } from "gatsby"
import imgcat from "../images/cta-img.png"

const OfferSeaction = () => {
  return (
    <div className="cta-raw section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 left-conn ptb80">
            <h2>
              Make money monthly. <br />
              Earn up to 20% with Craftly.AI
            </h2>
            <p>
              Love getting Craftly with us? Earn passive income by referring
              friends, family, the girls you met in the bathroom at that bar
              that one time. Seriously, there is no limit.
            </p>
            <Link className="btn-main" data-mode="popup" data-size={100}>
              Start Earning{" "}
            </Link>
          </div>
          <div className="col-sm-6 col-12 right-conn text-center">
            <img src={imgcat} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferSeaction
