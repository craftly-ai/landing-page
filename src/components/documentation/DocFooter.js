import React from "react"
import { Link } from "gatsby"

const DocFooter = () => {
  return (
    <footer class="section white-footer">
      <div class="container small-container">
        <div class="footer">
          <div class="row">
            <div class="col-sm-12 col-12 right-conn">
              <div class="ft-menu ft-menu1">
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
              <div class="ft-menu ft-menu2">
                <h5>Resources</h5>
                <ul>
                  <li>
                    <Link className="replaceHref" to="/learn/">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link className="replaceHref" to="/affiliate/">
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="ft-menu ft-menu3">
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
              <div class="ft-menu ft-menu4">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-social-raw section">
          <div class="row">
            <div class="col-sm-6 col-12">
              <ul class="social-raw">
                <li>
                  <Link
                    to="https://www.facebook.com/groups/562335751328055"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://twitter.com/craftlyai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/22345879/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/craftly.ai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-12">
              <p class="copywrights">© 2021 Craftly.ai. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default DocFooter
