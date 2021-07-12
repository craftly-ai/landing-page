import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SubscribeSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "blog-right-card-and-cat" } }) {
        nodes {
          blogRightCardAndCat {
            subscribeTitle
            subscribeDescription
            subscribeButtonLabel
          }
        }
      }
    }
  `)

  let subscribeTitle =
    data.allWpPage.nodes[0].blogRightCardAndCat.subscribeTitle
  let subscribeDescription =
    data.allWpPage.nodes[0].blogRightCardAndCat.subscribeDescription
  let subscribeButtonLabel =
    data.allWpPage.nodes[0].blogRightCardAndCat.subscribeButtonLabel

  return (
    <div className="subscribe-raw border-top section ptb100">
      <div className="container">
        <div className="subscribe-col section">
          <div className="row">
            <div className="col-sm-7 col-12 left-conn">
              <h2 dangerouslySetInnerHTML={{ __html: subscribeTitle }} />
              <p dangerouslySetInnerHTML={{ __html: subscribeDescription }} />
            </div>
            <div className="col-sm-5 col-12 right-conn">
              <form action className="subscription_form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="form-control"
                  />
                  <button className="btn-main">{subscribeButtonLabel}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscribeSection
