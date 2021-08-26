import React from "react"

const TeamCard = props => {
  const { link, bgColor, img, name, designation } = props

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="img-box" style={{ backgroundColor: bgColor }}>
        <img src={img} alt="TeamCard" />
      </div>
      <div className="text-box">
        <h3 dangerouslySetInnerHTML={{ __html: name }} />
        <h6 dangerouslySetInnerHTML={{ __html: designation }} />
      </div>
    </a>
  )
}

export default TeamCard
