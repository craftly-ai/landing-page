import React from "react"
import poster from "../../images/linkedin-small-video-img.jpg"
import { Link } from "gatsby"

const VideoListCard = () => {
  return (
    <>
      <Link to="/video/" className="video-box">
        <img src={poster} alt="" />
        <span className="play-btn" />
      </Link>
    </>
  )
}

export default VideoListCard
