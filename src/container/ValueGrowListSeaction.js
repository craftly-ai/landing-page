import React from "react"
import GrowListItem from "./../components/valueGrow/GrowListItem"
import originalLogo from "../images/ic-original.svg"
import policyLogo from "../images/ic-policy.svg"
import globalLogo from "../images/ic-global.svg"
import benefitsLogo from "../images/ic-benefits.png"
import copyLogo from "../images/ic-copy.svg"
import envalopLogo from "../images/ic-envalop.png"
import data from "../data/ValueGrowListData.json"

const ValueGrowListSeaction = () => {
  return (
    <div className="value-grow-list-raw section">
      <div className="container">
        <div className="box-wrapper">
          <GrowListItem
            img={originalLogo}
            heading={data["original-heading"]}
            subheading={data["original-subheading"]}
          />
          <GrowListItem
            img={policyLogo}
            heading={data["policy-heading"]}
            subheading={data["policy-subheading"]}
          />
          <GrowListItem
            img={globalLogo}
            heading={data["global-heading"]}
            subheading={data["global-subheading"]}
          />
          <GrowListItem
            img={benefitsLogo}
            heading={data["benefits-heading"]}
            subheading={data["benefits-subheading"]}
          />
          <GrowListItem
            img={copyLogo}
            heading={data["copy-heading"]}
            subheading={data["copy-subheading"]}
          />
          <GrowListItem
            img={envalopLogo}
            heading={data["envalop-heading"]}
            subheading={data["envalop-subheading"]}
          />
        </div>
      </div>
    </div>
  )
}

export default ValueGrowListSeaction
