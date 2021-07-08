import React from "react"
import poster from "../../images/blog-post-ai-writes.png"
import avtar from "../../images/headshot-megan-apa.png"

const FeaturedBlogContainer = () => {
  return (
    <div className="col-sm-4 col-xs-12 featured-blog-col">
      <a href="#" className="blog-img">
        <img src={poster} alt="" />
      </a>
      <div className="context-col">
        <p className="context">
          5 min read <span>Culture</span>
        </p>
        <a href="#">
          When AI Writes: What is GPT-3? And What it means for Artificial
          Intelligence?
        </a>
      </div>
      <div className="auther-col section">
        <img src={avtar} alt="" className="img-fluid avtar" />
        <p>
          Megan Apa <br />
          <span>Jan 25, 2021</span>
        </p>
      </div>
    </div>
  )
}

export default FeaturedBlogContainer
