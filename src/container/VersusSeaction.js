import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const VersusSeaction = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            humanVersusTitle
            voteADescription
            voteAButtonLabel
            voteAButtonUrl
            humanVersusImage {
              sourceUrl
            }
            voteBDescription
            voteBButtonLabel
            voteBButtonUrl
          }
        }
      }
    }
  `)

  let humanVersusTitle = data.allWpPage.nodes.map(
    node => node.home.humanVersusTitle
  )
  let voteADescription = data.allWpPage.nodes.map(
    node => node.home.voteADescription
  )
  let voteAButtonLabel = data.allWpPage.nodes.map(
    node => node.home.voteAButtonLabel
  )
  let humanVersusImage = data.allWpPage.nodes.map(
    node => node.home.humanVersusImage.sourceUrl
  )
  let voteBDescription = data.allWpPage.nodes.map(
    node => node.home.voteBDescription
  )
  let voteBButtonLabel = data.allWpPage.nodes.map(
    node => node.home.voteBButtonLabel
  )

  return (
    <div className="versus-h-part section right-section-container">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-lg-10 col-sm-12 text-center">
            <h2 dangerouslySetInnerHTML={{ __html: humanVersusTitle }} />
          </div>
        </div>
        {/* main part */}
        <div className="row hraw1">
          <div className="col-sm-4 col-xs-12 hcol1 pt-4 content-col">
            <div className="v-h-same-content">
              <p>{voteADescription}</p>
              <Link to="#" className="btn-main">
                {voteAButtonLabel}
              </Link>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 hcol1 pt-4 img-col">
            <img
              src={humanVersusImage}
              className="img-radius img-fluid"
              alt=""
            />
          </div>
          <div className="col-sm-4 col-xs-12 hcol1 pt-4 content-col">
            <div className="v-h-same-content">
              <p>{voteBDescription}</p>
              <Link to="#" className="btn-main">
                {voteBButtonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VersusSeaction
