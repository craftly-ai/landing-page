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
import Footer from "./../components/footer/Footer"

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
            ctaTitle
            ctaDescription
            ctaImage {
              sourceUrl
            }
            startEarningButtonLabel
            startEarningButtonUrl
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
  let ctaTitle = data.allWpPage.nodes.map(node => node.home.ctaTitle)
  let ctaDescription = data.allWpPage.nodes.map(
    node => node.home.ctaDescription
  )
  let startEarningButtonLabel = data.allWpPage.nodes.map(
    node => node.home.startEarningButtonLabel
  )
  let startEarningButtonUrl = data.allWpPage.nodes.map(
    node => node.home.startEarningButtonUrl
  )
  let ctaImage = data.allWpPage.nodes.map(node => node.home.ctaImage.sourceUrl)

  const metaTitle =
    "Craftly.AI | AI Powered Copywriter for Marketing Copy and Content"
  const metaDescription =
    "Craftly.AI is your AI-Powered Copywriting assistant that generates high-performing original content the way you like it. Marketing copy and content. Free Trial."

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section class="section relative bg-gradient">
          <IntroSection />
          <TagCarousel list={tagList} />
          <DashboardSection />
          <PartnersSection />
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
          <OfferSection
            title={ctaTitle}
            description={ctaDescription}
            buttonLabel={startEarningButtonLabel}
            buttonUrl={startEarningButtonUrl}
            img={ctaImage}
          />
          <Footer />
        </section>
      </Layout>
    </>
  )
}
export default IndexPage
