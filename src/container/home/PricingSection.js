import React from "react"
import PricingCard from "../../components/pricing/PricingCard"
import { useStaticQuery, graphql } from "gatsby"

const PricingSection = () => {
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
              monthlyPrice
              monthlyDuration
              annualPrice
              annualDuration
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
    <div className="wrote-more-raw section right-section-container ptb100">
      <div className="container" id="pricingInfo">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="w-m-top">
              <h2>{writeMoreTitle}</h2>
              <p dangerouslySetInnerHTML={{ __html: writeMoreDescription }} />
              {/* <div className="toggle-button">
                <p className="month active">{monthlyTabLabel}</p>
                <label className="switch">
                  <input type="checkbox" /> <span className="slider round" />
                </label>
                <p className="annual">{annuallyTabLabel}</p>
              </div> */}
              {/* <p className="save-col">2 Months free on annual plans!</p> */}
            </div>
          </div>
        </div>
        <div className="pricing-table-raw section" id="PricingSection">
          {/* pricing table  */}
          <div className="row justify-content-center">
            {priceTable.map(e =>
              e.map((item, i) => (
                <PricingCard
                  key={i}
                  title={item.title}
                  monthlyPrice={item.monthlyPrice}
                  monthlyDuration={item.monthlyDuration}
                  annualPrice={item.annualPrice}
                  annualDuration={item.annualDuration}
                  subtitle={item.shortDescription}
                  list={item.description}
                  buttonLabel={item.buttonLabel}
                  buttonUrl={item.buttonUrl}
                  active={item.activeStatus}
                  activeheading={item.activeTitle}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
