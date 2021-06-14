import React from "react"
import SearchBar from "./../components/desktop/SearchBar"
import DescriptionBox from "./../components/desktop/DescriptionBox"
import FormGenerateIdeas from "./../components/desktop/FormGenerateIdeas"
import IdeasBox from "./../components/desktop/ideasbox/IdeasBox"
import desktopdata from "../data/desktopData.json"

const DesktopSeaction = () => {
  return (
    <>
      <div className="production-raw section ptb100">
        <div className="container">
          <div className="desktop-block craftly-ai-demo section">
            <SearchBar url={desktopdata.addressbar.url} />
            <div className="desktop-screen">
              <h6>{desktopdata.siteheading}</h6>
              <DescriptionBox
                title={desktopdata.descriptionbox.title}
                description={desktopdata.descriptionbox.description}
                button1={desktopdata.descriptionbox["choose-language"]}
                button2={desktopdata.descriptionbox["view-saved"]}
              />
              <div className="box-wrapper">
                <div className="left-box">
                  <FormGenerateIdeas
                    lableinput={desktopdata.generateideas["lable-input"]}
                    datarotateinput={
                      desktopdata.generateideas["datarotate-input"]
                    }
                    input={desktopdata.generateideas.input}
                    tooltipstep1={desktopdata.generateideas["tooltip-step1"]}
                    lableinfo={desktopdata.generateideas["lable-info"]}
                    datarotateinfo={
                      desktopdata.generateideas["datarotate-info"]
                    }
                    infocount={desktopdata.generateideas["info-count"]}
                    info={desktopdata.generateideas.info}
                    button={desktopdata.generateideas.button}
                    tooltipstep2={desktopdata.generateideas["tooltip-step2"]}
                    dataperiod={desktopdata.generateideas.dataperiod}
                  />
                </div>
                <div className="right-box">
                  <IdeasBox
                    linkall={desktopdata.ideabox["nav-linkall"]}
                    linkfavorite={desktopdata.ideabox["nav-linkfavorite"]}
                    linkcopyall={desktopdata.ideabox["nav-linkcopyall"]}
                    headingline1={desktopdata.ideabox.headingline1}
                    headingline2={desktopdata.ideabox.headingline2}
                    idealist={desktopdata.ideabox.idealist}
                    buttonkeepcrafting={desktopdata.ideabox.buttonkeepcrafting}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopSeaction
