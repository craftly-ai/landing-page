import React from "react"
import avtar from "../../images/headshot-iman-bashir.png"
import poster from "../../images/blog-post-seo-guide.png"
import { Link } from "gatsby"

const LatestBlogSection = () => {
  return (
    <div className="section latest-blog-raw right-section-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-xs-12 left-conn">
            <span>
              5 min read <strong>Artificial Intelligence</strong>
            </span>
            <h1>
              <Link to="/blog/ultimate-guide-to-seo-content-writing-in-2021">
                Ultimate Guide to SEO Content Writing in 2021
              </Link>
            </h1>
            <div className="auther-col section">
              <img src={avtar} alt="" className="img-fluid avtar" />
              <p>
                Iman Bashir <br />
                <span>Jan 25, 2021</span>
              </p>
            </div>
          </div>
          <div className="col-sm-5 col-xs-12 right-conn text-right">
            <div className="img-box">
              <img src={poster} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestBlogSection
