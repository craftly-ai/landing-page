import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CopyRightSeaction = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            copywritingTitle
            copywritingDescription
            copywritingStepTitle
            copywritingStepList {
              stepImage {
                sourceUrl
              }
              stepTitle
              stepDescription
            }
          }
        }
      }
    }
  `)

  let copywritingTitle = data.allWpPage.nodes.map(
    node => node.home.copywritingTitle
  )
  let copywritingDescription = data.allWpPage.nodes.map(
    node => node.home.copywritingDescription
  )
  let copywritingStepTitle = data.allWpPage.nodes.map(
    node => node.home.copywritingStepTitle
  )
  let copywritingStepList = data.allWpPage.nodes.map(
    node => node.home.copywritingStepList
  )

  return (
    <div className="copyright-section-raw section ptb100">
      <div className="container">
        <div className="title-raw section">
          <h2>{copywritingTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: copywritingDescription }} />
          <h4 dangerouslySetInnerHTML={{ __html: copywritingStepTitle }} />
        </div>
        <div className="copyright-section-col section">
          <div className="row">
            {copywritingStepList.map(e =>
              e.map((item, i) => (
                <div className="col-sm-4 col-12 li1" key={i}>
                  <div className="img-box">
                    <img
                      src={item.stepImage.sourceUrl}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h4> {item.stepTitle} </h4>
                  <p>{item.stepDescription}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRightSeaction
