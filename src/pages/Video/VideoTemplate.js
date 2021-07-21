import React from "react"
import SEO from "../../components/seo/seo"
import Layout from "../../components/layout/Layout"
import Footer from "../../components/footer/Footer"
import VideoWrapperSection from "../../container/video/VideoWrapperSection"
import VideoListSection from "../../container/video/VideoListSection"
import { Link } from "gatsby"

const VideoTemplate = props => {
  const {
    videoUrl,
    poster,
    authorName,
    authorAvatarUrl,
    date,
    numberOfMinutesToRead,
    title,
    content,
  } = props
  return (
    <>
      <SEO />
      <Layout>
        <section className="section ptb100">
          <div className="breadcrumbs section">
            <div className="container">
              <ul>
                <li>
                  <Link className="replaceHref" to="/">
                    Home
                  </Link>
                  <span>/</span>
                </li>
                <li>
                  <Link className="replaceHref" to="/learn">
                    The Academy
                  </Link>
                  <span>/</span>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
          <VideoWrapperSection
            videoUrl={videoUrl}
            poster={poster}
            authorName={authorName}
            authorAvatarUrl={authorAvatarUrl}
            date={date}
            numberOfMinutesToRead={numberOfMinutesToRead}
            content={content}
          />
          <VideoListSection />
        </section>
        <div className="sep-border section pb80" />
        <Footer />
      </Layout>
    </>
  )
}

export default VideoTemplate
