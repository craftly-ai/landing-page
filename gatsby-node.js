const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allWpPost.nodes.forEach(({ slug }) => {
    createPage({
      path: "blog/" + slug,
      component: path.resolve(`./src/pages/blog/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
      },
    })
  })
}
