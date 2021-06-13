import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => (
  <>
    <footer className="section">
      <div className="container">
        <div className="footer">
          <div className="row">
            <div className="col-sm-3 col-xs-12 left-conn">
              <div className="logo">
                <Link to="#">
                  <StaticImage
                    src="../../images/logo.png"
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
              <div className="ft-menu ft-menu1">
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
                    </Link>
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
    {/* END PAGE CONTENT */}
    {/* The Modal */}
    <div
      className="modal fade join-waitlist-modal modal-box-raw"
      id="join-waitlist"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label=" "
            />
            <StaticImage
              className="modal-banner img-fluid"
              src="../../images/wishlist-banner.png"
              alt=""
            />
            <div className="content-wrapper-raw section">
              <h3>Meet Cai at Craftly.ai</h3>
              <p>
                Almost live - We have a lot of exciting new <br />
                tools we’re perfecting for you.
              </p>
              <div className="request-access-raw section">
                <div className="form-group">
                  <label htmlFor>Request Access</label>
                  <div className="prefinery-form-embed" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade confirm-waitlist-modal modal-box-raw"
      id="confirm-waitlist"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label=" "
            />
            <h4>
              Craftly<span>.ai</span>
            </h4>
            <h3>Welcome!</h3>
            <p>
              We’ve added you on the waitlist and will let you <br />
              know when you can get started with Craftly
            </p>
            <div className="content-wrapper-raw section">
              <h5>Want to get access among the first?</h5>
              <p>
                Use your unique link to spread the word - each new signup via
                the link increases your placing on the list.
              </p>
              <div className="share-on-twitter-raw section">
                <input type="text" placeholder="Craftly.ai/?ref" />
                <button>
                  <i className="fa fa-twitter" /> Share on Twitter
                </button>
              </div>
            </div>
            <p className="thanks-col">
              Thanks for your Support{" "}
              <StaticImage
                src="../../images/ic-heart.svg"
                className="img-fluid ic-heart"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Footer
