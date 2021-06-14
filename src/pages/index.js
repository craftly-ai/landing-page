import * as React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/seo"
import IntroSection from "../container/IntroSection"
import TagCarousel from "../components/carousel/TagCarousel"
import DesktopSeaction from "./../container/DesktopSeaction"
import PartnersSection from "./../container/PartnersSection"
import ValueGrowSection from "./../container/ValueGrowSection"
import introdata from "../data/introData.json"
import tagList from "../data/tagList.json"
import valueGrowData from "../data/ValueGrowData.json"
import ValueGrowListSeaction from "./../container/ValueGrowListSeaction"
import ProductSeaction from "./../container/ProductSeaction"
import CopyRightSeaction from "../container/CopyRightSeaction"
import TrustTechSeaction from "./../container/TrustTechSeaction"
import VersusSeaction from "./../container/VersusSeaction"
import PricingSeaction from "../container/PricingSeaction"

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
      <PartnersSection />
      <ValueGrowSection
        heading={valueGrowData.heading}
        subheading={valueGrowData.subheading}
        button={valueGrowData.button}
        img={valueGrowData.img}
      />
      <ValueGrowListSeaction />
      <ProductSeaction />
      <CopyRightSeaction />
      <TrustTechSeaction />
      <VersusSeaction />
      <PricingSeaction />
    </Layout>
  </>
)

export default IndexPage
