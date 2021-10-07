import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "about" } }) {
        nodes {
          about {
            aboutTitle
            aboutRightDescription
            aboutImage {
              sourceUrl
            }
            aboutBottomDescription
          }
        }
      }
    }
  `)

  let aboutTitle = data.allWpPage.nodes.map(node => node.about.aboutTitle)
  let aboutRightDescription = data.allWpPage.nodes.map(
    node => node.about.aboutRightDescription
  )
  let aboutImage = data.allWpPage.nodes.map(
    node => node.about.aboutImage?.sourceUrl
  )
  let aboutBottomDescription = data.allWpPage.nodes.map(
    node => node.about.aboutBottomDescription
  )

  return (
    <div className="about-title ptb100 pb-0 section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <h1
              className="title"
              dangerouslySetInnerHTML={{ __html: aboutTitle }}
            />
          </div>
          <div className="col-md-6 col-12 right-col">
            <div className="box">
              <div
                dangerouslySetInnerHTML={{ __html: aboutRightDescription }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="about-image">
              <img src={aboutImage} alt="AboutSection" />
            </div>
          </div>
        </div>
        <div className="row about-box">
          <div className="col-md-12 col-12 pt-60 text-center">
            <div dangerouslySetInnerHTML={{ __html: aboutBottomDescription }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
