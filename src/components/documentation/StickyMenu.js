import React from "react"

const StickyMenu = () => {
  return (
    <div className="left-bar-wrap">
      <div className="sticky-menu">
        <h4>
          <a href="/craftly-landing">Craftly.ai</a>
        </h4>
        <h6>Platform</h6>
        <div className="box">
          <h6>
            <a href="/craftly-landing/documentation/step-by-step">
              Step By Step
            </a>
          </h6>
          <ul>
            <li>
              <a href="/craftly-landing/documentation/">Choose Workspace</a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/">Recent Results</a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/">Saved Results</a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/choose-a-tone">
                Choose a tone
              </a>
            </li>
          </ul>
        </div>
        <h6>Tools</h6>
        <div className="box">
          <ul>
            <li>
              <a href="/craftly-landing/documentation/sentence-rewriter">
                Sentence Rewriter
              </a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/blog-builder">
                Blog Builder
              </a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/product-description">
                Product Description
              </a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/bullets-to-paragraph">
                Bullets to Paragraph
              </a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/headline">Headline</a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/blog-topics">
                Blog Topics
              </a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/email-thank-you">
                Email Thank You
              </a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/email-confirmation">
                Email Confirmation
              </a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/blog-ideas">Blog Ideas</a>
            </li>
            <li>
              <a href="/craftly-landing/documentation/value-proposition">
                Value Proposition
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StickyMenu
