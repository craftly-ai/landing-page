import React from "react"
import CardCollapse from "../../components/trustTech/CardCollapse"
import backimg from "../../images/world-map.png"
import Parameters from "../../components/trustTech/Parameters"
import { useStaticQuery, graphql } from "gatsby"

const TrustTechSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            trustTechnologyTitle
            trustTechnologyDescripton
            trustTechnologyFaq {
              question
              answer
            }
            parametersList {
              text
              description
            }
          }
        }
      }
    }
  `)

  let trustTechnologyTitle = data.allWpPage.nodes.map(
    node => node.home.trustTechnologyTitle
  )
  let trustTechnologyDescripton = data.allWpPage.nodes.map(
    node => node.home.trustTechnologyDescripton
  )
  let trustTechnologyFaq = data.allWpPage.nodes.map(
    node => node.home.trustTechnologyFaq
  )
  let parametersList = data.allWpPage.nodes.map(
    node => node.home.parametersList
  )

  return (
    <div className="trust-technology-raw section right-section-container">
      <div className="trust-technology-col section">
        <div className="container">
          <div className="row">
            {/* left column */}
            <div className="col-sm-6 col-xs-12 left-conn">
              <div className="dnt-t-left-part">
                <h2
                  dangerouslySetInnerHTML={{ __html: trustTechnologyTitle }}
                />
                <p>{trustTechnologyDescripton}</p>
                <div className="accrdion-raw section" id="accordion">
                  {trustTechnologyFaq.map(e =>
                    e.map((item, i) => (
                      <CardCollapse
                        key={i}
                        title={item.question}
                        info={item.answer}
                        id={i}
                        dataTarget={
                          item.question.substr(0, item.question.indexOf(" ")) +
                          i
                        }
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parameters-raw section">
        {/* another row */}
        <div className="container">
          <div className="row">
            {parametersList.map(e =>
              e.map((item, i) => (
                <Parameters key={i} title={item.text} info={item.description} />
              ))
            )}
          </div>
        </div>
      </div>
      <img className="img-fluid desktop-none" src={backimg} alt="" />
    </div>
  )
}

export default TrustTechSection
