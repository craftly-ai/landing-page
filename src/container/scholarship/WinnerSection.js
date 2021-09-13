import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const WinnerSection = () => {
  const data = useStaticQuery(graphql`
    {
        allWpPage(filter: { slug: { eq: "scholarship" } }) {
            nodes {
                scholarship {
                    winnersTopTitle
                    winnersTitle
                    winnersDate
                    winnerLeftImage {
                        sourceUrl
                    }
                    winnerRightImage {
                        sourceUrl
                    }
                    winnerSecondRightImage {
                    sourceUrl
                    }
                    winnerSelectionTitle
                    winnerSelectionDescription
                }
            }
        }
    }
  `)

  let winnersTopTitle = data.allWpPage.nodes.map(
    node => node.scholarship.winnersTopTitle
  )
  let winnersTitle = data.allWpPage.nodes.map(
    node => node.scholarship.winnersTitle
  )
  let winnersDate = data.allWpPage.nodes.map(
    node => node.scholarship.winnersDate
  )

  let winnerLeftImage = data.allWpPage.nodes.map(
    node => node.scholarship.winnerLeftImage.sourceUrl
  )
  let winnerRightImage = data.allWpPage.nodes.map(
    node => node.scholarship.winnerRightImage.sourceUrl
  )
  let winnerSecondRightImage = data.allWpPage.nodes.map(
    node => node.scholarship.winnerSecondRightImage.sourceUrl
  )

 


  return (
      
    <div className="winner-wrap section">
        <div className="left-wrap">
            <div className="img-wrap">
                <img src={winnerLeftImage} className="img-fluid" alt={winnersTopTitle} />
            </div>
        </div>
        <div className="right-wrap">
            <div className="img-wrap">
                <img src={winnerRightImage} className="img-fluid" alt={winnersTopTitle}/>
            </div>
            <div className="img-wrap">
                <img src={winnerSecondRightImage} className="img-fluid" alt={winnersTopTitle} />
            </div>
        </div>
        <div className="winners-con section">
            <div className="container sm-container">
                <h5 dangerouslySetInnerHTML={{ __html: winnersTopTitle }} />
                <div className="text-wrap">
                    <h2 dangerouslySetInnerHTML={{ __html: winnersTitle }} />
                    <h2 dangerouslySetInnerHTML={{ __html: winnersDate }} />
                </div>
            </div>
        </div>
    </div>


    
    
  )
}

export default WinnerSection
