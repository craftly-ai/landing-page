import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import { useStaticQuery, graphql, Link } from "gatsby"


const KeapMarketing = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "keap-marketing" } }) {
          nodes {
            keapMarketing{
              keapHeadTitle
            }
          }
        }
    }
  `)

  let keapHeadTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapHeadTitle
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
           <div className="section">
             <div className="container">
                <div className="text-wrap text-center">
                  <h1 dangerouslySetInnerHTML={{ __html: keapHeadTitle }} />
              </div>
             </div>
           </div>
         
        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default KeapMarketing
