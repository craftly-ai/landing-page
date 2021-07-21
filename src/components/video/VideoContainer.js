import React from "react"

const VideoContainer = props => {
  const { videoUrl, poster } = props
  return (
    <div className="cb-video-container">
      <video className="video" width={320} height={176} loop poster={poster}>
        <source src={videoUrl} type="video/mp4" />
        <track
          src=""
          kind="captions"
          srclang="en"
          label="english_captions"
        ></track>
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
