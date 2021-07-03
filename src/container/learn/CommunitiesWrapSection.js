import React from "react"
import CommunitiesBox from "./../../components/updateWrap/CommunitiesBox"

const CommunitiesWrapSection = () => {
  return (
    <div className="communities-wrap section">
      <h2 className="text-center">Join Our Communities</h2>
      <ul className="col3">
        <li>
          <CommunitiesBox />
        </li>
        <li>
          <CommunitiesBox />
        </li>
        <li>
          <CommunitiesBox />
        </li>
      </ul>
    </div>
  )
}

export default CommunitiesWrapSection
