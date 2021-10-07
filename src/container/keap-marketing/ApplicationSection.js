import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import OurApplicationListItem from "../../components/ourApplication/OurApplicationListItem"

const ApplicationSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "keap-marketing" } }) {
        nodes {
          keapMarketing {
            ourApplicationsTitle
            ourApplicationsList {
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

  let ourApplicationsTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.ourApplicationsTitle
  )

  let ourApplicationsList = data.allWpPage.nodes.map(
    node => node.keapMarketing.ourApplicationsList
  )

  return (
    <div className="application-wrap section text-center">
      <div className="container">
        <h3 dangerouslySetInnerHTML={{ __html: ourApplicationsTitle }} />
      </div>
      <div className="app-list section">
        <ul>
          {ourApplicationsList.map(e =>
            e.map((item, i) => (
              <OurApplicationListItem
                key={i}
                icon={item.icon?.sourceUrl}
                title={item.title}
                description={item.description}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default ApplicationSection
