import React from "react"

const ContentBox = props => {
  const { title, img, className } = props
  return (
    <div className={className}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      {img !== null ? (
        <div className="dashboard-shadow">
          <img src={img} alt="dashboard" />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default ContentBox
