import React from "react"
import Product from "../../components/product/Product"
import Card from "../../components/product/Card"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const ProductSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            oneProductTitle
            oneProductDescription
            requestAccessButtonLabel
            oneProductList {
              icon {
                sourceUrl
              }
              title
              description
              buttonLabel
              buttonurl
            }
            oneProductCardList {
              title
              description
            }
          }
        }
      }
    }
  `)

  let oneProductTitle = data.allWpPage.nodes.map(
    node => node.home.oneProductTitle
  )
  let oneProductDescription = data.allWpPage.nodes.map(
    node => node.home.oneProductDescription
  )
  let requestAccessButtonLabel = data.allWpPage.nodes.map(
    node => node.home.requestAccessButtonLabel
  )
  let oneProductList = data.allWpPage.nodes.map(
    node => node.home.oneProductList
  )
  let oneProductCardList = data.allWpPage.nodes.map(
    node => node.home.oneProductCardList
  )

  return (
    <div className="one-product-raw section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12 left-conn">
            <div className="box-wrapper">
              <div className="left-conn">
                <div className="box">
                  <h2>{oneProductTitle}</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: oneProductDescription }}
                  />
                  <Link
                    data-toggle="modal"
                    data-target="#join-waitlist"
                    className="btn-main"
                  >
                    {requestAccessButtonLabel}
                  </Link>
                </div>
                <ul className="one-product-li">
                  {oneProductList.map(e =>
                    e.map((item, i) => (
                      <Product
                        key={i}
                        img={item.icon.sourceUrl}
                        heading={item.title}
                        info={item.description}
                        buttonTitle={item.buttonLabel}
                        buttonLink={item.buttonurl}
                      />
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-12 right-conn">
            <div className="one-product-col">
              <div className="one-product-col-animate">
                <ul className="grid">
                  {oneProductCardList.map(list =>
                    list.map((item, i) => (
                      <Card
                        key={i}
                        title={item.title}
                        info={item.description}
                      />
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
