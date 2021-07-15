import * as React from "react"
import logo from "../../images/logo.png"
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
            <Link to="/">
              <img src={logo} className="img-responsive" alt="Craftly" />
            </Link>
          </div>
          <div className="header-left">
            <div className="nav">
              <div className="nav-main">
                <ul>
                  <li>
                    <Link to="/tools/">Tools & Samples</Link>
                  </li>
                  <li className="sub-menu">
                    <Link to="#">Resources</Link>
                    <span />
                    <ul>
                      <li>
                        <Link to="/learn/">Learn</Link>
                      </li>
                      <li>
                        <Link to="/affiliate/">Earn</Link>
                      </li>
                      <li>
                        <Link to="/about/">About</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="test">
                    <Link to="/#pricing">Pricing</Link>
                  </li>
                  <li className="mobile-li">
                    <Link to="#">Request Access</Link>
                  </li>
                  <li className="mobile-li login-li">
                    <Link to="https://craftly.web.app/auth">Login</Link>
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
                <Link to="https://craftly.web.app/auth">Login</Link>
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
