import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HowdoWapper = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "tempesta" } }) {
        nodes {
          tempesta {
            howDoTitle
            howDoList {
              title
              description
              image {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `)

  let howDoTitle = data.allWpPage.nodes.map(node => node.tempesta.howDoTitle)
  let howDoList = data.allWpPage.nodes.map(node => node.tempesta.howDoList)

  return (
    <div className="howdo-wrapper product-sells-wrapper section ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 title text-center">
            <h2 class="f50" dangerouslySetInnerHTML={{ __html: howDoTitle }} />
          </div>
          <div className="col-md-12 col-12 list-row">
            <ul>
              {howDoList.map(e =>
                e.map((data, i) => {
                  return (
                    <li key={i}>
                      <div className="text-box box">
                        <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
                        <p
                          dangerouslySetInnerHTML={{ __html: data.description }}
                        />
                      </div>
                      <div className="img-box box">
                        <img src={data.image.sourceUrl} alt="" />
                      </div>
                    </li>
                  )
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowdoWapper
