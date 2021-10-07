import React from "react"
import CommunitiesBox from "./../../components/updateWrap/CommunitiesBox"
import { useStaticQuery, graphql } from "gatsby"

const CommunitiesWrapSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            communitiesTitle
            communitiesList {
              icon {
                sourceUrl
              }
              title
              description
              linkLabel
              link
            }
          }
        }
      }
    }
  `)

  let communitiesTitle = data.allWpPage.nodes.map(
    node => node.learn.communitiesTitle
  )
  let communitiesList = data.allWpPage.nodes.map(
    node => node.learn.communitiesList
  )

  return (
    <div className="communities-wrap section">
      <h2
        className="text-center"
        dangerouslySetInnerHTML={{ __html: communitiesTitle }}
      />
      <ul className="col3">
        {communitiesList.map(e =>
          e.map((item, i) => {
            return (
              <li key={i}>
                <CommunitiesBox
                  icon={item.icon?.sourceUrl}
                  title={item.title}
                  description={item.description}
                  linkLabel={item.linkLabel}
                  linkUrl={item.link}
                />
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default CommunitiesWrapSection
