import React from "react"

const SubscriptionForm = props => {
  const { placeholder, label } = props

  return (
    <div className="col-sm-5 col-12 right-conn">
      <form action className="subscription_form">
        <div className="form-group mb-0">
          <input
            type="text"
            placeholder={placeholder}
            className="form-control"
          />
          <button className="btn-main">{label}</button>
        </div>
      </form>
    </div>
  )
}

export default SubscriptionForm
