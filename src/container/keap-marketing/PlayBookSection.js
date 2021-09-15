import React from "react"
import OurApplicationListItem from "../../components/ourApplication/OurApplicationListItem"
import { useStaticQuery, graphql } from "gatsby"


const PlayBookSection = () => {
  const data = useStaticQuery(graphql`
    {
        allWpPage(filter: { slug: { eq: "keap-marketing" } }) {
            nodes {
              keapMarketing {
                playbookDescription
                playbookDashboardImage {
                  sourceUrl
                }
                playbookList {
                  description
                  title
                  icon {
                    sourceUrl
                  }
                }
              }
            }
        }
    }
  `)


  let playbookDescription = data.allWpPage.nodes.map(
    node => node.keapMarketing.playbookDescription
  )

  let playbookDashboardImage = data.allWpPage.nodes.map(
    node => node.keapMarketing.playbookDashboardImage.sourceUrl
  )

  let playbookList = data.allWpPage.nodes.map(node => node.keapMarketing.playbookList)


  return (
    <div className="playbook-wrap section text-center">
      <div className="container">
          <div className="playbook-head text-center">
              <p dangerouslySetInnerHTML={{ __html: playbookDescription }} />
              <img src={playbookDashboardImage} alt="Sales & Marketing Playbook" className="img-fluid"/>
          </div>
          <div className="app-list section">
            <ul>
              {playbookList.map(e =>
                e.map((item, i) => (
                  <OurApplicationListItem
                    key={i}
                    icon={item.icon.sourceUrl}
                    title={item.title}
                    description={item.description}
                  />
                ))
              )}
            </ul>
        </div>
      </div>
    </div>

  )
}

export default PlayBookSection
