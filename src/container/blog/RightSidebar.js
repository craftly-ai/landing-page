import React from "react"
import RightSidebarCard from "./../../components/blog/RightSidebarCard"
import { useStaticQuery, graphql } from "gatsby"

const RightSidebar = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "blog-right-card-and-cat" } }) {
        nodes {
          blogRightCardAndCat {
            cardList {
              title
              description
              buttonLabel
              buttonUrl
            }
          }
        }
      }
    }
  `)

  return (
    <div className="right-conn">
      <div className="sidebar-item">
        {data.allWpPage.nodes[0].blogRightCardAndCat.cardList.map((item, i) => (
          <RightSidebarCard
            key={i}
            title={item.title}
            description={item.description}
            buttonLabel={item.buttonLabel}
            buttonUrl={item.buttonUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default RightSidebar
