import React from "react"

const Container = props => {
  const { title, description, sourceUrl } = props
  return (
    <>
      <div className="text-box box">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="img-box box">
        <img src={sourceUrl} alt="Container" />
      </div>
    </>
  )
}

export default Container
