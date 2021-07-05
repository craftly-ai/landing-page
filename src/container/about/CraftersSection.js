import React from "react"
import BoxCai from "./../../components/aboutWrap/BoxCai"
import TeamCard from "./../../components/aboutWrap/TeamCard"

const CraftersSection = () => {
  return (
    <div className="crafters-wrapper section ptb150">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 title">
            <div className="row">
              <div className="col-md-5 col-12">
                <h2>Crafters </h2>
              </div>
              <div className="col-md-7 col-12 text">
                <p>
                  Over the past year, we’ve formed a small but mighty team of A+
                  players, each with expansive knowledge and unparalleled
                  attention to detail.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <BoxCai />
            <ul>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
              <li>
                <TeamCard />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CraftersSection
