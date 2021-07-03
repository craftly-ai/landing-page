import React from "react"

const IdeaWrap = () => {
  return (
    <div className="idea-wrap">
      <p className="idea">
        <b>Ides or feedback</b> on how we can enhance our product offering?
        We’re listening!
      </p>
      <a
        className="more-btn blue"
        href="https://form.typeform.com/to/kuDDJJs3?typeform-medium=embed-snippet"
        data-mode="popup"
        data-size={100}
        data-submit-close-delay={1}
        target="_blank"
      >
        Submit an idea
      </a>
    </div>
  )
}

export default IdeaWrap
