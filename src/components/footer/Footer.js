import * as React from "react"
import logo from "../../images/logo.png"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="section">
    <div className="container">
      <div className="footer">
        <div className="row">
          <div className="col-sm-3 col-xs-12 left-conn">
            <div className="logo">
              <a href="/">
                <img src={logo} className="img-responsive" alt="Craftly" />
              </a>
            </div>
          </div>
          <div className="col-sm-9 col-12 right-conn">
            <div className="ft-menu ft-menu1">
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="/about/">About</a>
                </li>
                <li>
                  <a href="/#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#header">Demo</a>
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu2">
              <h5>Resources</h5>
              <ul>
                <li>
                  <Link to="/learn/">Help Center</Link>
                </li>
                <li>
                  <a href="mailto:hello@craftly.ai?subject=Support">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://form.typeform.com/to/XXMw4Nem?typeform-medium=embed-snippet"
                    data-mode="popup"
                    data-size={100}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Partner Program
                  </a>
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu3">
              <h5>Join Communities</h5>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/groups/562335751328055/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Facebook Group
                  </a>
                </li>
                <li>
                  <a
                    href="http://craftlyai.slack.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Slack Channel
                  </a>
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu4">
              <h5>Information </h5>
              <ul>
                <li>
                  <Link to="/terms-of-use/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy/">Privacy Policy</Link>
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
                <a
                  href="https://www.facebook.com/groups/562335751328055"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/craftlyai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/22345879/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/craftly.ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
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
