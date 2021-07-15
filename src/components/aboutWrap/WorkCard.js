import React from "react"
import { Link } from "gatsby"

const WorkCard = props => {
  const { className, title, description, label, link } = props

  return (
    <div className={className}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Link to={link} className="link">
        {label}
      </Link>
    </div>
  )
}

export default WorkCard
