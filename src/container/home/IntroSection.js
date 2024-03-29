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
            requestAccessUrl
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
  let requestAccessUrl = data.allWpPage.nodes.map(
    node => node.home.requestAccessUrl
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
            <a
              className="btn-main"
              target="_blank"
              rel="noreferrer"
              href={requestAccessUrl}
            >
              {requestAccessLabel}
            </a>
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
