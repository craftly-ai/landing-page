import React from "react"
import BlogListBox from "./../../components/blog/BlogListBox"
import { useStaticQuery, graphql } from "gatsby"

const BlogListSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(
        sort: { fields: date, order: DESC }
        skip: 1
        filter: { blogPost: { featurePost: { ne: true } } }
      ) {
        nodes {
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          slug
          categories {
            nodes {
              name
            }
          }
          date(formatString: "MMMM DD, YYYY")
          blogPost {
            nuberOfMinutesToRead
            featurePost
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
        }
      }
    }
  `)

  return (
    <div className="section featured-list-raw right-section-container">
      <div className="container">
        <ul>
          {data.allWpPost.nodes.map(post => (
            <li>
              <BlogListBox data={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogListSection
