import * as React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/seo"
import IntroSection from "../container/IntroSection"
import TagCarousel from "../components/carousel/TagCarousel"
import DesktopSeaction from "./../container/DesktopSeaction"
import PartnersSection from "./../container/PartnersSection"
import ValueGrowSection from "./../container/ValueGrowSection"
import ValueGrowListSeaction from "./../container/ValueGrowListSeaction"
import ProductSeaction from "./../container/ProductSeaction"
import CopyRightSeaction from "../container/CopyRightSeaction"
import TrustTechSeaction from "./../container/TrustTechSeaction"
import VersusSeaction from "./../container/VersusSeaction"
import PricingSeaction from "../container/PricingSeaction"
import TestimonialSeaction from "./../container/TestimonialSeaction"
import SubscribeSeaction from "./../container/SubscribeSeaction"
import OfferSeaction from "./../container/OfferSeaction"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            tagsList {
              tag
            }
            blastThroughTitle
            blastThroughDescription
            seeExampleButtonLabel
            seeExampleButtonUrl
            blastThroughDashbordImage {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  let tagList = data.allWpPage.nodes.map(node =>
    node.home.tagsList.map(item => item.tag)
  )
  let blastThroughTitle = data.allWpPage.nodes.map(
    node => node.home.blastThroughTitle
  )
  let blastThroughDescription = data.allWpPage.nodes.map(
    node => node.home.blastThroughDescription
  )
  let seeExampleButtonLabel = data.allWpPage.nodes.map(
    node => node.home.seeExampleButtonLabel
  )
  let seeExampleButtonUrl = data.allWpPage.nodes.map(
    node => node.home.seeExampleButtonUrl
  )
  let blastThroughDashbordImage = data.allWpPage.nodes.map(
    node => node.home.blastThroughDashbordImage.sourceUrl
  )

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <IntroSection />
        <TagCarousel list={tagList} />
        <DesktopSeaction />
        <PartnersSection />
        <ValueGrowSection
          heading={blastThroughTitle}
          subheading={blastThroughDescription}
          button={seeExampleButtonLabel}
          buttonURl={seeExampleButtonUrl}
          img={blastThroughDashbordImage}
        />
        <ValueGrowListSeaction />
        <ProductSeaction />
        <CopyRightSeaction />
        <TrustTechSeaction />
        <VersusSeaction />
        <PricingSeaction />
        <TestimonialSeaction />
        <SubscribeSeaction />
        <OfferSeaction />
      </Layout>
    </>
  )
}
export default IndexPage
