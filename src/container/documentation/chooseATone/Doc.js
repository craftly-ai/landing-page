import React from "react"

const Doc = () => {
  return (
    <div className="documentation-row documentation-detail-page">
      <div className="container small-container">
        <h1>Choose a Tone</h1>
        <p>
          Sick of erasing all your exclamation marks or worried that you sound
          too curt? The tone tool can change the wording and attitude of your
          output! By choosing a specific tone, you’re giving the AI the
          opportunity to sound more like you, or at least sound like the person
          you want to be!{" "}
        </p>
        <p>
          This is great for content creation, description and assignments, as it
          keeps everything personalized and human. As we know, GPT-3 is the most
          natural language producing AI available today - and tone just takes it
          one step further to add a layer of personalization and individuality.
          Similar to using layer tools, we can also layer tones. Instead of
          choosing several tones for your copy right off the bat, we recommend
          choosing one tone, and then running it through a second time with a
          new tone for more accurate results.
        </p>
        <div className="crafting-personalized ptb80">
          <h3>Crafting Personalized Content with Tones</h3>
          <ul>
            <li>Professional</li>
            <li>Casual</li>
            <li>Excited</li>
            <li>Funny</li>
            <li>Witty</li>
            <li>Dramatic</li>
            <li>Grumpy</li>
            <li>Bold</li>
            <li>Sarcastic</li>
          </ul>
        </div>
        <div className="content-creations">
          <h3>Cai’s Tone Creations</h3>
          <ul>
            <li>
              <strong>Input:</strong> I'm just not that into you...
            </li>
          </ul>
          <h6>Output with Different Tones </h6>
          <ul>
            <li>
              <strong>Friendly:</strong> Hey there, stranger! I'm sure you're
              really nice and everything, but I think we should just stay
              friends.
            </li>
            <li>
              <strong>Bold:</strong> You and me, we just don't belong.
            </li>
            <li>
              <strong>Witty:</strong> I'm shocked you got this far. You really
              thought I'd want to go out with you? Maybe you'll have more luck
              in Las Vegas.
            </li>
            <li>
              <strong>Empathetic:</strong> I realize that you made a big effort
              to ask me on a date, which I appreciate. I’m just not interested
              in pursuing this any more.
            </li>
            <li>
              <strong>Disclaimer:</strong> Cai can word your breakup letter, but
              lacks the emotional intelligence to offer you support, tissues,
              chocolate, or advice.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Doc
