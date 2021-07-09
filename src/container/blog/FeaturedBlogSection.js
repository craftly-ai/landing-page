import React from "react"
import FeaturedBlogContainer from "./../../components/blog/FeaturedBlogContainer"
import { useStaticQuery, graphql } from "gatsby"

const FeaturedBlogSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
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

  let info = data.allWpPost.nodes.map(node => node.blogPost.featurePost)
  let slug = data.allWpPost.nodes.map(node => node.slug)

  let datainfo = data.allWpPost.nodes.map(node => {
    if (node.blogPost.featurePost !== null) {
      data.allWpPost.nodes.map(node => node.slug)
    }
  })

  console.log(datainfo)

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
