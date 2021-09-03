import React from "react"
import NoWrapper from "./../../components/noWrapper/NoWrapper"
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
      <NoWrapper title={noNoTitle} description={noNoDescription} />
    </div>
  )
}

export default AffiliatesSayingSection
