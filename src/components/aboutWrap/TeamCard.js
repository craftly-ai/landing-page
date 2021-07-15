import React from "react"
import { Link } from "gatsby"

const TeamCard = props => {
  const { link, bgColor, img, name, designation } = props

  return (
    <Link to={link} target="_blank" rel="noreferrer">
      <div className="img-box" style={{ backgroundColor: bgColor }}>
        <img src={img} alt="" />
      </div>
      <div className="text-box">
        <h3 dangerouslySetInnerHTML={{ __html: name }} />
        <h6 dangerouslySetInnerHTML={{ __html: designation }} />
      </div>
    </Link>
  )
}

export default TeamCard
