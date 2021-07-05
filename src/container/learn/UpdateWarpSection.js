import React from "react"
import VideosWrapSection from "./VideosWrapSection"
import EventsWrapSection from "./EventsWrapSection"
import TakeitWrapSection from "./TakeitWrapSection"
import SubscribeWrapSection from "./SubscribeWrapSection"
import CommunitiesWrapSection from "./CommunitiesWrapSection"
import { useStaticQuery, graphql } from "gatsby"

const UpdateWarpSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            weGotTitle
            weGotDescription
          }
        }
      }
    }
  `)

  let weGotTitle = data.allWpPage.nodes.map(node => node.learn.weGotTitle)
  let weGotDescription = data.allWpPage.nodes.map(
    node => node.learn.weGotDescription
  )

  return (
    <div className="section ptb100">
      <div className="container">
        <VideosWrapSection />
        <EventsWrapSection />
        <TakeitWrapSection />
        <SubscribeWrapSection
          title={weGotTitle}
          description={weGotDescription}
          inputPlaceholder={"Email address"}
          submitLabel={"Sign Up"}
        />
        <CommunitiesWrapSection />
      </div>
    </div>
  )
}

export default UpdateWarpSection
