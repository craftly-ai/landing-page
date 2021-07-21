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
          }
        }
      }
      allWpPost(filter: { blogPost: { postType: { video: { eq: true } } } }) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
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

  return (
    <div className="videos-wrap section">
      <div className="row align-items-center title-wrap">
        <div className="col-sm-8">
          <h2>{videosTitle}</h2>
        </div>
        <div className="col-sm-4">
          <a href={watchAllTutorialsUrl} className="more-btn replaceHref">
            {watchAllTutorialsLabel}
          </a>
        </div>
      </div>
      <ul className="col3">
        {data.allWpPost.nodes.map((item, i) => {
          return (
            <li key={i}>
              <VideoBox
                title={item.title}
                image={item.featuredImage.node.sourceUrl}
                url={item.slug}
              />
            </li>
          )
        })}
      </ul>
      <a href={watchAllTutorialsUrl} class="btn-main mobile">
        {watchAllTutorialsLabel}
      </a>
    </div>
  )
}

export default VideosWrapSection
