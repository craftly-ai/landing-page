import React from "react"

const ProcessCard = () => {
  return (
    <div className="box-wrap">
      <i>
        <img
          src="images/ic-step-by-step-guide.svg"
          className="img-fluid"
          alt="Step by Step Guide"
        />
      </i>
      <h5>Step by Step Guide</h5>
      <p>Tool documentation and other resources</p>
      <a href="documentation/index.html" className="btn-main">
        Find Resources
      </a>
    </div>
  )
}

export default ProcessCard
