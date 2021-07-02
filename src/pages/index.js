import * as React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/seo"
import IntroSection from "../container/home/IntroSection"
import TagCarousel from "../components/carousel/TagCarousel"
import DashboardSection from "../container/home/DashboardSection"
import PartnersSection from "../container/home/PartnersSection"
import ValueGrowSection from "../container/home/ValueGrowSection"
import ValueGrowListSection from "../container/home/ValueGrowListSection"
import ClientSection from "../container/home/ClientSection"
import ProductSection from "../container/home/ProductSection"
import CopyRightSection from "../container/home/CopyRightSection"
import TrustTechSection from "./../container/home/TrustTechSection"
import VersusSection from "../container/home/VersusSection"
import PricingSection from "../container/home/PricingSection"
import TestimonialSection from "../container/home/TestimonialSection"
import SubscribeSection from "../container/home/SubscribeSection"
import OfferSection from "../container/home/OfferSection"
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
            blastThroughDashboardImage {
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
  let blastThroughDashboardImage = data.allWpPage.nodes.map(
    node => node.home.blastThroughDashboardImage.sourceUrl
  )

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <IntroSection />
        <PartnersSection />
        <TagCarousel list={tagList} />
        <DashboardSection />
        <ValueGrowSection
          heading={blastThroughTitle}
          subheading={blastThroughDescription}
          button={seeExampleButtonLabel}
          buttonURl={seeExampleButtonUrl}
          img={blastThroughDashboardImage}
        />
        <ValueGrowListSection />
        <ClientSection />
        <ProductSection />
        <CopyRightSection />
        <TrustTechSection />
        <VersusSection />
        <PricingSection />
        <TestimonialSection />
        <SubscribeSection />
        <OfferSection />
      </Layout>
    </>
  )
}
export default IndexPage
