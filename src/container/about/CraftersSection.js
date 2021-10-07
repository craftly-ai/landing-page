import React from "react"
import BoxCai from "./../../components/aboutWrap/BoxCai"
import TeamCard from "./../../components/aboutWrap/TeamCard"
import { useStaticQuery, graphql } from "gatsby"

const CraftersSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "about" } }) {
        nodes {
          about {
            craftersTitle
            craftersShortDescription
            caiTitle
            caiSubTitle
            caiDescription
            caiImage {
              sourceUrl
            }
            teamList {
              profileLink
              backgroundColorHashcode
              memberAvatar {
                sourceUrl
              }
              name
              designation
            }
          }
        }
      }
    }
  `)

  let craftersTitle = data.allWpPage.nodes.map(node => node.about.craftersTitle)
  let craftersShortDescription = data.allWpPage.nodes.map(
    node => node.about.craftersShortDescription
  )
  let caiTitle = data.allWpPage.nodes.map(node => node.about.caiTitle)
  let caiSubTitle = data.allWpPage.nodes.map(node => node.about.caiSubTitle)
  let caiDescription = data.allWpPage.nodes.map(
    node => node.about.caiDescription
  )
  let caiImage = data.allWpPage.nodes.map(
    node => node.about.caiImage?.sourceUrl
  )
  let teamList = data.allWpPage.nodes.map(node => node.about.teamList)

  return (
    <div className="crafters-wrapper section ptb150">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 title">
            <div className="row">
              <div className="col-md-5 col-12">
                <h2 dangerouslySetInnerHTML={{ __html: craftersTitle }} />
              </div>
              <div className="col-md-7 col-12 text">
                <p
                  dangerouslySetInnerHTML={{ __html: craftersShortDescription }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <BoxCai
              title={caiTitle}
              subTitle={caiSubTitle}
              description={caiDescription}
              img={caiImage}
            />
            <ul>
              {teamList.map(e =>
                e.map((item, i) => {
                  return (
                    <li key={i}>
                      <TeamCard
                        link={item.profileLink}
                        bgColor={item.backgroundColorHashcode}
                        img={item.memberAvatar?.sourceUrl}
                        name={item.name}
                        designation={item.designation}
                      />
                    </li>
                  )
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CraftersSection
