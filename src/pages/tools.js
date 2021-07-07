import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import CustomBreadcrumb from "./../components/breadcrumb/CustomBreadcrumb"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const Tools = location => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "List of All Tools",
  })

  const metaTitle = "Tools"
  const metaDescription =
    "See our wide variety of tools & templates: Essays, Blogs, Articles, Ads, Web Copy, Landing Pages, E-commerce, Writing Tools, SEO Assistance, Company, Emails, and more!"
  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <div className="section container-sec first-section ptb100">
          <CustomBreadcrumb crumbs={crumbs} className={"breadcrumbs section"} />

          <div className="container">
            <div className="section tools-raw">
              {/* Title */}
              <h1>List of All Tools</h1>
              {/* Sub Title */}
              <p>
                We can't wait to show you what we've been perfecting for you.
              </p>
              <p>Here are some of the tools we're working on:</p>
              <div className="section tools-col pt80">
                <div className="tab-content">
                  <div className="row">
                    <div className="col-sm-6 col-12 left-conn">
                      <div className="tools-tab">
                        {/* map tools and get list of nav item and add with id */}
                        <ul
                          className="nav nav-tabs tools-tab-nav"
                          role="tablist"
                        >
                          <li>
                            <a
                              className="active"
                              data-toggle="tab"
                              href="#popular"
                            >
                              Popular
                            </a>
                          </li>
                          {/* TODO In popular, include first 10 tools I included below*/}
                          <li>
                            <a data-toggle="tab" href="#company">
                              Company
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#blog">
                              Blog
                            </a>
                          </li>
                          {/* TODO Only do Blog Builder, Blog Topics, Bullets to Blog*/}
                          <li>
                            <a data-toggle="tab" href="#web-copy">
                              Web Copy
                            </a>
                          </li>
                          {/* TODO Headline */}
                          <li>
                            <a data-toggle="tab" href="#ecommerce">
                              Ecommerce
                            </a>
                          </li>
                          {/* TODO Product Description */}
                          <li>
                            <a data-toggle="tab" href="#ads">
                              Ads
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#email">
                              Email
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#socials">
                              Socials
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#writing-tool">
                              Writing Tool
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* map tools and get nav item id for div id */}
                  <div id="popular" className="tab-pane active">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                {/* 1. map cardGroup and get card  name, info 
                                      2. get index from map and add with card name for card data id  
                                  */}
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#popular1"
                                    >
                                      <div className="white-box section">
                                        <h5>Product Description</h5>
                                        <p>
                                          Generate unique descriptions that not
                                          only rank well in search engines but
                                          also sell your products.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#popular2">
                                      <div className="white-box section">
                                        <h5>Blog Topics</h5>
                                        <p>
                                          Brainstorm high quality articles on
                                          trending topics or keywords in your
                                          industry.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#popular3">
                                      <div className="white-box section">
                                        <h5>Blog Intro</h5>
                                        <p>
                                          Generate a captivating introduction
                                          that is sure to grab your reader’s
                                          attention!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#popular4">
                                      <div className="white-box section">
                                        <h5>Value Proposition</h5>
                                        <p>
                                          Generate clear statements that
                                          describe the unique value you'll
                                          deliver to your customers.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#popular5">
                                      <div className="white-box section">
                                        <h5>Growth Ideas</h5>
                                        <p>
                                          Go viral with these exciting marketing
                                          ideas that will set you apart from the
                                          competition.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#popular6">
                                      <div className="white-box section">
                                        <h5>New Tone</h5>
                                        <p>
                                          Don’t let your message get lost in
                                          translation! When it comes to writing,
                                          tone is everything.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#popular7">
                                      <div className="white-box section">
                                        <h5>Headline</h5>
                                        <p>
                                          Make people click! Generate custom
                                          headlines that tell a compelling
                                          story.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#popular9">
                                      <div className="white-box section">
                                        <h5>Bullet Points - Blog</h5>
                                        <p>
                                          Turn talking points into well written
                                          paragraphs
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            {/* 
                                      1. get index from map and add with card name for card data id  
                                      2. map cardGroup and get card data 
                                  */}
                            <div id="popular1" className="tab-pane active">
                              <h3>Product Description</h3>
                              <p className="short-conn">
                                Generate unique descriptions that not only rank
                                well in search engines but also sell your
                                products.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="iRobot - Your New Friend"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Meet iRobot, your new best friend. With
                                  advanced smart technology and sleek new
                                  design, there's never a dull moment when
                                  you're hanging with iRobot. Not only can he
                                  help you keep the floors or table clean while
                                  you're cooking dinner, he can scoot around on
                                  his own and play music for you. He even
                                  responds to your voice! So the next time
                                  you're in the market for a pal, look at our
                                  new and improved iRobot. Imagine who you'll
                                  meet now…
                                </p>
                                <p>
                                  iRobot the robot revolution begins today.
                                  iRobot® creates new possibilities in the
                                  everyday tasks of life for people of all ages.
                                  From vacuuming floors and maintaining a pool
                                  to mopping the kitchen floor, driving around
                                  on a lawn mower or duck boat, our robots are
                                  designed to help you do more.
                                </p>
                                <p>
                                  Your new best friend is the iRobot Roomba, the
                                  vacuum that goes where you go. It detects and
                                  avoids obstacles, docks for recharging, then
                                  heads out to clean another room. So go ahead
                                  and enjoy your home. iRobot will take care of
                                  cleaning it.
                                </p>
                              </div>
                            </div>
                            <div id="popular2" className="tab-pane">
                              <h3>Blog Topics</h3>
                              <p className="short-conn">
                                Brainstorm high quality articles on trending
                                topics or keywords in your industry.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Craftly.AI - An artificial Intelligence GPT3"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Zero Coding, Start Earning: Get your affiliate
                                  link for GPT3 and start earning as much money
                                  as you want from it
                                </p>
                                <p>
                                  10 Ways to Use Artificial Intelligence (AI) In
                                  Your Business: A blog about AI and how to
                                  integrate it into your business
                                </p>
                                <p>
                                  Is Artificial Intelligence Taking Over Jobs? A
                                  blog about the purpose of AI
                                </p>
                                <p>
                                  How AI and Machine Learning Will Impact the
                                  Future of Marketing: A blog about how AI will
                                  change the marketing industry and how it can
                                  be used with marketing
                                </p>
                              </div>
                            </div>
                            <div id="popular3" className="tab-pane">
                              <h3>Blog Builder</h3>
                              <p className="short-conn">
                                Brainstorm high quality articles on trending
                                topics or keywords in your industry.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Beauty Blogger - Our blog helps you keep up with our ever changing social environments. Stay up to date with the latest fashion trends on Beauty Blogger"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Staying up with social trends is a must if you
                                  want to be a successful blogger. Trends are
                                  always changing and they affect how you can
                                  market your blog successfully. And since we’re
                                  a Beauty Blog, we have to constantly change
                                  our theme. If you don’t know what it takes to
                                  maintain a beautiful blog like ours, then come
                                  and read about the tips and tricks that can
                                  help you succeed as well.
                                </p>
                                <p>
                                  Welcome to Beauty Blogger! We may be brand
                                  new, but our blog is all about a phenomenon
                                  that is not. You see, social media has evolved
                                  a lot over the past few years now being used
                                  for more than just a means of staying
                                  up-to-date with friends we have not seen in
                                  fifteen years. Social media has become a great
                                  resource for people who are looking to grow
                                  their own business or simply want to keep up
                                  on trends as they occur. Because of this,
                                  social media accounts have become an essential
                                  element to success in many niche markets and
                                  industries. Becoming a great blogger, vlogger
                                  or Instagrammer is part talent and part
                                  experience. Running your own blog or YouTube
                                  channel takes dedication and knowledge that
                                  only time can teach you
                                </p>
                                <p>
                                  Have you become one of the millions of
                                  individuals looking for information on how to
                                  improve your beauty regimen? Maybe you’re just
                                  someone who is interested in learning more
                                  about the latest trends in fashion. Also,
                                  people around the world are becoming more
                                  aware of how they look on a daily basis. I
                                  remember what it was like when I was young and
                                  didn’t give much thought to makeup or fashion.
                                  It seems that we are always comparing
                                  ourselves with the fads that take place in our
                                  social environments. I also feel that whenever
                                  I speak with an individual who isn’t familiar
                                  with beauty blogs they usually aren’t sure why
                                  they should be following one. This post
                                  provides an overview of why it might interest
                                  you to start perusing
                                </p>
                                <p>
                                  Why are you here? Confused and frustrated with
                                  your blog's performance? Does social media
                                  success scare you? You're not alone! We've
                                  created this guide so we could share what we
                                  figured out for ourselves. From learning how
                                  to use Klout, Hashtagify, Hootsuite and
                                  Buzzsumo, to creating a solid content
                                  schedule, there's so much to learn as beauty
                                  bloggers. It can feel daunting but it doesn't
                                  have to be! Let us show you how we roll and
                                  give your blog the social-media boost it
                                  deserves.
                                </p>
                              </div>
                            </div>
                            <div id="popular4" className="tab-pane">
                              <h3>Value Proposition</h3>
                              <p className="short-conn">
                                Generate clear statements that describe the
                                unique value you'll deliver to your customers.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="AI Copywriter called craftly.ai"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  AI-Driven Content That Converts. Crafly’s AI
                                  platform uses sophisticated algorithms to
                                  offer the precise tone, cadence, and structure
                                  of any sentence. Its secret sauce is its
                                  proprietary deep neural network trained on
                                  decades of marketing copy data. After testing
                                  thousands of stylistic combinations, it spits
                                  out best-practice copy that can be tweaked for
                                  client-specific content.
                                </p>
                                <p>
                                  AI-Powered Content Creation: We have been
                                  working on the world’s first artificial
                                  intelligence content creation platform for
                                  some time. Our AI which mimics native humans
                                  has developed a set of unique capabilities,
                                  that allows it to either fully or partially
                                  take over the work of a copywriter. It can
                                  generate thousands of articles based on
                                  specific content topics and desired genres.
                                  Just give us parameters like how long should
                                  be your article, what kind of topics you need
                                  to cover…
                                </p>
                                <p>
                                  AI copywriting cuts costs while growing
                                  customer loyalty. The world’s first AI
                                  copywriting platform will help you cut cost
                                  &amp; boost profits. 90% of brands we analyzed
                                  admit to outsourcing at least some part of
                                  their marketing. Yet, AI-driven substitution
                                  will soon become a key value proposition of
                                  customers. Engaging content is the key to
                                  customer loyalty. Marketing and support teams
                                  can now focus on providing a great experience,
                                  knowing that AI copywriters are covering
                                  demand generation and lead nurturing as well
                                  as
                                </p>
                              </div>
                            </div>
                            <div id="popular5" className="tab-pane">
                              <h3>Growth Ideas</h3>
                              <p className="short-conn">
                                Go viral with these exciting marketing ideas
                                that will set you apart from the competition.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Craftly.ai - Ai powered copywriter"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Embed this growth loop into another service or
                                  website. For example, by creating a plug-in
                                  with the viral loop for craftly.ai, a user can
                                  embed it on another site and generate viral
                                  traffic to Craftly.ai - Ai powered copywriter.
                                </p>
                                <p>
                                  Design the product in a way that it requires
                                  users to share its usage to their friends to
                                  acquire new features. For example, craftly.ai
                                  could provide a component that enables the
                                  user to share the content created using
                                  artificial intelligence with their social
                                  networks, thereby increasing the growth of its
                                  customer base. It could embed viral triggers
                                  at deep levels of the product interface which
                                  would encourage its users to invite their
                                  social network to use it as well.
                                </p>
                                <p>
                                  Default users to a second round of copywriting
                                  which is a continuation of the first. This
                                  technique is highly recommended as it
                                  automatically creates the urgency factor for
                                  repeated content usage. As more content is
                                  consumed, customers are encouraged to write
                                  more and purchase more credits. This serves as
                                  a perpetual loop.
                                </p>
                                <p>
                                  Package the software as an app. The app uses
                                  facial recognition technology to understand a
                                  person’s emotions. It then creates a profile
                                  with details about a person’s hobbies,
                                  interests, and personality traits. The program
                                  is not only capable of developing a marketing
                                  strategy for the user, but it can also learn
                                  from its mistakes and improve as time goes on.
                                  In addition to that, there is no need for
                                  users to input data or keywords because the
                                  program will go through all available
                                  information in order for it to develop
                                  content. The final result leads to content
                                  development that can be more effective than
                                  writing an article or choosing keywords
                                  manually by a copywriter. This further
                                  provides an advantage for artificially
                                  intelligent.ai to be viral because people can
                                  share their posts
                                </p>
                              </div>
                            </div>
                            <div id="popular6" className="tab-pane">
                              <h3>New Tone</h3>
                              <p className="short-conn">
                                Don’t let your message get lost in translation!
                                When it comes to writing, tone is everything.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="I'm just not that into you..."
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  <strong>Friendly:</strong> I enjoy spending
                                  time with you and I am grateful for all that
                                  we’ve shared together, but I just don’t feel a
                                  romantic connection.
                                </p>
                                <p>
                                  <strong>Bold:</strong> You and me, we just
                                  don't belong.
                                </p>
                                <p>
                                  <strong>Witty:</strong> I'm shocked you got
                                  this far. You really thought I'd want to go
                                  out with you? Maybe you'll have more luck in
                                  Las Vegas.
                                </p>
                                <p>
                                  <strong>Empathetic:</strong> I realize that
                                  you made a big effort to ask me on a date,
                                  which I appreciate. I’m just not interested in
                                  pursuing this any more.
                                </p>
                              </div>
                            </div>
                            <div id="popular7" className="tab-pane">
                              <h3>Headline</h3>
                              <p className="short-conn">
                                Make people click! Generate custom headlines
                                that tell a compelling story.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="cali.ai - GPT-3 is breaking ground!"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>Two Robots, A Million Conversations,</p>
                                <p>
                                  Meet the first and most powerful natural
                                  language
                                </p>
                                <p>
                                  Explore the 3 Dimensions of Artificial
                                  Intelligence
                                </p>
                                <p>Be A Part of History In The Making</p>
                                <p>
                                  A Leap Forward in Generative Artificial
                                  Intelligence
                                </p>
                              </div>
                            </div>
                            <div id="popular8" className="tab-pane">
                              <h3>Bullet Points - Paragraph</h3>
                              <p className="short-conn">NICOLE</p>
                            </div>
                            <div id="popular9" className="tab-pane">
                              <h3>Bullet Points - Blog</h3>
                              <p className="short-conn">
                                Turn talking points into well written paragraphs
                              </p>
                            </div>
                            <div id="popular10" className="tab-pane">
                              <h3>Bullet Points - Bio</h3>
                              <p className="short-conn">
                                Turn talking points into a detailed and
                                descriptive biography
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="company" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#company1"
                                    >
                                      <div className="white-box section">
                                        <h5>Value Proposition</h5>
                                        <p>
                                          Generate clear statements that
                                          describe the unique value you'll
                                          deliver to your customers.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#company2">
                                      <div className="white-box section">
                                        <h5>Company Bio</h5>
                                        <p>
                                          Bios that capture your company's
                                          unique personality and grab the
                                          attention of potential customers.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#company3">
                                      <div className="white-box section">
                                        <h5>Growth Ideas</h5>
                                        <p>
                                          Go viral with these exciting marketing
                                          ideas that will set you apart from the
                                          competition.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#company4">
                                      <div className="white-box section">
                                        <h5>Personal Bio</h5>
                                        <p>
                                          Hate writing about yourself? Generate
                                          a captivating bio for resumes, social
                                          media, or even bumble!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#company5">
                                      <div className="white-box section">
                                        <h5>Mission Statement</h5>
                                        <p>
                                          Dream big, and let us summarize your
                                          company’s goals and values in a
                                          captivating yet concise way.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#company6">
                                      <div className="white-box section">
                                        <h5>Feature List</h5>
                                        <p>
                                          List all the exciting things you, your
                                          company, or your product will be able
                                          to do!{" "}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#company7">
                                      <div className="white-box section">
                                        <h5>Company Voice </h5>
                                        <p>
                                          Tell us who you are, and we’ll come up
                                          with a unique tone to present to your
                                          audience.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#company8">
                                      <div className="white-box section">
                                        <h5>Name Generator</h5>
                                        <p>
                                          We’re not not saying that Craftly.ai
                                          was an AI generated name...
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="company1" className="tab-pane active">
                              <h3>Value Proposition</h3>
                              <p className="short-conn">
                                Generate clear statements that describe the
                                unique value you'll deliver to your customers.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="AI Copywriter called craftly.ai"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  AI-Driven Content That Converts. Crafly’s AI
                                  platform uses sophisticated algorithms to
                                  offer the precise tone, cadence, and structure
                                  of any sentence. Its secret sauce is its
                                  proprietary deep neural network trained on
                                  decades of marketing copy data. After testing
                                  thousands of stylistic combinations, it spits
                                  out best-practice copy that can be tweaked for
                                  client-specific content.
                                </p>
                                <p>
                                  AI-Powered Content Creation: We have been
                                  working on the world’s first artificial
                                  intelligence content creation platform for
                                  some time. Our AI which mimics native humans
                                  has developed a set of unique capabilities,
                                  that allows it to either fully or partially
                                  take over the work of a copywriter. It can
                                  generate thousands of articles based on
                                  specific content topics and desired genres.
                                  Just give us parameters like how long should
                                  be your article, what kind of topics you need
                                  to cover…
                                </p>
                                <p>
                                  AI copywriting cuts costs while growing
                                  customer loyalty. The world’s first AI
                                  copywriting platform will help you cut cost
                                  &amp; boost profits. 90% of brands we analyzed
                                  admit to outsourcing at least some part of
                                  their marketing. Yet, AI-driven substitution
                                  will soon become a key value proposition of
                                  customers. Engaging content is the key to
                                  customer loyalty. Marketing and support teams
                                  can now focus on providing a great experience,
                                  knowing that AI copywriters are covering
                                  demand generation and lead nurturing as well
                                  as
                                </p>
                              </div>
                            </div>
                            <div id="company2" className="tab-pane">
                              <h3>Company Bio</h3>
                              <p className="short-conn">
                                Bios that capture your company's unique
                                personality and grab the attention of potential
                                customers.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Craftly.ai GPT-3 AI Assisted copywriter"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Craftly.ai is a GPT-3 AI assisted Copywriter
                                  that understands your business and audience to
                                  create content that converts. You can even
                                  automate the process with our advanced
                                  scheduling capabilities, so you never have to
                                  worry about writing copy again! We work with
                                  companies of all sizes, from small startups to
                                  Fortune 500 brands. From day one we have been
                                  committed to providing high quality services
                                  at an affordable price point for every company
                                  looking for increased conversions without
                                  breaking the bank.
                                </p>
                                <p>
                                  Craftly.ai is a GPT-3 AI Assisted copywriter
                                  that helps businesses create and distribute
                                  professional quality content for social media,
                                  blogs, website pages, newsletters, SEO
                                  campaigns and more.
                                </p>
                                <p>
                                  The company's innovative AI technology
                                  generates engaging language in just seconds by
                                  analyzing the customer’s text or
                                  specifications and then applying natural
                                  intelligence to generate relevant content with
                                  limited human input. This saves time as well
                                  as money without sacrificing on quality!
                                </p>
                                <p>
                                  The Craftly.ai team is on a mission to
                                  democratize marketing by making it easier for
                                  companies to create high-quality content at
                                  scale for less cost than ever before. We’ve
                                  created an artificial intelligence copywriter
                                  that understands the nuances of human language
                                  and knows how to write coherent, compelling,
                                  engaging copy in any marketing situation.
                                </p>
                                <p>
                                  GPT-3 AI Assisted Copy Writer is not only able
                                  to produce quality pieces of writing faster
                                  than humans, but also provide insight into
                                  what audiences want and need from your company
                                  or organization.
                                </p>
                                <p>
                                  Craftly.ai is a GPT-3 AI assisted Copywriter
                                  that understands your business and audience to
                                  create content that converts. You can even
                                  automate the process with our advanced
                                  scheduling capabilities, so you never have to
                                  worry about writing copy again! We work with
                                  companies of all sizes, from small startups to
                                  Fortune 500 brands. From day one we have been
                                  committed to providing high quality services
                                  at an affordable price point for every company
                                  looking for increased conversions without
                                  breaking the bank.
                                </p>
                              </div>
                            </div>
                            <div id="company3" className="tab-pane">
                              <h3>Growth Ideas</h3>
                              <p className="short-conn">
                                Go viral with these exciting marketing ideas
                                that will set you apart from the competition.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Craftly.ai - Ai powered copywriter"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Embed this growth loop into another service or
                                  website. For example, by creating a plug-in
                                  with the viral loop for craftly.ai, a user can
                                  embed it on another site and generate viral
                                  traffic to Craftly.ai - Ai powered copywriter.
                                </p>
                                <p>
                                  Design the product in a way that it requires
                                  users to share its usage to their friends to
                                  acquire new features. For example, craftly.ai
                                  could provide a component that enables the
                                  user to share the content created using
                                  artificial intelligence with their social
                                  networks, thereby increasing the growth of its
                                  customer base. It could embed viral triggers
                                  at deep levels of the product interface which
                                  would encourage its users to invite their
                                  social network to use it as well.
                                </p>
                                <p>
                                  Default users to a second round of copywriting
                                  which is a continuation of the first. This
                                  technique is highly recommended as it
                                  automatically creates the urgency factor for
                                  repeated content usage. As more content is
                                  consumed, customers are encouraged to write
                                  more and purchase more credits. This serves as
                                  a perpetual loop.
                                </p>
                                <p>
                                  Package the software as an app. The app uses
                                  facial recognition technology to understand a
                                  person’s emotions. It then creates a profile
                                  with details about a person’s hobbies,
                                  interests, and personality traits. The program
                                  is not only capable of developing a marketing
                                  strategy for the user, but it can also learn
                                  from its mistakes and improve as time goes on.
                                  In addition to that, there is no need for
                                  users to input data or keywords because the
                                  program will go through all available
                                  information in order for it to develop
                                  content. The final result leads to content
                                  development that can be more effective than
                                  writing an article or choosing keywords
                                  manually by a copywriter. This further
                                  provides an advantage for artificially
                                  intelligent.ai to be viral because people can
                                  share their posts
                                </p>
                              </div>
                            </div>
                            <div id="company4" className="tab-pane">
                              <h3>Personal Bio</h3>
                              <p className="short-conn">
                                Hate writing about yourself? Generate a
                                captivating bio for resumes, social media, or
                                even bumble!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Disruptive entrepreneur"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  I'm a Disruptive Entrepreneur, Start-Up
                                  Founder, Business Coach &amp; Growth Hacker.
                                  I'm on a mission to build 10+ companies with
                                  $100M in ARR by 2020. 🤔
                                </p>
                                <p>
                                  💰💸📈 My goal is to invest $1B and disrupt
                                  the $1.5T insurance-investing industry for
                                  millennials. Notable Mentors: Arianna
                                  Huffington, Tony Robbins, &amp; Gary
                                  Vaynerchuk. The Forbes 30 Under 30 list
                                  member.
                                </p>
                                <p>
                                  🌐 I am the CEO of a disruptive technology
                                  company that is changing the way people create
                                  and grow businesses. We have created a
                                  marketplace where entrepreneurs can go to get
                                  access to the products and services they need
                                  to make their business successful.
                                  💰💰💰💰💰💰 <br />
                                  👋 My mission is to positively disrupt the way
                                  we think, learn and do things in an effort to
                                  live a life that is uber-abundant, abundant
                                </p>
                                <p>
                                  🌐 I'm a VC-backed CEO who speeds up
                                  established companies by disrupting their
                                  industries entirely. I also help entrepreneurs
                                  get press as well through my agency, Mojo PR.{" "}
                                  <br />
                                  🤝 if you've got an idea that my team and I
                                  can help you on, reach out and we'll talk.
                                </p>
                              </div>
                            </div>
                            <div id="company5" className="tab-pane">
                              <h3>Mission Statement</h3>
                              <p className="short-conn">
                                Dream big, and let us summarize your company’s
                                goals and values in a captivating yet concise
                                way.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Craftly.AI"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Our mission is to help customers create more
                                  valuable content in less time, so they can
                                  focus on what's important.
                                </p>
                                <p>
                                  To democratize access to the most advanced
                                  copywriting AI technologies in every industry.
                                </p>
                                <p>
                                  Bringing the power of AI to online marketers.
                                </p>
                              </div>
                            </div>
                            <div id="company6" className="tab-pane">
                              <h3>Feature List</h3>
                              <p className="short-conn">
                                List all the exciting things you, your company,
                                or your product will be able to do!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search Engine Optimization"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>Learn SEO Copywriting</p>
                                <p>Automate White Hat Marketing</p>
                                <p>Generate leads and funnel conversions</p>
                              </div>
                            </div>
                            <div id="company7" className="tab-pane">
                              <h3>Company Voice</h3>
                              <p className="short-conn">
                                Tell us who you are, and we’ll come up with a
                                unique tone to present to your audience.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Craftly a"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>Innovative, forward-thinking, creative,</p>
                                <p>
                                  Comprehensive, simple design, user-friendly
                                </p>
                                <p>Innovative, smart, human</p>
                              </div>
                            </div>
                            <div id="company8" className="tab-pane">
                              <h3>Name Generator</h3>
                              <p className="short-conn">
                                We’re not not saying that Craftly.ai was an AI
                                generated name...
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Ai powered copywriter"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>iPitch</p>
                                <p>Copyme</p>
                                <p>pArticulate</p>
                                <p>Copybot</p>
                                <p>WriteInAI</p>
                                <p>Completeme</p>
                                <p>ProseMatcher</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="blog" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#blog1"
                                    >
                                      <div className="white-box section">
                                        <h5>Blog</h5>
                                        <p>
                                          Brainstorm high quality articles on
                                          trending topics or keywords in your
                                          industry.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#blog2">
                                      <div className="white-box section">
                                        <h5>Blog Intro</h5>
                                        <p>
                                          Generate a captivating introduction
                                          that is sure to grab your reader’s
                                          attention!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#blog3">
                                      <div className="white-box section">
                                        <h5>Rewriter</h5>
                                        <p>
                                          Don’t like the way something sounds?
                                          Generate a quick rewrite of it again
                                          and again until you do!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#blog4">
                                      <div className="white-box section">
                                        <h5>Blog Blurb</h5>
                                        <p>
                                          Blast through writer's block by
                                          letting us write an excerpt for you.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#blog5">
                                      <div className="white-box section">
                                        <h5>Blog Outline</h5>
                                        <p>
                                          Get structured layout ideas based on
                                          trending topics and our research.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#blog6">
                                      <div className="white-box section">
                                        <h5>Creative Story</h5>
                                        <p>
                                          From romances, to action adventures,
                                          even horrors- let us help you tell a
                                          creative story.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="blog1" className="tab-pane active">
                              <h3>Blog</h3>
                              <p className="short-conn">
                                Brainstorm high quality articles on trending
                                topics or keywords in your industry.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="craftly.AI - An artificial Intelligence GPT3"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Zero Coding, Start Earning: Get your affiliate
                                  link for GPT3 and start earning as much money
                                  as you want from it
                                </p>
                                <p>
                                  10 Ways to Use Artificial Intelligence (AI) In
                                  Your Business: A blog about AI and how to
                                  integrate it into your business
                                </p>
                                <p>
                                  Is Artificial Intelligence Taking Over Jobs? A
                                  blog about the purpose of AI
                                </p>
                                <p>
                                  How AI and Machine Learning Will Impact the
                                  Future of Marketing: A blog about how AI will
                                  change the marketing industry and how it can
                                  be used with marketing
                                </p>
                              </div>
                            </div>
                            <div id="blog2" className="tab-pane">
                              <h3>Blog Builder</h3>
                              <p className="short-conn">
                                Brainstorm high quality articles on trending
                                topics or keywords in your industry.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Beauty Blogger - Our blog helps you keep up with our ever changing social environments. Stay up to date with the latest fashion trends on Beauty Blogger"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Staying up with social trends is a must if you
                                  want to be a successful blogger. Trends are
                                  always changing and they affect how you can
                                  market your blog successfully. And since we’re
                                  a Beauty Blog, we have to constantly change
                                  our theme. If you don’t know what it takes to
                                  maintain a beautiful blog like ours, then come
                                  and read about the tips and tricks that can
                                  help you succeed as well.
                                </p>
                                <p>
                                  Welcome to Beauty Blogger! We may be brand
                                  new, but our blog is all about a phenomenon
                                  that is not. You see, social media has evolved
                                  a lot over the past few years now being used
                                  for more than just a means of staying
                                  up-to-date with friends we have not seen in
                                  fifteen years. Social media has become a great
                                  resource for people who are looking to grow
                                  their own business or simply want to keep up
                                  on trends as they occur. Because of this,
                                  social media accounts have become an essential
                                  element to success in many niche markets and
                                  industries. Becoming a great blogger, vlogger
                                  or Instagrammer is part talent and part
                                  experience. Running your own blog or YouTube
                                  channel takes dedication and knowledge that
                                  only time can teach you
                                </p>
                                <p>
                                  Have you become one of the millions of
                                  individuals looking for information on how to
                                  improve your beauty regimen? Maybe you’re just
                                  someone who is interested in learning more
                                  about the latest trends in fashion. Also,
                                  people around the world are becoming more
                                  aware of how they look on a daily basis. I
                                  remember what it was like when I was young and
                                  didn’t give much thought to makeup or fashion.
                                  It seems that we are always comparing
                                  ourselves with the fads that take place in our
                                  social environments. I also feel that whenever
                                  I speak with an individual who isn’t familiar
                                  with beauty blogs they usually aren’t sure why
                                  they should be following one. This post
                                  provides an overview of why it might interest
                                  you to start perusing
                                </p>
                                <p>
                                  Why are you here? Confused and frustrated with
                                  your blog's performance? Does social media
                                  success scare you? You're not alone! We've
                                  created this guide so we could share what we
                                  figured out for ourselves. From learning how
                                  to use Klout, Hashtagify, Hootsuite and
                                  Buzzsumo, to creating a solid content
                                  schedule, there's so much to learn as beauty
                                  bloggers. It can feel daunting but it doesn't
                                  have to be! Let us show you how we roll and
                                  give your blog the social-media boost it
                                  deserves.
                                </p>
                              </div>
                            </div>
                            <div id="blog3" className="tab-pane">
                              <h3>Rewriter</h3>
                              <p className="short-conn">
                                Don’t like the way something sounds? Generate a
                                quick rewrite of it again and again until you
                                do!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Beauty Blogger - Our blog helps you keep up with our ever changing social environments. Stay up to date with the latest fashion trends on Beauty Blogger"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Our blog helps you stay up-to-date on the
                                  latest trends in fashion.
                                </p>
                                <p>
                                  Our blog lets you track fads, trends, and your
                                  own tastes so you always have something to
                                  share.
                                </p>
                                <p>
                                  Looking for a blog that helps you stay up to
                                  date with fashion? This is the one.
                                </p>
                                <p>
                                  We strive to help you keep up with your ever
                                  changing social environments. You will find
                                  the latest fashion trends and beauty tips here
                                </p>
                              </div>
                            </div>
                            <div id="blog4" className="tab-pane">
                              <h3>Blog Blurb</h3>
                              <p className="short-conn">
                                Blast through writer's block by letting us write
                                an excerpt for you.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="FutureInvest- How can you market your non-conventional investment vehicles to your clients"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Cryptocurrency is a new form of currency that
                                  has been quickly becoming the most popular.
                                  These types of currencies have no physical
                                  form and exist only in digital format. They
                                  are exchanged through peer-to-peer networks,
                                  without the need for any third party or
                                  middlemen to act as an intermediary between
                                  buyers and sellers. This makes cryptocurrency
                                  transactions much faster, cheaper, more secure
                                  and convenient than those with traditional
                                  forms of money exchanging systems like banks
                                  or credit card companies.
                                </p>
                                <p>
                                  Non-conventional investments are a growing
                                  trend in the financial industry. They allow
                                  for more diversification and higher returns
                                  than traditional stocks and bonds. However,
                                  they also come with higher risk. How can you
                                  market your non-conventional investment
                                  vehicles to your clients?
                                </p>
                                <p>
                                  Non-conventional investments are gaining
                                  popularity for their diversification and
                                  higher returns. As a financial manager, how
                                  can you market these products to your clients?
                                  This article will explore the different
                                  marketing strategies available to you as well
                                  as some dos and don’ts when it comes to
                                  presenting non-conventional investment
                                  vehicles.
                                </p>
                                <p>
                                  Non-conventional investments, also known as
                                  alternative investments, have been around for
                                  a long time. Initially they were used by high
                                  net worth individuals and institutional
                                  investors but in recent years there has been
                                  an increase of interest from retail investors.
                                  The increased demand is due to the low returns
                                  on other more traditional investment vehicles
                                  like stocks and bonds which are now below
                                  their historical averages.
                                </p>
                              </div>
                            </div>
                            <div id="blog5" className="tab-pane">
                              <h3>Blog Outline</h3>
                              <p className="short-conn">
                                Get structured layout ideas based on trending
                                topics and our research.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="SEO Copywriter"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Section: What is a Search Optimized Copywriter
                                  (SEO Copywriter)
                                  <br />
                                  Section: Why use one? What are the benefits?
                                  <br />
                                  Section: How to find an SEO Copywriter that’s
                                  good and affordable
                                  <br />
                                  Section: How do you find an AI copywriter?
                                </p>
                                <p>
                                  Takeaway: Using an AI copywriter will help you
                                  rank for more keywords. And it's not as
                                  expensive as it sounds. These are blogs I've
                                  written.
                                </p>
                              </div>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Our ai assisted SEO tool pulls top ranking keywords and adds them directly into your text"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Section: Understanding the SEO Competition
                                  <br />
                                  Section: Putting the "Ai" into SEO
                                  <br />
                                  Section: The Technical Side of SEO
                                  <br />
                                  Section: Keywords and Phrases
                                </p>
                                <p>
                                  Takeaway: Read this blog if you want to learn
                                  how our AI assisted tool steers your business'
                                  online marketing in the right direction.
                                </p>
                              </div>
                            </div>
                            <div id="blog6" className="tab-pane">
                              <h3>Creative Story</h3>
                              <p className="short-conn">
                                From romances, to action adventures, even
                                horrors- let us help you tell a creative story.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="AI assisted copy writer began publishing books and content because it does a much better job in a smaller time frame. AI is the future and we are entering it now."
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  The best copywriting had always been a human
                                  with an understanding of the human experience.
                                  This was because nothing could measure up to
                                  the subtleties and intricacies that come from
                                  years of study, discussion, and life
                                  experience. But now with advanced AI
                                  technology we can say goodbye to mediocre
                                  content and hello to a new era in writing! The
                                  newest breakthrough is capable of teaching
                                  itself through machine learning as it writes
                                  content for clients at lightning speed. It
                                  doesn't get distracted by things like grammar
                                  or sentence structure; it's just focused on
                                  getting you more customers- no matter what!
                                  -Bob
                                </p>
                                <p>
                                  It was the day that they all dreaded. The day
                                  where their jobs were made irrelevant by an AI
                                  assisted copy writer. Some people managed to
                                  find new careers, but others struggled for
                                  months and years on end with nothing to do and
                                  no way of finding what next step in life they
                                  should take. One woman decided she would never
                                  be able to find anything else, so she hung
                                  herself from a tree at her home. A man who had
                                  been unemployed for five years came up with a
                                  plan…
                                </p>
                                <p>
                                  I first noticed when I walked into the office
                                  one morning and found that there were no
                                  employees in sight. It was an eerie silence
                                  with only the hum of computers to break it,
                                  but as I looked around I saw they had all been
                                  replaced by a computer program.
                                  <br />
                                  It seemed like just yesterday we were hiring
                                  new people left and right because our business
                                  was always growing, but now it's completely
                                  changed. And not for better either - my head
                                  is fuzzy from trying to remember how
                                  everything works without any assistance from
                                  coworkers. It has taken me weeks to get used
                                  to this new system, and even then I'm still
                                  often lost on what tasks need doing next
                                  because it's so complicated! A colleague told
                                  me she wasn't too worried about
                                </p>
                                <p>
                                  The AI's takeover of the tasks that the
                                  employees used to do has been almost
                                  completely seamless. It's as if we've always
                                  had this machine doing everything for us, but
                                  it was a lot more difficult and time-consuming
                                  before. I think that everyone has missed some
                                  aspects of work due to our new reliance on
                                  automation, though. The company is really
                                  going through some hard times because no one
                                  can make any decisions anymore without
                                  consulting with the AIs about what they think
                                  every decision should be. They're also having
                                  trouble finding anyone willing to buy their
                                  products now when there are so many
                                  alternatives out there which don't require
                                  humans at all.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="web-copy" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#web-copy1"
                                    >
                                      <div className="white-box section">
                                        <h5>Rewriter</h5>
                                        <p>
                                          Don’t like the way your web copy
                                          sounds? Generate a quick rewrite of it
                                          again and again until you do!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#web-copy2">
                                      <div className="white-box section">
                                        <h5>Hero Text </h5>
                                        <p>
                                          Concise, punchy hero text worthy of
                                          your one-of-a-kind brand!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#web-copy3">
                                      <div className="white-box section">
                                        <h5>Headline</h5>
                                        <p>
                                          Make people click! Generate custom
                                          headlines that tell a compelling
                                          story.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#web-copy4">
                                      <div className="white-box section">
                                        <h5>Sub-headlines </h5>
                                        <p>
                                          Write subheadings that will make your
                                          audience want to keep reading!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#web-copy5">
                                      <div className="white-box section">
                                        <h5>Unique Value Propositions</h5>
                                        <p>
                                          Generate statements that describe the
                                          value you’ll provide - but with a
                                          unique twist!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#web-copy6">
                                      <div className="white-box section">
                                        <h5>Feature to Benefit</h5>
                                        <p>
                                          Type in what your product does, and
                                          we’ll take care of why it matters!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="web-copy1" className="tab-pane active">
                              <h3>Rewriter</h3>
                              <p className="short-conn">
                                Don’t like the way your web copy sounds?
                                Generate a quick rewrite of it again and again
                                until you do!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="OpenAI - Generative Pre-trained Transformer 3 is an autoregressive language model that uses deep learning to produce human-like text."
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Generative Pre-trained Transformer 3 is an
                                  autoregressive language model that uses deep
                                  learning to produce human-like text
                                </p>
                                <p>
                                  GPT-3 is a recurrent neural network that uses
                                  autoregressive language models and deep
                                  learning to produce human-like text
                                </p>
                                <p>
                                  The Generative Pre-trained Transformer 3 is an
                                  artificial intelligence that can produce
                                  surprisingly convincing human text in English.
                                </p>
                              </div>
                            </div>
                            <div id="web-copy2" className="tab-pane">
                              <h3>Hero Text</h3>
                              <p className="short-conn">
                                Concise, punchy hero text worthy of your
                                one-of-a-kind brand!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="AI virtual assistant - The best team member you could ask for"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Ultimate assistant. The end of your email
                                  overload.
                                </p>
                                <p>Your Secret Personal Assistant</p>
                                <p>AI That Works for You</p>
                                <p>Wherever you are, Whatever you need</p>
                              </div>
                            </div>
                            <div id="web-copy3" className="tab-pane">
                              <h3>Headline</h3>
                              <p className="short-conn">
                                Make people click! Generate custom headlines
                                that tell a compelling story.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="cali.ai - GPT-3 is breaking ground!"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>Two Robots, A Million Conversations,</p>
                                <p>
                                  Meet the first and most powerful natural
                                  language
                                </p>
                                <p>
                                  Explore the 3 Dimensions of Artificial
                                  Intelligence
                                </p>
                                <p>Be A Part of History In The Making</p>
                                <p>
                                  A Leap Forward in Generative Artificial
                                  Intelligence
                                </p>
                              </div>
                            </div>
                            <div id="web-copy4" className="tab-pane">
                              <h3>Sub-headlines</h3>
                              <p className="short-conn">
                                Write subheadings that will make your audience
                                want to keep reading!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Artificially Intelligent copywriter"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Write better copy in a fraction of the time
                                </p>
                                <p>
                                  Create compelling calls to action (CTA) and
                                  headlines for your website or social media
                                  with ease
                                </p>
                                <p>
                                  Try an intelligent copywriter that learns from
                                  your competitors.
                                </p>
                              </div>
                            </div>
                            <div id="web-copy5" className="tab-pane">
                              <h3>Unique Value Propositions</h3>
                              <p className="short-conn">
                                Generate statements that describe the value
                                you’ll provide - but with a unique twist!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="ArtificiallyIntelligent  - I help students graduate by copywriting content they can't find the time to articulate themselves"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Helping Students Graduate: I go to graduate
                                  school myself, and struggle with the same
                                  things that you do. Not only am I a student,
                                  but I’m also a part-time freelancer and work
                                  full time. The last thing I want to do is copy
                                  and paste someone else’s work to get my
                                  degree. What if I found this online content
                                  for you? - Original, unique, properly cited
                                  assignments written just for you that will
                                  look like they were done by an educated
                                </p>
                                <p>
                                  Conquer your academic obstacles: I help
                                  students reach their educational goals through
                                  concise and attractive writing. Whether it's
                                  content for a paper or a resume, I'm here to
                                  make you look and sound great.
                                </p>
                                <p>
                                  Confident Content For Students With Other
                                  Things On Their Mind: If you’re a busy
                                  student, the thought of copywriting
                                  high-quality articles for your blog (or
                                  Google) can be at the back of your mind. What
                                  if it could be taken off your hands
                                  completely? I can write diverse content that’s
                                  professional and appropriate for your
                                  business, whatever it is.
                                </p>
                                <p>
                                  Help Students Graduate: You have some
                                  important things to tell students, so why not
                                  tell them in a way that makes an impact? If
                                  you want students to be able to read and learn
                                  from your words, you have to speak their
                                  language and deliver content they can relate
                                  to. Contact us if you'd like help with this.
                                </p>
                              </div>
                            </div>
                            <div id="web-copy6" className="tab-pane">
                              <h3>Feature to Benefit</h3>
                              <p className="short-conn">
                                Type in what your product does, and we’ll take
                                care of why it matters!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="SEOxAI - Enter keywords, click, and conquer"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  SEOxAI saves you time by checking keyword
                                  difficulty and researching the organic search
                                  volume of several search engine platforms with
                                  a single click.
                                </p>
                                <p>
                                  Get to the top of Google with our AI-powered
                                  software.
                                </p>
                                <p>
                                  With SEOxAI, you can build an SEO strategy or
                                  audit in just a few clicks.
                                </p>
                                <p>
                                  You can faster, more accurately track keywords
                                  to see who, how and when your target audience
                                  engages with your content across social media.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ecommerce" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#ecommerce1"
                                    >
                                      <div className="white-box section">
                                        <h5>Product Description</h5>
                                        <p>
                                          Generate unique descriptions that not
                                          only rank well in search engines but
                                          also sell your products.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#ecommerce2">
                                      <div className="white-box section">
                                        <h5>
                                          Amazon Product Features (Bullet
                                          Points)
                                        </h5>
                                        <p>
                                          Develop your Amazon product’s key
                                          features and benefits with easy to
                                          understand bullet points.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#ecommerce3">
                                      <div className="white-box section">
                                        <h5>Amazon Product Description</h5>
                                        <p>
                                          Helpful and enticing Amazon product
                                          descriptions that will make them click
                                          “Add to Cart”!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="ecommerce1" className="tab-pane active">
                              <h3>Product Description</h3>
                              <p className="short-conn">
                                Generate unique descriptions that not only rank
                                well in search engines but also sell your
                                products.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="iRobot - Your New Friend"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Meet iRobot, your new best friend. With
                                  advanced smart technology and sleek new
                                  design, there's never a dull moment when
                                  you're hanging with iRobot. Not only can he
                                  help you keep the floors or table clean while
                                  you're cooking dinner, he can scoot around on
                                  his own and play music for you. He even
                                  responds to your voice! So the next time
                                  you're in the market for a pal, look at our
                                  new and improved iRobot. Imagine who you'll
                                  meet now…
                                </p>
                                <p>
                                  iRobot the robot revolution begins today.
                                  iRobot® creates new possibilities in the
                                  everyday tasks of life for people of all ages.
                                  From vacuuming floors and maintaining a pool
                                  to mopping the kitchen floor, driving around
                                  on a lawn mower or duck boat, our robots are
                                  designed to help you do more.
                                </p>
                                <p>
                                  Your new best friend is the iRobot Roomba, the
                                  vacuum that goes where you go. It detects and
                                  avoids obstacles, docks for recharging, then
                                  heads out to clean another room. So go ahead
                                  and enjoy your home. iRobot will take care of
                                  cleaning it.
                                </p>
                              </div>
                            </div>
                            <div id="ecommerce2" className="tab-pane">
                              <h3>Amazon Product Features (Bullet Points)</h3>
                              <p className="short-conn">
                                Develop your Amazon product’s key features and
                                benefits with easy to understand bullet points.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Smart Speaker  - Loud - compact - waterproof - bluetooth - can connect with other speakers - Works with and without internet - smartAI integrated"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  LOUD - COMPACT - WATERPROOF - BLUETOOTH -
                                  SMARTAI INTEGRATED
                                </p>
                                <ul>
                                  <li>
                                    WORKS WITH AND WITHOUT INTERNET - This
                                    waterproof speaker is the perfect choice for
                                    any occasion. With its compact size, you can
                                    bring it to the beach, pool parties, or even
                                    camping! The sound quality is loud and clear
                                    enough for everyone to enjoy. It's also easy
                                    to connect with other speakers via bluetooth
                                    or aux cable.
                                  </li>
                                  <li>
                                    SMARTAI INTEGRATED - Our smartAI technology
                                    allows this speaker to learn your music
                                    preferences and improve its performance over
                                    time. It will automatically play songs that
                                    are similar in style to what you've been
                                    listening to lately! You'll be amazed at how
                                    well it learns your tastes!
                                  </li>
                                </ul>
                                <p>LOUD - Compact - Waterproof - Bluetooth</p>
                                <ul>
                                  <li>
                                    Smart Speaker with AI integration. Connects
                                    to other speakers and can be used as a
                                    bluetooth speaker.
                                  </li>
                                  <li>
                                    Works with and without internet (2G, 3G,
                                    4G). Play your music from Spotify or Deezer.
                                  </li>
                                  <li>
                                    SmartAI integrated: You can ask questions
                                    about the weather, traffic conditions or set
                                    an alarm for tomorrow morning. The speaker
                                    will answer you in a clear voice!
                                  </li>
                                </ul>
                                <p>
                                  LOUD - The Smart Speaker is a compact,
                                  waterproof bluetooth speaker that can connect
                                  with other speakers. Enjoy your music loud and
                                  clear
                                </p>
                                <ul>
                                  <li>
                                    COMPACT - It's small enough to fit in your
                                    pocket or purse! Take it anywhere you go.
                                  </li>
                                  <li>
                                    WATERPROOF - Don't worry if you get caught
                                    in the rain! This speaker is designed to be
                                    waterproof so you can enjoy your favorite
                                    tunes no matter what the weather brings.
                                  </li>
                                  <li>
                                    BLUETOOTH CONNECTION - Connect wirelessly
                                    with any bluetooth enabled device for easy
                                    listening. No need to struggle with cords or
                                    wires while you're trying to relax and enjoy
                                    your music. Just pair and play!
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div id="ecommerce3" className="tab-pane">
                              <h3>Amazon Product Description</h3>
                              <p className="short-conn">
                                Helpful and enticing Amazon product descriptions
                                that will make them click “Add to Cart”!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Smart Speaker - An AI powered smart speaker that does it all"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Clean, sleek, easy-to-use and expertly crafted
                                  for hands-free control of music, news,
                                  information and more—all by voice. Plus high
                                  quality sound from a smart speaker small
                                  enough to fit in any room.
                                </p>
                                <p>
                                  We proudly present our next generation smart
                                  speaker; one that is a true AI powered,
                                  voice-controlled ecosystem designed to deliver
                                  the best audio performance with cell phones,
                                  tablets, PCs and other smart products. This
                                  voice activated speaker works with the Google
                                  Assistant or Amazon Alexa and lets you listen
                                  to thousands of songs, watch TV shows, movies
                                  and videos on your phone, tell stories and
                                  more.
                                </p>
                                <p>
                                  Play music, check traffic, news and stock
                                  updates. All commands respond quickly and
                                  accurately over 360° sound. Fill your space
                                  with premium quality audio from dual 3-inch
                                  woofers and tweeters, Built in far field
                                  microphones make it simple to ask Google to
                                  play a song by saying "Ok, Google". Use it to
                                  fill a room or send it across the room with
                                  Chromecast Audio technology.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ads" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#ads1"
                                    >
                                      <div className="white-box section">
                                        <h5>Facebook Ad Headline</h5>
                                        <p>
                                          Uniquely crafted headlines that will
                                          make your Facebook Ad stand out from
                                          the rest!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#ads2">
                                      <div className="white-box section">
                                        <h5>Facebook Ad Primary Text</h5>
                                        <p>
                                          Increase call to actions and genuine
                                          interaction with well written, and
                                          engaging Facebook Ads!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#ads3">
                                      <div className="white-box section">
                                        <h5>Google Ads Headline</h5>
                                        <p>
                                          Let Craftly help to increase your
                                          qualified clicks or leads with eye
                                          catching headlines!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#ads4">
                                      <div className="white-box section">
                                        <h5>Google Ads Description</h5>
                                        <p>
                                          Generate Google Ads descriptions that
                                          entice potential customers to click
                                          (and maybe even buy)!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="ads1" className="tab-pane active">
                              <h3>Facebook Ad Headline</h3>
                              <p className="short-conn">
                                Uniquely crafted headlines that will make your
                                Facebook Ad stand out from the rest!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Try our AI copywriting assistant!"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Take Advantage of Our New AI Copywriting
                                  Assistant
                                </p>
                                <p>
                                  Let Our Predictive Content AI-Writer Write For
                                  You
                                </p>
                                <p>
                                  You Write, We Write - It's never been easier
                                  to write content
                                </p>
                                <p>
                                  AI or Copywriter: You’ll Never Be Able to Tell
                                  The Difference
                                </p>
                                <p>
                                  Higher Google Rankings In Less Than 7 Days
                                </p>
                                <p>How We Tripled Our Rankings In 6 Months</p>
                              </div>
                            </div>
                            <div id="ads2" className="tab-pane">
                              <h3>Facebook Ad Primary Text</h3>
                              <p className="short-conn">
                                Increase call to actions and genuine interaction
                                with well written, and engaging Facebook Ads!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Content Generator - An AI powered Copywriter for the people of the future"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Content Generator is the World’s first AI
                                  powered copywriter. It can convert your
                                  written material into insights and captivating
                                  content to enrich your marketing.
                                </p>
                                <p>
                                  A computer program that writes original
                                  sentences. Imagine if you had an army of
                                  people at your disposal 24/7, ready to write
                                  amazing content online and help generate
                                  massive exposure for your website or product –
                                  no matter where you are in the world? That’s
                                  exactly what Content Generator is all about.
                                  All content created by a team of copywriters
                                  backed by artificial-intelligence software and
                                  a community of hundreds of thousands of human
                                  writers across the globe.
                                </p>
                                <p>
                                  It's time to create a new future for
                                  marketing. Content Generator is an AI powered
                                  copywriter which writes unique, optimized
                                  content that converts. It’s the next
                                  generation of content for your business.
                                </p>
                              </div>
                            </div>
                            <div id="ads3" className="tab-pane">
                              <h3>Google Ads Description</h3>
                              <p className="short-conn">
                                Generate Google Ads descriptions that entice
                                potential customers to click (and maybe even
                                buy)!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="AI Content Generator"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>Translating Text into Captivating Speech</p>
                                <p>What's your text worth?</p>
                                <p>Improve Your Conversing Techniques</p>
                                <p>
                                  Quality interpretation to save you time and
                                  money
                                </p>
                              </div>
                            </div>
                            <div id="ads4" className="tab-pane">
                              <h3>Rewrite With Keywords</h3>
                              <p className="short-conn">
                                Generate Google Ads descriptions that entice
                                potential customers to click (and maybe even
                                buy)!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="AI Content Generator"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  AI is the solution for your media needs. The
                                  world is changing, creating entirely new ways
                                  to process information and communicate with
                                  people.
                                </p>
                                <p>
                                  We all know how boring data science is. How
                                  can we turn such a powerful field of study
                                  into something that everyone will actually
                                  want to do? Can we turn it into a popular TV
                                  show? One way to attempt this is by creating
                                  AI content generators. An application that
                                  writes shows or movies on themes given to it
                                  by its controller. The program is fed an
                                  unlimited amount of ideas and content, like
                                  plots or dialogs.
                                </p>
                                <p>
                                  Generate content to match any style or format.
                                  Your project will be completed by an American
                                  writer in minutes. All you need to do is check
                                  it over, approve it, and get it published!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="email" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#email1"
                                    >
                                      <div className="white-box section">
                                        <h5>Catchy Email Subjects</h5>
                                        <p>
                                          Your email won’t end up at the bottom
                                          of any inbox with these subject lines
                                          that demand to be read.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#email2">
                                      <div className="white-box section">
                                        <h5>Confirmation Emails </h5>
                                        <p>
                                          Instantly craft professional
                                          confirmation emails for your customers
                                          and clients.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#email3">
                                      <div className="white-box section">
                                        <h5>Rewriter </h5>
                                        <p>
                                          Don’t like the way your email sounds?
                                          Generate a quick rewrite of it again
                                          and again until you do!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#email4">
                                      <div className="white-box section">
                                        <h5>Follow Up Email </h5>
                                        <p>
                                          It IS possible to send a follow up
                                          email that avoids all of the overused
                                          terms like “just circling back”!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#email5">
                                      <div className="white-box section">
                                        <h5>Thank You</h5>
                                        <p>
                                          Send a thank you email to your client,
                                          your boss, your mother in law, or even
                                          your ex boyfriend!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="email1" className="tab-pane active">
                              <h3>Catchy Email Subjects</h3>
                              <p className="short-conn">
                                Your email won’t end up at the bottom of any
                                inbox with these subject lines that demand to be
                                read.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="I am quitting my job and launching a new AI copywriter"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  You Don't Have To Be An Expert Writer To
                                  Create World-Class Marketing
                                </p>
                                <p>
                                  Are you ready to double the conversion rates
                                  of your landing pages?
                                </p>
                                <p>
                                  I quit! Launching a copywriting agency with
                                  this AI software I built.
                                </p>
                                <p>Ready for A.I. to write your ads?</p>
                                <p>
                                  You will not believe what happened with my old
                                  marketer…
                                </p>
                              </div>
                            </div>
                            <div id="email2" className="tab-pane">
                              <h3>Confirmation Emails</h3>
                              <p className="short-conn">
                                Instantly craft professional confirmation emails
                                for your customers and clients.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Confirming the integration of the AI copywriter"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  You've integrated and activated the AI
                                  copywriter on your website. Congratulations!
                                  It will now learn from you, understand how to
                                  improve sales conversion, and eventually write
                                  great content that generates more traffic. You
                                  can reach out to us by calling or emailing us
                                  anytime if you have any questions.
                                </p>
                                <p>
                                  Hey, a new member of the team is joining your
                                  organization. He's been working for you for a
                                  few days and we would like you to give him the
                                  warm welcome that he deserves. His name is
                                  PENNY and he will be your AI copywriter for
                                  all your email marketing needs. Please do not
                                  hesitate to contact us or Penny directly if
                                  there is something you need help with.
                                </p>
                                <p>
                                  Thanks for requesting integration with the AI
                                  copywriter. The system is now connected to
                                  your account and can be found under “Services”
                                  in the main menu.
                                </p>
                                <p>
                                  Congratulations! You are now working with the
                                  most powerful digital copywriting assistant in
                                  the world. It combines the best of human and
                                  machine intelligence to help you build your
                                  business faster.
                                </p>
                              </div>
                            </div>
                            <div id="email3" className="tab-pane">
                              <h3>Rewriter</h3>
                              <p className="short-conn">
                                Don’t like the way your email sounds? Generate a
                                quick rewrite of it again and again until you
                                do!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Your essay was terrible. You should try an AI assisted copywriter."
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  May I suggest that you ask your writing
                                  partner to use an AI assisted copywriter
                                  before you submit the next essay.
                                </p>
                                <p>
                                  If you seek to express creative and
                                  unconventional ideas, an AI assisted
                                  copywriter is a great way to bolster your
                                  essay's impact.
                                </p>
                                <p>
                                  Please don't waste time on writing your
                                  essays. Get custom written essays that score
                                  high grades.
                                </p>
                                <p>
                                  I was disappointed by how poorly your essay
                                  turned out. I think you should try an AI
                                  assisted copywriter.
                                </p>
                                <p>
                                  In order to get your essays in the highest
                                  possible shape, you should use an AI-assisted
                                  copywriter.
                                </p>
                              </div>
                            </div>
                            <div id="email4" className="tab-pane">
                              <h3>Follow Up Email</h3>
                              <p className="short-conn">
                                It IS possible to send a follow up email that
                                avoids all of the overused terms like “just
                                circling back”!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Asking if they sign up for craftly.ai"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Hi,
                                  <br /> I appreciate you taking the time to
                                  speak with me last week. As we discussed, I
                                  wanted to make sure and follow up about
                                  [specific feature or challenge you discussed].{" "}
                                  <br />
                                  <br />
                                  If you haven’t had a chance yet, would you
                                  mind if I sent you an invitation to
                                  Craftly.ai? It’s a new artificial intelligence
                                  copywriting platform that helps teams work
                                  more efficiently by sharing the right
                                  information at the right time with the right
                                  people. I’ve attached some info for you to
                                  take a look.
                                  <br />
                                  <br />
                                  Thanks,{" "}
                                </p>
                              </div>
                            </div>
                            <div id="email5" className="tab-pane">
                              <h3>Thank You Emails</h3>
                              <p className="short-conn">
                                Send a thank you email to your client, your
                                boss, your mother in law, or even your ex
                                boyfriend!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Write a thank you letter to my ex boyfriend"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Thank you for being my first love. I never
                                  realized that you would teach me the things
                                  that I didn't like about relationships.
                                </p>
                                <p>
                                  I am very grateful for the fact that I learned
                                  a lot from you. We dated for over a year, and
                                  I think we were really on the same page, but
                                  it ended up disaster. I am really glad that we
                                  tried to make it work and I am thankful for
                                  the experience. If I hadn't been with you, I
                                  wouldn't have learned what I dislike in a
                                  partner and what I like.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="seo" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#seo1"
                                    >
                                      <div className="white-box section">
                                        <h5>SEO Title and Meta Description</h5>
                                        <p>
                                          Tackle SEO with titles and
                                          descriptions that are sure to improve
                                          your search engine results.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#seo2">
                                      <div className="white-box section">
                                        <h5>Rewrite With Keywords</h5>
                                        <p>
                                          Spruce up your content using keywords
                                          that will target your unique
                                          demographic!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="seo1" className="tab-pane active">
                              <h3>SEO Title and Meta Description</h3>
                              <p className="short-conn">
                                Tackle SEO with titles and descriptions that are
                                sure to improve your search engine results.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Scribble - Transcription Company"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Scribble is a digital agency that leverages
                                  the power of technology to bring an efficient
                                  and affordable solution for transcription.
                                </p>
                                <p>
                                  Scribble is a transcription company based in
                                  Toronto, Ontario. From business communication
                                  to court reporting, our professional
                                  transcriptionists provide exceptional service
                                  at affordable rates
                                </p>
                                <p>
                                  Scribble is a fully integrated transcription
                                  service company that provides on-demand
                                  transcription, video captions, and speech-to
                                  text services.
                                </p>
                                <p>
                                  Scribble is a leading provider of professional
                                  transcription services, trusted by over 80% of
                                  Fortune 500 companies
                                </p>
                              </div>
                            </div>
                            <div id="seo2" className="tab-pane">
                              <h3>Rewrite With Keywords</h3>
                              <p className="short-conn">
                                Spruce up your content using keywords that will
                                target your unique demographic!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Delicious, sweet, healthy, individually wrapped - Charlotte's Chocolatier"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Charlotte’s Chocolatier is a brand of
                                  delicious, sweet, healthy, individually
                                  wrapped chocolate bars.
                                </p>
                                <p>
                                  Charlotte's Chocolatier takes fresh, delicious
                                  ingredients and makes everything sweet.
                                  Whether your tastes are sinful or sweet,
                                  they're individually wrapped to-go!
                                </p>
                                <p>
                                  Charlotte’s Chocolatier believes that great
                                  chocolate should be available to everyone.
                                  They make delicious, healthy, individually
                                  wrapped chocolate treats made with fair trade,
                                  single-origin Ecuadorian cacao. By purchasing
                                  our chocolates, you are contributing to the
                                  economic empowerment of women in Ecuador and
                                  around the world.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="socials" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#socials1"
                                    >
                                      <div className="white-box section">
                                        <h5>Photo Caption</h5>
                                        <p>
                                          Compete with AI influencers with your
                                          own quirky AI captions!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#socials2">
                                      <div className="white-box section">
                                        <h5>Carousel post</h5>
                                        <p>
                                          Craft a longer caption that
                                          encapsulates multiple images. Caroline
                                          Calloway who?
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#socials3">
                                      <div className="white-box section">
                                        <h5>Bio</h5>
                                        <p>
                                          Exciting bios that will make you more
                                          virtual friends. What more could you
                                          ask for?
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#socials4">
                                      <div className="white-box section">
                                        <h5>Youtube Video Description</h5>
                                        <p>
                                          Create unique descriptions for your
                                          YouTube videos that will help you get
                                          discovered!{" "}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#socials5">
                                      <div className="white-box section">
                                        <h5>Youtube Video Script Outline</h5>
                                        <p>
                                          Craft unique, well researched video
                                          scripts that actually sound like you!{" "}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#socials6">
                                      <div className="white-box section">
                                        <h5>Youtube Video Titles</h5>
                                        <p>
                                          Video titles that will make you
                                          YouTube Famous! NOT CLICKBAIT!{" "}
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#socials7">
                                      <div className="white-box section">
                                        <h5>Youtube Video Intro</h5>
                                        <p>
                                          A YouTube video intro that does not
                                          include: “Hey guys, welcome to my
                                          channel…”
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#socials8">
                                      <div className="white-box section">
                                        <h5>Youtube Video Topic Ideas</h5>
                                        <p>
                                          Generate unique, yet trendy video
                                          ideas that your audience will love!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="socials1" className="tab-pane active">
                              <h3>Instagram Caption</h3>
                              <p className="short-conn">
                                Compete with AI influencers with your own quirky
                                AI captions!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="I miss travel"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  I miss traveling. I miss the adventures and
                                  the people I meet along the way. What's your
                                  favorite travel memory?
                                </p>
                                <p>I miss my passport.</p>
                                <p>
                                  I miss travel. I miss seeing new places,
                                  discovering new things, and meeting new
                                  people. But all in due time...
                                </p>
                              </div>
                            </div>
                            <div id="socials2" className="tab-pane">
                              <h3>Carousel post</h3>
                              <p className="short-conn">
                                Craft a longer caption that encapsulates
                                multiple images. Caroline Calloway who?
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="I miss travel"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  <strong>Hook:</strong> I miss travel…
                                  <br />
                                  <br />
                                  1: It was the perfect getaway to make you
                                  forget about all your woes
                                  <br />
                                  2: It taught me how to live in the moment
                                  &amp; enjoy life
                                  <br />
                                  3: It became my favourite hobby because it
                                  made me appreciate nature
                                  <br />
                                  <br />
                                  CTA: Travel more!
                                </p>
                                <p>
                                  <strong>Hook:</strong> I miss travel
                                  <br />
                                  <br />
                                  1: It's not longer an escapist luxury to go on
                                  a holiday, but rather a necessity
                                  <br />
                                  2: FOMO is real, and so is the potential for
                                  businesses to use this to leverage sales.
                                  <br />
                                  3: Travelling can be life changing, but you
                                  have to get out of your comfort zone
                                  <br />
                                  4: We are all capable of doing more than what
                                  we are used to.
                                  <br />
                                  5: Travelling has become central to personal
                                  growth and development
                                  <br />
                                </p>
                                <p>
                                  <strong>Hook:</strong> I miss traveling and
                                  seeing other countries. If you ever go to any
                                  of these places, please drop me a line or tag
                                  me in some pics!
                                  <br />
                                  <br />
                                  1: Kanazawa, Japan
                                  <br />
                                  2: Venice, Italy
                                  <br />
                                  3: Honolulu, HI
                                  <br />
                                  <br />
                                  CTA: Contact me for more info if you're
                                  planning your trip.
                                </p>
                              </div>
                            </div>
                            <div id="socials3" className="tab-pane">
                              <h3>Bio</h3>
                              <p className="short-conn">
                                Exciting bios that will make you more virtual
                                friends. What more could you ask for?
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="I am a 24 year old entrepreneur who loves traveling"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  👨🏻‍💻 I am a 24 Year Old Entrepreneur who is
                                  currently traveling the world. I quit a ⬆️ 6
                                  Figure Yearly Paying Job to Travel in 2018 and
                                  have been full time traveling since then.
                                </p>
                                <p>
                                  🤓 Hey, I'm a 24 year old travel blogger and
                                  I'm determined to create a life where work is
                                  play.
                                  <br /> 🌍 Explore my story.
                                </p>
                                <p>
                                  🌲Hi, I'm a 24-year old entrepreneur who loves
                                  experiencing new things. This account is about
                                  traveling on a shoestring budget and
                                  documenting my adventures. 🚜🏔🛶
                                </p>
                              </div>
                            </div>
                            <div id="socials4" className="tab-pane">
                              <h3>Youtube Video Description</h3>
                              <p className="short-conn">
                                Create unique descriptions for your YouTube
                                videos that will help you get discovered!{" "}
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="How to write better content using AI - In this video I will show you how with GPT-3 technology"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  In this video I will show you how with GPT-3
                                  technology, you can write better content for
                                  your website or blog. This is a new technology
                                  based on Google's AI. It allows users to input
                                  their content and then AI automatically
                                  optimizes it for search results, viral
                                  sharing, and engagement. Try it out at{" "}
                                  <a
                                    href="https://goo.gl/TgipJK"
                                    target="_balnk"
                                  >
                                    https://goo.gl/TgipJK
                                  </a>
                                </p>
                                <p>
                                  Artificial General Intelligence and Google's
                                  GPT-3 Technology. We will go in deep about:
                                  How writing content has become a tough job to
                                  write, how AI is going to help us save time,
                                  How AI can also be used as a decision making
                                  system instead of rank checking.
                                </p>
                                <p>
                                  A video about how to write better content
                                  using AI and neural networks. This technology
                                  was used to generate new Harry Potter books
                                  using Google's AI technology. How can you do
                                  this for your business? Watch the video.
                                </p>
                                <p>
                                  Have you ever wondered how you can improve the
                                  writing skills of your web pages with
                                  artificial intelligence? GPT-3 is a system
                                  that will help you to teach your computer how
                                  to write text by example. Artificial
                                  intelligence will analyze millions of web
                                  pages in order to understand what makes a good
                                  piece of content. This technology has been
                                  used by some PR firms and marketing agencies
                                  to help them manage their companies' websites.
                                </p>
                              </div>
                            </div>
                            <div id="socials5" className="tab-pane">
                              <h3>Youtube Video Script Outline</h3>
                              <p className="short-conn">
                                Craft unique, well researched video scripts that
                                actually sound like you!{" "}
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="How you can use AI to rank on youtube"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Are you trying to rank your video on Youtube?
                                  <br /> AI is a powerful technology that can
                                  help do the hard work for you. In this
                                  tutorial, I'll show you how to use AI to
                                  automate your YouTube SEO and get better
                                  rankings!
                                </p>
                                <p>
                                  What if I told you that there was a way for
                                  you to land your video on the top of Google,
                                  and YouTube search engine results? <br />
                                  AI is developing rapidly. In this video I
                                  share some tips for ranking high on youtube
                                  with AI
                                </p>
                                <p>
                                  In this video I share with you how you can use
                                  AI to rank on Youtube. You don't need to be a
                                  programmer or have any experience in machine
                                  learning, just follow these simple steps and
                                  your videos will start ranking instantly!
                                </p>
                              </div>
                            </div>
                            <div id="socials6" className="tab-pane">
                              <h3>Youtube Video Titles</h3>
                              <p className="short-conn">
                                Video titles that will make you YouTube Famous!
                                NOT CLICKBAIT!{" "}
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="My AI assisted copywriter has taken over my content. Did you realize?"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  You Won't Believe How My AI Written Content Is
                                  Pulling In Millions
                                </p>
                                <p>
                                  Did You Realize My Copywriter Has Taken Over
                                  My Channel?!
                                </p>
                                <p>
                                  I Think My Copyscriber Has Taken Over My
                                  Channel
                                </p>
                                <p>
                                  Did You Know My AI Assistant Is Writing My
                                  Content?
                                </p>
                              </div>
                            </div>
                            <div id="socials7" className="tab-pane">
                              <h3>Youtube Video Intro</h3>
                              <p className="short-conn">
                                A YouTube video intro that does not include:
                                “Hey guys, welcome to my channel…”
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="GPT-3 AI Assisted Copywriting Technology - GPT-3 technology is here to stay"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  The demand and need for good copywriters was
                                  always there. But with the emergence of AI
                                  technology, we have a powerful tool to help us
                                  with our writing. How sure are you that your
                                  content is the best it can be? Are you sure
                                  that no one will be able to outrank you? GPT-3
                                  is here to stay, and here to give us an edge
                                  over everyone else.
                                </p>
                                <p>
                                  The release of GPT-3 technology is a game
                                  changer in the artificial intelligence
                                  assisted content generation sector. With GPT-3
                                  you are able to produce video scripts at a
                                  lightning fast rate on a fully automated basis
                                  that are always ready to pass Content
                                  Copyscape tests and rank well on Google. In
                                  this video, I disclose exactly how GPT-3 works
                                  and why it's going to change how everyone
                                  builds their online businesses.
                                </p>
                                <p>
                                  Running a successful website or blog is all
                                  about traffic, and getting more readers.
                                  Without that, it's just a hobby you do after
                                  work and on weekends. So how do you find,
                                  reach, and convert more readers? What tools
                                  can you use to increase your blog traffic?
                                  Copywriting! (or content marketing) But one
                                  thing that most newbies struggle with is being
                                  able to come up with fresh ideas for writing
                                  copy. This is where GPT-3 comes in handy!
                                </p>
                                <p>
                                  GPT-3 is the third generation of the flagship
                                  writing platform that makes a writer more
                                  productive and helps them to sell more books.
                                  GPT-3 has been built from the ground up with
                                  artificial intelligence, machine learning, and
                                  natural language processing that will not just
                                  assist but also replace keyword research and
                                  topic suggestion tools (such as Google Keyword
                                  Planner, keywordtool.io, etc), allowing a
                                  writer to identify the most profitable
                                  trending topics their book should be
                                  targeting... based on real data instead.
                                </p>
                              </div>
                            </div>
                            <div id="socials8" className="tab-pane">
                              <h3>Youtube Video Topic Ideas</h3>
                              <p className="short-conn">
                                Generate unique, yet trendy video ideas that
                                your audience will love!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Technological Adoption"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  online courses about seo: make money with
                                  keywords
                                </p>
                                <p>
                                  how can I get in on the ground floor of a new
                                  tech startup
                                </p>
                                <p>
                                  build your business on an online marketplace
                                </p>
                                <p>
                                  how to leverage technology to increase
                                  productivity
                                </p>
                                <p>
                                  popular marketing and social media tools for
                                  content creators
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="writing-tool" className="tab-pane">
                    <div className="row">
                      <div className="col-sm-6 col-12 left-conn">
                        <div className="tools-tab-conn tools-tab-Scrollbar">
                          <div className="one-product-raw section">
                            <div className="one-product-col">
                              <div className="one-product-col-animate">
                                <ul className="grid nav nav-tabs">
                                  <li className="grid-item">
                                    <a
                                      className="active"
                                      data-toggle="tab"
                                      href="#writing-tool1"
                                    >
                                      <div className="white-box section">
                                        <h5>New Tone</h5>
                                        <p>
                                          Don’t let your message get lost in
                                          translation! When it comes to writing,
                                          tone is everything.
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#writing-tool2">
                                      <div className="white-box section">
                                        <h5>Simplify</h5>
                                        <p>
                                          It's easy to go on and on and on and
                                          on and on and on and on and on. Get
                                          concise with Craftly!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#writing-tool3">
                                      <div className="white-box section">
                                        <h5>Essay Outline</h5>
                                        <p>
                                          Get a structured essay outline that
                                          won’t force you to pull an all
                                          nighter!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="grid-item">
                                    <a data-toggle="tab" href="#writing-tool4">
                                      <div className="white-box section">
                                        <h5>Essay Blurb</h5>
                                        <p>
                                          You’ve read the play, now let Craftly
                                          help you put your thoughts into words!
                                        </p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-12 right-conn">
                        <div className="all-tools-raw section">
                          <div className="tab-content">
                            <div id="writing-tool1" className="tab-pane active">
                              <h3>New Tone</h3>
                              <p className="short-conn">
                                Don’t let your message get lost in translation!
                                When it comes to writing, tone is everything.
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="I'm just not that into you..."
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  <strong>Friendly:</strong> I enjoy spending
                                  time with you and I am grateful for all that
                                  we’ve shared together, but I just don’t feel a
                                  romantic connection.
                                </p>
                                <p>
                                  <strong>Bold:</strong> You and me, we just
                                  don't belong.
                                </p>
                                <p>
                                  <strong>Witty:</strong> I'm shocked you got
                                  this far. You really thought I'd want to go
                                  out with you? Maybe you'll have more luck in
                                  Las Vegas.
                                </p>
                                <p>
                                  <strong>Empathetic:</strong> I realize that
                                  you made a big effort to ask me on a date,
                                  which I appreciate. I’m just not interested in
                                  pursuing this any more.
                                </p>
                              </div>
                            </div>
                            <div id="writing-tool2" className="tab-pane">
                              <h3>Simplify</h3>
                              <p className="short-conn">
                                It's easy to go on and on and on and on and on
                                and on and on and on. Get concise with Craftly!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Every time I drink that huge cup of organic coffee, either hot or iced, and filled with cream and sugar, it seems to turn into a catastrophic stomach ace with a dash of anxiety"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Every time I drink that huge cup of organic
                                  coffee, it seems to turn into a catastrophic
                                  stomach ache with a dash of anxiety.
                                </p>
                                <p>
                                  Every time I drink that huge cup of organic
                                  coffee, whether hot or iced, and filled with
                                  cream and sugar, it turns into a stomach ache
                                  for me.
                                </p>
                                <p>
                                  Every time I drink that huge cup of
                                  coffee—either hot or iced and filled with
                                  cream and sugar—it seems to turn into a
                                  stomach ache!
                                </p>
                              </div>
                            </div>
                            <div id="writing-tool3" className="tab-pane">
                              <h3>Essay Outline</h3>
                              <p className="short-conn">
                                Get a structured essay outline that won’t force
                                you to pull an all nighter!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Structural Functionalism"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  <strong>Intro:</strong> Structural
                                  Functionalism is a kind of social theory which
                                  studies society as a complex system of
                                  interdependent parts.
                                </p>
                                <p>
                                  <strong>Section 1:</strong> Structural
                                  Functionalism is the study of how
                                  interdependence produces stability
                                </p>
                                <p>
                                  <strong>Section 2:</strong> The opposite of
                                  Structural Functionalism is Social Conflicts
                                  Theory
                                </p>
                                <p>
                                  <strong>Section 3:</strong> Structural
                                  Functionalism assumes that society has to fit
                                  into the environment. Social Conflicts Theory
                                  assumes that the environment has to fit into
                                  society.
                                </p>
                                <p>
                                  <strong>Section 4:</strong> Cultural diffusion
                                  explains change in societies when two
                                  different cultures meet each other
                                </p>
                                <p>
                                  <strong>Section 5:</strong> All societies have
                                  a structure that helps them function
                                </p>
                                <p>
                                  <strong>Takeaway:</strong> Keep in mind that
                                  there will always be a structure. We can't
                                  escape it.
                                </p>
                              </div>
                            </div>
                            <div id="writing-tool4" className="tab-pane">
                              <h3>Essay Blurb</h3>
                              <p className="short-conn">
                                You’ve read the play, now let Craftly help you
                                put your thoughts into words!
                              </p>
                              <form className="section form-raw" action>
                                <label htmlFor>Input:</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Is Macbeth a moral play? Is justice served at the end of the play?"
                                />
                              </form>
                              <div className="output-raw">
                                <h6>Output:</h6>
                                <p>
                                  Like a lot of Shakespeare's plays, Macbeth has
                                  its origins in historical events: the 17th
                                  century reign of King James VI of Scotland and
                                  I of England. The play is filled with
                                  treachery and deceit, and many regard it as a
                                  morality tale about the dire consequences of
                                  bad leadership. "Dire" and "consequences" are
                                  keywords here – in this essay I'll argue that
                                  Macbeth is not ultimately a play about justice
                                  being served but rather about the way we...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sep-border section pb80" />
        <Footer />
      </Layout>
    </>
  )
}

export default Tools
