import React from "react"
import EarnAudience from "./../../components/audience/EarnAudience"

const AudienceSection = () => {
  return (
    <div className="audience-wrapper ptb100 section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 title">
            <h2 className="f50">You have the audience, we have the product.</h2>
            <p>Who Can Become a Craftly.AI Affiliate?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12 list-row">
            <ul>
              <li>
                <EarnAudience />
              </li>
              <li>
                <EarnAudience />
              </li>
              <li>
                <EarnAudience />
              </li>
              <li>
                <EarnAudience />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudienceSection
