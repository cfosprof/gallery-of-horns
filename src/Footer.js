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
