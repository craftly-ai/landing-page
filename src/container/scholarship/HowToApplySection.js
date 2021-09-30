import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HowToApplySection = () => {
  const data = useStaticQuery(graphql`
    {
        allWpPage(filter: { slug: { eq: "scholarship" } }) {
            nodes {
                scholarship {
                    howToApplyTitle
                    howToApplyDescription 
                    submissionLabel
                    formHereButtonUrl
                    formHereButtonLabel
                    applicationDeadlineLabel
                    applicationDeadlineDate
                    applicationDeadlineDateSuffix
                    winnerAnnouncedLabel
                    winnerAnnouncedDate
                    winnerAnnouncedDateSuffix  
                    eligibilityTitle
                    eligibilityDescription
                }
            }
        }
    }
  `)

  let howToApplyTitle = data.allWpPage.nodes.map(
    node => node.scholarship.howToApplyTitle
  )
  let howToApplyDescription = data.allWpPage.nodes.map(
    node => node.scholarship.howToApplyDescription
  )
  let submissionLabel = data.allWpPage.nodes.map(
    node => node.scholarship.submissionLabel
  )
  let formHereButtonLabel = data.allWpPage.nodes.map(
    node => node.scholarship.formHereButtonLabel
  )
  let formHereButtonUrl = data.allWpPage.nodes.map(
    node => node.scholarship.formHereButtonUrl
  )

  let applicationDeadlineLabel = data.allWpPage.nodes.map(
    node => node.scholarship.applicationDeadlineLabel
  )
  let applicationDeadlineDate = data.allWpPage.nodes.map(
    node => node.scholarship.applicationDeadlineDate
  )
  let applicationDeadlineDateSuffix = data.allWpPage.nodes.map(
    node => node.scholarship.applicationDeadlineDateSuffix
  )

  let winnerAnnouncedLabel = data.allWpPage.nodes.map(
    node => node.scholarship.winnerAnnouncedLabel
  )
  let winnerAnnouncedDate = data.allWpPage.nodes.map(
    node => node.scholarship.winnerAnnouncedDate
  )
  let winnerAnnouncedDateSuffix = data.allWpPage.nodes.map(
    node => node.scholarship.winnerAnnouncedDateSuffix
  )


  let eligibilityTitle = data.allWpPage.nodes.map(
    node => node.scholarship.eligibilityTitle
  )
  let eligibilityDescription = data.allWpPage.nodes.map(
    node => node.scholarship.eligibilityDescription
  )


 


  return (
    <div className="howapply-wrap section">
      <div className="container sm-container">
        <div className="row">
            <div className="col-md-8">
                <div className="text-wrap">
                    <h3 dangerouslySetInnerHTML={{ __html: howToApplyTitle }} />
                    <div className="section"
                    dangerouslySetInnerHTML={{ __html: howToApplyDescription }}
                    />
                    <div className="submission-wrap">
                        <h5 className="mt-0" dangerouslySetInnerHTML={{ __html: submissionLabel }} />
                        <a className="btn-main mt-0" href={formHereButtonUrl}>
                            {formHereButtonLabel}
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="dedline-box">
                    <div className="dedline-con section">
                        <p dangerouslySetInnerHTML={{ __html: applicationDeadlineLabel }} />
                        <div className="ded-date">
                            <span dangerouslySetInnerHTML={{ __html: applicationDeadlineDate }} />
                            <sub dangerouslySetInnerHTML={{ __html: applicationDeadlineDateSuffix }} />    
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="section announce-box">
            <div className="announce-con">
                <span className="title" dangerouslySetInnerHTML={{ __html: winnerAnnouncedLabel }} />
                <div className="ded-date">
                    <span dangerouslySetInnerHTML={{ __html: winnerAnnouncedDate }} /> 
                    <sub dangerouslySetInnerHTML={{ __html: winnerAnnouncedDateSuffix }} /> 
                </div> 
            </div>
        </div> */}

        <div className="eligibility-box section">
            <h3 dangerouslySetInnerHTML={{ __html: eligibilityTitle }} />
            <div className="section" dangerouslySetInnerHTML={{ __html: eligibilityDescription }} /> 
        </div>
      </div>
    </div>

  )
}

export default HowToApplySection
