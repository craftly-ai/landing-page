import React from "react"

const EarningWrapSection = () => {
  return (
    <div className="earning-wrapper section ptb100">
      <div className="container">
        <div className="tak-it-wrap earning-wrap section m-0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="img-wrap dot-sep">
                <img
                  src="images/earn-money.jpg"
                  className="img-fluid"
                  alt="Start Earning"
                />
                <span className="img-sep circle" />
                <span className="img-sep square" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-wrap">
                <h6>CRAFTLY PARTNER</h6>
                <h2>Earn Money While You Sleep</h2>
                <p>
                  Love getting Craftly with us? Earn up to 20% monthly residual
                  income of any sign ups you get Craftly. Refer friends, family,
                  people on the streets. Seriously, there is no limit.
                </p>
                <a
                  className="btn-main"
                  href="https://form.typeform.com/to/XXMw4Nem?typeform-medium=embed-snippet"
                  data-mode="popup"
                  data-size={100}
                  target="_blank"
                >
                  Start Earning{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningWrapSection
