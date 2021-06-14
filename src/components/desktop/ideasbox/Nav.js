import React from "react"
import { Link } from "gatsby"

const Nav = props => {
  const { linkall, linkfavorite, linkcopyall } = props

  return (
    <div className="title-wrap">
      <ul>
        <li className="active">{linkall}</li>
        <li>
          <Link data-toggle="modal" data-target="#join-waitlist">
            {linkfavorite}
          </Link>
        </li>
      </ul>
      <Link
        data-toggle="modal"
        data-target="#join-waitlist"
        className="copy-all url-none"
      >
        {linkcopyall}
      </Link>
    </div>
  )
}

export default Nav
