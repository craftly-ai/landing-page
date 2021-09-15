import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import RelatedFieldsSection from "./../container/scholarship/RelatedFieldsSection"
import WinnerSection from "./../container/scholarship/WinnerSection"
import LeftImoji from "./../images/left-imoji.png"
import RightImoji from "./../images/right-imoji.png"
import HowToApplySection from "../container/scholarship/HowToApplySection"
import WinnerSelectionSection from "../container/scholarship/WinnerSelectionSection"
import { useStaticQuery, graphql } from "gatsby"

const Scholarship = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "scholarship" } }) {
        nodes {
          scholarship {
            topTitle
            scholarshipDescription
            submissionsButtonLabel
            submissionsButtonUrl
            whoApplyText
          }
        }
      }
    }
  `)

  let topTitle = data.allWpPage.nodes.map(node => node.scholarship.topTitle)
  let scholarshipDescription = data.allWpPage.nodes.map(
    node => node.scholarship.scholarshipDescription
  )
  let submissionsButtonLabel = data.allWpPage.nodes.map(
    node => node.scholarship.submissionsButtonLabel
  )
  let submissionsButtonUrl = data.allWpPage.nodes.map(
    node => node.scholarship.submissionsButtonUrl
  )
  let whoApplyText = data.allWpPage.nodes.map(
    node => node.scholarship.whoApplyText
  )


  const metaTitle = "Craftly.AI Academy | Scholarship"
  const metaDescription =
    "Get started with our education centre. We have training, tutorials, and tips for using your Craftly.AI Copywriting Assistant more effectively. Learn. Craft. Scale."

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section>
          <div className="scholer-head section">
            <span className="head-imoji">
              <img src={LeftImoji} alt="Craftly Imoji" className="img-fluid" />
            </span>
            <span className="head-imoji">
              <img src={RightImoji} alt="Craftly Imoji" className="img-fluid" />
            </span>
            <div className="container sm-container">
              <div className="text-wrap text-center">
                <h5 dangerouslySetInnerHTML={{ __html: topTitle }} />
                <h2
                  dangerouslySetInnerHTML={{ __html: scholarshipDescription }}
                />
                <a className="btn-main mt-0" href={submissionsButtonUrl}>
                  {submissionsButtonLabel}
                </a>
              </div>
            </div>
          </div>

          <div className="whoapply-wrap text-center section">
            <div className="container sm-container">
              <div
                className="text-wrap"
                dangerouslySetInnerHTML={{ __html: whoApplyText }}
              />
            </div>
          </div>

          <RelatedFieldsSection />

          <HowToApplySection />

          <WinnerSection />

          <WinnerSelectionSection />

        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default Scholarship
