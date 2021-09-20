import React from "react"
import SearchBar from "../../components/dashboard/SearchBar"
import DescriptionBox from "../../components/dashboard/DescriptionBox"
import FormGenerateIdeas from "../../components/dashboard/FormGenerateIdeas"
import IdeasBox from "../../components/dashboard/ideasbox/IdeasBox"
import { useStaticQuery, graphql } from "gatsby"

const DashboardSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            dashboardTitle
            productDescriptionTitle
            dashboardShortDescription
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

  let dashboardTitle = data.allWpPage.nodes.map(
    node => node.home.dashboardTitle
  )
  let productDescriptionTitle = data.allWpPage.nodes.map(
    node => node.home.productDescriptionTitle
  )
  let dashboardShortDescription = data.allWpPage.nodes.map(
    node => node.home.dashboardShortDescription
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
        <div className="container" id="craftly-ai-demo">
          <div className="desktop-block craftly-ai-demo section">
            <SearchBar url={dashboardTitle} />
            <div className="desktop-screen">
              <h6>{dashboardTitle}</h6>
              <DescriptionBox
                title={productDescriptionTitle}
                description={dashboardShortDescription}
                button1={chooseLanguageButtonLabel}
                button2={viewSavedButtonLabel}
              />
              <div className="box-wrapper">
                <div className="left-box">
                  <FormGenerateIdeas
                    labelinput={"Product/brand name"}
                    datarotateinput={"Liv"}
                    input={"Name of your product"}
                    tooltipstep1={tooltipFirstStepText}
                    labelinfo={"Description of your product*"}
                    countof={"0 of 500"}
                    datarotateinfo={"Multivitamin for hair, nails and skin"}
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

export default DashboardSection
