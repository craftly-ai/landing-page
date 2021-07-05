import React from "react"
import CommandmentBox from "./../../components/aboutWrap/CommandmentBox"
import { useStaticQuery, graphql } from "gatsby"

const CommandmentsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "about" } }) {
        nodes {
          about {
            commandmentsTitle
            commandmentsList {
              title
              description
            }
          }
        }
      }
    }
  `)

  let commandmentsTitle = data.allWpPage.nodes.map(
    node => node.about.commandmentsTitle
  )
  let commandmentsList = data.allWpPage.nodes.map(
    node => node.about.commandmentsList
  )

  return (
    <div className="commandments-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <h2 dangerouslySetInnerHTML={{ __html: commandmentsTitle }} />
          </div>
        </div>
        <ul>
          {commandmentsList.map(e =>
            e.map((item, i) => {
              return (
                <li key={i}>
                  <CommandmentBox
                    title={item.title}
                    description={item.description}
                  />
                </li>
              )
            })
          )}
        </ul>
      </div>
    </div>
  )
}

export default CommandmentsSection
