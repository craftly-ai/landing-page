import React from "react"
import { Link } from "gatsby"

const FormGenerateIdeas = props => {
  const {
    lableinput,
    datarotateinput,
    input,
    tooltipstep1,
    lableinfo,
    datarotateinfo,
    infocount,
    info,
    button,
    tooltipstep2,
    dataperiod,
  } = props
  const inputdDataRotate = `["${datarotateinput}"]`
  const infodDataRotate = `["${datarotateinfo}"]`

  return (
    <>
      <label>{lableinput}</label>
      <div className="input">
        <p
          className="rotate-text1"
          data-period={dataperiod}
          data-rotate={inputdDataRotate}
        >
          {input}
        </p>
        <div className="tooltip-wrap">{tooltipstep1}</div>
      </div>
      <label>
        {lableinfo} <span>{infocount}</span>
      </label>
      <div className="input description">
        <p
          className="rotate-text1"
          data-period={dataperiod}
          data-rotate={infodDataRotate}
        >
          {info}
        </p>
      </div>
      <div className="btn-row none">
        <Link className="gradient-btn">{button}</Link>
        <div className="tooltip-wrap"> {tooltipstep2} </div>
      </div>
    </>
  )
}

export default FormGenerateIdeas
