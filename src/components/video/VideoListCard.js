import React from "react"
import { Link } from "gatsby"

const VideoListCard = props => {
  const { image, url } = props
  const slug = "/video/" + url

  return (
    <>
      <Link to={slug} className="replaceHref video-box">
        <img src={image} alt="" />
        <span className="play-btn" />
      </Link>
    </>
  )
}

export default VideoListCard
