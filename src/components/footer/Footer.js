import * as React from "react"
import logo from "../../images/logo-min.png"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="section">
    <div className="container">
      <div className="footer">
        <div className="row">
          <div className="col-sm-3 col-xs-12 left-conn">
            <div className="logo">
              <Link className="replaceHref" to="/">
                <img src={logo} className="img-responsive" alt="Craftly" />
              </Link>
            </div>
          </div>
          <div className="col-sm-9 col-12 right-conn">
            <div className="ft-menu ft-menu1">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link className="replaceHref" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/about/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/#pricingInfo">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/#craftly-ai-demo">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu2">
              <h5>Resources</h5>
              <ul>
                <li>
                  <Link className="replaceHref" to="/learn/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/affiliate/">
                    Partner Program
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/affiliate/">
                    Agency Partners
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/affiliate/">
                    Referral Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu3">
              <h5>Join Communities</h5>
              <ul>
                <li>
                  <Link
                    to="https://www.facebook.com/groups/562335751328055/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Facebook Group
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu4">
              <h5>Information </h5>
              <ul>
                <li>
                  <Link className="replaceHref" to="/terms-of-use/">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/privacy-policy/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/faqs/">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="replaceHref" to="/tempesta/">
                    Tempesta
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-social-raw section">
        <div className="row">
          <div className="col-sm-6 col-12">
            <ul className="social-raw">
              <li>
                <Link
                  to="https://www.facebook.com/groups/562335751328055"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com/craftlyai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/company/22345879/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/craftly.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-12">
            <p className="copywrights">
              © 2021 Craftly.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
