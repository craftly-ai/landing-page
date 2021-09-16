import React from "react"
import EventBox from "./../../components/updateWrap/EventBox"
import { useStaticQuery, graphql } from "gatsby"

const EventsWrapSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "learn" } }) {
        nodes {
          learn {
            eventsTitle
            eventsWebinarsDescription
            viewAllEventLabel
            viewAllEventUrl
            eventsWebinarsList {
              icon {
                sourceUrl
              }
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

  let eventsTitle = data.allWpPage.nodes.map(node => node.learn.eventsTitle)
  let eventsWebinarsDescription = data.allWpPage.nodes.map(
    node => node.learn.eventsWebinarsDescription
  )
  let viewAllEventLabel = data.allWpPage.nodes.map(
    node => node.learn.viewAllEventLabel
  )
  let viewAllEventUrl = data.allWpPage.nodes.map(
    node => node.learn.viewAllEventUrl
  )
  let eventsWebinarsList = data.allWpPage.nodes.map(
    node => node.learn.eventsWebinarsList
  )

  return (
    <div className="events-wrap section ptb100">
      <div className="row align-items-center title-wrap">
        <div className="col-sm-12">
          <h2 dangerouslySetInnerHTML={{ __html: eventsTitle }} />
          <p dangerouslySetInnerHTML={{ __html: eventsWebinarsDescription }} />
        </div>
        <div className="col-sm-4 d-none">
          <a
            href={viewAllEventUrl}
            data-toggle="modal"
            data-target="#join-waitlist"
            className="more-btn"
          >
            {viewAllEventLabel}
          </a>
        </div>
      </div>
      <ul className="text-center col3">
        {eventsWebinarsList.map(e =>
          e.map((item, i) => {
            return (
              <li key={i}>
                <EventBox
                  icon={item.icon.sourceUrl}
                  title={item.title}
                  description={item.description}
                  buttonLabel={item.buttonLabel}
                  buttonUrl={item.buttonUrl}
                />
              </li>
            )
          })
        )}
      </ul>
      <a
        href={viewAllEventUrl}
        data-toggle="modal"
        data-target="#join-waitlist"
        className="btn-main mobile"
      >
        {viewAllEventLabel}
      </a>
    </div>
  )
}

export default EventsWrapSection
