import React from "react"
import NoWrapper from "./../../components/noWrapper/NoWrapper"
import Typeform from "./../../components/typeform/Typeform"
import { useStaticQuery, graphql } from "gatsby"

const AffiliatesSayingSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "affiliate" } }) {
        nodes {
          affiliate {
            noNoTitle
            noNoDescription
          }
        }
      }
    }
  `)
  let noNoTitle = data.allWpPage.nodes.map(node => node.affiliate.noNoTitle)
  let noNoDescription = data.allWpPage.nodes.map(
    node => node.affiliate.noNoDescription
  )
  return (
    <div className="affiliates-saying section">
      <div className="free-now-form section">
        <div className="container">
          <div className="row">
            <Typeform />
          </div>
        </div>
      </div>
      <NoWrapper title={noNoTitle} description={noNoDescription} />
    </div>
  )
}

export default AffiliatesSayingSection
