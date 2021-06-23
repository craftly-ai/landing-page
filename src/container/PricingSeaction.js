import React from "react"
import PricingCard from "./../components/pricing/PricingCard"
import { useStaticQuery, graphql } from "gatsby"

const PricingSeaction = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            writeMoreTitle
            writeMoreDescription
            monthlyTabLabel
            annuallyTabLabel
            priceTable {
              title
              price
              duration
              shortDescription
              description
              buttonLabel
              buttonUrl
              activeStatus
              activeTitle
            }
          }
        }
      }
    }
  `)

  let writeMoreTitle = data.allWpPage.nodes.map(
    node => node.home.writeMoreTitle
  )
  let writeMoreDescription = data.allWpPage.nodes.map(
    node => node.home.writeMoreDescription
  )
  let monthlyTabLabel = data.allWpPage.nodes.map(
    node => node.home.monthlyTabLabel
  )
  let annuallyTabLabel = data.allWpPage.nodes.map(
    node => node.home.annuallyTabLabel
  )
  let priceTable = data.allWpPage.nodes.map(node => node.home.priceTable)

  return (
    <div
      className="wrote-more-raw section right-section-container ptb100"
      id="pricing"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="w-m-top">
              <h2>{writeMoreTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: writeMoreDescription }} />
              <div className="toggle-button">
                <p className="month active">{monthlyTabLabel}</p>
                <label className="switch">
                  <input type="checkbox" /> <span className="slider round" />
                </label>
                <p className="annual">{annuallyTabLabel}</p>
              </div>
              <p className="save-col">Save</p>
            </div>
          </div>
        </div>
        <div className="pricing-table-raw section">
          {/* pricing table  */}
          <div className="row">
            {priceTable.map(e =>
              e.map((item, i) => (
                <PricingCard
                  key={i}
                  title={item.title}
                  price={item.price}
                  time={item.duration}
                  subtitle={item.shortDescription}
                  list={item.description}
                  button={item.buttonLabel}
                  active={item.activeStatus}
                  activeheading={item.activeTitle}
                />
              ))
            )}
            {/* {pricingData.card.map(function (item) {
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
            })} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSeaction
