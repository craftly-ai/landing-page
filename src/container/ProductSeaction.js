import React from "react"
import productData from "../data/productData.json"
import Product from "./../components/product/Product"
import imgPrebuilt from "../images/ic-prebuilt.svg"
import imgStack from "../images/ic-stack.svg"
import { Link } from "gatsby"
import Card from "../components/product/Card"

const ProductSeaction = () => {
  return (
    <div className="one-product-raw section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 left-conn">
            <div className="box-wrapper">
              <div className="left-conn">
                <div className="box">
                  <h2>{productData.head.heading}</h2>
                  <p>
                    {productData.head.subheading}
                    <b>{productData.head["subheading-available-count"]}</b>{" "}
                    {productData.head["subheading-perfected"]}{" "}
                    <b>{productData.head["subheading-perfected-count"]}</b>
                  </p>
                  <Link
                    data-toggle="modal"
                    data-target="#join-waitlist"
                    className="btn-main"
                  >
                    {productData.head["button-request-access"]}
                  </Link>
                </div>
                <ul className="one-product-li">
                  <Product
                    img={imgPrebuilt}
                    heading={productData.product.pro1.heading}
                    info={productData.product.pro1.info}
                    buttonTitle={productData.product.pro1["button-title"]}
                    buttonLink={productData.product.pro1["button-title"]}
                  />
                  <Product
                    img={imgStack}
                    heading={productData.product.pro2.heading}
                    info={productData.product.pro2.info}
                    buttonTitle={productData.product.pro2["button-title"]}
                    buttonLink={productData.product.pro2["button-title"]}
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12 right-conn">
            <div className="one-product-col">
              <div className="one-product-col-animate">
                <ul className="grid">
                  {productData.list.map(function (item) {
                    return <Card title={item.title} info={item.info} />
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSeaction
