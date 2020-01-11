import React, { useState, Component } from "react"

import ResumeRole from "../components/resume_role"
import { FaUserTie, FaGlassWhiskey } from 'react-icons/fa'
import { ButtonGroup, Button, Row, Col, Tooltip } from 'reactstrap'
import { forEach } from "iterall";
// import { element } from "prop-types";

var roles= [
    {
        company_name: "INVISTA",
        role_title : "Cloud Engineer",
        role_period: "April 2019 - Present",
        things_i_did: [
            'Engineer solutions to utilize AWS services driven by internal customer needs.',
            'Survey services to identify cost or performance opportunities within environments.',
            'Build integrations with stand-alone systems to streamline business-processes.'
        ],
        joe_things_i_did: [
            'Built EC2 instances from catalog and custom AMIs',
            'Worked in efforts to migrate on-premise servers into AWS',
            'Perform service reviews of new offerings from AWS, build POVs and experiment with use-cases',
            'Tools: Python, Boto3, Git, GitLab, CI/CD Processes, AWS SAM, AWS CLI',
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
        ],
        joe_things_i_did: [
            'Worked in ServiceNow Agile Development Module',
            'Assist in grooming of Scrum/Kanban Backlogs',
            'Status reports for multiple business owners (>4 Owners)',
            'Supported highly sensitive data applications',
            'Train business users on use-cases with SharePoint and other collaboration tools',
            'Technologies Supported: MS SharePoint 2010, MSSQL Databases, ServiceNow, and Team Foundation Server'
        ]
        
    },
    {
        company_name: "INVISTA",
        role_title : "Application Support Analyst", 
        role_period: "December 2017 - May 2018",
        things_i_did: [
            'Assist in divestiture project for INVISTA.',
            'Move custom processes and collaboration environment into AWS instances.'
        ],
        joe_things_i_did: [
            'Out of the Box SharePoint 2010 Support',
            'SharePoint 2010 Custom Application Support',
            'Worked in a large-scale project with a divestiture of segment of company',
            'Train business users on use-cases with SharePoint and other collaboration tools'
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
        ],
        joe_things_i_did: [
            'Train business users on use-cases with SharePoint and other collaboration tools'
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
        ],
        joe_things_i_did: [
            'Assist with referring people to different state entites and non-profits for their potential small-businesses',
            'Populate a state-wide calendar with business events entreprenurs could attend to broaden networking opportunies'
        ]
    }
];

const ResumeSection = () => {
    const [rSelected, setRSelected] = useState(null);

    const [tooltipOpenPro, setTooltipOpenPro] = useState(false);
    const [tooltipOpenJoe, setTooltipOpenJoe] = useState(false);

    const togglePro = () => setTooltipOpenPro(!tooltipOpenPro);
    const toggleJoe = () => setTooltipOpenJoe(!tooltipOpenJoe);

    
    return (
    <div>
        <Row>
            <Col md="3">
                <h2>Resume</h2>
            </Col>
            <Col md="9" className="text-right">
                <ButtonGroup>
                    <Button id="ProTooltip" style={{ backgroundColor: "#5F9DA0"}} onClick={() => setRSelected(1)} active={rSelected === 1}><FaUserTie style={{ color: '#212529' }}/> Pro</Button>
                    <Tooltip placement="top" isOpen={tooltipOpenPro} target="ProTooltip" toggle={togglePro}>
                        Your vague high-level typical resume descriptions
                    </Tooltip>
                    <Button id="JoeTooltip" style={{ backgroundColor: "#5F9DA0"}} onClick={() => setRSelected(2)} active={rSelected === 2}><FaGlassWhiskey style={{ color: '#212529' }} /> Joe</Button>
                    <Tooltip placement="top" isOpen={tooltipOpenJoe} target="JoeTooltip" toggle={toggleJoe}>
                        Real English explainations of what I did
                    </Tooltip>
                </ButtonGroup>
            </Col>
        </Row>
        
        {roles.map(element => {
            if(rSelected === 2){
                return <ResumeRole companyName={element.company_name} roleTitle={element.role_title} rolePeriod={element.role_period} description={element.joe_things_i_did} />
            }else{
                return <ResumeRole companyName={element.company_name} roleTitle={element.role_title} rolePeriod={element.role_period} description={element.things_i_did} />
            }
            
        })}
        
        
        {/* <ResumeRole roleTitle="Cloud Engineer" rolePeriod="April 2019 - Present"/>
        <ResumeRole roleTitle="Application Support Analyst" rolePeriod="December 2017 - April 2019"/>
        <ResumeRole roleTitle="Intern/CO-OP" rolePeriod="September 2014 - December 2017"/> */}
    </div>)
}

export default ResumeSection
