import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => (
  <header
    id="header"
    className="affix-top"
    data-spy="affix"
    data-offset-top={5}
  >
    <div className="container-fluid">
      <div className="header">
        <div className="header-main">
          <div className="logo">
            <Link to="#">
              <StaticImage
                src="../../images/logo.png"
                className="img-responsive"
                alt="Craftly"
              />
            </Link>
          </div>
          <div className="header-left">
            <div className="nav">
              <div className="nav-main">
                <ul>
                  <li className="test">
                    <Link to="#">Tools &amp; Samples</Link>
                  </li>
                  <li className="sub-menu">
                    <Link to="#">Library</Link>
                    <span />
                    <ul>
                      <li>
                        <Link to="#">Learn</Link>
                      </li>
                      <li>
                        <Link to="#">Earn</Link>
                      </li>
                      <li>
                        <Link to="#l">About</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Pricing</Link>
                  </li>
                  <li className="mobile-li">
                    <Link
                      to="#"
                      data-toggle="modal"
                      data-target="#join-waitlist"
                    >
                      Request Access
                    </Link>
                  </li>
                  <li className="mobile-li login-li">
                    <Link to="#">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="res_navigation">
              <Link to="#" className="nav-toggle" id="trigger-overlay">
                <span className="top" />
                <span className="middle" />
                <span className="bottom" />
              </Link>
            </div>
          </div>
          <div className="login-access">
            <ul>
              <li className="mobile-li login-li">
                <Link to="#">Login</Link>
              </li>
              <li>
                <Link
                  to="#"
                  data-toggle="modal"
                  data-target="#join-waitlist"
                  className="btn-main"
                >
                  Request Access
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
