import React from "react"
import SEO from "./../../components/seo/seo"
import StickyMenu from "./../../components/documentation/StickyMenu"
import SearchBox from "./../../components/documentation/SearchBox"
import Doc from "./../../container/documentation/chooseATone/Doc"
import CatBox from "./../../container/documentation/home/CatBox"
import DocFooter from "./../../components/documentation/DocFooter"

const ChooseATone = () => {
  return (
    <>
      <SEO />
      <section className="section documentation-wrapper bg-white">
        <StickyMenu />
        <div className="right-box-wrap">
          <SearchBox />
          <Doc />
          <CatBox />
          <DocFooter />
        </div>
      </section>
    </>
  )
}

export default ChooseATone
