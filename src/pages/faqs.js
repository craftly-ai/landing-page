import * as React from "react"
import SEO from "../components/seo/seo"
import Layout from "../components/layout/Layout"
import Footer from "../components/footer/Footer"
import OfferSection from "./../container/home/OfferSection"
import SubscribeSection from "../container/faqs/SubscribeSection"
import { useStaticQuery, graphql } from "gatsby"

const TermsOfUse = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "faqs" } }) {
        nodes {
          faqs {
            questionAndAnswer {
              question
              answer
            }
            ctaTitle
            ctaDescription
            ctaImage {
              sourceUrl
            }
            readMoreButtonLabel
            readMoreButtonUrl
          }
        }
      }
    }
  `)

  let questionAndAnswer = data.allWpPage.nodes.map(
    node => node.faqs.questionAndAnswer
  )
  let ctaTitle = data.allWpPage.nodes.map(node => node.faqs.ctaTitle)
  let ctaDescription = data.allWpPage.nodes.map(
    node => node.faqs.ctaDescription
  )
  let readMoreButtonLabel = data.allWpPage.nodes.map(
    node => node.faqs.readMoreButtonLabel
  )
  let readMoreButtonUrl = data.allWpPage.nodes.map(
    node => node.faqs.readMoreButtonUrl
  )
  let ctaImage = data.allWpPage.nodes.map(node => node.faqs.ctaImage?.sourceUrl)

  const metaTitle = "FAQs | Craftly.AI"

  return (
    <>
      <SEO title={metaTitle} />
      <Layout>
        <section className="default-page-raw section stick-gradient">
          <div className="faqs-container">
            <div style={{ color: "white" }} className="container">
              <div className="row">
                <h2>Frequently asked questions</h2>
              </div>
              <div className="row">
                <div className="col-md-4 faq-sidelist">
                  <ul id="qlinklist">
                    {questionAndAnswer.map(e => {
                      return e.map((data, i) => {
                        return (
                          <li className={i === 0 ? "active" : ""} key={i}>
                            <a
                              href={
                                "#" +
                                data.question
                                  .replace(/\s+/g, "-")
                                  .replace(/[^A-Za-z0-9 -]/g, "-")
                              }
                            >
                              {data.question}
                            </a>
                          </li>
                        )
                      })
                    })}
                  </ul>
                </div>
                <div className="col-md-8 col-sm-12 faq-list">
                  {questionAndAnswer.map(e => {
                    return e.map((data, i) => {
                      return (
                        <div
                          key={i}
                          id={data.question
                            .replace(/\s+/g, "-")
                            .replace(/[^A-Za-z0-9 -]/g, "-")}
                        >
                          <div
                            className="question"
                            dangerouslySetInnerHTML={{ __html: data.question }}
                          />
                          <div
                            className="answer"
                            dangerouslySetInnerHTML={{ __html: data.answer }}
                          />
                        </div>
                      )
                    })
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <SubscribeSection />
        <OfferSection
          title={ctaTitle}
          description={ctaDescription}
          buttonLabel={readMoreButtonLabel}
          buttonUrl={readMoreButtonUrl}
          img={ctaImage}
        />
        <Footer />
      </Layout>
    </>
  )
}

export default TermsOfUse
