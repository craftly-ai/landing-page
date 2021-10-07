import React from "react"
import Container from "./../../components/sellsProduct/Container"

const ProductSellsSection = props => {
  const { list } = props
  return (
    <div className="product-sells-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 title text-center">
            {/* <h2 class="f50">Earning Poten</h2> */}
          </div>
          <div className="col-md-12 col-12 list-row">
            <ul>
              {list.map(e =>
                e.map((item, i) => {
                  return (
                    <li key={i}>
                      <Container
                        title={item.title}
                        description={item.description}
                        sourceUrl={item.image?.sourceUrl}
                      />
                    </li>
                  )
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSellsSection
