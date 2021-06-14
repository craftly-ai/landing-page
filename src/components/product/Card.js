import React from "react"

const Card = props => {
  const { title, info } = props

  return (
    <li className="grid-item">
      <div className="white-box section">
        <h5>{title}</h5>
        <p>{info}</p>
      </div>
    </li>
  )
}

export default Card
