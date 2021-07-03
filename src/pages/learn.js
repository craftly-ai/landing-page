import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import InnerBanner from "./../components/innerBanner/InnerBanner"
import CustomBreadcrumb from "../components/breadcrumb/CustomBreadcrumb"
import UpdateWarpSection from "./../container/learn/UpdateWarpSection"
import ProcessWarpSection from "./../container/learn/ProcessWarpSection"
import EarningWrapSection from "./../container/learn/EarningWrapSection"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import { useStaticQuery, graphql } from "gatsby"

const Learn = location => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "The Academy",
  })

  return (
    <>
      <SEO title="" />
      <Layout>
        <section className="relative">
          <CustomBreadcrumb crumbs={crumbs} />
          <InnerBanner
            // bannerLogo={}
            // bannerButtonLabel={}
            // bannerButtonUrl={}
            // bannerTitle={}
            // bannerDescription={}
            // bottomButtonLabel_1={}
            // buttomButtonUrl_1={}
            // buttomButtonLabel_2={}
            // buttomButtonUrl_2={}
            buttomClassButton_2={"btn-main email"}
            buttomIconButton_2={"fa fa-envelope"}
          />
          <ProcessWarpSection />
          <UpdateWarpSection />
          <EarningWrapSection />
        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default Learn
