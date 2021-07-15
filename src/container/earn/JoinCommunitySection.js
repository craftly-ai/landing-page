import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const JoinCommunitySection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "affiliate" } }) {
        nodes {
          affiliate {
            joinOurCommunityTitle
            joinOurCommunityDescription
            communityButtonLabel
            communityButtonUrl
          }
        }
      }
    }
  `)
  let joinOurCommunityTitle = data.allWpPage.nodes.map(
    node => node.affiliate.joinOurCommunityTitle
  )
  let joinOurCommunityDescription = data.allWpPage.nodes.map(
    node => node.affiliate.joinOurCommunityDescription
  )
  let communityButtonLabel = data.allWpPage.nodes.map(
    node => node.affiliate.communityButtonLabel
  )
  let communityButtonUrl = data.allWpPage.nodes.map(
    node => node.affiliate.communityButtonUrl
  )
  return (
    <div className="cta-raw affiliate-cta section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 text-center ptb80">
            <h2 className="f50">{joinOurCommunityTitle}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: joinOurCommunityDescription }}
            />
            <Link className="btn-main border-btn" to={communityButtonUrl}>
              {communityButtonLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinCommunitySection
