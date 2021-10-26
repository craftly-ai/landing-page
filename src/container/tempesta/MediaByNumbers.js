import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const MediaByNumbers = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "tempesta" } }) {
        nodes {
          tempesta {
            mediaByTheNumbersTitle
            mediaByTheNumbersSubtitle
            numberList {
              numberCount
              numberCountInfo
            }
            mediaByTheNumbersDescription
          }
        }
      }
    }
  `)

  let mediaByTheNumbersTitle = data.allWpPage.nodes.map(
    node => node.tempesta.mediaByTheNumbersTitle
  )
  let mediaByTheNumbersSubtitle = data.allWpPage.nodes.map(
    node => node.tempesta.mediaByTheNumbersSubtitle
  )
  let mediaByTheNumbersDescription = data.allWpPage.nodes.map(
    node => node.tempesta.mediaByTheNumbersDescription
  )

  return (
    <div className="media-by-numbers-section section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12 m-auto">
            <div className="text-wrap text-center">
              <p dangerouslySetInnerHTML={{ __html: mediaByTheNumbersTitle }} />
              <h2
                dangerouslySetInnerHTML={{ __html: mediaByTheNumbersSubtitle }}
              />
            </div>
          </div>
        </div>
        <div className="row tempesta-numberList-parallax">
          <div class="col-lg-10 col-md-12 m-auto bg-static">
            <div className="number-list bg-move">
              <div className="block-1">
                <div className="number-list-row1">27,000+</div>
                <div className="number-list-row2">Expert Writers Vetted</div>
              </div>
              <div className="block-2">
                <div className="number-list-row1">26</div>
                <div className="number-list-row2">Industries</div>
              </div>
              <div className="block-3">
                <div className="number-list-row1">05</div>
                <div className="number-list-row2">
                  Day Turnaround Time
                  <br />
                  (Business Days)
                </div>
              </div>
              <div className="block-4">
                <div className="number-list-row1">37</div>
                <div className="number-list-row2">
                  Revisions Requested
                  <br />
                  (Per Article)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-12 m-auto">
            <div className="text-wrap text-center number-content">
              <p
                dangerouslySetInnerHTML={{
                  __html: mediaByTheNumbersDescription,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaByNumbers
