import * as React from "react"
import { useEffect, useState } from "react"
import logo from "../../images/logo-min.png"
import { Link } from "gatsby"

// localStorage.removeItem("ref")
// var a = window.location.href
// var name = a.split("?")[1]
// localStorage.setItem("ref", name)
// if (name) {
//   var signup = `https://app.craftly.ai/signup${`?` + name}`
// } else {
//   var signup = `https://app.craftly.ai/signup`
// }
const Header = () => {
  const [linksignup, setlinksignup] = useState("")

  useEffect(() => {
    var a = window.location.href
    var name = a.split("?vai")[1]
    if ((name !== undefined) | null) {
      // add cookie
      var date = new Date()
      date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000)
      document.cookie =
        "ref" + "=" + name + "; expires=" + date.toGMTString() + "; path=/"
      //get cookie
      const ref = ("; " + document.cookie).split(`; ref=`).pop().split(";")[0]
      const data = `?vai${ref}`
      setlinksignup(data)
    } else {
      const ref = ("; " + document.cookie).split(`; ref=`).pop().split(";")[0]
      console.log("ref log", ref)
      if ((ref !== undefined) | null) {
        const data = `?vai${ref}`
        setlinksignup(data)
      }
      if (ref == "") {
        setlinksignup("")
      }
    }
  }, [])

  let signup = `https://app.craftly.ai/signup${linksignup}`

  return (
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
              <Link className="replaceHref" to="/">
                <img src={logo} className="img-responsive" alt="Craftly" />
              </Link>
            </div>
            <div className="header-left">
              <div className="nav">
                <div className="nav-main">
                  <ul>
                    <li>
                      <Link className="replaceHref" to="/tools/">
                        Tools & Samples
                      </Link>
                    </li>
                    <li className="sub-menu">
                      <Link to="#">Library</Link>
                      <span />
                      <ul>
                        <li>
                          <Link className="replaceHref" to="/learn/">
                            Learn
                          </Link>
                        </li>
                        <li>
                          <Link className="replaceHref" to="/affiliate/">
                            Earn
                          </Link>
                        </li>
                        <li>
                          <Link className="replaceHref" to="/about/">
                            About
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="test">
                      <Link className="replaceHref" to="/#pricingInfo">
                        Pricing
                      </Link>
                    </li>
                    <li className="mobile-li">
                      <Link
                        id="signupUrl"
                        to={signup}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Sign up
                      </Link>
                    </li>
                    <li className="mobile-li login-li">
                      <Link to="https://app.craftly.ai/auth">Login</Link>
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
                  <Link to="https://app.craftly.ai/auth">Login</Link>
                </li>
                <li>
                  <Link
                    id="signupUrl"
                    to={signup}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-main"
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
