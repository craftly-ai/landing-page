import React from "react"
import VideoBox from "./../../components/updateWrap/VideoBox"

const VideosWrapSection = () => {
  return (
    <div className="videos-wrap section">
      <div className="row align-items-center title-wrap">
        <div className="col-sm-8">
          <h2>Videos</h2>
        </div>
        <div className="col-sm-4">
          <a href="#" className="more-btn">
            Watch all Tutorials
          </a>
        </div>
      </div>
      <ul className="col3">
        <li>
          <VideoBox />
        </li>
        <li>
          <VideoBox />
        </li>
        <li>
          <VideoBox />
        </li>
      </ul>
      <a
        href="https://craftly.ai/documentation/index.html"
        class="btn-main mobile"
      >
        Watch all Tutorials
      </a>
    </div>
  )
}

export default VideosWrapSection
