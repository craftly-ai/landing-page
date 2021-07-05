import React from "react"
import CommandmentBox from "./../../components/aboutWrap/CommandmentBox"

const CommandmentsSection = () => {
  return (
    <div className="commandments-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <h2>The Commandments</h2>
          </div>
        </div>
        <ul>
          <li>
            <CommandmentBox />
          </li>
          <li>
            <CommandmentBox />
          </li>
          <li>
            <CommandmentBox />
          </li>
          <li>
            <CommandmentBox />
          </li>
          <li>
            <CommandmentBox />
          </li>
          <li>
            <CommandmentBox />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CommandmentsSection
