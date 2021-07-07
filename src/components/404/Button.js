import React from "react"

const Button = props => {
  const { link, label } = props
  return (
    <a href={link} className="btn-main">
      {label}
    </a>
  )
}

export default Button
