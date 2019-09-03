import React from "react"

import { Card, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';

const ResumeRoleSection = (props) => (
    <div>

        <Card>
            <CardBody>
                <CardTitle>{props.roleTitle}</CardTitle>
                <CardSubtitle>{props.rolePeriod}</CardSubtitle>
            </CardBody>
        </Card>


        {/* <h2>Resume</h2>
        <h2>INVISTA</h2>


        <h4>Application Support Analyst</h4>
        <ul>
        December 2017 - April 2019
        <li></li>
        </ul>

        <h4>Intern/CO-OP</h4>
        <ul>
        September 2014 - December 2017
        <li></li>
        </ul> */}

    </div>
)

export default ResumeRoleSection
