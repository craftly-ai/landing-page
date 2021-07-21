import React from "react"
import VideoContainer from "../../components/video/VideoContainer"

const VideoWrapperSection = props => {
  const {
    videoUrl,
    poster,
    authorName,
    authorAvatarUrl,
    date,
    numberOfMinutesToRead,
    content,
  } = props
  return (
    <div className="video-wrapper section">
      <div className="video-box-row section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-12 left-box">
              <VideoContainer videoUrl={videoUrl} poster={poster} />
            </div>
          </div>
        </div>
      </div>
      <div className="video-text-row section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 left-box"></div>
            <div className="col-md-5 col-12 right-box">
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <div className="auther-col section">
                <div className="avatar">
                  <img
                    src={authorAvatarUrl}
                    alt=""
                    className="img-fluid avatar"
                  />
                </div>
                <div className="avatar-text">
                  <h6>{authorName}</h6>
                  <div className="sub">
                    <span>{date}</span>
                    <span>{numberOfMinutesToRead} min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoWrapperSection
