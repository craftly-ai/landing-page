import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const CatBox = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "documentation" } }) {
        nodes {
          documentation {
            cta {
              ctaTopTitle
              ctaTitle
              ctaDescription
              ctaButtonLabel
              ctaButtonUrl
            }
          }
        }
      }
    }
  `)

  let ctaTopTitle = data.allWpPage.nodes[0].documentation.cta.ctaTopTitle
  let ctaTitle = data.allWpPage.nodes[0].documentation.cta.ctaTitle
  let ctaDescription = data.allWpPage.nodes[0].documentation.cta.ctaDescription
  let ctaButtonLabel = data.allWpPage.nodes[0].documentation.cta.ctaButtonLabel
  let ctaButtonUrl = data.allWpPage.nodes[0].documentation.cta.ctaButtonUrl

  return (
    <div className="documentation-cta">
      <div className="container small-container">
        <div className="box-wrap text-center">
          <h6 dangerouslySetInnerHTML={{ __html: ctaTopTitle }} />
          <h2 dangerouslySetInnerHTML={{ __html: ctaTitle }} />
          <p dangerouslySetInnerHTML={{ __html: ctaDescription }} />
          <Link
            className="border-btn"
            to={ctaButtonUrl}
            data-mode="popup"
            data-size={100}
            target="_blank"
            rel="noreferrer"
          >
            {ctaButtonLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CatBox
