import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const JoinUs = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "documentation" } }) {
        nodes {
          documentation {
            joinOurCommunities {
              title
              list {
                logo {
                  sourceUrl
                }
                title
                description
                buttonLabel
                buttonUrl
              }
            }
          }
        }
      }
    }
  `)

  let title = data.allWpPage.nodes[0].documentation.joinOurCommunities.title
  let list = data.allWpPage.nodes[0].documentation.joinOurCommunities.list

  return (
    <div className="documentation-cta">
      <div className="container small-container">
        <div className="communities-wrap join-our-wrapper section">
          <h2
            className="text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <ul className="col3">
            {list.map((item, i) => {
              return (
                <li key={i}>
                  <div className="communities-box">
                    <i>
                      <img
                        src={item.logo.sourceUrl}
                        alt=""
                        className="img-fluid"
                      />
                    </i>
                    <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                    <a
                      href={item.buttonUrl}
                      className="more-btn blue"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.buttonLabel}
                    </a>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
