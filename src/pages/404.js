import * as React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Layout>
      <div className="page-404-wrapper">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
