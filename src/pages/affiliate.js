import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import InnerBanner from "./../components/innerBanner/InnerBanner"
import TagCarousel from "./../components/carousel/TagCarousel"
import RangeSlide from "./../components/rangeslide/RangeSlide"
import ProductSellsSection from "./../container/earn/ProductSellsSection"
import AffiliateEarningSection from "./../container/earn/AffiliateEarningSection"
import AudienceSection from "./../container/earn/AudienceSection"
import AffiliatesSayingSection from "./../container/earn/AffiliatesSayingSection"
import JoinCommunitySection from "./../container/earn/JoinCommunitySection"
import { useStaticQuery, graphql } from "gatsby"

const Affiliate = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            tagsList {
              tag
            }
          }
        }
      }
    }
  `)

  let tagList = data.allWpPage.nodes.map(node =>
    node.home.tagsList.map(item => item.tag)
  )

  return (
    <>
      <SEO title-="Craftly.AI | Affiliate" />
      <Layout>
        <section className="section">
          <InnerBanner />
          <TagCarousel list={tagList} />
          <RangeSlide />
          <ProductSellsSection />
          <AffiliateEarningSection />
          <AudienceSection />
          <AffiliatesSayingSection />
          <JoinCommunitySection />
          <Footer />
        </section>
      </Layout>
    </>
  )
}

export default Affiliate
