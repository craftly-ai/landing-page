import React from "react"
import DocLayout from "./../../components/documentation/DocLayout"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "documentation" } }) {
        nodes {
          documentation {
            home {
              documentationTitle
              documentationSubTitle
              documentationDescription
              dashboardImage {
                sourceUrl
              }
              getStarted {
                getStartedTitle
                getStartedList {
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
      }
    }
  `)

  let documentationTitle =
    data.allWpPage.nodes[0].documentation.home.documentationTitle
  let documentationSubTitle =
    data.allWpPage.nodes[0].documentation.home.documentationSubTitle
  let documentationDescription =
    data.allWpPage.nodes[0].documentation.home.documentationDescription
  let dashboardImage =
    data.allWpPage.nodes[0].documentation.home.dashboardImage !== null
      ? data.allWpPage.nodes[0].documentation.home.dashboardImage.sourceUrl
      : ""
  let getStartedTitle =
    data.allWpPage.nodes[0].documentation.home.getStarted.getStartedTitle

  let getStartedList =
    data.allWpPage.nodes[0].documentation.home.getStarted.getStartedList

  return (
    <DocLayout>
      <div className="documentation-row documentation-detail-page">
        <div className="container small-container">
          <h1 dangerouslySetInnerHTML={{ __html: documentationTitle }} />
          <h3 dangerouslySetInnerHTML={{ __html: documentationSubTitle }} />
          <p dangerouslySetInnerHTML={{ __html: documentationDescription }} />
          <div className="dashboard-shadow">
            <img src={dashboardImage} alt="dashboard" />
          </div>
        </div>
      </div>
      {/* StartedRow */}
      <div className="started-row">
        <div className="container small-container">
          <h3 dangerouslySetInnerHTML={{ __html: getStartedTitle }} />
          <ul>
            {getStartedList.map((item, i) => {
              return (
                <li key={i}>
                  <a>
                    <div className="icon">
                      <img src={item.icon.sourceUrl} alt="icon" />
                    </div>
                    <h5 dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </DocLayout>
  )
}

export default Index
