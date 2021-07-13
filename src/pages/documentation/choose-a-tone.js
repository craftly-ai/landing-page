import React from "react"
import DocLayout from "./../../components/documentation/DocLayout"
import { useStaticQuery, graphql } from "gatsby"

const ChooseATone = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "documentation" } }) {
        nodes {
          documentation {
            chooseATone {
              title
              description
              craftingPersonalizedTitle
              craftingPersonalizedDescription
              contentCreationsTitle
              contentCreationsDescription
            }
          }
        }
      }
    }
  `)

  let title = data.allWpPage.nodes[0].documentation.chooseATone.title
  let description =
    data.allWpPage.nodes[0].documentation.chooseATone.description
  let craftingPersonalizedTitle =
    data.allWpPage.nodes[0].documentation.chooseATone.craftingPersonalizedTitle
  let craftingPersonalizedDescription =
    data.allWpPage.nodes[0].documentation.chooseATone
      .craftingPersonalizedDescription
  let contentCreationsTitle =
    data.allWpPage.nodes[0].documentation.chooseATone.contentCreationsTitle
  let contentCreationsDescription =
    data.allWpPage.nodes[0].documentation.chooseATone
      .contentCreationsDescription

  return (
    <DocLayout>
      <div className="documentation-row documentation-detail-page">
        <div className="container small-container">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <div className="crafting-personalized ptb80">
            <h3
              dangerouslySetInnerHTML={{ __html: craftingPersonalizedTitle }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: craftingPersonalizedDescription,
              }}
            />
          </div>
          <div className="content-creations">
            <h3 dangerouslySetInnerHTML={{ __html: contentCreationsTitle }} />
            <div
              dangerouslySetInnerHTML={{ __html: contentCreationsDescription }}
            />
          </div>
        </div>
      </div>
    </DocLayout>
  )
}

export default ChooseATone
