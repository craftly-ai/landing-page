import React from "react"
import CardEarn from "./../../components/affiliateEarning/CardEarn"
import { useStaticQuery, graphql } from "gatsby"

const AffiliateEarningSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "affiliate" } }) {
        nodes {
          affiliate {
            startEarningTitle
            startEarningList {
              icon {
                sourceUrl
              }
              title
              description
            }
          }
        }
      }
    }
  `)

  let startEarningTitle = data.allWpPage.nodes.map(
    node => node.affiliate.startEarningTitle
  )

  let startEarningList = data.allWpPage.nodes.map(
    node => node.affiliate.startEarningList
  )

  return (
    <div className="value-grow-list-raw affiliate-start-earning section">
      <div className="container">
        <div className="section title text-center">
          <h2 className="f50">{startEarningTitle}</h2>
        </div>
        <div className="box-wrapper">
          {startEarningList.map(e =>
            e.map((item, i) => {
              return (
                <CardEarn
                  key={i}
                  sourceUrl={item.icon.sourceUrl}
                  title={item.title}
                  description={item.description}
                />
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default AffiliateEarningSection
