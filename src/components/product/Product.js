import React from "react"
import { Link } from "gatsby"

const Product = props => {
  const { img, heading, info, buttonTitle, buttonLink } = props

  return (
    <li>
      <div className="icon-box">
        <img
          className="img-fluid"
          src={img}
          alt=""
          style={{ maxWidth: "20%" }}
        />
      </div>
      <h4>{heading}</h4>
      <p>{info}</p>
      <Link to={buttonLink} className="replaceHref readmore">
        {buttonTitle}
      </Link>
    </li>
  )
}

export default Product
