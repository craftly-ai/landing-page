import React from "react"
import NoWrapper from "./../../components/noWrapper/NoWrapper"
import Typeform from "./../../components/typeform/Typeform"

const AffiliatesSayingSection = () => {
  return (
    <div className="affiliates-saying section">
      <div className="free-now-form section">
        <div className="container">
          <div className="row">
            <Typeform />
          </div>
        </div>
      </div>
      <NoWrapper />
    </div>
  )
}

export default AffiliatesSayingSection
