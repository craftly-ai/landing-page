import React from "react"
import DocLayout from "./../../components/documentation/DocLayout"
const Index = () => {
  return (
    <DocLayout>
      <div className="container small-container">
        <h1>Documentation</h1>
        <h3>Welcome to Craftly.AI</h3>
        <p>
          <b>
            Craftly.AI can do the extraordinary! That being said, if you’re
            accustomed to the traditional way of writing this unconventional
            approach might be a bit jarring. So we wrote this manifesto to
            provide you with everything you need to survive and thrive in
            content marketing! Whether it’s your first day or one-thousandth, we
            will help you understand how to grow with Craftly.AI, from making
            the most of features to navigating our interface.
          </b>
        </p>
        <p>
          This manifesto belongs to you. Read it. Tweet it. Customize it. Keep
          it close when you swim into the deep end.
        </p>
        <p>
          On the left, we’ve listed all the tools and how to make the most of
          them. For visual learners, we have introductory tutorial videos for
          each.
        </p>
        <div className="dashboard-shadow">
          <img src="../images/dashboard-shadow.jpg" alt="dashboard" />
        </div>
      </div>
      {/* <StartedRow /> */}
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
                  Each project you create on Craftly will keep track of all of
                  the copy you’ve generated, copied, and loved.
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
                  more like you, or at least sound like the person you want to
                  be.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </DocLayout>
  )
}

export default Index
