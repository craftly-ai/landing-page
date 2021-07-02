import React from "react"
import CardEarn from "./../../components/affiliateEarning/CardEarn"

const AffiliateEarningSection = () => {
  return (
    <div className="value-grow-list-raw affiliate-start-earning section">
      <div className="container">
        <div className="section title text-center">
          <h2 className="f50">Start earning in your sleep</h2>
        </div>
        <div className="box-wrapper">
          <CardEarn />
          <CardEarn />
          <CardEarn />
        </div>
      </div>
    </div>
  )
}

export default AffiliateEarningSection
