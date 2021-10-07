import * as React from "react"
import DocLayout from "./../../components/documentation/DocLayout"
import { useStaticQuery, graphql } from "gatsby"
import TipsBox from "./../../components/documentation/TipsBox"
import ContentBox from "./../../components/documentation/ContentBox"
import StepList from "./../../components/documentation/StepList"

const BlogBuilder = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "documentation" } }) {
        nodes {
          documentation {
            blogBuilder {
              title
              description
              stepsTitle
              stepsList {
                stepNo
                description
              }
              tipsTitle
              tipsDescription
              basicInputVsDetailedInput
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
  let title = data.allWpPage.nodes[0].documentation.blogBuilder.title
  let description =
    data.allWpPage.nodes[0].documentation.blogBuilder.description
  let stepsTitle = data.allWpPage.nodes[0].documentation.blogBuilder.stepsTitle
  let stepsList = data.allWpPage.nodes[0].documentation.blogBuilder.stepsList
  let tipsTitle = data.allWpPage.nodes[0].documentation.blogBuilder.tipsTitle
  let tipsDescription =
    data.allWpPage.nodes[0].documentation.blogBuilder.tipsDescription
  let basicInputVsDetailedInput =
    data.allWpPage.nodes[0].documentation.blogBuilder.basicInputVsDetailedInput
  let contentCreationsTitle =
    data.allWpPage.nodes[0].documentation.blogBuilder.contentCreationsTitle

  let contentCreationsImage =
    data.allWpPage.nodes[0].documentation.blogBuilder.contentCreationsImage !=
    null
      ? data.allWpPage.nodes[0].documentation.blogBuilder.contentCreationsImage
          ?.sourceUrl
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
          <div
            class="vs-box-wrap ptb80"
            dangerouslySetInnerHTML={{ __html: basicInputVsDetailedInput }}
          />
          <ContentBox
            className={"content-creations"}
            title={contentCreationsTitle}
            img={contentCreationsImage}
          />
        </div>
      </div>
    </DocLayout>
  )
}

export default BlogBuilder
