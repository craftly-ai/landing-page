import * as React from "react"
import StickyMenu from "./StickyMenu"
import MenuNavigation from "./MenuNavigation"
import SearchBox from "./SearchBox"
import CatBox from "./CatBox"
import DocFooter from "./DocFooter"

const DocLayout = ({ children }) => {
  return (
    <>
      <section className="section documentation-wrapper bg-white">
        <StickyMenu />
        <div className="right-box-wrap">
          <MenuNavigation />
          <SearchBox />
          {children}
          <CatBox />
          <DocFooter />
        </div>
      </section>
    </>
  )
}

export default DocLayout
