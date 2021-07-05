import React from "react"

const VideoBox = props => {
  const { title, image, url } = props

  return (
    <div className="video-box">
      <div className="img-wrap">
        <img
          src={image}
          alt="Optimize your Linkedin Profile"
          className="img-fluid"
        />
        <a href={url} className="play-btn" />
      </div>
      <h5>
        <a href={url}>{title}</a>
      </h5>
    </div>
  )
}

export default VideoBox
