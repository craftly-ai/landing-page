import React from "react"
import FeaturedBlogContainer from "./../../components/blog/FeaturedBlogContainer"
import { useStaticQuery, graphql } from "gatsby"

const FeaturedBlogSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: { blogPost: { featurePost: { eq: true } } }) {
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

  console.log(data)

  return (
    <div className="section featured-blog-raw right-section-container">
      <div className="container">
        <div className="row">
          {data.allWpPost.nodes.map(post => (
            <FeaturedBlogContainer data={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogSection
