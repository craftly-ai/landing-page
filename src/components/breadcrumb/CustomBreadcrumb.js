import React from "react"
import { Link } from "gatsby"

const CustomBreadcrumb = props => {
  const { className, crumbs } = props
  return (
    <div>
      <div className={className}>
        <div className="container">
          <ul>
            {crumbs.map(crumb => (
              <li>
                <Link to={crumb.link}>{crumb.name}</Link>
                <span>{"/"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CustomBreadcrumb
