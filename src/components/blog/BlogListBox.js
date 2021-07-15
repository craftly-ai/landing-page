import React from "react"

const BlogListBox = ({ data }) => {
  const slug = "/blog/" + data.slug
  return (
    <a href={slug} className="featured-list-col">
      <div className="blog-img">
        <img src={data.featuredImage.node.sourceUrl} alt="" />
      </div>
      <div className="context-col">
        <p className="context">
          {data.blogPost.nuberOfMinutesToRead} min read{" "}
          <span>{data.categories.nodes.map(e => e.name)}</span>
        </p>
        <h5>{data.title}</h5>
      </div>
    </a>
  )
}

export default BlogListBox
