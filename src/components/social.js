import React from "react"

import { Card, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';

const SocialSection = () => (
    <div>
        <Card>
            <CardBody>
                <a href="https://www.linkedin.com/in/justindd/">LinkedIn</a>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <a href="https://twitter.com/JustinDavisKS">Twitter</a>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <a href="https://github.com/JustinDDavis">Github</a>
            </CardBody>
        </Card>
        <br/>
        <br/>
        <a href="mailto:himself@justinddavis.com">Email</a>
        <br/>
        (620) 249-7044 
        <br/>
        Wichita KS, U.S.A
    </div>
)

export default SocialSection
