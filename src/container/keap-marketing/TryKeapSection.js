import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const TryKeapSection = () => {
  const data = useStaticQuery(graphql`
    {
        allWpPage(filter: { slug: { eq: "keap-marketing" } }) {
            nodes {
                keapMarketing {
                    tryFreeTitle
                    tryFreeDescription
                    tryFreeButtonUrl
                    tryFreeButtonLabel
                }
            }
        }
    }
  `)


  let tryFreeTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.tryFreeTitle
  )

  let tryFreeDescription = data.allWpPage.nodes.map(
    node => node.keapMarketing.tryFreeDescription
  )

  let tryFreeButtonUrl = data.allWpPage.nodes.map(
    node => node.keapMarketing.tryFreeButtonUrl
  )

  let tryFreeButtonLabel = data.allWpPage.nodes.map(
    node => node.keapMarketing.tryFreeButtonLabel
  )





  return (
    <div className="teykeap-wrap section text-center">
      <div className="container">
          <div className="teykeap-box section">
            <h2 dangerouslySetInnerHTML={{ __html: tryFreeTitle }} />
            <a href={tryFreeButtonUrl} className="btn-main">{tryFreeButtonLabel}</a>
            <p>{tryFreeDescription}</p>
          </div>
      </div>

    </div>

  )
}

export default TryKeapSection
