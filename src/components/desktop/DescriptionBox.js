import React from "react"
import { Link } from "gatsby"

const DescriptionBox = props => {
  const { title, description, button1, button2 } = props

  return (
    <>
      <div className="product-description">
        <div className="text-box">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="btn-box">
          <Link
            to=""
            data-toggle="modal"
            data-target="#join-waitlist"
            className="btn-white"
          >
            {button1}
          </Link>
          <Link to="" data-toggle="modal" data-target="#join-waitlist">
            {button2}
          </Link>
        </div>
      </div>
    </>
  )
}

export default DescriptionBox
