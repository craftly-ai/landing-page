import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import header from "../../data/header.json"

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
                    <Link to={header["nav-link-toolsAndSamples"]}>
                      {header["nav-toolsAndSamples"]}
                    </Link>
                  </li>
                  <li className="sub-menu">
                    <Link to={header["nav-link-libry"]}>
                      {header["nav-libry"]}
                    </Link>
                    <span />
                    <ul>
                      <li>
                        <Link to={header["librySub-link-learn"]}>
                          {header["librySub-learn"]}
                        </Link>
                      </li>
                      <li>
                        <Link to={header["librySub-link-earn"]}>
                          {header["librySub-earn"]}
                        </Link>
                      </li>
                      <li>
                        <Link to={header["librySub-link-about"]}>
                          {header["librySub-about"]}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={header["nav-link-price"]}>
                      {header["nav-pricing"]}
                    </Link>
                  </li>
                  <li className="mobile-li">
                    <Link
                      to={header["nav-link-requestAccess"]}
                      data-toggle="modal"
                      data-target="#join-waitlist"
                    >
                      {header["nav-requestAccess"]}
                    </Link>
                  </li>
                  <li className="mobile-li login-li">
                    <Link to={header["nav-link-login"]}>
                      {header["nav-login"]}
                    </Link>
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
                <Link to={header["nav-link-login"]}>{header["nav-login"]}</Link>
              </li>
              <li>
                <Link
                  to={header["nav-link-requestAccess"]}
                  data-toggle="modal"
                  data-target="#join-waitlist"
                  className="btn-main"
                >
                  {header["nav-requestAccess"]}
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
