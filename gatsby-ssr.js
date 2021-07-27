/**
import { withPrefix } from 'gatsby';
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
      async
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://cdn.rawgit.com/michalsnik/aos/2.0.4/dist/aos.js"
      defer
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
      defer
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://widget-v4.tidiochat.com/1_69_0/static/js/render.d02d6132b6e06cd0a41d.js"
      defer
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js"
      defer
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
      defer
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"
      defer
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://code.tidio.co/4okfxoik8goeafk6fywrgilwux7mavdq.js"
      defer
    ></script>,
    <script
      type="text/javascript"
      rel="preconnect"
      src="https://widget.prefinery.com/widget/v2/g72qxl5b.js"
      defer
    ></script>,
  ])
}
