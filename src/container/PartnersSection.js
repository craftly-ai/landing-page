import React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

const PartnersSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            partnersTitle
            partnersLogoList {
              logo {
                sourceUrl
                title
              }
            }
          }
        }
      }
    }
  `)

  let partnersTitle = data.allWpPage.nodes.map(node => node.home.partnersTitle)
  let partnersLogoList = data.allWpPage.nodes.map(node =>
    node.home.partnersLogoList.map(item => item.logo)
  )

  return (
    <div className="partners-logo-raw section">
      <div className="container">
        <p>{partnersTitle}</p>
        <ul>
          {partnersLogoList.map(e =>
            e.map((e, i) => (
              <li key={i}>
                <div className="logo-box">
                  <img src={e.sourceUrl} alt={e.title} />
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default PartnersSection
