import React from "react"
import { Link } from "gatsby"
import favoriteImg from "../../../images/ic-favorite-min.png"
import copyButtonImg from "../../../images/ic-copy-btn-min.png"

const Idea = props => {
  const { info, chars } = props

  return (
    <li>
      <div className="btn-box">
        <Link>
          <img src={favoriteImg} className="icon" alt=" Idea" />
        </Link>
        <Link>
          <img src={copyButtonImg} className="icon" alt="Idea" />
        </Link>
      </div>
      <div className="text-box">
        <h6>{info}</h6>
        <span>{chars} Chars </span>
      </div>
    </li>
  )
}

export default Idea
