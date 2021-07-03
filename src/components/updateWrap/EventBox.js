import React from "react"

const EventBox = () => {
  return (
    <div className="box-wrap">
      <i>
        <img
          src="images/ic-accelerated-onboarding.svg"
          className="img-fluid"
          alt="Accelerated Onboarding"
        />
      </i>
      <h5>Accelerated Onboarding</h5>
      <p>
        Want to learn Craftly fast? We’ll work with you in 3 sessions to teach
        you all you need to know.
      </p>
      <a
        href="https://form.typeform.com/to/o1kdGvzs?typeform-medium=embed-snippet"
        data-mode="popup"
        className="btn-main"
        data-size={100}
        target="_blank"
      >
        Register
      </a>
    </div>
  )
}

export default EventBox
