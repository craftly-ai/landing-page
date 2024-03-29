import React from "react"
import { Link } from "gatsby"

const FeaturedBlogContainer = ({ data }) => {
  const slug = "/blog/" + data.slug
  return (
    <div className="col-sm-4 col-xs-12 featured-blog-col">
      <Link to={slug} className="replaceHref blog-img">
        <img
          src={data.featuredImage.node?.sourceUrl}
          alt="FeaturedBlogContainer"
        />
      </Link>
      <div className="context-col">
        <p className="context">
          {data.blogPost.nuberOfMinutesToRead} min read{" "}
          <span>{data.categories.nodes.map(e => e.name)}</span>
        </p>
        <Link className="replaceHref" to={slug}>
          {data.title}
        </Link>
      </div>
      <div className="auther-col section">
        <img
          src={data.author.node.avatar.url}
          alt="FeaturedBlogContainer"
          className="img-fluid avatar"
        />
        <p>
          {data.author.node.name} <br />
          <span>{data.date}</span>
        </p>
      </div>
    </div>
  )
}

export default FeaturedBlogContainer
