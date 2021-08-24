import React from "react"
import icon1 from "../../images/iconTemp1.png"
import icon2 from "../../images/iconTemp2.png"
import { useStaticQuery, graphql } from "gatsby"
const CardList = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "tempesta" } }) {
        nodes {
          tempesta {
            tempestaCardList {
              cardImage {
                sourceUrl
              }
              cardInfo
              cardTitle
            }
          }
        }
      }
    }
  `)

  return (
    <div className="section">
      <div className="tempesta-card-section row">
        <div className="col-lg-9 col-md-12 m-auto">
          <div className="text-wrap">
            <div className="tempesta-card-list">
              <div className="card-col">
                <Card
                  icon={icon1}
                  title={"Content <br/> Marketing"}
                  list={`<ul>
                    <li>Content Development</li>
                    <li>Content Publication</li>
                    <li>Editorial Calendars</li>
                  </ul>`}
                />
                <Card
                  icon={icon2}
                  title={"Email"}
                  list={`<ul>
                    <li>Email Nurturing</li>
                    <li>Newsletters</li>
                    <li>Account-based Marketing</li>
                  </ul>`}
                />
              </div>
              <div className="card-col col2">
                <Card
                  icon={icon2}
                  title={"Social <br/> Media"}
                  list={`<ul>
                  <li>Social Posts Development</li>
                  <li>Curated Social Posts</li>
                  <li>Follower Outreach</li>
                </ul>`}
                />
                <Card
                  icon={icon2}
                  title={"Influencer"}
                  list={`<ul>
                    <li>Influencer Research</li>
                    <li>Micro-influencer Campaigns</li>
                    <li>Employee Advocasy Program</li>
                  </ul>`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardList

const Card = ({ icon, title, list }) => {
  return (
    <div className="card">
      <div>
        <img src={icon} alt="" />
      </div>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: list }} />
    </div>
  )
}

// <div className="tempesta-card-list">
// {list.map(e => {
//   const list = e.reduce(function (list, key, index) {
//     return (
//       (index % 2 === 0
//         ? list.push([key])
//         : list[list.length - 1].push(key)) && list
//     )
//   }, [])
//   return list.map((data, i) => {
//     return (
//       <>
//         <div className="card-col">
//           <Card
//             key={i}
//             icon={data[0].cardImage.sourceUrl}
//             title={data[0].cardTitle}
//             list={data[0].cardInfo}
//           />
//         </div>
//         <div className="card-col col2">
//           <Card
//             key={i}
//             icon={data[1].cardImage.sourceUrl}
//             title={data[1].cardTitle}
//             list={data[1].cardInfo}
//           />
//         </div>
//       </>
//     )
//   })
// })}
// </div>
