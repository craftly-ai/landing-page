import React from "react"
import { Link } from "gatsby"

const StickyMenu = () => {
  return (
    <div className="left-bar-wrap">
      <div className="sticky-menu">
        <h4>
          <Link className="replaceHref" to="/">
            Craftly.ai
          </Link>
        </h4>
        <h6>Platform</h6>
        <div className="box">
          <h6>
            <Link to="/documentation/step-by-step">Step By Step</Link>
          </h6>
          <ul>
            <li>
              <Link to="/documentation/">Choose Workspace</Link>
            </li>
            <li>
              <Link to="/documentation/">Recent Results</Link>
            </li>
            <li>
              <Link to="/documentation/">Saved Results</Link>
            </li>
            <li>
              <Link to="/documentation/choose-a-tone">Choose a tone</Link>
            </li>
          </ul>
        </div>
        <h6>Tools</h6>
        <div className="box">
          <ul>
            <li>
              <Link to="/documentation/sentence-rewriter">
                Sentence Rewriter
              </Link>
            </li>
            <li>
              <Link to="/documentation/blog-builder">Blog Builder</Link>
            </li>
            <li>
              <Link to="/documentation/product-description">
                Product Description
              </Link>
            </li>
            <li>
              <Link to="/documentation/bullets-to-paragraph">
                Bullets to Paragraph
              </Link>
            </li>
            <li>
              <Link to="/documentation/headline">Headline</Link>
            </li>
            <li>
              <Link to="/documentation/blog-topics">Blog Topics</Link>
            </li>
            <li>
              <Link to="/documentation/email-thank-you">Email Thank You</Link>
            </li>
            <li>
              <Link to="/documentation/email-confirmation">
                Email Confirmation
              </Link>
            </li>
            <li>
              <Link to="/documentation/blog-ideas">Blog Ideas</Link>
            </li>
            <li>
              <Link to="/documentation/value-proposition">
                Value Proposition
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StickyMenu
