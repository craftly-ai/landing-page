import React from "react"
import GrowListItem from "../../components/valueGrow/GrowListItem"
import { useStaticQuery, graphql } from "gatsby"

const ValueGrowListSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "home" } }) {
        nodes {
          home {
            valueGrowList {
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

  let valueGrowList = data.allWpPage.nodes.map(node => node.home.valueGrowList)

  return (
    <div className="value-grow-list-raw section">
      <div className="container">
        <div className="box-wrapper">
          {valueGrowList.map(e =>
            e.map((item, i) => (
              <GrowListItem
                key={i}
                img={item.icon?.sourceUrl}
                heading={item.title}
                subheading={item.description}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ValueGrowListSection
