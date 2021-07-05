import React from "react"
import SubscriptionForm from "./../../components/updateWrap/SubscriptionForm"
import { useStaticQuery, graphql } from "gatsby"

const SubscribeWrapSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            weGotTitle
            weGotDescription
          }
        }
      }
    }
  `)

  let weGotTitle = data.allWpPage.nodes.map(node => node.learn.weGotTitle)
  let weGotDescription = data.allWpPage.nodes.map(
    node => node.learn.weGotDescription
  )

  return (
    <div className="subscribe-raw inner section ptb100">
      <div className="subscribe-col section">
        <div className="row align-items-center">
          <div className="col-sm-7 col-12 left-conn">
            <h2 dangerouslySetInnerHTML={{ __html: weGotTitle }} />
            <p dangerouslySetInnerHTML={{ __html: weGotDescription }} />
          </div>
          <SubscriptionForm placeholder={"Email address"} lable={"Sign Up"} />
        </div>
      </div>
    </div>
  )
}

export default SubscribeWrapSection
