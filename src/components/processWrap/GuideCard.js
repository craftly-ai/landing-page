import React from "react"

const GuideCard = () => {
  return (
    <div className="guies-box">
      <div className="img-wrap">
        <a href="documentation/tools/product-description.html">
          <img
            src="images/product-description.jpg"
            alt="Product Description"
            className="img-fluid"
          />
        </a>
      </div>
      <div className="text-wrap">
        <span>GUIDE</span>
        <a
          href="documentation/tools/product-description.html"
          className="guide-title"
        >
          Product Description
        </a>
        <p>
          Blast through writer's block by letting us write an excerpt for you.
        </p>
      </div>
    </div>
  )
}

export default GuideCard
