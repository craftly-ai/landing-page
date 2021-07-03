import React from "react"

const VideoBox = () => {
  return (
    <div className="video-box">
      <div className="img-wrap">
        <img
          src="images/linkedin-small-video-img.jpg"
          alt="Optimize your Linkedin Profile"
          className="img-fluid"
        />
        <a href="optimize-your-linkedin-profile.html" className="play-btn" />
      </div>
      <h5>
        <a href="optimize-your-linkedin-profile.html">
          Optimize your Linkedin Profile In Under 10 Minutes
        </a>
      </h5>
    </div>
  )
}

export default VideoBox
