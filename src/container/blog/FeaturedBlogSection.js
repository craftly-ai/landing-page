import React from "react"
import FeaturedBlogContainer from "./../../components/blog/FeaturedBlogContainer"

const FeaturedBlogSection = () => {
  return (
    <div className="section featured-blog-raw right-section-container">
      <div className="container">
        <div className="row">
          <FeaturedBlogContainer />
          <FeaturedBlogContainer />
          <FeaturedBlogContainer />
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogSection
