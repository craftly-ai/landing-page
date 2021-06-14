import React from "react"
import imgAi from "../images/ai-img.jpg"
import { Link } from "gatsby"

const VersusSeaction = () => {
  return (
    <div className="versus-h-part section right-section-container">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-lg-10 col-sm-12 text-center">
            <h2>
              Human versus AI? <br />
              Guess which is human?
            </h2>
          </div>
        </div>
        {/* main part */}
        <div className="row hraw1">
          <div className="col-sm-4 col-xs-12 hcol1 pt-4 content-col">
            <div className="v-h-same-content">
              <p>
                Time for an update on the classic, designer-labelled little
                black dress. Ultra-feminine, beautifully tailored and perfectly
                accentuated by a bold strap, the Candice is one of our most
                popular dresses. Its flirtatious plunge neckline is teamed with
                easy to wear tassel ties that allow you to adjust its fit.
                Subtle centre back pleats offer body and movement whilst the
                split asymmetric hem adds elegance and style. Meet your newest
                staple.
              </p>
              <Link to="#" className="btn-main">
                Vote A
              </Link>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 hcol1 pt-4 img-col">
            <img src={imgAi} className="img-radius img-fluid" alt="" />
          </div>
          <div className="col-sm-4 col-xs-12 hcol1 pt-4 content-col">
            <div className="v-h-same-content">
              <p>
                Wear the dress. The Marlowe is slim fitting throughout, with a v
                neckline and a small front slit. It gives you a little shape
                without being too snug. The Marlowe Dress pairs well with the
                Mandy Minimal Block Heel Mule. Make an impressive exit. The Hex
                is fitted throughout with a straight neckline and non-adjustable
                straps. It features an open back that has a twist detail. It's
                tight-fitting in the waist for some extra definition.
              </p>
              <Link to="#" className="btn-main">
                Vote B
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VersusSeaction
