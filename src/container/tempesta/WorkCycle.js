import React from "react"
import workcycle from "../../images/workcycle.png"

const WorkCycle = () => {
  return (
    <div className="section">
      <div className="workcycle-section row">
        <div className="col-lg-9 col-md-12 m-auto">
          <div className="workcycle-container text-wrap text-center number-content">
            <img src={workcycle} className="img-fluid" alt="workcycle"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCycle
