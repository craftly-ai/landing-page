import React from "react"

const FieldCarousel = props => {
  const { list } = props
  return (
    <div className="tags-raw section">
      <div className="container-fluid">
        <div className="tags-col section">
          <ul className="tags-slider">
            {list.map(e =>
              e.map(function (item, i) {
                return <li key={i}>{item}</li>
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FieldCarousel
