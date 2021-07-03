import React from "react"
import GuideBox from "./../../components/processWrap/GuideBox"
import GuideCard from "./../../components/processWrap/GuideCard"

const ToolGuidesWrapSection = () => {
  return (
    <div className="tool-guides-wrap section ptb100 pb-0">
      <div className="row align-items-center title-wrap">
        <div className="col-sm-8">
          <h2>Tool Guides</h2>
        </div>
        <div className="col-sm-4">
          <a href="documentation/index.html" className="more-btn">
            View all Guides
          </a>
        </div>
      </div>
      <div className="guides-main section">
        <GuideBox />
        <ul className="col3">
          <li>
            <GuideCard />
          </li>
          <li>
            <GuideCard />
          </li>
          <li>
            <GuideCard />
          </li>
        </ul>
      </div>
      <a
        href="https://craftly.ai/documentation/index.html"
        class="btn-main mobile"
      >
        View all Guides
      </a>
    </div>
  )
}

export default ToolGuidesWrapSection
