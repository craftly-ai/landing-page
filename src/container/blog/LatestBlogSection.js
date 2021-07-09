import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const LatestBlogSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(limit: 1) {
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

  let authorName = data.allWpPost.nodes.map(node => node.author.node.name)
  let authorAvatarUrl = data.allWpPost.nodes.map(
    node => node.author.node.avatar.url
  )
  let slug = data.allWpPost.nodes.map(node => node.slug)
  let categories = data.allWpPost.nodes.map(node =>
    node.categories.nodes.map(data => data.name)
  )
  let date = data.allWpPost.nodes.map(node => node.date)
  let nuberOfMinutesToRead = data.allWpPost.nodes.map(
    node => node.blogPost.nuberOfMinutesToRead
  )
  let featuredImage = data.allWpPost.nodes.map(
    node => node.featuredImage.node.sourceUrl
  )
  let title = data.allWpPost.nodes.map(node => node.title)

  return (
    <div className="section latest-blog-raw right-section-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-xs-12 left-conn">
            <span>
              {nuberOfMinutesToRead} min read <strong>{categories}</strong>
            </span>
            <h1>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </h1>
            <div className="auther-col section">
              <img src={authorAvatarUrl} alt="" className="img-fluid avtar" />
              <p>
                {authorName} <br />
                <span>{date}</span>
              </p>
            </div>
          </div>
          <div className="col-sm-5 col-xs-12 right-conn text-right">
            <div className="img-box">
              <img src={featuredImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestBlogSection
