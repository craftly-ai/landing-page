import React from "react"
import cat from "../../images/cta-img.png"

const CatSection = () => {
  return (
    <div className="cta-raw section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 left-conn ptb80">
            <h2>
              Make money monthly. <br />
              Earn up to 20% with Craftly.AI
            </h2>
            <p>
              Love getting Craftly with us? Earn passive income by referring
              friends, family, the girls you met in the bathroom at that bar
              that one time. Seriously, there is no limit.
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
          <div className="col-sm-6 col-12 right-conn text-center">
            <img src={cat} alt className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatSection
