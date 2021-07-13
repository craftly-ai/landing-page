import React from "react"

const StepList = props => {
  const { stepNo, description } = props
  return (
    <li>
      <span>Step {stepNo} </span>{" "}
      <h6 dangerouslySetInnerHTML={{ __html: description }} />
    </li>
  )
}

export default StepList
