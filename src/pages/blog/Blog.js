import React from "react"
import SEO from "../../components/seo/seo"
import Layout from "../../components/layout/Layout"
import Footer from "../../components/footer/Footer"
import SubscribeSection from "../../container/blog/SubscribeSection"
import CatSection from "../../container/blog/CatSection"
import LatestBlogSection from "./../../container/blog/LatestBlogSection"
import FeaturedBlogSection from "./../../container/blog/FeaturedBlogSection"
import BlogListSection from "./../../container/blog/BlogListSection"
import { Link } from "gatsby"

const Blog = () => {
  return (
    <>
      <SEO />
      <Layout>
        <section className="blog-page-warpper section stick-gradient">
          <div className="breadcrumbs mrt112 section">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Home</Link> <span>/</span>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <LatestBlogSection />
          <FeaturedBlogSection />
          <BlogListSection />
        </section>
        <SubscribeSection />
        <CatSection />
        <Footer />
      </Layout>
    </>
  )
}

export default Blog
