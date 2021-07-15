import React from "react"
import Blog from "./Blog"
import BlogTemplate from "./BlogTemplate"
import { graphql } from "gatsby"

const BlogIndex = props => {
  let authorName = props.data.allWpPost.nodes.map(node => node.author.node.name)
  let authorDescription = props.data.allWpPost.nodes.map(
    node => node.author.node.description
  )
  let authorAvatarUrl = props.data.allWpPost.nodes.map(
    node => node.author.node.avatar.url
  )
  let categories = props.data.allWpPost.nodes.map(node =>
    node.categories.nodes.map(data => data.name)
  )
  let date = props.data.allWpPost.nodes.map(node => node.date)
  let nuberOfMinutesToRead = props.data.allWpPost.nodes.map(
    node => node.blogPost.nuberOfMinutesToRead
  )
  let title = props.data.allWpPost.nodes.map(node => node.title)
  let content = props.data.allWpPost.nodes.map(node => node.content)

  if (!props.pageContext.slug) {
    return <Blog />
  } else {
    return (
      <BlogTemplate
        authorName={authorName}
        authorDescription={authorDescription}
        authorAvatarUrl={authorAvatarUrl}
        categories={categories}
        date={date}
        nuberOfMinutesToRead={nuberOfMinutesToRead}
        title={title}
        content={content}
      />
    )
  }
}

export default BlogIndex

export const data = graphql`
  query($slug: String) {
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
