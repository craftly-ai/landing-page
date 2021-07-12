import React from "react"
import SEO from "../../components/seo/seo"
import Layout from "../../components/layout/Layout"
import Footer from "../../components/footer/Footer"
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb"
import SubscribeSection from "../../container/blog/SubscribeSection"
import CatSection from "../../container/blog/CatSection"
import LatestBlogSection from "./../../container/blog/LatestBlogSection"
import FeaturedBlogSection from "./../../container/blog/FeaturedBlogSection"
import BlogListSection from "./../../container/blog/BlogListSection"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const Blog = location => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Blog",
  })
  return (
    <>
      <SEO />
      <Layout>
        <section className="blog-page-warpper section stick-gradient">
          <CustomBreadcrumb
            crumbs={crumbs}
            className={"breadcrumbs mrt112 section"}
          />
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
