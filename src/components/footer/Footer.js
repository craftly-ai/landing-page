import * as React from "react"
import { Link } from "gatsby"
import logo from '../../images/logo.png'

const Footer = () => (
  <footer className="section">
    <div className="container">
      <div className="footer">
        <div className="row">
          <div className="col-sm-3 col-xs-12 left-conn">
            <div className="logo">
              <Link to="#">
                <img
                  src={logo}
                  className="img-responsive"
                  alt="Craftly"
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-9 col-12 right-conn">
            <div className="ft-menu ft-menu1">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Demo</Link>
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu2">
              <h5>Resources</h5>
              <ul>
                <li>
                  <Link to="#">Help Center</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#" data-mode="popup" data-size={100}>
                    Partner Program
                  </Link>{" "}
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu3">
              <h5>Join Communities</h5>
              <ul>
                <li>
                  <Link to="#">Official Facebook Group</Link>
                </li>
                <li>
                  <Link to="#">Slack Channel</Link>
                </li>
              </ul>
            </div>
            <div className="ft-menu ft-menu4">
              <h5>Information </h5>
              <ul>
                <li>
                  <Link to="#">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
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
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link to="#">
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
