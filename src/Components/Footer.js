import React from 'react'

import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div
      className="bg-primary text-white"
      style={{
        position: 'fixed',
        left: '0',
        bottom: '0',

        width: '100%',
      }}
    >
      <Container>
        <Row className="py-3">
          <Col md={3}>Col 1-1</Col>
          <Col md={3}>Col 1-2</Col>
          <Col md={3}>Col 1-3</Col>
          <Col md={3}>Col 1-4</Col>
        </Row>
      </Container>
      <Row className="bg-dark text-white">
        <Col className="py-3 text-center">Copyright &copy; BaseStyle</Col>
      </Row>
    </div>
  )
}

export default Footer
