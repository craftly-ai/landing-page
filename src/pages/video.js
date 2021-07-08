import React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import CustomBreadcrumb from "./../components/breadcrumb/CustomBreadcrumb"
import VideoWrapperSection from "./../container/video/VideoWrapperSection"
import VideoListSection from "./../container/video/VideoListSection"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const Video = location => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Optimize your Linkedin Profile",
  })
  return (
    <>
      <SEO />
      <Layout>
        <section className="section ptb100">
          <CustomBreadcrumb crumbs={crumbs} className={"breadcrumbs section"} />
          <VideoWrapperSection />
          <VideoListSection />
        </section>
        <div className="sep-border section pb80" />
        <Footer />
      </Layout>
    </>
  )
}

export default Video
