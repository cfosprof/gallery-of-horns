// This template is from bootstrap
// https://react-bootstrap.github.io/components/dropdowns/
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h4>Made by Chris Foster</h4>
              <p> {new Date().getFullYear()} Chris Foster</p>
            </Col>
            <Col md={4}>
              <h4>Links</h4>
              <ul>
                <li><a href="#link1" className="text-white">Link 1</a></li>
                <li><a href="#link2" className="text-white">Link 2</a></li>
                <li><a href="#link3" className="text-white">Link 3</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h4>Connect with me</h4>
              <p>
                <a href="https://www.linkedin.com/in/cfosprof/" className="text-white" target="_blank" rel="noreferrer">LinkedIn</a> |{' '}
                <a href="https://github.com/cfosprof" className="text-white" target="_blank" rel="noreferrer">GitHub</a> |{' '}
                <a href="https://twitter.com/hobowithanapple" className="text-white" target="_blank" rel="noreferrer">Twitter</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
