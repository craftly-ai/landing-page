import React from "react"

const Typewriter = props => {
  const { dataPeriod, dataRotate, art } = props
  return (
    <div className="txt-btn section">
      <h2>
        <span
          className="txt-rotate"
          data-period={dataPeriod}
          data-rotate={dataRotate}
        />
      </h2>
      <span className="craftly-art">{art}</span>
    </div>
  )
}

export default Typewriter
