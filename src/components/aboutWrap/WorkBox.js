import React from "react"

const WorkBox = props => {
  const { icon, title, description } = props

  return (
    <>
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <h5 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </>
  )
}

export default WorkBox
