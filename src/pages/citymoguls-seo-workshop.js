import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import Footer from "./../components/footer/Footer"
import { useStaticQuery, graphql, Link } from "gatsby"

const SeoWorkshop = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: { slug: { eq: "seo-workshop" } }) {
        nodes {
        seoWorkshop {
            title
            time
            date
            eventTitle
            eventDescription
            hostImage {
                sourceUrl
            }
            whatYouLlLearnTitle
            learnDescription
            registerButtonUrl
            registerButtonLabel

            speakerLable
            speakerName
            speakerDescription
            hostLabel
            hostName
            hostDescription
            shareWithLabel
          }
        }
      }
    }
  `)

  let title = data.allWpPage.nodes.map(node => node.seoWorkshop.title)

  let time = data.allWpPage.nodes.map(node => node.seoWorkshop.time)

  let date = data.allWpPage.nodes.map(node => node.seoWorkshop.date)

  let eventTitle = data.allWpPage.nodes.map(node => node.seoWorkshop.eventTitle)

  let eventDescription = data.allWpPage.nodes.map(
      node => node.seoWorkshop.eventDescription)

  let hostImage = data.allWpPage.nodes.map(
    node => node.seoWorkshop.hostImage?.sourceUrl)

    let whatYouLlLearnTitle = data.allWpPage.nodes.map(
    node => node.seoWorkshop.whatYouLlLearnTitle)

    let learnDescription = data.allWpPage.nodes.map(
        node => node.seoWorkshop.learnDescription) 
        
    let registerButtonUrl = data.allWpPage.nodes.map(
        node => node.seoWorkshop.registerButtonUrl)
    
    let registerButtonLabel = data.allWpPage.nodes.map(
            node => node.seoWorkshop.registerButtonLabel) 


    let speakerLable = data.allWpPage.nodes.map(
        node => node.seoWorkshop.speakerLable) 
        
    let speakerName = data.allWpPage.nodes.map(
        node => node.seoWorkshop.speakerName)
    
    let speakerDescription = data.allWpPage.nodes.map(
            node => node.seoWorkshop.speakerDescription) 

    let hostLabel = data.allWpPage.nodes.map(
        node => node.seoWorkshop.hostLabel) 
        
    let hostName = data.allWpPage.nodes.map(
        node => node.seoWorkshop.hostName)
    
    let hostDescription = data.allWpPage.nodes.map(
        node => node.seoWorkshop.hostDescription) 
     
    let shareWithLabel = data.allWpPage.nodes.map(
        node => node.seoWorkshop.shareWithLabel) 
        
  

  const metaTitle = "Craftly.AI | Seo Workshop"
  const metaDescription = ""

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} />
      <Layout>
        <section>
            <div className="event-wrapper section">
                <div className="container sm-container">
                    <div className="event-wrap section">
                        <div className="section text-center event-head">
                            <h1 dangerouslySetInnerHTML={{ __html: title }} />
                            <span className="date" dangerouslySetInnerHTML={{ __html: date }} />
                            <span className="time" dangerouslySetInnerHTML={{ __html: time }} />
                        </div>
                        <div className="event-main section">
                            <div className="text-wrap">
                                <h2 dangerouslySetInnerHTML={{ __html: eventTitle }} />
                                <div dangerouslySetInnerHTML={{ __html: eventDescription }}/>
                            </div>
                            <div className="img-wrap">
                                <img src={hostImage} className="img-fluid" alt="SEO Workshop"/>
                            </div>
                        </div>   
                    </div>

                    <div className="what-learn-wrap section">
                        <h2 dangerouslySetInnerHTML={{ __html: whatYouLlLearnTitle }} />
                        <div className="text-wrap" dangerouslySetInnerHTML={{ __html: learnDescription }}/> 
                        <dvi className="text-center section">
                            <a href={registerButtonUrl} className="btn-main" target="_blank" rel="noreferrer">
                            <span>{registerButtonLabel}</span>
                            </a>
                        </dvi>
                    </div>   

                    <div className="about-event-wrap section"> 
                        <div className="aboute-box">
                            <span dangerouslySetInnerHTML={{ __html: speakerLable }} />
                            <h2 dangerouslySetInnerHTML={{ __html: speakerName }} />
                            <div className="text-wrap" dangerouslySetInnerHTML={{ __html: speakerDescription }}/> 
                        </div>
                        <div className="aboute-box">
                            <span dangerouslySetInnerHTML={{ __html: hostLabel }} />
                            <h2 dangerouslySetInnerHTML={{ __html: hostName }} />
                            <div className="text-wrap" dangerouslySetInnerHTML={{ __html: hostDescription }}/> 
                        </div>
                    </div>

                    <div className="share-wrap section text-center">
                        <span dangerouslySetInnerHTML={{ __html: shareWithLabel }} />
                        <ul>
                            <li>
                                <Link
                                to="https://www.facebook.com/craftlyai/"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <i className="fa fa-facebook" aria-hidden="true" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="https://twitter.com/craftlyai?lang=en"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <i className="fa fa-twitter" aria-hidden="true" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="https://ca.linkedin.com/company/craftlyai"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <i className="fa fa-linkedin" aria-hidden="true" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                to="https://www.instagram.com/craftly.ai/?hl=en"
                                target="_blank"
                                rel="noreferrer"
                                >
                                <i className="fa fa-instagram" aria-hidden="true" />
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:hello@craftly.ai">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
      </Layout>
    </>
  )
}

export default SeoWorkshop
