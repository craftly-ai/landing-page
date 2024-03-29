import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import { useStaticQuery, graphql, Link } from "gatsby"

const Tools = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "tools" } }) {
        nodes {
          tools {
            listOfAllToolsTitle
            listOfAllToolsDescription
            toolsList {
              toolsTitle
              toolsCard {
                cardTitle
                cardDescription
                rightTitle
                rightDescription
                rightInputTitle
                rightInputPlaceholder
                rightOutputTitle
                rightOutputDescription
              }
            }
          }
        }
      }
    }
  `)

  let listOfAllToolsTitle = data.allWpPage.nodes.map(
    node => node.tools.listOfAllToolsTitle
  )
  let listOfAllToolsDescription = data.allWpPage.nodes.map(
    node => node.tools.listOfAllToolsDescription
  )
  let toolsList = data.allWpPage.nodes.map(node => node.tools.toolsList)

  const metaTitle = "Craftly.AI | AI-Powered Copywriter Tools & Templates"
  const metaDescription =
    "See our wide variety of tools & templates: Essays, Blogs, Articles, Ads, Web Copy, Landing Pages, E-commerce, Writing Tools, SEO Assistance, Company, Emails, and more!"
  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <div className="section container-sec first-section ptb100">
          <div className="breadcrumbs section">
            <div className="container">
              <ul>
                <li>
                  <Link className="replaceHref" to="/">
                    Home
                  </Link>
                  <span>/</span>
                </li>
                <li>List of All Tools</li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="section tools-raw">
              <h1 dangerouslySetInnerHTML={{ __html: listOfAllToolsTitle }} />
              <p
                dangerouslySetInnerHTML={{ __html: listOfAllToolsDescription }}
              />
              <div className="section tools-col pt80">
                <div className="tab-content">
                  <div className="row">
                    <div className="col-sm-6 col-12 left-conn">
                      <div className="tools-tab">
                        <ul
                          className="nav nav-tabs tools-tab-nav"
                          role="tablist"
                        >
                          {toolsList.map(e =>
                            e.map((item, i) => {
                              return (
                                <li>
                                  <a
                                    key={i}
                                    className={
                                      i === 0 ? "active masonry" : "masonry"
                                    }
                                    data-toggle="tab"
                                    href={
                                      "#" +
                                      item.toolsTitle
                                        .replace(/\s+/g, "-")
                                        .replace(/[^A-Za-z0-9 -]/g, "-")
                                    }
                                  >
                                    {item.toolsTitle}
                                  </a>
                                </li>
                              )
                            })
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {toolsList.map(e =>
                    e.map((item, i) => {
                      return (
                        <div
                          Key={i}
                          id={item.toolsTitle
                            .replace(/\s+/g, "-")
                            .replace(/[^A-Za-z0-9 -]/g, "-")}
                          className={i === 0 ? "active tab-pane" : "tab-pane"}
                        >
                          <div className="row">
                            <div className="col-sm-6 col-12 left-conn">
                              <div className="tools-tab-conn tools-tab-Scrollbar">
                                <div className="one-product-raw section">
                                  <div className="one-product-col">
                                    <div className="one-product-col-animate">
                                      <ul className="grid nav nav-tabs">
                                        {item.toolsCard.map((item, i) => {
                                          return (
                                            <li className="grid-item" key={i}>
                                              <a
                                                className={
                                                  i === 0 ? "active" : ""
                                                }
                                                data-toggle="tab"
                                                href={
                                                  "#" +
                                                  item.cardTitle
                                                    .replace(/\s+/g, "-")
                                                    .replace(
                                                      /[^A-Za-z0-9 -]/g,
                                                      "-"
                                                    )
                                                }
                                              >
                                                <div className="white-box section">
                                                  <h5
                                                    dangerouslySetInnerHTML={{
                                                      __html: item.cardTitle,
                                                    }}
                                                  />
                                                  <p
                                                    dangerouslySetInnerHTML={{
                                                      __html:
                                                        item.cardDescription,
                                                    }}
                                                  />
                                                </div>
                                              </a>
                                            </li>
                                          )
                                        })}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-12 right-conn">
                              <div className="all-tools-raw section">
                                <div className="tab-content">
                                  {item.toolsCard.map((item, i) => {
                                    return (
                                      <div
                                        key={i}
                                        id={item.cardTitle
                                          .replace(/\s+/g, "-")
                                          .replace(/[^A-Za-z0-9 -]/g, "-")}
                                        className={
                                          i === 0
                                            ? "active tab-pane"
                                            : "tab-pane"
                                        }
                                      >
                                        <h3
                                          dangerouslySetInnerHTML={{
                                            __html: item.rightTitle,
                                          }}
                                        />
                                        <p
                                          className="short-conn"
                                          dangerouslySetInnerHTML={{
                                            __html: item.rightDescription,
                                          }}
                                        />
                                        <form
                                          className="section form-raw"
                                          action
                                        >
                                          <label htmlFor>
                                            {item.rightInputTitle}
                                          </label>
                                          {item.rightInputPlaceholder !=
                                          null ? (
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder={
                                                item.rightInputPlaceholder
                                              }
                                            />
                                          ) : (
                                            ""
                                          )}
                                        </form>
                                        <div className="output-raw">
                                          <h6>{item.rightOutputTitle}</h6>
                                          <p
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                item.rightOutputDescription,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
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

        <div className="sep-border section pb80" />
        <Footer />
      </Layout>
    </>
  )
}

export default Tools
