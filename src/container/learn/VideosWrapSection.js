import React from "react"
import VideoBox from "./../../components/updateWrap/VideoBox"
import { useStaticQuery, graphql } from "gatsby"

const VideosWrapSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            videosTitle
            watchAllTutorialsLabel
            watchAllTutorialsUrl
            videosList {
              title
              image {
                sourceUrl
              }
              url
            }
          }
        }
      }
    }
  `)

  let videosTitle = data.allWpPage.nodes.map(node => node.learn.videosTitle)

  let watchAllTutorialsLabel = data.allWpPage.nodes.map(
    node => node.learn.watchAllTutorialsLabel
  )
  let watchAllTutorialsUrl = data.allWpPage.nodes.map(
    node => node.learn.watchAllTutorialsUrl
  )
  let videosList = data.allWpPage.nodes.map(node => node.learn.videosList)

  return (
    <div className="videos-wrap section">
      <div className="row align-items-center title-wrap">
        <div className="col-sm-8">
          <h2>{videosTitle}</h2>
        </div>
        <div className="col-sm-4">
          <a href={watchAllTutorialsUrl} className="more-btn">
            {watchAllTutorialsLabel}
          </a>
        </div>
      </div>
      <ul className="col3">
        {videosList.map(e =>
          e.map((item, i) => {
            return (
              <li key={i}>
                <VideoBox
                  title={item.title}
                  image={item.image.sourceUrl}
                  url={"/craftly-landing" + item.url}
                />
              </li>
            )
          })
        )}
      </ul>
      <a href={watchAllTutorialsUrl} class="btn-main mobile">
        {watchAllTutorialsLabel}
      </a>
    </div>
  )
}

export default VideosWrapSection
