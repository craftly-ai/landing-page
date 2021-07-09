import React from "react"
import FeaturedBlogContainer from "./../../components/blog/FeaturedBlogContainer"

const FeaturedBlogRaw = () => {
  return (
    <div className="section featured-blog-raw  right-section-container">
      <div className="container">
        <div className="featured-blog-raw-col section">
          <div className="row">
            <div className="col-sm-12 col-xs-12 text-center">
              <h2>You may also like</h2>
            </div>
          </div>
          <div className="row">
            <FeaturedBlogContainer />
            <FeaturedBlogContainer />
            <FeaturedBlogContainer />
            {/* <div className="col-sm-4 col-xs-12 featured-blog-col">
                <a
                  href="what-are-meta-descriptions-and-how-to-write-them.html"
                  className="blog-img"
                >
                  <img
                    src="../../images/blog-post-meta-description.png"
                    alt
                  />
                </a>
                <div className="context-col">
                  <p className="context">
                    5 min read <span>Updates</span>
                  </p>
                  <a href="what-are-meta-descriptions-and-how-to-write-them.html">
                    What Are Meta Descriptions and How To Write Them
                  </a>
                </div>
                <div className="auther-col section">
                  <img
                    src="../../images/headshot-megan-apa.png"
                    alt="Avtar"
                    className="img-fluid avtar"
                  />
                  <p>
                    Megan Apa <br />
                    <span>Jan 25, 2021</span>{" "}
                  </p>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogRaw
