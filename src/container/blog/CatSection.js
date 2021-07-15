import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const CatSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "blog-right-card-and-cat" } }) {
        nodes {
          blogRightCardAndCat {
            ctaTitle
            ctaDescription
            startEarningButtonLabel
            startEarningButtonUrl
            ctaImage {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  let ctaTitle = data.allWpPage.nodes[0].blogRightCardAndCat.ctaTitle
  let ctaDescription =
    data.allWpPage.nodes[0].blogRightCardAndCat.ctaDescription
  let startEarningButtonLabel =
    data.allWpPage.nodes[0].blogRightCardAndCat.startEarningButtonLabel
  let startEarningButtonUrl =
    data.allWpPage.nodes[0].blogRightCardAndCat.startEarningButtonUrl
  let ctaImage = data.allWpPage.nodes[0].blogRightCardAndCat.ctaImage.sourceUrl

  return (
    <div className="cta-raw section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 left-conn ptb80">
            <h2 dangerouslySetInnerHTML={{ __html: ctaTitle }} />
            <p dangerouslySetInnerHTML={{ __html: ctaDescription }} />
            <Link
              className="btn-main"
              to={startEarningButtonUrl}
              data-mode="popup"
              data-size={100}
              target="_blank"
              rel="noreferrer"
            >
              {startEarningButtonLabel}
            </Link>
          </div>
          <div className="col-sm-6 col-12 right-conn text-center">
            <img src={ctaImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatSection
