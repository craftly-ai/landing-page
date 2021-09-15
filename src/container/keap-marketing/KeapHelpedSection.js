import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import HelpedListItem from "../../components/helpedWrap/HelpedListItem"

const KeapHelpedSection = () => {
  const data = useStaticQuery(graphql`
    {
        allWpPage(filter: { slug: { eq: "keap-marketing" } }) {
            nodes {
                keapMarketing {
                    keapHelpedTitle
                    keapHelpedShortDescription
                    keapHelpedList {
                      description
                      percentageValue
                    }
                    keapHelpedNotes
                    keapHelpedLeftImage {
                      sourceUrl
                    }
                    keapHelpedRightImage {
                        sourceUrl
                    }
                }
            }
        }
    }
  `)


  let keapHelpedTitle = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapHelpedTitle
  )

  let keapHelpedShortDescription = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapHelpedShortDescription
  )

  let keapHelpedList = data.allWpPage.nodes.map(node => node.keapMarketing.keapHelpedList)

  let keapHelpedNotes = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapHelpedNotes
  )


  let keapHelpedLeftImage = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapHelpedLeftImage.sourceUrl
  )

  let keapHelpedRightImage = data.allWpPage.nodes.map(
    node => node.keapMarketing.keapHelpedRightImage.sourceUrl
  )

  return (
    <div className="helped-wrap section text-center">
      <div className="container">
            <div className="helped-head section">
                <h2 dangerouslySetInnerHTML={{ __html: keapHelpedTitle }} />
                <p>{keapHelpedShortDescription}</p>
            </div>
            <div className="help-list section">
                <div className="helpd-img">
                    <img src={keapHelpedLeftImage} className="img-fluid" alt="Keap Helped" />
                </div>
                <div className="helpd-img">
                    <img src={keapHelpedRightImage} className="img-fluid" alt="Keap Helped" />
                </div>
                <ul>
                    {keapHelpedList.map(e =>
                    e.map((item, i) => (
                        <HelpedListItem
                        key={i}
                        value={item.percentageValue}
                        description={item.description}
                        />
                    ))
                    )}
                </ul>
                <p className="notes">{keapHelpedNotes}</p>
            </div>
      </div>
    </div>

  )
}

export default KeapHelpedSection
