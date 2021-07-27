<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Craftly.AI Landing Page
</h1>

## Pages to Code

We want the following pages:
- Landing Page: index21_12apr_TL.psd
- Affiliate Page: Affiliate02_31mar_TL.jpg (Waiting on PSD)
- Learn: Learn01_01apr_TL.jpg (Waiting on PSD)
- Documentation Guide: Documentation01_05apr_TL.jpg (Waiting on PSD)
- Blog (Already coded, I will add)
- Post Page (Already coded, I will add)

Here is a boilerplate for making a gatsby site. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1. **Install the Gatsby CLI.**

   ```shell
   npm install -g gatsby-cli
   ```

2.  **Install Dependency.**

    Navigate into site directory and install dependency.

    ```shell
    cd landing-page/
    npm i
    ```
    
3.  **Start Developing.**

    Navigate into site directory and start development server with gatsby clean and gatsby develop.

    ```shell
    npm run cdev
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`

    You'll also see a second link for graphql: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data.


## 💫 Deploy
1. **Create a Build**

   ```shell
   npm run build
   ```

2.  **Testing Build on local server**

    ```shell
    npm run serve
    ```
    Your site is now running at `http://localhost:9000`

3.  **Deploy on server**
    - Upload public directory data on your server

## 💫 Deploy on Subdomain

1. **Add a pathPrefix value to your gatsby-config.js.**
   
   ```js
   module.exports = {
    pathPrefix: `/craftly-landing`,
   }
   ```
   
1. **Create a Build with Prefix**

   ```shell
   npm run build-prefix
   ```

2.  **Testing Build on local server**

    ```shell
    npm run serve-prefix
    ```
    Your site is now running with Prefix at `http://localhost:9000/craftly-landing`

3.  **Deploy on server**
    - Upload public directory data on your server
  
## 🧐 What's inside?

```
landing-page/
┣ .vscode/
┃ ┗ settings.json
┣ src/
┃ ┣ animations/
┃ ┣ components/
┃ ┃ ┣ 404/
┃ ┃ ┣ aboutWrap/
┃ ┃ ┣ affiliateEarning/
┃ ┃ ┣ audience/
┃ ┃ ┣ blog/
┃ ┃ ┣ breadcrumb/
┃ ┃ ┣ carousel/
┃ ┃ ┣ copywritingSteps/
┃ ┃ ┣ dashboard/
┃ ┃ ┣ documentation/
┃ ┃ ┣ footer/
┃ ┃ ┣ header/
┃ ┃ ┣ innerBanner/
┃ ┃ ┣ layout/
┃ ┃ ┣ modal/
┃ ┃ ┣ noWrapper/
┃ ┃ ┣ pricing/
┃ ┃ ┣ processWrap/
┃ ┃ ┣ product/
┃ ┃ ┣ rangeslide/
┃ ┃ ┣ sellsProduct/
┃ ┃ ┣ seo/
┃ ┃ ┣ trustTech/
┃ ┃ ┣ typeform/
┃ ┃ ┣ Typewriter/
┃ ┃ ┣ updateWrap/
┃ ┃ ┣ valueGrow/
┃ ┃ ┗ video/
┃ ┣ container/
┃ ┃ ┣ about/
┃ ┃ ┣ blog/
┃ ┃ ┣ earn/
┃ ┃ ┣ home/
┃ ┃ ┣ learn/
┃ ┃ ┗ video/
┃ ┣ images/
┃ ┣ pages/
┃ ┃ ┣ blog/
┃ ┃ ┣ ┣ Blog.js
┃ ┃ ┣ ┣ BlogTemplate.js
┃ ┃ ┣ ┗ index.js
┃ ┃ ┣ documentation/d
┃ ┃ ┣ ┣ blog-builder.js
┃ ┃ ┣ ┣ blog-ideas.js
┃ ┃ ┣ ┣ blog-topics.js
┃ ┃ ┣ ┣ bullets-to-paragraph.js
┃ ┃ ┣ ┣ choose-a-tone.js
┃ ┃ ┣ ┣ email-confirmation.js
┃ ┃ ┣ ┣ email-thank-you.js
┃ ┃ ┣ ┣ headline.js
┃ ┃ ┣ ┣ index.js
┃ ┃ ┣ ┣ product-description.js
┃ ┃ ┣ ┣ sentence-rewriter.js
┃ ┃ ┣ ┣ step-by-step.js
┃ ┃ ┣ ┗ value-proposition.js
┃ ┃ ┣ Video/
┃ ┃ ┣ ┣ index.js
┃ ┃ ┣ ┣ Video.js
┃ ┃ ┣ ┗ VideoTemplate.js
┃ ┃ ┣ 404.js
┃ ┃ ┣ about.js
┃ ┃ ┣ affiliate.js
┃ ┃ ┣ index.js
┃ ┃ ┣ learn.js
┃ ┃ ┣ page-2.js
┃ ┃ ┣ privacy-policy.js
┃ ┃ ┣ terms-of-use.js
┃ ┃ ┣ tools.js
┃ ┃ ┗ using-typescript.tsx
┃ ┗ styles/
┃   ┣ fonts/
┃   ┣ aos.css
┃   ┣ bootstrap.min.css
┃   ┣ font-awesome.css
┃   ┣ slick.css
┃   ┗ style.css
┣ static/
┃ ┣ animator.js
┃ ┣ custom.js
┃ ┣ customGrid.js
┃ ┗ rangeslide.js
┣ .gitignore
┣ .prettierignore
┣ .prettierrc
┣ gatsby-browser.js
┣ gatsby-config.js
┣ gatsby-node.js
┣ gatsby-ssr.js
┣ LICENSE
┣ package-lock.json
┣ package.json
┗ README.md

```