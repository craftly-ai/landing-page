import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import InnerBanner from "./../components/innerBanner/InnerBanner"
import UpdateWarpSection from "./../container/learn/UpdateWarpSection"
import ProcessWarpSection from "./../container/learn/ProcessWarpSection"
import EarningWrapSection from "./../container/learn/EarningWrapSection"
import { useStaticQuery, graphql, Link } from "gatsby"

const Learn = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            bannerLogo
            bannerLearnButtonLabel
            bannerLearnButtonUrl
            bannerTitle
            bannerDescription
            chatWithUsButtonLabel
            chatWithUsButtonUrl
            emailUsButtonLabel
            emailId
          }
        }
      }
    }
  `)

  let bannerLogo = data.allWpPage.nodes.map(node => node.learn.bannerLogo)
  let bannerLearnButtonLabel = data.allWpPage.nodes.map(
    node => node.learn.bannerLearnButtonLabel
  )
  let bannerLearnButtonUrl = data.allWpPage.nodes.map(
    node => node.learn.bannerLearnButtonUrl
  )
  let bannerTitle = data.allWpPage.nodes.map(node => node.learn.bannerTitle)
  let bannerDescription = data.allWpPage.nodes.map(
    node => node.learn.bannerDescription
  )
  let chatWithUsButtonLabel = data.allWpPage.nodes.map(
    node => node.learn.chatWithUsButtonLabel
  )
  let chatWithUsButtonUrl = data.allWpPage.nodes.map(
    node => node.learn.chatWithUsButtonUrl
  )
  let emailUsButtonLabel = data.allWpPage.nodes.map(
    node => node.learn.emailUsButtonLabel
  )
  let emailId = data.allWpPage.nodes.map(node => node.learn.emailId)

  const metaTitle = "Academy"
  const metaDescription =
    "Craftly.AI | AI Powered Copywriter for Marketing Copy and Content"

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section className="relative">
          <div className="breadcrumbs mrt112 section">
            <div className="container">
              <ul>
                <li>
                  <Link className="replaceHref" to="/">
                    Home
                  </Link>{" "}
                  <span>/</span>
                </li>
                <li>The Academy</li>
              </ul>
            </div>
          </div>
          <InnerBanner
            bannerLogo={bannerLogo}
            bannerButtonLabel={bannerLearnButtonLabel}
            bannerButtonUrl={bannerLearnButtonUrl}
            bannerTitle={bannerTitle}
            bannerDescription={bannerDescription}
            bottomButtonLabel_1={chatWithUsButtonLabel}
            buttomButtonUrl_1={chatWithUsButtonUrl}
            buttomButtonLabel_2={emailUsButtonLabel}
            buttomButtonUrl_2={emailId}
            buttomClassButton_2={"btn-main email"}
            buttomIconButton_2={"fa fa-envelope"}
            seactionClass={"inner-banner section"}
          />
          <ProcessWarpSection />
          <UpdateWarpSection />
          <EarningWrapSection />
        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default Learn
