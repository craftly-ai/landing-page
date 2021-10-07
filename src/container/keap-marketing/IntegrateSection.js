import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const IntegrateSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "keap-marketing" } }) {
        nodes {
          keapMarketing {
            integrateTitle
            integrateImage {
              sourceUrl
            }
            collaborationTopTitle
            collaborationTitle
          }
        }
      }
    }
  `)

  let integrateTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.integrateTitle
  )

  let integrateImage = data.allWpPage.nodes.map(
    node => node.keapMarketing.integrateImage?.sourceUrl
  )
  let collaborationTopTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.collaborationTopTitle
  )
  let collaborationTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.collaborationTitle
  )

  return (
    <div className="integrate-wrap section text-center">
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: integrateTitle }} />
        <div className="img-wrap">
          <img
            src={integrateImage}
            className="img-fluid"
            alt="Integrate applications"
          />
        </div>
        <p>{collaborationTopTitle}</p>
        <h2 dangerouslySetInnerHTML={{ __html: collaborationTitle }} />
      </div>
    </div>
  )
}

export default IntegrateSection
