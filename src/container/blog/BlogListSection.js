import React from "react"
import BlogListBox from "./../../components/blog/BlogListBox"

const BlogListSection = () => {
  return (
    <div className="section featured-list-raw right-section-container">
      <div className="container">
        <ul>
          <li>
            <BlogListBox />
          </li>
          <li>
            <BlogListBox />
          </li>
          <li>
            <BlogListBox />
          </li>
          <li>
            <BlogListBox />
          </li>
          <li>
            <BlogListBox />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BlogListSection
