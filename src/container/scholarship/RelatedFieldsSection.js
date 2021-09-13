import React from "react"
import FieldCarousel from "./../../components/carousel/FieldCarousel"
import { useStaticQuery, graphql } from "gatsby"

const RelatedFieldsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "scholarship" } }) {
        nodes {
          scholarship {
            relatedFieldsTitle
            relatedFieldsList {
              fieldName
            }
          }
        }
      }
    }
  `)

  let relatedFieldsTitle = data.allWpPage.nodes.map(
    node => node.scholarship.relatedFieldsTitle
  )

  let relatedFieldsList= data.allWpPage.nodes.map(node =>
    node.scholarship.relatedFieldsList.map(item => item.fieldName)
  )
 


  return (
    <div className="related-fields-wrap section">
      <div className="container">
        <h3 className="text-center" dangerouslySetInnerHTML={{ __html: relatedFieldsTitle }} />
      </div>
      <FieldCarousel list={relatedFieldsList} />
    </div>
  )
}

export default RelatedFieldsSection
