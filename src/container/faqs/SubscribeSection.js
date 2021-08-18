import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SubscribeSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "faqs" } }) {
        nodes {
          faqs {
            subscribeTitle
            subscribeDescription
          }
        }
      }
    }
  `)

  let subscribeTitle = data.allWpPage.nodes.map(
    node => node.faqs.subscribeTitle
  )
  let subscribeDescription = data.allWpPage.nodes.map(
    node => node.faqs.subscribeDescription
  )

  return (
    <div className="subscribe-raw section ptb100 faq-subscribesection">
      <div className="container">
        <div className="subscribe-col section">
          <div className="row">
            <div className="col-sm-7 col-12 left-conn">
              <h2>{subscribeTitle}</h2>
              <p>{subscribeDescription}</p>
            </div>
            <div className="col-sm-5 col-12 right-conn">
              <form action className="subscription_form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Youremail@you.com"
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

export default SubscribeSection
