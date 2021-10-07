import React from "react"
import { Link } from "gatsby"

const BlogListBox = ({ data }) => {
  const slug = "/blog/" + data.slug
  return (
    <Link to={slug} className="replaceHref featured-list-col">
      <div className="blog-img">
        <img src={data.featuredImage.node?.sourceUrl} alt="BlogListBox" />
      </div>
      <div className="context-col">
        <p className="context">
          {data.blogPost.nuberOfMinutesToRead} min read{" "}
          <span>{data.categories.nodes.map(e => e.name)}</span>
        </p>
        <h5>{data.title}</h5>
      </div>
    </Link>
  )
}

export default BlogListBox
