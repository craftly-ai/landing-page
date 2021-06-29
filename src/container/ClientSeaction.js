import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import trustpiloatLogo from "../images/trustpiloat-logo.png"

const ClientSeaction = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { id: { eq: "cG9zdDo4" } }) {
        nodes {
          home {
            clientsTitle
            clientsDescription
            clientsTrustpilotButtonLabel
            clientsReviewsList {
              description
              avatar {
                sourceUrl
              }
              name
            }
          }
        }
      }
    }
  `)

  let clientsTitle = data.allWpPage.nodes.map(node => node.home.clientsTitle)
  let clientsDescription = data.allWpPage.nodes.map(
    node => node.home.clientsDescription
  )
  let clientsTrustpilotButtonLabel = data.allWpPage.nodes.map(
    node => node.home.clientsTrustpilotButtonLabel
  )
  let clientsReviewsList = data.allWpPage.nodes.map(
    node => node.home.clientsReviewsList
  )

  return (
    <div className="clients-results section">
      <div className="container">
        <div className="client-head section text-center">
          <h2>{clientsTitle}</h2>
          <p>{clientsDescription}</p>
          <ul className="review-star">
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
          </ul>
          <Link to="#" className="readmore">
            {clientsTrustpilotButtonLabel}
          </Link>
        </div>
      </div>
      <div className="review-list review-slider section">
        {clientsReviewsList.map(e => {
          const list = e.reduce(function (list, key, index) {
            return (
              (index % 2 === 0
                ? list.push([key])
                : list[list.length - 1].push(key)) && list
            )
          }, [])
          return list.map(items => (
            <div className="review-item">
              {items.map(item => (
                <div class="review-box">
                  <i>
                    <img
                      src={trustpiloatLogo}
                      className="img-fluid"
                      alt="Trustpilot"
                    />
                  </i>
                  <p>{item.description}</p>
                  <div className="review-by section">
                    <span className="avtar">
                      <img
                        src={item.avatar.sourceUrl}
                        className="img-rounded"
                        alt=""
                      />
                    </span>
                    <h6>{item.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          ))
        })}
      </div>
    </div>
  )
}

export default ClientSeaction
