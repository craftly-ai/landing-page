import React from "react"
import VideoBox from "./../../components/updateWrap/VideoBox"
import SEO from "./../../components/seo/seo"
import Layout from "./../../components/layout/Layout"
import Footer from "./../../components/footer/Footer"
import { useStaticQuery, graphql, Link } from "gatsby"

const Video = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            videosTitle
          }
        }
      }
      allWpPost(filter: { blogPost: { postType: { video: { eq: true } } } }) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  let videosTitle = data.allWpPage.nodes.map(node => node.learn.videosTitle)

  return (
    <>
      <SEO />
      <Layout>
        <section className="relative">
          <div className="breadcrumbs mrt112 section">
            <div className="container">
              <ul>
                <li>
                  <Link className="replaceHref" to="/">
                    Home
                  </Link>
                  <span>/</span>
                </li>
                <li>Video</li>
              </ul>
            </div>
          </div>
          <div className="section ptb100">
            <div className="container">
              <div className="videos-wrap section">
                <div className="row align-items-center title-wrap">
                  <div className="col-sm-8">
                    <h2>{videosTitle}</h2>
                  </div>
                </div>
                <ul className="col3">
                  {data.allWpPost.nodes.map((item, i) => {
                    return (
                      <li key={i}>
                        <VideoBox
                          title={item.title}
                          image={item.featuredImage.node?.sourceUrl}
                          url={item.slug}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default Video
