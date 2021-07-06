import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import CustomBreadcrumb from "../components/breadcrumb/CustomBreadcrumb"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import Footer from "./../components/footer/Footer"
import { useStaticQuery, graphql } from "gatsby"

const PrivacyPolicy = location => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "privacy-policy" } }) {
        nodes {
          privacyPolicy {
            title
            intro
            points
          }
        }
      }
    }
  `)

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Privacy Policy",
  })

  let title = data.allWpPage.nodes.map(node => node.privacyPolicy.title)
  let intro = data.allWpPage.nodes.map(node => node.privacyPolicy.intro)
  let points = data.allWpPage.nodes.map(node => node.privacyPolicy.points)

  const metaTitle = "Privacy Policy"
  const metaDescription = ""

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section className="default-page-raw section stick-gradient">
          <CustomBreadcrumb crumbs={crumbs} />
          <div className="privacy-policy-raw section">
            <div className="container">
              <div className="privacy-head">
                <h1 dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: intro }} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: points }} />
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  )
}

export default PrivacyPolicy
