import React from "react"
import { Link } from "gatsby"

const Button = props => {
  const { link, label } = props
  return (
    <Link to={link} className="btn-main">
      {label}
    </Link>
  )
}

export default Button
