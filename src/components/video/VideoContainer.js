import React from "react"
import poster from "../../images/linkedin-video-min.jpg"

const VideoContainer = () => {
  return (
    <div className="cb-video-container">
      <video className="video" width={320} height={176} loop poster={poster}>
        <source
          src="https://www.w3schools.com/tags/mov_bbb.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.w3schools.com/tags/mov_bbb.ogg"
          type="video/ogg"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className="play-pause--click-area">
        <div className="play-pause--container center-xy">
          <div className="play-pause--icon play-icon" />
          <div className="play-pause--icon pause-icon" />
        </div>
      </div>
    </div>
  )
}

export default VideoContainer
