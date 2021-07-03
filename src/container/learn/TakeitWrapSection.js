import React from "react"

const TakeitWrapSection = () => {
  return (
    <div className="tak-it-wrap section">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="img-wrap dot-sep">
            <img
              src="images/take-it.jpg"
              className="img-fluid"
              alt="take-it-on"
            />
            <span className="img-sep circle" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-wrap">
            <h2>Take it 1-on-1</h2>
            <p>
              Schedule a one-on-one meeting with one of our Craftly specialists.
              We can discuss your specific use cases, how you’re using
              Craftly.AI, and answer all your questions.
            </p>
            <a
              href="https://form.typeform.com/to/o1kdGvzs?typeform-medium=embed-snippet"
              data-mode="popup"
              className="btn-main"
              data-size={100}
              target="_blank"
            >
              Schedule a one-on one
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeitWrapSection
