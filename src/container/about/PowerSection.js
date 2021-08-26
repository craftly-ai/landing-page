import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PowerSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "about" } }) {
        nodes {
          about {
            powerOfAiTitle
            powerOfAiDescription
            powerOfAiImage {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  let powerOfAiTitle = data.allWpPage.nodes.map(
    node => node.about.powerOfAiTitle
  )
  let powerOfAiDescription = data.allWpPage.nodes.map(
    node => node.about.powerOfAiDescription
  )
  let powerOfAiImage = data.allWpPage.nodes.map(
    node => node.about.powerOfAiImage.sourceUrl
  )

  return (
    <div className="crafters-wrapper section ptb150">
      <div className="container">
        <div className="row box-row">
          <div className="col-md-5 col-12 text-box">
            <div className="box">
              <h2 dangerouslySetInnerHTML={{ __html: powerOfAiTitle }} />
              <p dangerouslySetInnerHTML={{ __html: powerOfAiDescription }} />
            </div>
          </div>
          <div className="col-md-7 col-12 img-box">
            <img src={powerOfAiImage} alt="PowerSection" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PowerSection
