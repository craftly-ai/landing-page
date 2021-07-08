import React from "react"

const StickyMenu = () => {
  return (
    <div className="left-bar-wrap">
      <div className="sticky-menu">
        <h4>
          <a href="/documentation/">Craftly.ai</a>
        </h4>
        <h6>Platform</h6>
        <div className="box">
          <h6>
            <a href="#">Step By Step</a>
          </h6>
          <ul>
            <li>
              <a href="#">Choose Workspace</a>
            </li>
            <li>
              <a href="#">Recent Results</a>
            </li>
            <li>
              <a href="#">Saved Results</a>
            </li>
            <li>
              <a href="/documentation/choose-a-tone">Choose a tone</a>
            </li>
          </ul>
        </div>
        <h6>Tools</h6>
        <div className="box">
          <ul>
            <li>
              <a href="#">Sentence Rewriter</a>
            </li>
            <li>
              <a href="#">Blog Builder</a>
            </li>
            <li>
              <a href="#">Product Description</a>
            </li>
            <li>
              <a href="#">Bullets to Paragraph</a>
            </li>
            <li>
              <a href="#">Headline</a>
            </li>
            <li>
              <a href="#">Blog Topics</a>
            </li>
            <li>
              <a href="#">Email Thank You</a>
            </li>
            <li>
              <a href="#">Email Confirmation</a>
            </li>
            <li>
              <a href="#">Blog Ideas</a>
            </li>
            <li>
              <a href="#">Value Proposition</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StickyMenu
