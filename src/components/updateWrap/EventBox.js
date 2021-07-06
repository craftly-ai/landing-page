import React from "react"

const EventBox = props => {
  const { icon, title, description, buttonLabel, buttonUrl } = props

  return (
    <div className="box-wrap">
      <i>
        <img src={icon} className="img-fluid" alt="" />
      </i>
      <h5 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <a
        href={buttonUrl}
        data-mode="popup"
        className="btn-main"
        data-size={100}
        target="_blank"
        rel="noreferrer"
      >
        {buttonLabel}
      </a>
    </div>
  )
}

export default EventBox
