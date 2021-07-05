import React from "react"
import WorkCard from "./../../components/aboutWrap/WorkCard"
import WorkBox from "./../../components/aboutWrap/WorkBox"

const WorkWithUsSection = () => {
  return (
    <div className="work-with-us-wrap section pb80">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 text-center">
            <h2>Work With Us</h2>
          </div>
          <div className="col-md-12 col-12 details-wrap">
            <ul>
              <li>
                <WorkCard />
              </li>
              <li>
                <WorkCard />
              </li>
              <li>
                <WorkCard />
              </li>
              <li>
                <WorkCard />
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-12 icon-wrap">
            <ul>
              <li>
                <WorkBox />
              </li>
              <li>
                <WorkBox />
              </li>
              <li>
                <WorkBox />
              </li>
              <li>
                <WorkBox />
              </li>
              <li>
                <WorkBox />
              </li>
              <li>
                <WorkBox />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkWithUsSection
