import React from "react"
import Container from "./../../components/sellsProduct/Container"

const ProductSellsSection = () => {
  return (
    <div className="product-sells-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 title text-center">
            {/* <h2 class="f50">Earning Poten</h2> */}
          </div>
          <div className="col-md-12 col-12 list-row">
            <ul>
              <li>
                <Container />
              </li>
              <li>
                <Container />
              </li>
              <li>
                <Container />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSellsSection
