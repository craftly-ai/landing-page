import React from "react"
import { Link } from "gatsby"

const MenuNavigation = () => {
  return (
    <div className="res_navigation">
      <Link to="" className="nav-toggle" id="trigger-overlay">
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </Link>
    </div>
  )
}

export default MenuNavigation
