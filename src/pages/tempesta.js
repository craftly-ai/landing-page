import React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import TempestaBanner from "./../container/tempesta/TempestaBanner"
import HowdoWapper from "../container/tempesta/HowdoWapper"
import MediaByNumbers from "./../container/tempesta/MediaByNumbers"
import PricingSection from "./../container/tempesta/PricingSection"
import AffiliatesSaying from "./../container/tempesta/AffiliatesSaying"
import SubscribeSection from "./../container/tempesta/SubscribeSection"
import WorkCycle from "./../container/tempesta/WorkCycle"
import CardList from "../container/tempesta/CardList"
import OfferSection from "./../container/home/OfferSection"
import { useStaticQuery, graphql } from "gatsby"

function Tempesta() {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "tempesta" } }) {
        nodes {
          tempesta {
            ctaTitle
            ctaDescription
            ctaImage {
              sourceUrl
            }
            readMoreButtonLabel
            readMoreButtonUrl
          }
        }
      }
    }
  `)

  let ctaTitle = data.allWpPage.nodes.map(node => node.tempesta.ctaTitle)
  let ctaDescription = data.allWpPage.nodes.map(
    node => node.tempesta.ctaDescription
  )
  let readMoreButtonLabel = data.allWpPage.nodes.map(
    node => node.tempesta.readMoreButtonLabel
  )
  let readMoreButtonUrl = data.allWpPage.nodes.map(
    node => node.tempesta.readMoreButtonUrl
  )
  let ctaImage = data.allWpPage.nodes.map(
    node => node.tempesta.ctaImage?.sourceUrl
  )

  const metaTitle = "Tempesta | Craftly.AI"

  return (
    <>
      <SEO title={metaTitle} />
      <Layout>
        <section className="default-page-raw section stick-gradient">
          <TempestaBanner />
          <MediaByNumbers />
          <CardList />
          <HowdoWapper />
          <WorkCycle />
          <PricingSection />
<<<<<<< HEAD
=======
          {/* <AffiliatesSaying /> */}
>>>>>>> main
        </section>
        <SubscribeSection />
        <Footer />
      </Layout>
    </>
  )
}

export default Tempesta
