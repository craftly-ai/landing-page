import * as React from "react"
import SEO from "./../components/seo/seo"
import Layout from "./../components/layout/Layout"
import CustomBreadcrumb from "../components/breadcrumb/CustomBreadcrumb"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import Footer from "./../components/footer/Footer"

const PrivacyPolicy = location => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Privacy Policy",
  })
  return (
    <>
      <SEO title="Craftly.AI | Privacy Policy" />
      <Layout>
        <section className="default-page-raw section stick-gradient">
          <CustomBreadcrumb crumbs={crumbs} />
          <div className="privacy-policy-raw section">
            <div className="container">
              <div className="privacy-head">
                <h1>Privacy Policy</h1>
                <p>
                  Craft.ai (“Craftly.ai,” “we,” “us,” and “our”) provides an
                  Artificial Intelligence Assisted copywriting tool. This
                  Privacy Notice is designed to help you understand how we
                  collect, use, and share your personal information and to help
                  you understand and exercise your privacy rights.
                </p>
              </div>
              <div className="policy-points">
                <h4>1. Scope </h4>
                <p>
                  This Privacy Notice is applicable to personal information
                  processed by us on our website, our app, our services offered
                  via the website and/or app, and our related online and offline
                  offerings. To make this Privacy Notice easier to read, our
                  websites, our services offered via the website, app, and our
                  related offerings are collectively called “Services.”
                </p>
                <h4>2. Changes to our Privacy Notice</h4>
                <p>
                  We may revise this Privacy Notice from time to time at our
                  sole discretion. If there are any material changes to this
                  Privacy Notice, we will notify you by posting them on our
                  website and require you to accept them before you may continue
                  to use the Services. If you continue to use the service once
                  the Privacy Notice is displayed online, you are agreeing to
                  the changes.
                </p>
                <h4>3. Personal Information Collect</h4>
                <p>
                  e collect information that you provide to us, information we
                  obtain automatically when you use our Services, and
                  information from other sources such as third-party services
                  and organizations, as described below. The categories of
                  personal information we collect depend on how you interact
                  with us, our Services and the requirements of applicable law.{" "}
                </p>
                <div className="small-points">
                  <h6>A. Information Directly Provided Us </h6>
                  <p>
                    We may collect the following personal information as
                    provided:
                  </p>
                  <ol>
                    <li>
                      <strong>Creating an Account.</strong>
                      <br /> We may collect information when you create an
                      account, such as name and email address.
                    </li>
                    <li>
                      <strong>Purchases.</strong>
                      <br /> We may, or our third-party payment Service, may
                      collect personal information and details associated with
                      your purchases, including payment information. In some
                      cases, you may need to provide servers with additional
                      information to verify your identity before completing a
                      transaction. Any payments made via our Services are
                      processed by third-party payment processors. We do not
                      directly collect or store any payment card information
                      entered through our Services, but we may receive
                      information associated with your payment card information
                      (e.g., your billing details).
                    </li>
                    <li>
                      <strong>Your Communications with Us.</strong>
                      <br /> We may collect personal information, such as email
                      address, phone number, or mailing address when you request
                      information about our Services, register for our
                      newsletter or marketing, apply for a job, request customer
                      or technical support or otherwise communicate with us.
                    </li>
                    <li>
                      <strong>Surveys.</strong>
                      <br /> We may contact you to participate in surveys. If
                      you decide to participate, you may be asked to provide
                      certain information which may include personal
                      information.
                    </li>
                    <li>
                      <strong>Interactive Features.</strong>
                      <br /> We and others who use our Services may collect
                      personal information that you submit or make available
                      through our interactive features (e.g., collaboration
                      tools, commenting functionalities, forums, blogs,
                      messaging and chat features, and social media pages). Any
                      information you provide on the public sections of these
                      features will be considered “public,” unless otherwise
                      required by applicable law, and is not subject to the
                      privacy protections referenced herein.
                    </li>
                    <li>
                      <strong>Sweepstakes or Contests.</strong>
                      <br /> We may collect personal information you provide for
                      any sweepstakes or contests that we offer. In some
                      jurisdictions, we are required to publicly share
                      information of sweepstakes and contest winners.
                    </li>
                    <li>
                      <strong>
                        Conferences, Trade Shows, and Other Events.
                      </strong>
                      <br /> We may collect personal information from
                      individuals when we attend conferences, trade shows, and
                      other events.
                    </li>
                    <li>
                      <strong>
                        Business Development and Strategic Partnerships.
                      </strong>
                      <br /> We may collect personal information from
                      individuals and third parties to assess and pursue
                      potential business opportunities.
                    </li>
                    <li>
                      <strong>Job Applications.</strong>
                      <br /> We may post job openings and opportunities on our
                      Services. If you reply to one of these postings by
                      submitting your application, CV and/or cover letter to us,
                      we will collect and use your information to assess your
                      qualifications.
                    </li>
                  </ol>
                  <h6>B. Information Collected Automatically</h6>
                  <p>
                    We may collect personal information automatically when you
                    use our Services:
                  </p>
                  <ol>
                    <li>
                      <strong>Automatic Data Collection.</strong>
                      <br /> We may collect certain information automatically
                      when you use our Services, such as user settings, your
                      Internet protocol (IP) address, cookie identifiers, MAC
                      address, mobile carrier, mobile advertising and other
                      unique identifiers, browser or device information,
                      location information (including approximate location
                      derived from IP address), and Internet service provider.
                      We may also automatically collect information regarding
                      your use of our Services, such as pages that you visit
                      before, during and after using our Services, information
                      about the links you click, the types of content you
                      interact with, the frequency and duration of your
                      activities, and other information about how you use our
                      Services. In addition, we may collect information that
                      other people provide about you when they use our Services,
                      including information about you when they tag you.
                    </li>
                    <li>
                      <strong>
                        Cookies, Pixel Tags/Web Beacons, and Other Technologies.
                      </strong>
                      <br /> We, as well as third parties that provide content,
                      advertising, or other functionality on our Services, may
                      use cookies, pixel tags, local storage, and other
                      technologies (“Technologies”) to automatically collect
                      information through your use of our Services.
                    </li>
                    <li>
                      <strong>Cookies.</strong>
                      <br /> Cookies are small text files placed in device
                      browsers that store preferences and facilitate and enhance
                      your experience.
                    </li>
                    <li>
                      <strong>Pixel Tags/Web Beacons.</strong>
                      <br /> A pixel tag (also known as a web beacon) is a piece
                      of code embedded in our Services that collects information
                      about engagement on our Services. The use of a pixel tag
                      allows us to record, for example, that a user has visited
                      a particular web page or clicked on a particular
                      advertisement. We may also include web beacons in e-mails
                      to understand whether messages have been opened, acted on,
                      or forwarded.
                    </li>
                  </ol>
                  <p>
                    Our uses of these Technologies fall into the following
                    general categories:
                  </p>
                  <ol>
                    <li>
                      <strong>Operationally Necessary.</strong>
                      <br /> This includes Technologies that allow you access to
                      our Services, applications, and tools that are required to
                      identify irregular website behavior, prevent fraudulent
                      activity and improve security or that allow you to make
                      use of our functionality;
                    </li>
                    <li>
                      <strong>Performance-Related.</strong>
                      <br /> We may use Technologies to assess the performance
                      of our Services, including as part of our analytic
                      practices to help us understand how individuals use our
                      Services (see Analytics below);
                    </li>
                    <li>
                      <strong>Functionality-Related.</strong>
                      <br /> We may use Technologies that allow us to offer you
                      enhanced functionality when accessing or using our
                      Services. This may include identifying you when you sign
                      into our Services or keeping track of your specific
                      preferences, interests, or past items viewed;
                    </li>
                    <li>
                      <strong>Advertising- or Targeting-Related.</strong>
                      <br /> We may use first party or third-party Technologies
                      to deliver content, including ads relevant to your
                      interests, on our Services or on third-party websites.
                    </li>
                    <li>
                      <strong>Analytics.</strong>
                      <br /> We may use Technologies and other third-party tools
                      to process analytics information on our Services. Some of
                      our analytics partners include Google Analytics.
                    </li>
                    <li>
                      <strong>Social Media Platforms.</strong>
                      <br /> Our Services may contain social media buttons (that
                      might include widgets such as the “share this” button or
                      other interactive mini programs). These features may
                      collect your IP address, which page you are visiting on
                      our Services, and may set a cookie to enable the feature
                      to function properly. Your interactions with these
                      platforms are governed by the Privacy Notice of the
                      company providing it.
                    </li>
                  </ol>
                  <h6>C. Information Collected from Other Sources</h6>
                  <p>
                    We may obtain information about you from other sources,
                    including through third-party services and organizations.
                    For example, if you access our Services through a
                    third-party application, such as an app store, a third-party
                    login service, or a social networking site, we may collect
                    information about you from that third-party application that
                    you have made available via your privacy settings.
                  </p>
                </div>
                <h4>4. How we use your Information</h4>
                <p>
                  We use your information for a variety of business purposes,
                  including to provide our Services, for administrative
                  purposes, and to market our products and Services, as
                  described below.
                </p>
                <div className="small-points">
                  <h6>A. Provide Our Services</h6>
                  <p>
                    We use your information to fulfil our contract with you and
                    provide you with our Services, such as:
                  </p>
                  <ul>
                    <li>Managing your information and accounts;</li>
                    <li>
                      Providing access to certain areas, functionalities, and
                      features of our Services;
                    </li>
                    <li>
                      Communicating with you about your account, activities on
                      our Services, and policy changes;
                    </li>
                    <li>
                      Processing your financial information and other payment
                      methods for products or Services purchased;
                    </li>
                    <li>
                      Answering requests for customer or technical support;
                    </li>
                    <li>
                      Processing applications if you apply for a job, we post on
                      our Services; and
                    </li>
                    <li>Allowing you to register for events.</li>
                  </ul>
                  <h6>B. Administrative Purposes</h6>
                  <p>
                    We use your information for various administrative purposes,
                    such as:
                  </p>
                  <ul>
                    <li>
                      Pursuing our legitimate interests such as direct
                      marketing, research and development (including marketing
                      research), network and information security, and fraud
                      prevention;
                    </li>
                    <li>
                      Detecting security incidents, protecting against
                      malicious, deceptive, fraudulent or illegal activity, and
                      prosecuting those responsible for that activity;
                    </li>
                    <li>Measuring interest and engagement in our Services;</li>
                    <li>Developing new products and Services;</li>
                    <li>Ensuring internal quality control and safety;</li>
                    <li>
                      Short-term, transient use, such as contextual
                      customization of ads;
                    </li>
                    <li>Improving, upgrading or enhancing our Services;</li>
                    <li>Authenticating and verifying individual identities;</li>
                    <li>
                      Debugging to identify and repair errors with our Services;
                    </li>
                    <li>Enforcing our agreements and policies; and</li>
                    <li>Complying with our legal obligations.</li>
                    <li>
                      Auditing relating to interactions, transactions and other
                      compliance activities;
                    </li>
                  </ul>
                  <h6>
                    C. Marketing and Advertising our Products and Services
                  </h6>
                  <p>
                    We may use personal information to tailor and provide you
                    with content and advertisements. We may provide you with
                    these materials as permitted by applicable law.
                  </p>
                  <p>
                    Some of the ways we may market to you include email
                    campaigns, custom audiences advertising, and
                    “interest-based” or “personalized advertising,” including
                    through cross-device tracking.
                  </p>
                  <p>
                    If you have any questions about our marketing practices or
                    if you would like to opt out of the use of your personal
                    information for marketing purposes, you may contact us at
                    any time as set forth below.
                  </p>
                  <h6>D. Other Purposes</h6>
                  <p>
                    We also use your information for other purposes as requested
                    by you or as permitted by applicable law.
                  </p>
                  <ol>
                    <li>
                      <strong>Consent.</strong>
                      <br /> We may use personal information for other purposes
                      that are clearly disclosed to you at the time you provide
                      personal information or with your consent.
                    </li>
                    <li>
                      <strong>Share Content with Friends or Colleagues.</strong>
                      <br /> Our Services may offer various tools and
                      functionalities. For example, we may allow you to provide
                      information about your friends or colleagues through our
                      referral services. Our referral services may allow you to
                      forward or share certain content with a friend or
                      colleague, such as an email inviting your friend to use
                      our Services.
                    </li>
                    <li>
                      <strong>De-identified and Aggregated Information.</strong>
                      <br /> We may use personal information and other
                      information about you to create de-identified and/or
                      aggregated information, such as de-identified demographic
                      information, de-identified location information,
                      information about the device from which you access our
                      Services, or other analyses we create.
                    </li>
                  </ol>
                </div>
                <h4>5. How we Disclose your Information</h4>
                <p>
                  We disclose your information to third parties for a variety of
                  business purposes, including to provide our Services, to
                  protect us or others, or in the event of a major business
                  transaction such as a merger, sale, or asset transfer, as
                  described below.
                </p>
                <div className="small-points">
                  <h6>A. Disclosures to Provide our Services</h6>
                  <p>
                    The categories of third parties with whom we may share your
                    information are described below.
                  </p>
                  <ol>
                    <li>
                      <strong>Service Providers.</strong>
                      <br /> We may share your personal information with our
                      third-party service providers who use that information to
                      help us provide our Services. This includes service
                      providers that provide us with IT support, hosting,
                      payment processing, customer service, and related
                      services.
                    </li>
                    <li>
                      <strong>Other Craftly.</strong>
                      <br />
                      ai Users at Your Direction. When you use the Services,
                      including Craftly.ai’s interactive features, you may
                      direct Craftly.ai to share certain information with other
                      Craftly.ai users. This information can include personal
                      information about yourself and details about your work and
                      your use of the Services.
                    </li>
                    <li>
                      <strong>Business Partners.</strong>
                      <br /> We may share your personal information with
                      business partners to provide you with a product or service
                      you have requested. We may also share your personal
                      information to business partners with whom we jointly
                      offer products or services.
                    </li>
                    <li>
                      <strong>Advertising Partners.</strong>
                      <br /> We may share your personal information with
                      third-party advertising partners. These third-party
                      advertising partners may set Technologies and other
                      tracking tools on our Services to collect information
                      regarding your activities and your device (e.g., your IP
                      address, cookie identifiers, page(s) visited, location,
                      time of day). These advertising partners may use this
                      information (and similar information collected from other
                      services) for purposes of delivering personalized
                      advertisements to you when you visit digital properties
                      within their networks. This practice is commonly referred
                      to as “interest-based advertising” or “personalized
                      advertising.”
                    </li>
                    <li>
                      <strong>Affiliates. </strong>
                      <br />
                      We may share your personal information with our company
                      affiliates, for our administrative purposes including
                      activities such as IT management, for them to provide
                      services to you, or to support and supplement the Services
                      we provide.
                    </li>
                    <li>
                      <strong>APIs/SDKs.</strong>
                      <br /> We may use third-party application program
                      interfaces (“APIs”) and software development kits (“SDKs”)
                      as part of the functionality of our Services. For more
                      information about our use of APIs and SDKs, please contact
                      us as set forth below.
                    </li>
                  </ol>
                  <h6>B. Disclosures to Protect Us or Others</h6>
                  <p>
                    We may access, preserve, and disclose any information we
                    store associated with you to external parties if we, in good
                    faith, believe doing so is required or appropriate to:
                    comply with law enforcement or national security requests
                    and legal process, such as a court order or subpoena;
                    protect your, our, or others’ rights, property, or safety;
                    enforce our policies or contracts; collect amounts owed to
                    us; or assist with an investigation or prosecution of
                    suspected or actual illegal activity.
                  </p>
                  <h6>
                    C. Disclosure in the Event of Merger, Sale, or Other Asset
                    Transfers
                  </h6>
                  <p>
                    If we are involved in a merger, acquisition, financing due
                    diligence, reorganization, bankruptcy, receivership,
                    purchase or sale of assets, or transition of service to
                    another provider, your information may be sold or
                    transferred as part of such a transaction, as permitted by
                    law and/or contract.
                  </p>
                </div>
                <h4>6. Your Privacy Choices and Rights</h4>
                <p>
                  Your Privacy Choices. The privacy choices you may have about
                  your personal information are determined by applicable law and
                  are described below.
                </p>
                <div className="small-points">
                  <ol>
                    <li>
                      <strong>Email Communications.</strong>
                      <br /> If you receive an unwanted email from us, you can
                      use the unsubscribe link found at the bottom of the email
                      to opt out of receiving future emails. Note that you will
                      continue to receive transaction-related emails regarding
                      products or Services you have requested. We may also send
                      you certain non-promotional communications regarding us
                      and our Services, and you will not be able to opt out of
                      those communications (e.g., communications regarding our
                      Services or updates to our Terms of Service or this
                      Privacy Notice).
                    </li>
                    <li>
                      <strong>“Do Not Track.”</strong>
                      <br /> Do Not Track (“DNT”) is a privacy preference that
                      users can set in certain web browsers. Please note that we
                      do not respond to or honor DNT signals or similar
                      mechanisms transmitted by web browsers.
                    </li>
                    <li>
                      <strong>Cookies and Interest-Based Advertising.</strong>
                      <br /> You may stop or restrict the placement of
                      Technologies on your device or remove them by adjusting
                      your preferences as your browser or device permits.
                      However, if you adjust your preferences, our Services may
                      not work properly. Please note that cookie-based opt-outs
                      are not effective on mobile applications. You may opt out.
                      <br />
                      The online advertising industry also provides websites
                      from which you may opt out of receiving targeted ads from
                      data partners and other advertising partners that
                      participate in self-regulatory programs. Please note you
                      must separately opt out in each browser and on each
                      device.
                    </li>
                  </ol>
                  <p>
                    Your Privacy Rights. In accordance with applicable law, you
                    may have the right to:
                  </p>
                  <ul>
                    <li>
                      Access Personal Information about you, including: (i)
                      confirming whether we are processing your personal
                      information; (ii) obtaining access to or a copy of your
                      personal information;
                    </li>
                    <li>
                      Request Deletion, Anonymization or Blocking of your
                      personal information when processing is based on your
                      consent or when processing is unnecessary, excessive or
                      noncompliant;
                    </li>
                    <li>
                      Request Restriction of or Object to our processing of your
                      personal information;
                    </li>
                    <li>
                      Withdraw Your Consent to our processing of your personal
                      information. If you refrain from providing personal
                      information or withdraw your consent to processing, some
                      features of our Service may not be available;
                    </li>
                    <li>
                      Request Correction of your personal information where it
                      is inaccurate, incomplete or outdated. In some cases, we
                      may provide self-service tools that enable you to update
                      your personal information;
                    </li>
                    <li>
                      Request a portable copy of your personal information;
                    </li>
                    <li>
                      Be Informed about third parties with which your personal
                      information has been shared; and
                    </li>
                    <li>
                      Request the Review of decisions taken exclusively based on
                      automated processing if that could affect data subject
                      rights.
                    </li>
                  </ul>
                </div>
                <h4>7. Security of your Information</h4>
                <p>
                  We take steps to ensure that your information is treated
                  securely and in accordance with this Privacy Notice.
                  Unfortunately, no system is 100% secure, and we cannot ensure
                  or warrant the security of any information you provide to us.
                  To the fullest extent permitted by applicable law, we do not
                  accept liability for unauthorized disclosure.
                </p>
                <p>
                  By using our Services or providing personal information to us,
                  you agree that we may communicate with you electronically
                  regarding security, privacy, and administrative issues
                  relating to your use of our Services. If we learn of a
                  security system’s breach, we may attempt to notify you
                  electronically by posting a notice on our Services, by mail or
                  by sending an email to you.
                </p>
                <h4>8. International Data Transfers</h4>
                <p>
                  All information processed by us may be transferred, processed,
                  and stored anywhere in the world, including, but not limited
                  to, the United States, Canada or other countries, which may
                  have data protection laws that are different from the laws
                  where you live. We endeavor to safeguard your information
                  consistent with the requirements of applicable laws.
                </p>
                <h4>9. Retention of Personal Information</h4>
                <p>
                  We store the personal information we collect as described in
                  this Privacy Notice for as long as you use our Services or as
                  necessary to fulfill the purpose(s) for which it was
                  collected, provide our Services, resolve disputes, establish
                  legal defenses, conduct audits, pursue legitimate business
                  purposes, enforce our agreements, and comply with applicable
                  laws.
                </p>
                <h4>10. Supplemental Notice for California Residents</h4>
                <p>
                  This Supplemental California Privacy Notice only applies to
                  our processing of personal information that is subject to the
                  California Consumer Privacy Act of 2018 (“CCPA”). The CCPA
                  provides California residents with the right to know what
                  categories of personal information Craftly.ai has collected
                  about them and whether Craftly.ai disclosed that personal
                  information for a business purpose (e.g., to a service
                  provider) in the preceding 12 months. California residents can
                  find this information below:
                </p>
                <p>
                  No information has been disclosed or collected at the time of
                  this Privacy Policy. Privacy Policy is subject to change at
                  our sole discretion at any time.
                </p>
                <p>
                  The categories of sources from which we collect personal
                  information and our business and commercial purposes for using
                  personal information are set forth above.
                </p>
                <p>Additional Privacy Rights for California Residents</p>
                <p>
                  “Sales” of Personal Information under the CCPA. For purposes
                  of the CCPA, Craftly.ai does not “sell” personal information,
                  nor do we have actual knowledge of any “sale” of personal
                  information of minors under 16 years of age.
                  Non-Discrimination. California residents have the right not to
                  receive discriminatory treatment by us for the exercise of
                  their rights conferred by the CCPA.
                </p>
                <p>
                  Authorized Agent. Only you, or someone legally authorized to
                  act on your behalf, may make a verifiable consumer request
                  related to your personal information. To designate an
                  authorized agent, please contact us as set forth below.
                  Verification. When you make a request, we will ask you to
                  provide sufficient information that allows us to reasonably
                  verify you are the person about whom we collected personal
                  information or an authorized representative, which may include
                  confirming the email address associated with any personal
                  information we have about you.
                </p>
                <p>
                  If you are a California resident and would like to exercise
                  any of your rights under the CCPA, please contact us as set
                  forth below. We will process such requests in accordance with
                  applicable laws.
                </p>
                <p>
                  California Shine the Light. The California “Shine the Light”
                  law permits users who are California residents to request and
                  obtain from us once a year, free of charge, a list of the
                  third parties to whom we have disclosed their personal
                  information (if any) for their direct marketing purposes in
                  the prior calendar year, as well as the type of personal
                  information disclosed to those parties.
                </p>
                <h4>11. Supplemental Notice for Nevada Residents</h4>
                <p>
                  If you are a resident of Nevada, you have the right to opt-out
                  of the sale of certain personal information to third parties
                  who intend to license or sell that personal information. You
                  can exercise this right by contacting us as set forth below
                  with the subject line “Nevada Do Not Sell Request” and
                  providing us with your name and the email address associated
                  with your account. Please note that we do not currently sell
                  your personal information as sales are defined in Nevada
                  Revised Statutes Chapter 603A.
                </p>
                <h4>12. Children’s Information</h4>
                <p>
                  The Services are not directed to children under 13 (or other
                  age as required by local law), and we do not knowingly collect
                  personal information from children. If you learn that your
                  child has provided us with personal information without your
                  consent, you may contact us as set forth below. If we learn
                  that we have collected a child’s personal information in
                  violation of applicable law, we will promptly take steps to
                  delete such information.
                </p>
                <h4>13. Third-party Websites/Applications</h4>
                <p>
                  The Services may contain links to other websites/applications
                  and other websites/applications may reference or link to our
                  Services. These third-party services are not controlled by us.
                  We encourage our users to read the privacy policies of each
                  website and application with which they interact. We do not
                  endorse, screen or approve, and are not responsible for, the
                  privacy practices or content of such other websites or
                  applications. Providing personal information to third-party
                  websites or applications is at your own risk.
                </p>
                <h4>14. Supervisory Authority</h4>
                <p>
                  If you are located in the European Economic Area, Switzerland,
                  the United Kingdom or Brazil, you have the right to lodge a
                  complaint with a supervisory authority if you believe our
                  processing of your personal information violates applicable
                  law.
                </p>
                <h4>15. Contact Us</h4>
                <p>
                  Craftly.ai is the controller of your personal information. If
                  you have any questions about our privacy practices or this
                  Privacy Notice, or to exercise your rights as detailed in this
                  Privacy Notice, please contact us at:{" "}
                  <a href="mailto:hello@craftly.ai">hello@craftly.ai</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  )
}

export default PrivacyPolicy
