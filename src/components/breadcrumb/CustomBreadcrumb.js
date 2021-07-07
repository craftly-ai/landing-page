import React from "react"
import { Link } from "gatsby"

const CustomBreadcrumb = props => {
  const { className, crumbs } = props
  return (
    <div>
      <div className={className}>
        <div className="container">
          <ul>
            {/* <li>
              <Link to={"/"}>{"Home"}</Link>
              <span>/</span>
            </li> */}
            {crumbs.map(crumb => (
              <li>
                <Link
                  to={crumb.pathname}
                  style={{ ...crumb.crumbStyle }}
                  activeStyle={{ ...crumb.crumbActiveStyle }}
                >
                  {crumb.crumbLabel}
                </Link>
                <span>{crumb.crumbSeparator || " "}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CustomBreadcrumb
