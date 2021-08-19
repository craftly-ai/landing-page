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

const metaTitle = "Craftly.AI | Blog, Resources & Updates"
const metaDescription =
  "Learn from SEO and content marketing experts. Checkout content written using our tech & some tips on how to get your content ranking with your AI copywriter."
const Blog = () => {
  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section className="blog-page-warpper section stick-gradient">
          <div className="breadcrumbs mrt112 section">
            <div className="container">
              <ul>
                <li>
                  <Link className="replaceHref" to="/">
                    Home
                  </Link>{" "}
                  <span>/</span>
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
