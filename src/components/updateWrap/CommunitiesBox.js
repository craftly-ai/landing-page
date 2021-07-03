import React from "react"

const CommunitiesBox = () => {
  return (
    <div className="communities-box">
      <i>
        <img
          src="images/ic-facebook.svg"
          alt="Facebook"
          className="img-fluid"
        />
      </i>
      <h4>Official Facebook Group</h4>
      <p>
        Let’s be Facebook friends! Join a group and connect with other Crafters
        around the world!
      </p>
      <a
        href="https://www.facebook.com/groups/562335751328055"
        className="more-btn blue"
        target="_blank"
      >
        Join today
      </a>
    </div>
  )
}

export default CommunitiesBox
