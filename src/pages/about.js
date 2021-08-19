import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import AboutSection from "./../container/about/AboutSection"
import CraftersSection from "./../container/about/CraftersSection"
import CommandmentsSection from "./../container/about/CommandmentsSection"
import PowerSection from "./../container/about/PowerSection"
import WorkWithUsSection from "./../container/about/WorkWithUsSection"
import SubscribeWrapSection from "./../container/learn/SubscribeWrapSection"
import OfferSection from "./../container/home/OfferSection"
import { useStaticQuery, graphql, Link } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "about" } }) {
        nodes {
          about {
            subscribeTitle
            subscribeDescription
            footerCtaTitle
            footerCtaDescription
            footerCtaButtonLabel
            footerCtaButtonUrl
            footerCtaImage {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  let subscribeTitle = data.allWpPage.nodes.map(
    node => node.about.subscribeTitle
  )
  let subscribeDescription = data.allWpPage.nodes.map(
    node => node.about.subscribeDescription
  )
  let footerCtaTitle = data.allWpPage.nodes.map(
    node => node.about.footerCtaTitle
  )

  let footerCtaDescription = data.allWpPage.nodes.map(
    node => node.about.footerCtaDescription
  )
  let footerCtaButtonLabel = data.allWpPage.nodes.map(
    node => node.about.footerCtaButtonLabel
  )
  let footerCtaButtonUrl = data.allWpPage.nodes.map(
    node => node.about.footerCtaButtonUrl
  )
  let footerCtaImage = data.allWpPage.nodes.map(
    node => node.about.footerCtaImage.sourceUrl
  )

  const metaTitle = "Meet Craftly.AI | GPT3 Copywriter Assistant"
  const metaDescription =
    "Cai is your AI-Powered copywriter. We’re SEO’ers from Toronto bringing the latest in artificial intelligence, GPT3 and machine learning to craft content at scale."

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section className="about-page-wrap section">
          <div className="breadcrumbs mrt112 section">
            <div className="container">
              <ul>
                <li>
                  <Link className="replaceHref" to="/">
                    Home
                  </Link>{" "}
                  <span>/</span>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
          <AboutSection />
          <CraftersSection />
          <CommandmentsSection />
          <PowerSection />
          <WorkWithUsSection />
          <SubscribeWrapSection
            title={subscribeTitle}
            description={subscribeDescription}
            inputPlaceholder={"Enter Your Email"}
            submitLabel={"I Want it!"}
          />
          <OfferSection
            title={footerCtaTitle}
            description={footerCtaDescription}
            buttonLabel={footerCtaButtonLabel}
            buttonUrl={footerCtaButtonUrl}
            img={footerCtaImage}
          />
        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default About
