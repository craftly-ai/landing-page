import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TestimonialSeaction = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            testimonialTitle
            reviewList {
              reviewTitle
              description
              avtar {
                sourceUrl
              }
              reviewerName
              reviewerDesignation
            }
          }
        }
      }
    }
  `)

  let testimonialTitle = data.allWpPage.nodes.map(
    node => node.home.testimonialTitle
  )
  let reviewList = data.allWpPage.nodes.map(node => node.home.reviewList)

  return (
    <div className="testimonial-raw section">
      <div className="container">
        <div className="testimonial-col section">
          <div className="row">
            <div className="col-sm-5 col-12 left-conn justify-content-center align-self-center">
              <h2 dangerouslySetInnerHTML={{ __html: testimonialTitle }} />
            </div>
            <div className="col-sm-7 col-12 right-conn justify-content-center align-self-center">
              <div className="slider-container">
                <div className="slider-for slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div className="slick-track">
                      {reviewList.map(e =>
                        e.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="item slick-slide slick-current slick-active"
                            >
                              <h3>
                                <i>{item.reviewTitle}</i>
                              </h3>
                              <p>{item.description}</p>
                              <div className="item-thumbnail">
                                <div className="img-box">
                                  <img src={item.avtar.sourceUrl} alt="" />
                                </div>
                                <div className="testi-conn">
                                  <h5>{item.reviewerName}</h5>
                                  <p>{item.reviewerDesignation}</p>
                                </div>
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
      </div>
    </div>
  )
}

export default TestimonialSeaction
