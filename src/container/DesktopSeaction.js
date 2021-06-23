import React from "react"
import SearchBar from "./../components/desktop/SearchBar"
import DescriptionBox from "./../components/desktop/DescriptionBox"
import FormGenerateIdeas from "./../components/desktop/FormGenerateIdeas"
import IdeasBox from "./../components/desktop/ideasbox/IdeasBox"
import { useStaticQuery, graphql } from "gatsby"

const DesktopSeaction = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            dashbordTitle
            productDescriptionTitle
            dashbordShortDescription
            chooseLanguageButtonLabel
            viewSavedButtonLabel
            tooltipFirstStepText
            tooltipSecondStepText
            generateIdeasButtonLabel
            generateIdeasList {
              ideaText
            }
            keepCraftingButtonLabel
          }
        }
      }
    }
  `)

  let dashbordTitle = data.allWpPage.nodes.map(node => node.home.dashbordTitle)
  let productDescriptionTitle = data.allWpPage.nodes.map(
    node => node.home.productDescriptionTitle
  )
  let dashbordShortDescription = data.allWpPage.nodes.map(
    node => node.home.dashbordShortDescription
  )
  let chooseLanguageButtonLabel = data.allWpPage.nodes.map(
    node => node.home.chooseLanguageButtonLabel
  )
  let viewSavedButtonLabel = data.allWpPage.nodes.map(
    node => node.home.viewSavedButtonLabel
  )
  let tooltipFirstStepText = data.allWpPage.nodes.map(
    node => node.home.tooltipFirstStepText
  )
  let tooltipSecondStepText = data.allWpPage.nodes.map(
    node => node.home.tooltipSecondStepText
  )
  let generateIdeasButtonLabel = data.allWpPage.nodes.map(
    node => node.home.generateIdeasButtonLabel
  )
  let generateIdeasList = data.allWpPage.nodes.map(
    node => node.home.generateIdeasList
  )
  let keepCraftingButtonLabel = data.allWpPage.nodes.map(
    node => node.home.keepCraftingButtonLabel
  )

  return (
    <>
      <div className="production-raw section ptb100">
        <div className="container">
          <div className="desktop-block craftly-ai-demo section">
            <SearchBar url={dashbordTitle} />
            <div className="desktop-screen">
              <h6>{dashbordTitle}</h6>
              <DescriptionBox
                title={productDescriptionTitle}
                description={dashbordShortDescription}
                button1={chooseLanguageButtonLabel}
                button2={viewSavedButtonLabel}
              />
              <div className="box-wrapper">
                <div className="left-box">
                  <FormGenerateIdeas
                    lableinput={"Product/brand name"}
                    datarotateinput={"Liv"}
                    input={"Name of your product"}
                    tooltipstep1={tooltipFirstStepText}
                    lableinfo={"Description of your product*"}
                    datarotateinfo={"Multivitamin for hair, nail and skin"}
                    info={"A couple words will do!"}
                    button={generateIdeasButtonLabel}
                    tooltipstep2={tooltipSecondStepText}
                    dataperiod={2000}
                  />
                </div>
                <div className="right-box">
                  <IdeasBox
                    linkall={"All"}
                    linkfavorite={"Favorites"}
                    linkcopyall={"Copy All"}
                    headingline1={
                      "Feed Cai prompts on the left to start Crafting."
                    }
                    headingline2={
                      "(You get what you put into it, so be descriptive)"
                    }
                    idealist={generateIdeasList}
                    buttonkeepcrafting={keepCraftingButtonLabel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopSeaction
