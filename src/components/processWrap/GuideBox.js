import React from "react"

const GuideBox = () => {
  return (
    <div className="guies-box top">
      <div className="img-wrap">
        <a href="tools.html">
          <img
            src="images/tool-input-output.jpg"
            alt="Tool Input/Output Examples"
            className="img-fluid"
          />
        </a>
        <div className="text-wrap">
          <span>GUIDE</span>
          <a href="tools.html" className="guide-title">
            Tool Input/Output Examples
          </a>
          <p>
            See examples for all our different types of tools to help you
            discover what to write for the best result
          </p>
        </div>
      </div>
    </div>
  )
}

export default GuideBox
