import * as React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/seo"
import IntroSection from "../container/IntroSection"
import TagCarousel from "../components/carousel/TagCarousel"
import introdata from "../data/introData.json"
import tagList from "../data/tagList.json"
import DesktopSeaction from "./../container/DesktopSeaction"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <IntroSection
        headingL1={introdata.headingL1}
        headingL2={introdata.headingL2}
        dataPeriod={introdata.dataPeriod}
        art={introdata.art}
        subHeading={introdata.subHeading}
        dataRotate={introdata.dataRotate}
      />
      <TagCarousel list={tagList.list} />
      <DesktopSeaction />
    </Layout>
  </>
)

export default IndexPage
