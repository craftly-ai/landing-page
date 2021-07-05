import React from "react"
import WorkCard from "./../../components/aboutWrap/WorkCard"
import WorkBox from "./../../components/aboutWrap/WorkBox"
import { useStaticQuery, graphql } from "gatsby"

const WorkWithUsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "about" } }) {
        nodes {
          about {
            workWithUsTitle
            workWithUsList {
              title
              description
              anchorLabel
              anchorLink
            }
            workList {
              icon {
                sourceUrl
              }
              title
              description
            }
          }
        }
      }
    }
  `)

  let workWithUsTitle = data.allWpPage.nodes.map(
    node => node.about.workWithUsTitle
  )
  let workWithUsList = data.allWpPage.nodes.map(
    node => node.about.workWithUsList
  )
  let workList = data.allWpPage.nodes.map(node => node.about.workList)

  return (
    <div className="work-with-us-wrap section pb80">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 text-center">
            <h2 dangerouslySetInnerHTML={{ __html: workWithUsTitle }} />
          </div>
          <div className="col-md-12 col-12 details-wrap">
            <ul>
              {workWithUsList.map(e =>
                e.map((item, i) => {
                  return (
                    <li key={1}>
                      <WorkCard
                        className={"box" + " " + item.title.toLowerCase()}
                        title={item.title}
                        description={item.description}
                        label={item.anchorLabel}
                        link={item.anchorLink}
                      />
                    </li>
                  )
                })
              )}
            </ul>
          </div>
          <div className="col-md-12 col-12 icon-wrap">
            <ul>
              {workList.map(e =>
                e.map((item, i) => {
                  return (
                    <li key={i}>
                      <WorkBox
                        icon={item.icon.sourceUrl}
                        title={item.title}
                        description={item.description}
                      />
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

export default WorkWithUsSection
