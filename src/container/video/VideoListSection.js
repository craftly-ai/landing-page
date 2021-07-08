import React from "react"
import VideoListCard from "./../../components/video/VideoListCard"

const VideoListSection = () => {
  return (
    <div className="videos-list-row section">
      <div className="container">
        <div className="row videos-wrap">
          <div className="col-md-7 col-12 left-box">
            <h4>Watch more trainings</h4>
            <ul>
              <li>
                <VideoListCard />
              </li>
              <li>
                <VideoListCard />
              </li>
              <li>
                <VideoListCard />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoListSection
