import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Resume from "../components/resume"
import Contact from "../components/contact"
import Social from "../components/social"
import SEO from "../components/seo"


import { Container, Row, Col } from 'reactstrap';

//bootstrap 
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col>
      <p>This site is all about me and the things I've been up to...</p>
      </Col>
     </Row>

   <Container>
     
     <Row>
      <Col sm="12" md="9">
        <Resume />
      </Col>
      <Col sm="12" md="3">
        <Contact />
      </Col>
     </Row>
   </Container>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
