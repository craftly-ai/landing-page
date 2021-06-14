import React from "react"

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
      <a href={buttonLink} className="readmore">
        {buttonTitle}
      </a>
    </li>
  )
}

export default Product
