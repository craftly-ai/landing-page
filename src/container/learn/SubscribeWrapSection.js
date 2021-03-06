import React from "react"
import SubscriptionForm from "./../../components/updateWrap/SubscriptionForm"

const SubscribeWrapSection = props => {
  const { title, description, inputPlaceholder, submitLabel } = props

  return (
    <div className="container">
      <div className="subscribe-raw inner section ptb100">
        <div className="subscribe-col section">
          <div className="row align-items-center">
            <div className="col-sm-7 col-12 left-conn">
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="col-sm-5 col-12 right-conn">
              <SubscriptionForm
                placeholder={inputPlaceholder}
                label={submitLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeWrapSection
