import * as React from "react"
import StickyMenu from "./StickyMenu"
import MenuNavigation from "./MenuNavigation"
import SearchBox from "./SearchBox"
import CatBox from "./CatBox"
import DocFooter from "./DocFooter"
import JoinUs from "./JoinUs"

const DocLayout = ({ children, page }) => {
  return (
    <>
      <section className="section documentation-wrapper bg-white">
        <StickyMenu />
        <div className="right-box-wrap">
          <MenuNavigation />
          <SearchBox />
          {children}
          {page !== "stepByStepGuide" ? <CatBox /> : <JoinUs />}
          <DocFooter />
        </div>
      </section>
    </>
  )
}

export default DocLayout
