import React from "react"
import VideosWrapSection from "./VideosWrapSection"
import EventsWrapSection from "./EventsWrapSection"
import TakeitWrapSection from "./TakeitWrapSection"
import SubscribeWrapSection from "./SubscribeWrapSection"
import CommunitiesWrapSection from "./CommunitiesWrapSection"

const UpdateWarpSection = () => {
  return (
    <div className="section ptb100">
      <div className="container">
        <VideosWrapSection />
        <EventsWrapSection />
        <TakeitWrapSection />
        <SubscribeWrapSection />
        <CommunitiesWrapSection />
      </div>
    </div>
  )
}

export default UpdateWarpSection
