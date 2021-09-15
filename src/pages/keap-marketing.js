import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import ApplicationSection from "../container/keap-marketing/ApplicationSection"
import KeapHelpedSection from "../container/keap-marketing/KeapHelpedSection"
import SalesFunnelSection from "../container/keap-marketing/SalesFunnelSection"
import PlayBookSection from "../container/keap-marketing/PlayBookSection"
import IntegrateSection from "../container/keap-marketing/IntegrateSection"
import TryKeapSection from "../container/keap-marketing/TryKeapSection"
import { useStaticQuery, graphql, Link } from "gatsby"


const KeapMarketing = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "keap-marketing" } }) {
          nodes {
            keapMarketing{
              keapLogo {
                sourceUrl
              }
              craftlyLogo {
                sourceUrl
              }
              keapHeadTitle
              keapSubTitle
              keapShortDescription
            }
          }
        }
    }
  `)

  let keapLogo = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapLogo.sourceUrl
  )
  let craftlyLogo = data.allWpPage.nodes.map(
    node => node.keapMarketing.craftlyLogo.sourceUrl
  )
  let keapHeadTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapHeadTitle
  )
  let keapSubTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapSubTitle
  )
  let keapShortDescription = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapShortDescription
  )


  

  const metaTitle = "Craftly.AI Academy | Help Center"
  const metaDescription =
    "Get started with our education centre. We have training, tutorials, and tips for using your Craftly.AI Copywriting Assistant more effectively. Learn. Craft. Scale."

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section>
          <div className="breadcrumbs mrt112 section">
              <div className="container">
                <ul>
                  <li>
                    <Link className="replaceHref" to="/">
                      Home
                    </Link>{" "}
                    <span>/</span>
                  </li>
                  <li>Keap Marketing</li>
                </ul>
              </div>
            </div>
          <div className="inner-banner ptb100  keap-banner section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-md-12 m-auto">
                    <div className="text-wrap text-center">
                    <div className="logo-btn top-action">
                      <span className="logo"><img src={keapLogo} className="img-fluid" alt="Keap" /></span>
                      <span className="logo"><img src={craftlyLogo} className="img-fluid" alt="Craftly" /></span>
                    </div>
                      <h1 dangerouslySetInnerHTML={{ __html: keapHeadTitle }} />
                      <h5 dangerouslySetInnerHTML={{ __html: keapSubTitle }} />
                      <p dangerouslySetInnerHTML={{ __html: keapShortDescription }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ApplicationSection />

            <KeapHelpedSection />

            <SalesFunnelSection />

            <PlayBookSection />

            <IntegrateSection />

            <TryKeapSection />
        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default KeapMarketing
