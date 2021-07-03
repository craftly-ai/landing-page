import * as React from "react"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/Layout"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import CustomBreadcrumb from "../components/breadcrumb/CustomBreadcrumb"
import Footer from "./../components/footer/Footer"
import { useStaticQuery, graphql } from "gatsby"

const TermsOfUse = location => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "terms-of-use" } }) {
        nodes {
          termsOfUse {
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
    crumbLabel: "Terms Of Use",
  })
  let title = data.allWpPage.nodes.map(node => node.termsOfUse.title)
  let intro = data.allWpPage.nodes.map(node => node.termsOfUse.intro)
  let points = data.allWpPage.nodes.map(node => node.termsOfUse.points)

  return (
    <>
      <SEO title="Craftly.AI | Terms of Use" />
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

export default TermsOfUse
