import React from "react"
import SEO from "../../components/seo/seo"
import Layout from "../../components/layout/Layout"
import Footer from "../../components/footer/Footer"
import SubscribeSection from "../../container/blog/SubscribeSection"
import CatSection from "../../container/blog/CatSection"
import RightSidebar from "../../container/blog/RightSidebar"
import FeaturedBlogRaw from "../../container/blog/FeaturedBlogRaw"
import { Link } from "gatsby"

const BlogTemplate = props => {
  const {
    authorName,
    authorDescription,
    authorAvatarUrl,
    categories,
    date,
    nuberOfMinutesToRead,
    title,
    content,
  } = props

  return (
    <>
      <SEO />
      <Layout>
        <section className="blog-detail-warpper section stick-gradient">
          <div className="breadcrumbs mrt112 section">
            <div className="container">
              <ul>
                <li>
                  <Link className="replaceHref" to="/">
                    Home
                  </Link>
                  <span>/</span>
                </li>
                <li>
                  <Link className="replaceHref" to="/blog">
                    Blog
                  </Link>{" "}
                  <span>/</span>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
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
