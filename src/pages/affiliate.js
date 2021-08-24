import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import InnerBanner from "./../components/innerBanner/InnerBanner"
import TagCarousel from "./../components/carousel/TagCarousel"
import RangeSlide from "./../components/rangeslide/RangeSlide"
import ProductSellsSection from "./../container/earn/ProductSellsSection"
import AffiliateEarningSection from "./../container/earn/AffiliateEarningSection"
import AudienceList from "./../components/audience/AudienceList"
import AffiliatesSayingSection from "./../container/earn/AffiliatesSayingSection"
import JoinCommunitySection from "./../container/earn/JoinCommunitySection"
import { useStaticQuery, graphql } from "gatsby"

const Affiliate = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "affiliate" } }) {
        nodes {
          affiliate {
            bannerLogo
            bannerLearnButtonLabel
            bannerLearnButtonUrl
            bannerTitle
            bannerDescription
            chatWithUsButtonLabel
            chatWithUsButtonUrl
            viewDemoButtonLabel
            viewDemoButtonUrl
            affiliateTagsList {
              tag
            }
            earningPotentialTitle
            earningPotentialDescription
            productSellsList {
              title
              description
              image {
                sourceUrl
              }
            }
            youHaveTitle
            youHaveSubTitle
            audienceList {
              title
              description
            }
          }
        }
      }
    }
  `)

  let bannerLogo = data.allWpPage.nodes.map(node => node.affiliate.bannerLogo)
  let bannerLearnButtonLabel = data.allWpPage.nodes.map(
    node => node.affiliate.bannerLearnButtonLabel
  )
  let bannerLearnButtonUrl = data.allWpPage.nodes.map(
    node => node.affiliate.bannerLearnButtonUrl
  )
  let bannerTitle = data.allWpPage.nodes.map(node => node.affiliate.bannerTitle)
  let bannerDescription = data.allWpPage.nodes.map(
    node => node.affiliate.bannerDescription
  )
  let chatWithUsButtonLabel = data.allWpPage.nodes.map(
    node => node.affiliate.chatWithUsButtonLabel
  )
  let chatWithUsButtonUrl = data.allWpPage.nodes.map(
    node => node.affiliate.chatWithUsButtonUrl
  )
  let viewDemoButtonLabel = data.allWpPage.nodes.map(
    node => node.affiliate.viewDemoButtonLabel
  )
  let viewDemoButtonUrl = data.allWpPage.nodes.map(
    node => node.affiliate.viewDemoButtonUrl
  )
  let affiliateTagsList = data.allWpPage.nodes.map(node =>
    node.affiliate.affiliateTagsList.map(item => item.tag)
  )
  let earningPotentialTitle = data.allWpPage.nodes.map(
    node => node.affiliate.earningPotentialTitle
  )
  let earningPotentialDescription = data.allWpPage.nodes.map(
    node => node.affiliate.earningPotentialDescription
  )
  let productSellsList = data.allWpPage.nodes.map(
    node => node.affiliate.productSellsList
  )
  let youHaveTitle = data.allWpPage.nodes.map(
    node => node.affiliate.youHaveTitle
  )
  let youHaveSubTitle = data.allWpPage.nodes.map(
    node => node.affiliate.youHaveSubTitle
  )
  let audienceList = data.allWpPage.nodes.map(
    node => node.affiliate.audienceList
  )

  const metaTitle = "Craftly.AI | Affiliate Partner Program [Refer and Earn]"
  const metaDescription =
    "Earn money monthly. High earning potential. Earn up to 30% passive income / commission by referring friends, family, randoms. Seriously, there is no limit."

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section className="section">
          <InnerBanner
            bannerLogo={bannerLogo}
            bannerButtonLabel={bannerLearnButtonLabel}
            bannerButtonUrl={bannerLearnButtonUrl}
            bannerTitle={bannerTitle}
            bannerDescription={bannerDescription}
            bottomButtonLabel_1={chatWithUsButtonLabel}
            buttomButtonUrl_1={chatWithUsButtonUrl}
            buttomButtonLabel_2={viewDemoButtonLabel}
            buttomButtonUrl_2={viewDemoButtonUrl}
            buttomClassButton_2={"btn-main view"}
            seactionClass={"inner-banner affiliate-banner section"}
            buttomIconButton_2={""}
          />
          <TagCarousel list={affiliateTagsList} />
          <RangeSlide
            title={earningPotentialTitle}
            description={earningPotentialDescription}
          />
          <ProductSellsSection list={productSellsList} />
          <AffiliateEarningSection />
          <AudienceList
            title={youHaveTitle}
            subTitle={youHaveSubTitle}
            list={audienceList}
          />
          <AffiliatesSayingSection />
          <JoinCommunitySection />
          <Footer />
        </section>
      </Layout>
    </>
  )
}

export default Affiliate
