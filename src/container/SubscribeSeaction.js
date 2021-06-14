import React from "react"

const SubscribeSeaction = () => {
  return (
    <div className="subscribe-raw section ptb100">
      <div className="container">
        <div className="subscribe-col section">
          <div className="row">
            <div className="col-sm-7 col-12 left-conn">
              <h2>We’re almost there</h2>
              <p>
                Want early access to everything Craftly has to offer? Request
                access now!{" "}
              </p>
            </div>
            <div className="col-sm-5 col-12 right-conn">
              <form action className="subscription_form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="form-control"
                  />
                  <button className="btn-main">I Want it!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeSeaction
