import React from "react"
import data from "../data/partnersData.json"
import { StaticImage } from "gatsby-plugin-image"

const PartnersSection = () => {
  return (
    <div className="partners-logo-raw section">
      <div className="container">
        <p>Partners</p>
        <ul>
          {/* {data.logo.map(function (item, i) {
            return console.log(item)
          })} */}
          {/* <li>
            <div className="logo-box">
              <StaticImage src={`../images/${item}`} alt="" />
            </div>
          </li> */}
          {/* <li>
            <div className="logo-box">
              <img src="images/logo-notion.svg" alt="Notion" />
            </div>
          </li>
          <li>
            <div className="logo-box">
              <img src="images/logo-zendesk.png" alt="Zendesk" />
            </div>
          </li>
          <li>
            <div className="logo-box">
              <img src="images/logo-stripe.svg" alt="Stripe" />
            </div>
          </li>
          <li>
            <div className="logo-box">
              <img src="images/logo-typeform.png" alt="Typeform" />
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default PartnersSection
