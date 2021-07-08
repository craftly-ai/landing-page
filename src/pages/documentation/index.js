import React from "react"
import SEO from "./../../components/seo/seo"
import StickyMenu from "./../../components/documentation/StickyMenu"
import SearchBox from "./../../components/documentation/SearchBox"
import Doc from "./../../container/documentation/home/Doc"
import StartedRow from "./../../container/documentation/home/StartedRow"
import CatBox from "./../../container/documentation/home/CatBox"
import DocFooter from "./../../components/documentation/DocFooter"

const Index = () => {
  return (
    <>
      <SEO />
      <section className="section documentation-wrapper bg-white">
        <StickyMenu />
        <div className="right-box-wrap">
          <div className="res_navigation">
            <a
              href="javascript:void(0)"
              className="nav-toggle"
              id="trigger-overlay"
            >
              <span className="top" />
              <span className="middle" />
              <span className="bottom" />
            </a>
          </div>
          <SearchBox />
          <Doc />
          <StartedRow />
          <CatBox />
          <DocFooter />
        </div>
      </section>
    </>
  )
}

export default Index
