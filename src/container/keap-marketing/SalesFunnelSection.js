import React from "react"
import SalesListItem from "../../components/salesFunnel/SalesListItem"
import { useStaticQuery, graphql } from "gatsby"

const SalesFunnelSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "keap-marketing" } }) {
        nodes {
          keapMarketing {
            salesFunnelTitle
            salesFunnelList {
              description
              image {
                sourceUrl
              }
            }
            salesFunnelDescription
          }
        }
      }
    }
  `)

  let salesFunnelTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.salesFunnelTitle
  )

  let salesFunnelDescription = data.allWpPage.nodes.map(
    node => node.keapMarketing.salesFunnelDescription
  )

  let salesFunnelList = data.allWpPage.nodes.map(
    node => node.keapMarketing.salesFunnelList
  )

  return (
    <div className="sales-wrap section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3
              className="text-center"
              dangerouslySetInnerHTML={{ __html: salesFunnelTitle }}
            />
          </div>
        </div>
        <div className="row salse-list">
          {salesFunnelList.map(e =>
            e.map((item, i) => (
              <SalesListItem
                key={i}
                number={i + 1}
                description={item.description}
                img={item.image?.sourceUrl}
              />
            ))
          )}
        </div>
        <div className="row description">
          <div className="col-md-12 text-center">
            <p dangerouslySetInnerHTML={{ __html: salesFunnelDescription }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesFunnelSection
