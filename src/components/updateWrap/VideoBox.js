import React from "react"
import { Link } from "gatsby"

const VideoBox = props => {
  const { title, image, url } = props
  const slug = "/video/" + url

  return (
    <div className="video-box">
      <div className="img-wrap">
        <img
          src={image}
          alt="Optimize your Linkedin Profile"
          className="img-fluid"
        />
        <Link to={slug} className="replaceHref play-btn" />
      </div>
      <h5>
        <Link to={slug} className="replaceHref">
          {title}
        </Link>
      </h5>
    </div>
  )
}

export default VideoBox
