import React from "react"

const BoxCai = props => {
  const { img, title, subTitle, description } = props

  return (
    <div className="box-cai">
      <div className="icon">
        <img src={img} alt="icon" />
      </div>
      <div className="text">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <h6 dangerouslySetInnerHTML={{ __html: subTitle }} />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export default BoxCai
