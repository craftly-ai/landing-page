import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TempestaBanner = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "tempesta" } }) {
        nodes {
          tempesta {
            bannerLogoTempesta {
              sourceUrl
            }
            bannerLogoCraftly {
              sourceUrl
            }
            bannerTitle
            bannerSubtitle
            bannerDescription
          }
        }
      }
    }
  `)

  let bannerLogoTempesta = data.allWpPage.nodes.map(
    node => node.tempesta.bannerLogoTempesta.sourceUrl
  )
  let bannerLogoCraftly = data.allWpPage.nodes.map(
    node => node.tempesta.bannerLogoCraftly.sourceUrl
  )
  let bannerTitle = data.allWpPage.nodes.map(node => node.tempesta.bannerTitle)
  let bannerSubtitle = data.allWpPage.nodes.map(
    node => node.tempesta.bannerSubtitle
  )
  let bannerDescription = data.allWpPage.nodes.map(
    node => node.tempesta.bannerDescription
  )

  return (
    <div className="inner-banner tempesta-banner affiliate-banner section">
      <div className="banner-con">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 m-auto">
              <div className="text-wrap text-center">
                <div className="logo-btn top-action">
                  <img src={bannerLogoTempesta} alt="bannerLogoTempesta" />
                  <div class="divider"></div>
                  <img src={bannerLogoCraftly} alt="bannerLogoCraftly" />
                </div>
                <h1 dangerouslySetInnerHTML={{ __html: bannerTitle }} />
                <p dangerouslySetInnerHTML={{ __html: bannerSubtitle }} />
                <p dangerouslySetInnerHTML={{ __html: bannerDescription }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TempestaBanner
