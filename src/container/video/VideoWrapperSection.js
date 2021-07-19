import React from "react"
import VideoContainer from "../../components/video/VideoContainer"
import avtar from "../../images/peter-johnson-min.jpg"

const VideoWrapperSection = () => {
  return (
    <div className="video-wrapper section">
      <div className="video-box-row section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-12 left-box">
              <VideoContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="video-text-row section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 left-box"></div>
            <div className="col-md-5 col-12 right-box">
              <h2>
                Optimize your <br />
                Linkedin Profile
              </h2>
              <h4>Introduction</h4>
              <p>
                Lorem ipsum dolor sit amet, consec adipiscing elit, sed diam
                nonummy nibh euismo tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nost exerci
                tation ullamcorper suscipit lobortis nisla aliquip ex ea commodo
                consequat. Duis autem dseum iriure dolor in hendrerit in
                vulputate velit esssd molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iustfo odio
                dignissim qui blandit praesent luptatugm zzril delenit augue
                duis dolore.
              </p>
              <div className="auther-col section">
                <div className="avtar">
                  <img src={avtar} alt="" className="img-fluid avtar" />
                </div>
                <div className="avatar-text">
                  <h6>Peter johnson</h6>
                  <div className="sub">
                    <span>April 26</span>
                    <span>10 min</span>
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
