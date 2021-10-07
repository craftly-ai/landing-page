import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const EarningWrapSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            startEarningImage {
              sourceUrl
            }
            earningTopTitle
            earningTitle
            earningDescription
            startEarningButtonLabel
            startEarningButtonUrl
          }
        }
      }
    }
  `)

  let startEarningImage = data.allWpPage.nodes.map(
    node => node.learn.startEarningImage?.sourceUrl
  )
  let earningTopTitle = data.allWpPage.nodes.map(
    node => node.learn.earningTopTitle
  )
  let earningTitle = data.allWpPage.nodes.map(node => node.learn.earningTitle)
  let earningDescription = data.allWpPage.nodes.map(
    node => node.learn.earningDescription
  )
  let startEarningButtonLabel = data.allWpPage.nodes.map(
    node => node.learn.startEarningButtonLabel
  )
  let startEarningButtonUrl = data.allWpPage.nodes.map(
    node => node.learn.startEarningButtonUrl
  )

  return (
    <div className="earning-wrapper section ptb100">
      <div className="container">
        <div className="tak-it-wrap earning-wrap section m-0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="img-wrap dot-sep">
                <img
                  src={startEarningImage}
                  className="img-fluid"
                  alt="Start Earning"
                />
                <span className="img-sep circle" />
                <span className="img-sep square" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-wrap">
                <h6 dangerouslySetInnerHTML={{ __html: earningTopTitle }} />
                <h2 dangerouslySetInnerHTML={{ __html: earningTitle }} />
                <p dangerouslySetInnerHTML={{ __html: earningDescription }} />
                <a
                  className="btn-main"
                  href={startEarningButtonUrl}
                  data-mode="popup"
                  data-size={100}
                  target="_blank"
                  rel="noreferrer"
                >
                  {startEarningButtonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningWrapSection
