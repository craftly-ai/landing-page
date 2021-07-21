import React from "react"
import FeaturedBlogContainer from "./../../components/blog/FeaturedBlogContainer"
import { useStaticQuery, graphql } from "gatsby"

const FeaturedBlogRaw = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(
        filter: {
          blogPost: {
            postType: { blog: { eq: true }, featurePost: { eq: true } }
          }
        }
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
    <div className="section featured-blog-raw  right-section-container">
      <div className="container">
        <div className="featured-blog-raw-col section">
          <div className="row">
            <div className="col-sm-12 col-xs-12 text-center">
              <h2>You may also like</h2>
            </div>
          </div>
          <div className="row">
            {data.allWpPost.nodes.map(post => (
              <FeaturedBlogContainer data={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogRaw
