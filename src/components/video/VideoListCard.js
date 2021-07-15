import React from "react"
import poster from "../../images/linkedin-small-video-img.jpg"

const VideoListCard = () => {
  return (
    <>
      <a href="/video/" className="video-box">
        <img src={poster} alt="" />
        <span className="play-btn" />
      </a>
    </>
  )
}

export default VideoListCard
