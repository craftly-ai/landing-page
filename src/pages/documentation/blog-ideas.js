import * as React from "react"
import DocLayout from "../../components/documentation/DocLayout"
import StepList from "../../components/documentation/StepList"
import TipsBox from "../../components/documentation/TipsBox"
import ContentBox from "../../components/documentation/ContentBox"
import { useStaticQuery, graphql } from "gatsby"

const BlogIdeas = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "documentation" } }) {
        nodes {
          documentation {
            blogIdeas {
              title
              description
              stepsTitle
              stepsList {
                stepNo
                description
              }
              tipsTitle
              tipsDescription
              contentCreationsTitle
              contentCreationsImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

  let title = data.allWpPage.nodes[0].documentation.blogIdeas.title
  let description = data.allWpPage.nodes[0].documentation.blogIdeas.description
  let stepsTitle = data.allWpPage.nodes[0].documentation.blogIdeas.stepsTitle
  let stepsList = data.allWpPage.nodes[0].documentation.blogIdeas.stepsList
  let tipsTitle = data.allWpPage.nodes[0].documentation.blogIdeas.tipsTitle
  let tipsDescription =
    data.allWpPage.nodes[0].documentation.blogIdeas.tipsDescription
  let contentCreationsTitle =
    data.allWpPage.nodes[0].documentation.blogIdeas.contentCreationsTitle

  let contentCreationsImage =
    data.allWpPage.nodes[0].documentation.blogIdeas.contentCreationsImage !=
    null
      ? data.allWpPage.nodes[0].documentation.blogIdeas.contentCreationsImage
          .sourceUrl
      : null

  return (
    <DocLayout>
      <div className="documentation-row documentation-detail-page">
        <div className="container small-container">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <div className="steps-title-box ptb80">
            <h3 dangerouslySetInnerHTML={{ __html: stepsTitle }} />
            <ul>
              {stepsList.map((item, i) => {
                return (
                  <StepList
                    key={i}
                    stepNo={item.stepNo}
                    description={item.description}
                  />
                )
              })}
            </ul>
          </div>
          <TipsBox title={tipsTitle} description={tipsDescription} />
          <ContentBox
            className={"content-creations pt80"}
            title={contentCreationsTitle}
            img={contentCreationsImage}
          />
        </div>
      </div>
    </DocLayout>
  )
}

export default BlogIdeas
