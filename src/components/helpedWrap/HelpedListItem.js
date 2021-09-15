import React from "react"

const HelpedListItem = props => {
  const {value, description } = props

  return (
    <li>
      <div className="help-box">
        <span className="percentage">{value}<b>%</b></span>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        
      </div>
    </li>
  )
}

export default HelpedListItem
