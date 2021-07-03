import React from "react"
import EventBox from "./../../components/updateWrap/EventBox"

const EventsWrapSection = () => {
  return (
    <div className="events-wrap section ptb100">
      <div className="row align-items-center title-wrap">
        <div className="col-sm-8">
          <h2>Events &amp; Webinars</h2>
          <p>Need help getting started? Attend a live training. </p>
        </div>
        <div className="col-sm-4">
          <a
            href="javascript:void(0)"
            data-toggle="modal"
            data-target="#join-waitlist"
            className="more-btn"
          >
            View more Events
          </a>
        </div>
      </div>
      <ul className="text-center col3">
        <li>
          <EventBox />
        </li>
        <li>
          <EventBox />
        </li>
        <li>
          <EventBox />
        </li>
      </ul>
      <a
        href="javascript:void(0)"
        data-toggle="modal"
        data-target="#join-waitlist"
        className="btn-main mobile"
      >
        View more Events
      </a>
    </div>
  )
}

export default EventsWrapSection
