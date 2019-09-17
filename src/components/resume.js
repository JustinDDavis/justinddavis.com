import React from "react"

import ResumeRole from "../components/resume_role"

// import { Row, Col } from 'reactstrap';
// import { element } from "prop-types";

var roles= [
    {
        company_name: "INVISTA",
        role_title : "Cloud Engineer",
        role_period: "April 2019 - Present",
        things_i_did: [
            'Developed processes to monitor and alert multi-account activity or state.',
            'Drove adoption of Voice Interfaced assistants and device onboarding.',
            'Advocated cloud technology adoption and piloted services for teams.',
            'Contributed in integration projects involving multiple business segments',
        ]
    },
    {
        company_name: "INVISTA",
        role_title : "Scrum Product Owner / Application Support Analyst Lead", 
        role_period: "May 2018 - April 2019",
        things_i_did: [
            'Connect with business leaders to develop cross-functional backlog and prioritize stories by highest-value.',
            'Collaborate with Scrum team during estimation and sprint planning.',
            'Continue providing support of other applications in our team’s portfolio.'
        ]
    },
    {
        company_name: "INVISTA",
        role_title : "Application Support Analyst", 
        role_period: "December 2017 - May 2018",
        things_i_did: [
            'Assist in divestiture project for INVISTA.',
            'Move custom processes and collaboration environment into AWS instances.'
        ]
    },
    {
        company_name: "INVISTA",
        role_title : "Intern/CO-OP", 
        role_period: "September 2014 - December 2017",
        things_i_did: [
            'Support legacy applications built within Microsoft SharePoint 2010.',
            'Assist in maintaining SharePoint environment of over 5000 separate sites.',
            'Trusted with access to high-level IP and software protecting documents.',
            'Work in ServiceNow environment with Catalog Item configurations.',
        ]
    },
    {
        company_name: "Network Kansas",
        role_title : "Referral Coordinator", 
        role_period: "August 2013 - September 2014",
        things_i_did: [
            'Assist in training partners to populate state-wide calendar of events and classes.',
            'Connect entrepreneurs to business-building resources across the state.',
            'Work with a team to contact past clients to ensure projects are moving forward.'
        ]
    }
];

const ResumeSection = () => (
    <div>
        <h2>Resume</h2>

        {roles.map(element => {
            return <ResumeRole companyName={element.company_name} roleTitle={element.role_title} rolePeriod={element.role_period} description={element.things_i_did} />
        })}
        
        {/* <ResumeRole roleTitle="Cloud Engineer" rolePeriod="April 2019 - Present"/>
        <ResumeRole roleTitle="Application Support Analyst" rolePeriod="December 2017 - April 2019"/>
        <ResumeRole roleTitle="Intern/CO-OP" rolePeriod="September 2014 - December 2017"/> */}
    </div>
)

export default ResumeSection
