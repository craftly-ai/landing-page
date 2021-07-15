import React from "react"
import GuideBox from "./../../components/processWrap/GuideBox"
import GuideCard from "./../../components/processWrap/GuideCard"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const ToolGuidesWrapSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            guidesTitle
            viewAllGuidesLabel
            viewAllGuidesUrl
            guidesTopBanner {
              image {
                sourceUrl
              }
              category
              title
              url
              description
            }
            guidesList {
              image {
                sourceUrl
              }
              category
              title
              url
              description
            }
          }
        }
      }
    }
  `)

  let guidesTitle = data.allWpPage.nodes.map(node => node.learn.guidesTitle)
  let viewAllGuidesLabel = data.allWpPage.nodes.map(
    node => node.learn.viewAllGuidesLabel
  )
  let viewAllGuidesUrl = data.allWpPage.nodes.map(
    node => node.learn.viewAllGuidesUrl
  )
  let guidesTopBanner = data.allWpPage.nodes.map(
    node => node.learn.guidesTopBanner
  )
  let guidesList = data.allWpPage.nodes.map(node => node.learn.guidesList)

  return (
    <div className="tool-guides-wrap section ptb100 pb-0">
      <div className="row align-items-center title-wrap">
        <div className="col-sm-8">
          <h2 dangerouslySetInnerHTML={{ __html: guidesTitle }} />
        </div>
        <div className="col-sm-4">
          <Link to={viewAllGuidesUrl} className="more-btn">
            {viewAllGuidesLabel}
          </Link>
        </div>
      </div>
      <div className="guides-main section">
        {guidesTopBanner.map((item, i) => {
          return (
            <GuideBox
              key={i}
              url={item.url}
              sourceUrl={item.image.sourceUrl}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          )
        })}
        <ul className="col3">
          {guidesList.map(e =>
            e.map((item, i) => {
              return (
                <li>
                  <GuideCard
                    key={i}
                    url={item.url}
                    sourceUrl={item.image.sourceUrl}
                    category={item.category}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              )
            })
          )}
        </ul>
      </div>
      <Link
        to="https://craftly.ai/documentation/index.html"
        class="btn-main mobile"
      >
        View all Guides
      </Link>
    </div>
  )
}

export default ToolGuidesWrapSection
