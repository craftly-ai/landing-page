import React from "react"
import SEO from "./../../components/seo/seo"
import Layout from "./../../components/layout/Layout"
import Footer from "./../../components/footer/Footer"
import SubscribeSection from "./../../container/blog/SubscribeSection"
import CatSection from "./../../container/blog/CatSection"
import CustomBreadcrumb from "./../../components/breadcrumb/CustomBreadcrumb"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import avtar from "../../images/headshot-iman-bashir.png"
import avtar2 from "../../images/2.jpg"
import imgD1 from "../../images/blog-detail1.jpg"
import imgD2 from "../../images/blog-detail2.jpg"

const UltimateGuideToSeoContentWritingIn2021 = location => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Ultimate Guide to SEO Content Writing in 2021",
  })

  return (
    <>
      <SEO />
      <Layout>
        <section className="blog-detail-warpper section stick-gradient">
          <CustomBreadcrumb
            crumbs={crumbs}
            className={"breadcrumbs mrt112 section"}
          />
          <div className="section blog-detail-raw">
            <div className="container">
              <div className="title-raw">
                <span>
                  5 min read <strong>Artificial Intelligence</strong>
                </span>
                <h1>Our marketing, content and work predictions for 2021</h1>
                <div className="date-and-auth-col">
                  <div className="auther-col">
                    <img src={avtar} alt="" className="img-fluid avtar" />
                    <p>
                      Sonia Bezos, <br />
                      Marketing Manager
                    </p>
                  </div>
                  <div className="date-col">Jan 25, 2021</div>
                </div>
              </div>
              <div className="blog-detail-main-wrap">
                <div className="left-conn">
                  <div className="blog-detail-col section">
                    <p>
                      Sllamcorper suscipit lobortis nisl ut aliquip ex ea
                      commodo conseq Duis autem vel eum iriure dolor in
                      hendrerit in vulputate velit esse molestie consequat, vel
                      illum dolore eu feugiat nulla facilisis afjltalot vero
                      eros et accumsan et iusto odio dignissim qui blandit.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud ex tation ullamcorper suscipit lobortis nisl
                      ut aliquip ex ea comm consequat.{" "}
                    </p>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illu dolore eu feugiat
                      null facilisis at vero eros et accumsan et iusto odio
                      dignissim qui bla praesent luptatum zzril delenit augue
                      duis dolore te feugait nulla facilisi.
                    </p>
                    <img src={imgD1} className="img-fluid" alt />
                    <h3>
                      Sed diam nonummy euismod tincidunt ut laoreet dolore.
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud ex tation ullamcorper suscipit lobortis nisl
                      ut aliquip ex ea comm consequat.{" "}
                    </p>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illu dolore eu feugiat
                      null facilisis at vero eros et accumsan et iusto odio
                      dignissim qui bla praesent luptatum zzril delenit augue
                      duis dolore te feugait nulla facilisi.
                    </p>
                    <h5>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                      sed diam:
                    </h5>
                    <ol>
                      <li>
                        <a href="#">Ut wisi enim ad minim veniam</a>
                      </li>
                      <li>
                        <a href="#">
                          Vel illum dolore eu feugiat null facilisis at vero
                          eros{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Duis autem vel eum iriure dolor in hendrerit
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Euismod tincidunt ut laoreet dolore magna aliquam{" "}
                        </a>
                      </li>
                    </ol>
                    <h3>
                      Sed diam nonummy euismod tincidunt ut laoreet dolore.
                    </h3>
                    <p>
                      Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea
                      commodo consequat. Duis autem vel eum iriure dolor in
                      hendrerit in vulputate velit es molestie consequat, vel
                      illum dolore eu feugiat nulla facilisis at vero eros et
                      accumsan.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exer tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriur dolor in hendrerit in vulputate velit esse
                      molestie consequat, vel illum dolore eu feugiat nulla
                      faciliss at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent.
                    </p>
                    <img src={imgD2} className="img-fluid" alt />
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud ex tation ullamcorper suscipit lobortis nisl
                      ut aliquip ex ea comm consequat.{" "}
                    </p>
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illu dolore eu feugiat
                      null facilisis at vero eros et accumsan et iusto odio
                      dignissim qui bla praesent luptatum zzril delenit augue
                      duis dolore te feugait nulla facilisi.
                    </p>
                  </div>
                  <div className="writen-by-col section">
                    <div className="avatar-holder">
                      <a href="#">
                        <img
                          alt
                          src={avtar2}
                          className="avatar"
                          height={150}
                          width={150}
                        />
                      </a>
                    </div>
                    <div className="author-description">
                      <h6 className="label">Written By</h6>
                      <h3 className="author-name">
                        <a href="#">Sonia Bezos, Marketing Manager</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud ex tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea comm consequat.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-conn">
                  <div className="sidebar-item">
                    <div className="content-right-cta section">
                      <h5>Sed diam nonummy</h5>
                      <p>
                        Sllamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo conseq Duis autem vel eum iriure dolor in.
                      </p>
                      <a href="#" className="btn-main">
                        <span>Try for free</span>
                      </a>
                    </div>
                    <div className="content-right-cta section">
                      <h5>Sed diam nonummy</h5>
                      <p>
                        Sllamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo conseq Duis autem vel eum iriure dolor in.
                      </p>
                      <a href="#" className="btn-main">
                        <span>Try for free</span>
                      </a>
                    </div>
                    <div className="content-right-cta section">
                      <h5>Sed diam nonummy</h5>
                      <p>
                        Sllamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo conseq Duis autem vel eum iriure dolor in.
                      </p>
                      <a href="#" className="btn-main">
                        <span>Try for free</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section featured-blog-raw  right-section-container">
            <div className="container">
              <div className="featured-blog-raw-col section">
                <div className="row">
                  <div className="col-sm-12 col-xs-12 text-center">
                    <h2>You may also like</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-xs-12 featured-blog-col">
                    <a href="#" className="blog-img">
                      <img src="../images/blog-post-meta-description.png" alt />
                    </a>
                    <div className="context-col">
                      <p className="context">
                        5 min read <span>Updates</span>
                      </p>
                      <a>
                        Lorem ipsum dolor consectetu adipiscing elit sed diam.
                      </a>
                    </div>
                    <div className="auther-col section">
                      <img
                        src="../images/2.png"
                        alt="Avtar"
                        className="img-fluid avtar"
                      />
                      <p>
                        Sonia Bezos, Marketing Manager <br />
                        <span>Jan 25, 2021</span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-12 featured-blog-col">
                    <a href="#" className="blog-img">
                      <img src="../images/blog-post-launch.png" alt />
                    </a>
                    <div className="context-col">
                      <p className="context">
                        5 min read <span>Updates</span>
                      </p>
                      <a>
                        Lorem ipsum dolor consectetu adipiscing elit sed diam.
                      </a>
                    </div>
                    <div className="auther-col section">
                      <img
                        src="../images/2.png"
                        alt="Avtar"
                        className="img-fluid avtar"
                      />
                      <p>
                        Sonia Bezos, Marketing Manager <br />
                        <span>Jan 25, 2021</span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-xs-12 featured-blog-col">
                    <a href="#" className="blog-img">
                      <img src="../images/blog4.jpg" alt />
                    </a>
                    <div className="context-col">
                      <p className="context">
                        5 min read <span>Updates</span>
                      </p>
                      <a>
                        Lorem ipsum dolor consectetu adipiscing elit sed diam.
                      </a>
                    </div>
                    <div className="auther-col section">
                      <img
                        src="../images/2.png"
                        alt="Avtar"
                        className="img-fluid avtar"
                      />
                      <p>
                        Sonia Bezos, Marketing Manager <br />
                        <span>Jan 25, 2021</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SubscribeSection />
        <CatSection />
        <Footer />
      </Layout>
    </>
  )
}

export default UltimateGuideToSeoContentWritingIn2021
