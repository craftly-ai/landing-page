import React from "react"
import EarnAudience from "./EarnAudience"

const AudienceList = props => {
  const { title, subTitle, list } = props

  return (
    <div className="audience-wrapper ptb100 section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 title">
            <h2 className="f50">{title}</h2>
            <p>{subTitle}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12 list-row">
            <ul>
              {list.map(e =>
                e.map((item, i) => {
                  return (
                    <li key={i}>
                      <EarnAudience
                        title={item.title}
                        description={item.description}
                      />
                    </li>
                  )
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudienceList
