import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Idea = props => {
  const { info, chars } = props

  return (
    <li>
      <div className="btn-box">
        <Link>
          <StaticImage
            src="../../../images/ic-favorite.svg"
            className="icon"
            alt=""
          />
        </Link>
        <Link>
          <StaticImage
            src="../../../images/ic-copy-btn.svg"
            className="icon"
            alt=""
          />
        </Link>
      </div>
      <div className="text-box">
        <h6>{info}</h6>
        <span>{chars}</span>
      </div>
    </li>
  )
}

export default Idea
