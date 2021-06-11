/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { withPrefix } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        type="text/javascript"
        defer
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        type="text/javascript"
        defer
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        type="text/javascript"
        defer
      ></script>
      <script
        src="https://cdn.rawgit.com/michalsnik/aos/2.0.4/dist/aos.js"
        type="text/javascript"
        defer
      ></script>
      <script
        src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
        type="text/javascript"
        defer
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
        defer
      ></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"
        defer
      ></script>
      <script src={withPrefix("customGrid.js")} type="text/javascript" />
      <script src={withPrefix("main.js")} type="text/javascript" />
      <script src={withPrefix("animator.js")} type="text/javascript" />
      <script
        src="https://code.tidio.co/4okfxoik8goeafk6fywrgilwux7mavdq.js"
        type="text/javascript"
        defer
      ></script>
      <script src={withPrefix("custom.js")} type="text/javascript" defer />
      <script
        type="text/javascript"
        src="https://widget.prefinery.com/widget/v2/g72qxl5b.js"
        defer
      ></script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
