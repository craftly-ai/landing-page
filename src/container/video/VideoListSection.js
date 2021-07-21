import React from "react"
import VideoListCard from "./../../components/video/VideoListCard"
import { useStaticQuery, graphql } from "gatsby"

const VideoListSection = () => {
  const data = useStaticQuery(graphql`
    {
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
  return (
    <div className="videos-list-row section">
      <div className="container">
        <div className="row videos-wrap">
          <div className="col-md-7 col-12 left-box">
            <h4>Watch more trainings</h4>
            <ul>
              {data.allWpPost.nodes.map((item, i) => {
                return (
                  <li key={i}>
                    <VideoListCard
                      image={item.featuredImage.node.sourceUrl}
                      url={item.slug}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoListSection
