import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import CustomBreadcrumb from "./../components/breadcrumb/CustomBreadcrumb"
import AboutSection from "./../container/about/AboutSection"
import CraftersSection from "./../container/about/CraftersSection"
import CommandmentsSection from "./../container/about/CommandmentsSection"
import PowerSection from "./../container/about/PowerSection"
import WorkWithUsSection from "./../container/about/WorkWithUsSection"
import SubscribeWrapSection from "./../container/learn/SubscribeWrapSection"
import OfferSection from "./../container/home/OfferSection"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const About = location => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "About",
  })

  return (
    <>
      <SEO title="" />
      <Layout>
        <section className="about-page-wrap section">
          <CustomBreadcrumb crumbs={crumbs} />
          <AboutSection />
          <CraftersSection />
          <CommandmentsSection />
          <PowerSection />
          <WorkWithUsSection />
        </section>
        <SubscribeWrapSection
          //   title={}
          //   description={}
          inputPlaceholder={"Enter Your Email"}
          submitLabel={"I Want it!"}
        />
        <OfferSection
        //   title={}
        //   description={}
        //   buttonLabel={}
        //   buttonUrl={}
        //   img={}
        />
      </Layout>
      <Footer />
    </>
  )
}

export default About
