import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const OfferSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            ctaTitle
            ctaDescription
            ctaImage {
              sourceUrl
            }
            startEarningButtonLabel
            startEarningButtonUrl
          }
        }
      }
    }
  `)

  let ctaTitle = data.allWpPage.nodes.map(node => node.home.ctaTitle)
  let ctaDescription = data.allWpPage.nodes.map(
    node => node.home.ctaDescription
  )
  let startEarningButtonLabel = data.allWpPage.nodes.map(
    node => node.home.startEarningButtonLabel
  )
  let ctaImage = data.allWpPage.nodes.map(node => node.home.ctaImage.sourceUrl)

  return (
    <div className="cta-raw section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 left-conn ptb80">
            <h2 dangerouslySetInnerHTML={{ __html: ctaTitle }} />
            <p>{ctaDescription}</p>
            <Link className="btn-main" data-mode="popup" data-size={100}>
              {startEarningButtonLabel}
            </Link>
          </div>
          <div className="col-sm-6 col-12 right-conn text-center">
            <img src={ctaImage} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferSection
