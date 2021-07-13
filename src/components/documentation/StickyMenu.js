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
            <a href="/documentation/step-by-step">Step By Step</a>
          </h6>
          <ul>
            <li>
              <a href="/documentation/">Choose Workspace</a>
            </li>
            <li>
              <a href="/documentation/">Recent Results</a>
            </li>
            <li>
              <a href="/documentation/">Saved Results</a>
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
              <a href="/documentation/sentence-rewriter">Sentence Rewriter</a>
            </li>
            <li>
              <a href="/documentation/blog-builder">Blog Builder</a>
            </li>
            <li>
              <a href="/documentation/product-description">
                Product Description
              </a>
            </li>
            <li>
              <a href="/documentation/bullets-to-paragraph">
                Bullets to Paragraph
              </a>
            </li>
            <li>
              <a href="/documentation/headline">Headline</a>
            </li>
            <li>
              <a href="/documentation/blog-topics">Blog Topics</a>
            </li>
            <li>
              <a href="/documentation/email-thank-you">Email Thank You</a>
            </li>
            <li>
              <a href="/documentation/email-confirmation">Email Confirmation</a>
            </li>
            <li>
              <a href="/documentation/blog-ideas">Blog Ideas</a>
            </li>
            <li>
              <a href="/documentation/value-proposition">Value Proposition</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StickyMenu
