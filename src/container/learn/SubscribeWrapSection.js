import React from "react"

const SubscribeWrapSection = () => {
  return (
    <div className="subscribe-raw inner section ptb100">
      <div className="subscribe-col section">
        <div className="row align-items-center">
          <div className="col-sm-7 col-12 left-conn">
            <h2>We got more coming </h2>
            <p>
              Sign up for our newsletter to stay on top of product updates,
              artificial intelligence breakthroughs, opportunities, and the
              Craftly culture.
            </p>
          </div>
          <div className="col-sm-5 col-12 right-conn">
            <form action className="subscription_form">
              <div className="form-group mb-0">
                <input
                  type="text"
                  placeholder="Email address"
                  className="form-control"
                />
                <button className="btn-main">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeWrapSection
