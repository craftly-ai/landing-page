import React from "react"
import trustTechData from "../data/trustTechData.json"
import CardCollapse from "./../components/trustTech/CardCollapse"
import backimg from "../images/world-map.png"
import Parameters from "./../components/trustTech/Parameters"

const TrustTechSeaction = () => {
  return (
    <div className="trust-technology-raw section right-section-container">
      <div className="trust-technology-col section">
        <div className="container">
          <div className="row">
            {/* left column */}
            <div className="col-sm-6 col-xs-12 left-conn">
              <div className="dnt-t-left-part">
                <h2>
                  {trustTechData.headingL1} <br />
                  {trustTechData.headingL2}
                </h2>
                <p>{trustTechData.subtitle}</p>
                <div className="accrdion-raw section" id="accordion">
                  {trustTechData.cardcollapse.map(function (item) {
                    return (
                      <CardCollapse
                        title={item.title}
                        info={item.info}
                        id={item.id}
                        dataTarget={item.dataTarget}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parameters-raw section">
        {/* another row */}
        <div className="container">
          <div className="row">
            {trustTechData.parameters.map(function (item) {
              return <Parameters title={item.title} info={item.info} />
            })}
          </div>
        </div>
      </div>
      <img className="img-fluid desktop-none" src={backimg} alt="" />
    </div>
  )
}

export default TrustTechSeaction
