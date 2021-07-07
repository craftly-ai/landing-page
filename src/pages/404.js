import * as React from "react"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import Button from "./../components/404/Button"
import { useStaticQuery, graphql } from "gatsby"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "page-404" } }) {
        nodes {
          page404 {
            pageTopTitle
            image {
              sourceUrl
            }
            title
            description
            buttonGroup {
              label
              link
            }
          }
        }
      }
    }
  `)

  let pageTopTitle = data.allWpPage.nodes.map(node => node.page404.pageTopTitle)
  let image = data.allWpPage.nodes.map(node => node.page404.image.sourceUrl)
  let title = data.allWpPage.nodes.map(node => node.page404.title)
  let description = data.allWpPage.nodes.map(node => node.page404.description)
  let buttonGroup = data.allWpPage.nodes.map(node => node.page404.buttonGroup)

  return (
    <>
      <SEO title="404: Not found" />
      <Layout>
        <section className="default-page-raw section stick-gradient">
          <div className="page-404-wrapper section">
            <div className="container">
              <h3 dangerouslySetInnerHTML={{ __html: pageTopTitle }} />
              <div className="img-box">
                <img src={image} alt="" />
              </div>
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <h5 dangerouslySetInnerHTML={{ __html: description }} />
              <div className="btn-box-wrap">
                {buttonGroup.map(e =>
                  e.map((item, i) => {
                    return (
                      <Button key={i} link={item.link} label={item.label} />
                    )
                  })
                )}
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </Layout>
    </>
  )
}

export default NotFoundPage
