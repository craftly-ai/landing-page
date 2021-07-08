import React from "react"

const StartedRow = () => {
  return (
    <div className="started-row">
      <div className="container small-container">
        <h3>Get Started:</h3>
        <ul>
          <li>
            <a>
              <div className="icon">
                <img src="../images/ic-collaborate.svg" alt="icon" />
              </div>
              <h5>Collaborate with Teams</h5>
              <p>Coming Soon.</p>
            </a>
          </li>
          <li>
            <a href="/step-by-step.html">
              <div className="icon">
                <img src="../images/ic-seperate.svg" alt="icon" />
              </div>
              <h5>Seperate your Projects Via Campaigns</h5>
              <p>
                Each project you create on Craftly will keep track of all of the
                copy you’ve generated, copied, and loved.
              </p>
            </a>
          </li>
          <li>
            <a href="choose-a-tone.html">
              <div className="icon">
                <img src="../images/ic-choosing-tones.svg" alt="icon" />
              </div>
              <h5>Choosing Tones</h5>
              <p>
                Change the wording and attitude of your output! By choosing a
                specific tone, you’re giving the AI the opportunity to sound
                more like you, or at least sound like the person you want to be.
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StartedRow
