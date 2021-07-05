import React from "react"
import ProcessCard from "./../../components/processWrap/ProcessCard"
import IdeaWrap from "./../../components/processWrap/IdeaWrap"
import ToolGuidesWrapSection from "./ToolGuidesWrapSection"
import { useStaticQuery, graphql } from "gatsby"

const ProcessWarpSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            learnList {
              icon {
                sourceUrl
              }
              title
              description
              buttonLabel
              buttonUrl
            }
            learnCtaText
            learnCtaLinkLabel
            learnCtaLinkUrl
          }
        }
      }
    }
  `)

  let learnList = data.allWpPage.nodes.map(node => node.learn.learnList)
  let learnCtaText = data.allWpPage.nodes.map(node => node.learn.learnCtaText)
  let learnCtaLinkLabel = data.allWpPage.nodes.map(
    node => node.learn.learnCtaLinkLabel
  )
  let learnCtaLinkUrl = data.allWpPage.nodes.map(
    node => node.learn.learnCtaLinkUrl
  )

  return (
    <div className="section ptb100 pt-0 mobile-bg bg-purple">
      <div className="container">
        <div className="process-wrap text-center section">
          <ul>
            {learnList.map(e =>
              e.map((item, i) => {
                return (
                  <li kry={i}>
                    <ProcessCard
                      icon={item.icon.sourceUrl}
                      title={item.title}
                      description={item.description}
                      buttonLabel={item.buttonLabel}
                      buttonUrl={item.buttonUrl}
                    />
                  </li>
                )
              })
            )}
          </ul>
          <IdeaWrap
            text={learnCtaText}
            url={learnCtaLinkUrl}
            label={learnCtaLinkLabel}
          />
        </div>
        <ToolGuidesWrapSection />
      </div>
    </div>
  )
}

export default ProcessWarpSection
