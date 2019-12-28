import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import JustinImage from "../components/justin_headshot"

import { Container, Row, Col } from 'reactstrap';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `cadetblue`,
      }}
  >
    <Container style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0px 1.0875rem 1.45rem`,
      paddingTop: 0,
    }}>
    <Row>

      <Col>
        <div>
          <h1 style={{ marginTop: 50 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </Col>
      <Col>
        <div
          style={{
            maxWidth: 400
          }}>
          <JustinImage />
        </div>
    </Col>
    </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
