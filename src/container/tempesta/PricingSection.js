import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PricingSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "tempesta" } }) {
        nodes {
          tempesta {
            chooseAPlanTitle
            chooseAPlanDescription
            tempestaPriceTable {
              title
              shortDescription
              price
              duration
              buyButtonLabel
              buyButtonUrl
              description {
                listHeaderDescription
                listTitle
                list {
                  listItems
                }
              }
              infoButtonLabel
              infoButtonUrl
              activeStatus
              activeTitle
            }
          }
        }
      }
    }
  `)

  let chooseAPlanTitle = data.allWpPage.nodes.map(
    node => node.tempesta.chooseAPlanTitle
  )
  let chooseAPlanDescription = data.allWpPage.nodes.map(
    node => node.tempesta.chooseAPlanDescription
  )
  let tempestaPriceTable = data.allWpPage.nodes.map(
    node => node.tempesta.tempestaPriceTable
  )

  return (
    <div
      className="tempesta-pricing-section wrote-more-raw section right-section-container ptb100"
      id="pricing"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12 m-auto">
            <div className="text-wrap text-center">
              <div className="w-m-top">
                <h2 dangerouslySetInnerHTML={{ __html: chooseAPlanTitle }} />
                <p
                  dangerouslySetInnerHTML={{ __html: chooseAPlanDescription }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-table-raw section">
          {/* pricing table  */}
          <div className="row">
            {tempestaPriceTable.map(e =>
              e.map((item, i) => {
                return (
                  <PriceTable
                    key={i}
                    title={item.title}
                    description={item.shortDescription}
                    price={item.price}
                    duration={item.duration}
                    buyLabel={item.buyButtonLabel}
                    buyUrl={item.buyButtonUrl}
                    list={item.description}
                    infoUrl={item.infoButtonLabel}
                    infoLabel={item.infoButtonLabel}
                    activeStatus={item.activeStatus}
                    activeTitle={item.activeTitle}
                  />
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection

const PriceTable = props => {
  const {
    title,
    description,
    price,
    duration,
    buyLabel,
    buyUrl,
    list,
    infoUrl,
    infoLabel,
    activeStatus,
    activeTitle,
  } = props
  return (
    <div className="col-lg-4 col-md-4 col-xs-12 pricing-table-col">
      <div className={`box-warp ${activeStatus}`}>
        <h6>{activeTitle}</h6>
        <div className="pricing-table text-center pb-0">
          <div className="top">
            <p className="f-medium">{title}</p>
            <p
              className="light_weight"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <p className="startsat">Starts at</p>
            <p className="price">
              ${price}
              <small>/{duration}</small>
            </p>
            <a
              className="btn-pricing"
              href={buyUrl}
              target="_blank"
            >
              {buyLabel}
            </a>
          </div>
          {list.map(data => {
            return (
              <ul className="middle">
                <p
                  className="list-header"
                  dangerouslySetInnerHTML={{
                    __html: data.listHeaderDescription,
                  }}
                />
                <p
                  className="list-title"
                  dangerouslySetInnerHTML={{ __html: data.listTitle }}
                />
                {data.list.map(e => (
                  <li>{e.listItems}</li>
                ))}
              </ul>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}
