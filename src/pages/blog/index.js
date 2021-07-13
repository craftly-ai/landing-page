import React from "react"
import Blog from "./Blog"
import BlogTemplate from "./BlogTemplate"
import { graphql } from "gatsby"

const BlogIndex = props => {
  if (!props.pageContext.slug) {
    return <Blog />
  } else {
    return <BlogTemplate data={props.data} location={props} />
  }
}

export default BlogIndex

export const data = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        author {
          node {
            name
            description
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
          }
        }
        date(formatString: "MMMM DD, YYYY")
        blogPost {
          nuberOfMinutesToRead
        }
        title
        content
      }
    }
  }
`
