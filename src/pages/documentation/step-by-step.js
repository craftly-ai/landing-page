import * as React from "react"
import DocLayout from "./../../components/documentation/DocLayout"
import { useStaticQuery, graphql } from "gatsby"
import TipsBox from "./../../components/documentation/TipsBox"

const StepByStep = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "documentation" } }) {
        nodes {
          documentation {
            stepByStepGuide {
              title
              description
              tipsTitle
              tipsDescription
              steps {
                step {
                  stepNo
                  title
                  description
                  imageOrDifference {
                    image {
                      sourceUrl
                    }
                    difference
                  }
                  imageRow {
                    title
                    image {
                      sourceUrl
                    }
                  }
                }
              }
              happyCraftingText
            }
          }
        }
      }
    }
  `)

  let title = data.allWpPage.nodes[0].documentation.stepByStepGuide.title
  let description =
    data.allWpPage.nodes[0].documentation.stepByStepGuide.description
  let tipsTitle =
    data.allWpPage.nodes[0].documentation.stepByStepGuide.tipsTitle
  let tipsDescription =
    data.allWpPage.nodes[0].documentation.stepByStepGuide.tipsDescription
  let steps = data.allWpPage.nodes[0].documentation.stepByStepGuide.steps
  let happyCraftingText =
    data.allWpPage.nodes[0].documentation.stepByStepGuide.happyCraftingText

  return (
    <DocLayout page="stepByStepGuide">
      <div className="documentation-row">
        <div className="container small-container">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <TipsBox
            className="mt80"
            title={tipsTitle}
            description={tipsDescription}
          />
          <div className="step-box-wrapper">
            <div className="row">
              <div className="col-md-12 col-12">
                <ul>
                  {steps.map((item, i) => {
                    return (
                      <li className="mt80" key={i}>
                        <div className="text-box box">
                          <span className="step">Step {item.step.stepNo}</span>
                          <h2
                            dangerouslySetInnerHTML={{
                              __html: item.step.title,
                            }}
                          />
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.step.description,
                            }}
                          />
                        </div>
                        {item.step.imageOrDifference.image !== null ? (
                          <div className="img-box box">
                            <img
                              src={item.step.imageOrDifference.image.sourceUrl}
                              alt="StepByStep"
                            />
                          </div>
                        ) : (
                          <div
                            className="img-box box"
                            dangerouslySetInnerHTML={{
                              __html: item.step.imageOrDifference.difference,
                            }}
                          />
                        )}
                        {item.step.imageRow !== null ? (
                          <div className="img-box-row">
                            {item.step.imageRow.map((item, i) => {
                              return (
                                <div className="img-box box" key={i}>
                                  <h6
                                    dangerouslySetInnerHTML={{
                                      __html: item.title,
                                    }}
                                  />
                                  {item.image !== null ? (
                                    <img
                                      src={item.image.sourceUrl}
                                      alt="StepByStep"
                                    />
                                  ) : (
                                    ""
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        ) : (
                          ""
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-md-12 col-12 happy-crafting text-center">
                <p dangerouslySetInnerHTML={{ __html: happyCraftingText }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  )
}

export default StepByStep
