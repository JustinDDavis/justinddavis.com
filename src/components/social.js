import React from "react"
import { Link } from "gatsby"

import { FaLinkedin, FaTwitterSquare, FaGithub }  from "react-icons/fa"  

import { Card, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';

const SocialSection = () => (
    <div>
        <a href="https://www.linkedin.com/in/justindd/" style={{ textDecoration: 'none', color: '#212529' }}>
            <FaLinkedin size="3em" /> 
        </a>
        <a href="https://twitter.com/JustinDavisKS" style={{ textDecoration: 'none', color: '#212529' }}>
            <FaTwitterSquare size="3em" />
        </a>
        <a href="https://github.com/JustinDDavis" style={{ textDecoration: 'none', color: '#212529' }}>
            <FaGithub size="3em" />
        </a>
    </div>
)

export default SocialSection
