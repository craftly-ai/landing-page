import React from "react"
import { Link } from "gatsby"

const PricingCard = props => {
  const {
    title,
    price,
    time,
    subtitle,
    list,
    button,
    active,
    activeheading,
  } = props

  return (
    <div className="col-lg-3 col-md-6 col-xs-12 pricing-table-col">
      <div
        className={`box-warp ${active}`}
        style={{ width: "100%", height: "100%" }}
      >
        <h6>{activeheading}</h6>
        <div className="pricing-table text-center">
          <div className="top">
            <p className="f-medium">{title}</p>
            <p className="price">
              {price}
              <small>{time}</small>
            </p>
            <p className="light_weight">{subtitle}</p>
          </div>
          <ul className="middle">
            {list.map(function (item) {
              return <li key={item}>{item}</li>
            })}
          </ul>
          <Link
            className="btn-pricing"
            data-toggle="modal"
            data-target="#join-waitlist"
          >
            {button}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
