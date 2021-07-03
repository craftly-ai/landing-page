import React from "react"
import ProcessCard from "./../../components/processWrap/ProcessCard"
import IdeaWrap from "./../../components/processWrap/IdeaWrap"
import ToolGuidesWrapSection from "./ToolGuidesWrapSection"

const ProcessWarpSection = () => {
  return (
    <div className="section ptb100 pt-0 mobile-bg bg-purple">
      <div className="container">
        <div className="process-wrap text-center section">
          <ul>
            <li>
              <ProcessCard />
            </li>
            <li>
              <ProcessCard />
            </li>
            <li>
              <ProcessCard />
            </li>
            <li>
              <ProcessCard />
            </li>
          </ul>
          <IdeaWrap />
        </div>
        <ToolGuidesWrapSection />
      </div>
    </div>
  )
}

export default ProcessWarpSection
