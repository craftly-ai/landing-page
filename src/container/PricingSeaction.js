import React from "react"
import pricingData from "../data/pricingData.json"
import PricingCard from "./../components/pricing/PricingCard"

const PricingSeaction = () => {
  return (
    <div
      className="wrote-more-raw section right-section-container ptb100"
      id="pricing"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="w-m-top">
              <h2>Write more. Make more.</h2>
              <p>
                Warning: once you’re subscribed you might just use us for
                everything <br />
                (even your Valentine’s Day card).
              </p>
              <div className="toggle-button">
                <p className="month active">Monthly</p>
                <label className="switch">
                  <input type="checkbox" /> <span className="slider round" />
                </label>
                <p className="annual">Annually</p>
              </div>
              <p className="save-col">Save</p>
            </div>
          </div>
        </div>
        <div className="pricing-table-raw section">
          {/* pricing table  */}
          <div className="row">
            {pricingData.card.map(function (item) {
              return (
                <PricingCard
                  title={item.title}
                  price={item.price}
                  time={item.time}
                  subtitle={item.subtitle}
                  list={item.list}
                  button={item.button}
                  active={item.active}
                  activeheading={item.activeheading}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSeaction
