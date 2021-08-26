import React from "react"
import Typewriter from "../../components/Typewriter/Typewriter"
import img from "../../images/banner-bg-image-min.png"
import { useStaticQuery, graphql } from "gatsby"

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            bannerTagLine
            typerText
            bannerShortDescription
            requestAccessLabel
            freeTrialLabel
          }
        }
      }
    }
  `)

  let bannerTagLine = data.allWpPage.nodes.map(node => node.home.bannerTagLine)
  let bannerShortDescription = data.allWpPage.nodes.map(
    node => node.home.bannerShortDescription
  )
  let requestAccessLabel = data.allWpPage.nodes.map(
    node => node.home.requestAccessLabel
  )
  let freeTrialLabel = data.allWpPage.nodes.map(
    node => node.home.freeTrialLabel
  )
  let typerText = data.allWpPage.nodes.map(node => node.home.typerText)

  return (
    <div className="hero section">
      <div className="container">
        <div className="row hero-con">
          <div className="col-sm-6 col-12 justify-content-center align-self-center left-conn">
            <h1 dangerouslySetInnerHTML={{ __html: bannerTagLine }} />
            <Typewriter
              dataPeriod={2000}
              art={"Craftly"}
              dataRotate={typerText}
            />
            <p>{bannerShortDescription}</p>
            <div className="request-access-raw section">
              <div className="form-group">
                <label htmlFor>{requestAccessLabel}</label>
                <div className="prefinery-form-embed">
                  <iframe
                    title="email input"
                    src="https://i.prefinery.com/projects/g72qxl5b/users/new?display=inline&amp;version=2"
                    class="prefinery-iframe"
                    allowtransparency="true"
                    width="100%"
                    scrolling="no"
                    frameborder="0"
                    style={{ height: "0px" }}
                  ></iframe>
                </div>
              </div>
              {/* <h6>
                <span /> {freeTrialLabel}
              </h6> */}
            </div>
          </div>
          <div className="col-sm-6 col-12 justify-content-center align-self-center right-conn">
            <div className="img-box" id="lottie">
              <img src={img} alt="IntroSection" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
