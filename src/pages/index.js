import * as React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/seo"
import IntroSection from "../container/IntroSection"
import TagCarousel from "./../carousel/TagCarousel"
import introdata from "../data/introData.json"
import tagList from "../data/tagList.json"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <section class="section relative bg-gradient">
        <IntroSection
          headingL1={introdata.headingL1}
          headingL2={introdata.headingL2}
          dataPeriod={introdata.dataPeriod}
          art={introdata.art}
          subHeading={introdata.subHeading}
          dataRotate={introdata.dataRotate}
        />
        <TagCarousel list={tagList.list} />
      </section>
    </Layout>
  </>
)

export default IndexPage
