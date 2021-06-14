import React from "react"
import notion from "../images/logo-notion.svg"
import zendesk from "../images/logo-zendesk.png"
import Stripe from "../images/logo-stripe.svg"
import Typeform from "../images/logo-typeform.png"

const PartnersSection = () => {
  return (
    <div className="partners-logo-raw section">
      <div className="container">
        <p>Partners</p>
        <ul>
          <li>
            <div className="logo-box">
              <img src={notion} alt="Notion" />
            </div>
          </li>
          <li>
            <div className="logo-box">
              <img src={zendesk} alt="Zendesk" />
            </div>
          </li>
          <li>
            <div className="logo-box">
              <img src={Stripe} alt="Stripe" />
            </div>
          </li>
          <li>
            <div className="logo-box">
              <img src={Typeform} alt="Typeform" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PartnersSection
