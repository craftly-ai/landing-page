import React from "react"
import { Link } from "gatsby"

const EventBox = props => {
  const { icon, title, description, buttonLabel, buttonUrl } = props

  return (
    <div className="box-wrap">
      <i>
        <img src={icon} className="img-fluid" alt="" />
      </i>
      <h5 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Link
        to={buttonUrl}
        data-mode="popup"
        className="btn-main"
        data-size={100}
        target="_blank"
        rel="noreferrer"
      >
        {buttonLabel}
      </Link>
    </div>
  )
}

export default EventBox
