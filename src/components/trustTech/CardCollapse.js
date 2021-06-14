import React from "react"

const CardCollapse = props => {
  const { title, info, id, dataTarget } = props

  return (
    <div className="card">
      <div className="card-header" id={id}>
        <button
          className="btn btn-link collapsible"
          data-toggle="collapse"
          data-target={`#${dataTarget}`}
          aria-expanded="true"
          aria-controls={dataTarget}
        >
          {title} <i className="btn-aacordion fa-plus" />
        </button>
      </div>
      <div
        id={dataTarget}
        className="collapse"
        aria-labelledby={id}
        data-parent="#accordion"
      >
        <div className="card-body">{info}</div>
      </div>
    </div>
  )
}

export default CardCollapse
