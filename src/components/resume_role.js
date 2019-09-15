import React from "react"

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem } from 'reactstrap';

const ResumeRoleSection = (props) => (
    <div>

        <Card>
            <CardBody>
                <Row>
                    <Col>
                        <CardTitle>{props.roleTitle}</CardTitle>
                        <CardSubtitle>{props.rolePeriod}</CardSubtitle>
                    </Col>
                    <Col className="text-right">
                        <h5>{props.companyName}</h5>
                    </Col>
                </Row>
                
                <br/>
                <ListGroup flush>
                    {
                        props.description.map(element=>{
                            return <ListGroupItem><p>{element}</p></ListGroupItem>
                        })
                    }
                </ListGroup>
            </CardBody>
        </Card>
        <br/>

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
