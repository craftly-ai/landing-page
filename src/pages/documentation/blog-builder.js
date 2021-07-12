import * as React from "react"
import SEO from "./../../components/seo/seo"
import StickyMenu from "./../../components/documentation/StickyMenu"
import DocFooter from "./../../components/documentation/DocFooter"
import CatBox from "./../../components/documentation/CatBox"

const BlogBuilder = () => {
  return (
    <>
      <SEO />
      <section className="section documentation-wrapper bg-white">
        <StickyMenu />
        <CatBox />
        <DocFooter />
      </section>
    </>
  )
}

export default BlogBuilder
