import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TakeitWrapSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            takeItImage {
              sourceUrl
            }
            takeItTitle
            takeItDescription
            scheduleButtonLabel
            scheduleButtonUrl
          }
        }
      }
    }
  `)

  let takeItImage = data.allWpPage.nodes.map(
    node => node.learn.takeItImage?.sourceUrl
  )
  let takeItTitle = data.allWpPage.nodes.map(node => node.learn.takeItTitle)
  let takeItDescription = data.allWpPage.nodes.map(
    node => node.learn.takeItDescription
  )
  let scheduleButtonLabel = data.allWpPage.nodes.map(
    node => node.learn.scheduleButtonLabel
  )
  let scheduleButtonUrl = data.allWpPage.nodes.map(
    node => node.learn.scheduleButtonUrl
  )

  return (
    <div className="tak-it-wrap section">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="img-wrap dot-sep">
            <img
              src={takeItImage}
              className="img-fluid"
              alt="TakeitWrapSection"
            />
            <span className="img-sep circle" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-wrap">
            <h2 dangerouslySetInnerHTML={{ __html: takeItTitle }} />
            <p dangerouslySetInnerHTML={{ __html: takeItDescription }} />
            <a
              href={scheduleButtonUrl}
              data-mode="popup"
              className="btn-main"
              data-size={100}
              target="_blank"
              rel="noreferrer"
            >
              {scheduleButtonLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeitWrapSection
