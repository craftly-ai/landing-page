import React from "react"
import { graphql } from "gatsby"
import VideoTemplate from "./VideoTemplate"
import Video from "./Video"

const BlogIndex = props => {
  let authorName = props.data.allWpPost.nodes.map(node => node.author.node.name)

  let authorAvatarUrl = props.data.allWpPost.nodes.map(
    node => node.author.node.avatar.url
  )

  let date = props.data.allWpPost.nodes.map(node => node.date)
  let nuberOfMinutesToRead = props.data.allWpPost.nodes.map(
    node => node.blogPost.nuberOfMinutesToRead
  )
  let title = props.data.allWpPost.nodes.map(node => node.title)
  let content = props.data.allWpPost.nodes.map(node => node.content)
  let videoUrl = props.data.allWpPost.nodes.map(node =>
    node.blogPost.postType.addVideo.file === null
      ? node.blogPost.postType.addVideo.link
      : node.blogPost.postType.addVideo.file.mediaItemUrl
  )
  let poster = props.data.allWpPost.nodes.map(
    node => node.featuredImage.node.sourceUrl
  )

  if (!props.pageContext.slug) {
    return <Video />
  } else {
    return (
      <VideoTemplate
        videoUrl={videoUrl}
        poster={poster}
        authorName={authorName}
        authorAvatarUrl={authorAvatarUrl}
        date={date}
        numberOfMinutesToRead={nuberOfMinutesToRead}
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
            avatar {
              url
            }
          }
        }
        date(formatString: "MMMM DD")
        title
        content
        blogPost {
          nuberOfMinutesToRead
          postType {
            addVideo {
              file {
                mediaItemUrl
              }
              link
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`
