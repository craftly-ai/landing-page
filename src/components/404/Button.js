import React from "react"

const Button = props => {
  const { link, label } = props
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-main">
      {label}
    </a>
  )
}

export default Button
