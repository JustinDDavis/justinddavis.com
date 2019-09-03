import React from "react"

import ResumeRole from "../components/resume_role"

import { Row, Col } from 'reactstrap';

const ResumeSection = () => (
    <div>
        <h2>Resume</h2>
        <h2>INVISTA</h2>

        <ResumeRole roleTitle="Cloud Engineer" rolePeriod="April 2019 - Present"/>
        <ResumeRole roleTitle="Application Support Analyst" rolePeriod="December 2017 - April 2019"/>
        <ResumeRole roleTitle="Intern/CO-OP" rolePeriod="September 2014 - December 2017"/>
    </div>
)

export default ResumeSection
