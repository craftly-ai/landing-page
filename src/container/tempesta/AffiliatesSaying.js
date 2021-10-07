import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const AffiliatesSaying = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "tempesta" } }) {
        nodes {
          tempesta {
            tempestaTestimonialTitle
            tempestaReviewList {
              reviewTitle
              avatar {
                sourceUrl
              }
              description
              reviewerName
              reviewerDesignation
            }
          }
        }
      }
    }
  `)

  let tempestaTestimonialTitle = data.allWpPage.nodes.map(
    node => node.tempesta.tempestaTestimonialTitle
  )
  let tempestaReviewList = data.allWpPage.nodes.map(
    node => node.tempesta.tempestaReviewList
  )

  return (
    <div className="testimonial-raw section">
      <div className="container">
        <div className="testimonial-col section">
          <div className="row">
            <div className="col-sm-5 col-12 left-conn justify-content-center align-self-center">
              <h2
                dangerouslySetInnerHTML={{ __html: tempestaTestimonialTitle }}
              />
            </div>
            <div className="col-sm-7 col-12 right-conn justify-content-center align-self-center">
              <div className="slider-container">
                <div className="slider-for">
                  {tempestaReviewList.map(e =>
                    e.map((data, i) => {
                      return (
                        <div className="item" key={i}>
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: data.reviewTitle,
                            }}
                          />
                          <p
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          />
                        </div>
                      )
                    })
                  )}
                </div>
                <div className="slider-nav">
                  {tempestaReviewList.map(e =>
                    e.map((data, i) => {
                      return (
                        <div className="item-thumbnail" key={i}>
                          <div className="img-box">
                            <img
                              src={data.avatar?.sourceUrl}
                              alt="AffiliatesSaying"
                            />
                          </div>
                          <div className="testi-conn">
                            <h5
                              dangerouslySetInnerHTML={{
                                __html: data.reviewerName,
                              }}
                            />
                            <p
                              dangerouslySetInnerHTML={{
                                __html: data.reviewerDesignation,
                              }}
                            />
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffiliatesSaying
