import React from "react"
import SEO from "../../components/seo/seo"
import Layout from "../../components/layout/Layout"
import Footer from "../../components/footer/Footer"
import SubscribeSection from "../../container/blog/SubscribeSection"
import CatSection from "../../container/blog/CatSection"
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb"
import RightSidebar from "../../container/blog/RightSidebar"
import FeaturedBlogRaw from "../../container/blog/FeaturedBlogRaw"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const BlogTemplate = ({ location, data }) => {
  let authorName = data.allWpPost.nodes.map(node => node.author.node.name)
  let authorDescription = data.allWpPost.nodes.map(
    node => node.author.node.description
  )
  let authorAvatarUrl = data.allWpPost.nodes.map(
    node => node.author.node.avatar.url
  )
  let categories = data.allWpPost.nodes.map(node =>
    node.categories.nodes.map(data => data.name)
  )
  let date = data.allWpPost.nodes.map(node => node.date)
  let nuberOfMinutesToRead = data.allWpPost.nodes.map(
    node => node.blogPost.nuberOfMinutesToRead
  )
  let title = data.allWpPost.nodes.map(node => node.title)
  let content = data.allWpPost.nodes.map(node => node.content)

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: title,
  })

  return (
    <>
      <SEO />
      <Layout>
        <section className="blog-detail-warpper section stick-gradient">
          <CustomBreadcrumb
            crumbs={crumbs}
            className={"breadcrumbs mrt112 section"}
          />
          <div className="section blog-detail-raw">
            <div className="container">
              <div className="title-raw">
                <span>
                  {nuberOfMinutesToRead} min read <strong>{categories}</strong>
                </span>
                <h1>{title}</h1>
                <div className="date-and-auth-col">
                  <div className="auther-col">
                    <img
                      src={authorAvatarUrl}
                      alt=""
                      className="img-fluid avtar"
                    />
                    <p>{authorName}</p>
                  </div>
                  <div className="date-col">{date}</div>
                </div>
              </div>
              <div className="blog-detail-main-wrap">
                <div className="left-conn">
                  <div
                    className="blog-detail-col section"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                  <div className="writen-by-col section">
                    <div className="avatar-holder">
                      <a href="#">
                        <img
                          alt=""
                          src={authorAvatarUrl}
                          className="avatar"
                          height={150}
                          width={150}
                        />
                      </a>
                    </div>
                    <div className="author-description">
                      <h6 className="label">Written By</h6>
                      <h3 className="author-name">
                        <a href="#">{authorName}</a>
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: authorDescription }}
                      />
                    </div>
                  </div>
                </div>
                <RightSidebar />
              </div>
            </div>
          </div>
          <FeaturedBlogRaw />
        </section>

        <SubscribeSection />
        <CatSection />
        <Footer />
      </Layout>
    </>
  )
}

export default BlogTemplate
