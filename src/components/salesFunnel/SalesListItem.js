import React from "react"

const SalesListItem = props => {
  const {description, img, number} = props
  return (
    <div className="col-md-4 col-sm-6">
      <div className="slaes-box">
        <span className="no">0{number}</span>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <div className="img-wrap text-center">
            <img src={img} className="img-fluid" alt="Sales Funnel"/>
        </div>
      </div>
    </div>
  )
}

export default SalesListItem
