import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const WinnerSelectionSection = () => {
  const data = useStaticQuery(graphql`
    {
        allWpPage(filter: { slug: { eq: "scholarship" } }) {
            nodes {
                scholarship {
                  winnerSelectionDescription
                  winnerSelectionTitle
                  appreciateMessage
                }
            }
        }
    }
  `)

  let winnerSelectionTitle = data.allWpPage.nodes.map(
    node => node.scholarship.winnerSelectionTitle
  )
  let winnerSelectionDescription = data.allWpPage.nodes.map(
    node => node.scholarship.winnerSelectionDescription
  )

  let appreciateMessage = data.allWpPage.nodes.map(
    node => node.scholarship.appreciateMessage
  )

 


  return (
    
    <div className="winners-selection section">
      <div className="container sm-container">
          <h3 dangerouslySetInnerHTML={{ __html: winnerSelectionTitle }} />
          <div className="text-wrap" dangerouslySetInnerHTML={{ __html: winnerSelectionDescription }} />

          <div className="apptreciate-wrap section text-center">
              <h2 dangerouslySetInnerHTML={{ __html: appreciateMessage }} />
          </div>
      </div>
    </div>
  
    
  )
}

export default WinnerSelectionSection
