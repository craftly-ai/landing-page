/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "../header/Header"
import Footer from "./../footer/Footer"
import Modal from "./../modal/Modal"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section class="section relative bg-gradient">
        <main>{children}</main>
        <Footer />
      </section>
      <Modal />
    </>
  )
}

export default Layout
