import React from 'react'
import './wordlearning.css'

import { Container, Row, Form, Button, Col } from 'react-bootstrap'

const Worddisplay = ({
  word,
  wordInput,
  disabled,
  setWordInput,
  startClicked,
  animateTimer,
  inputRef,
  onKeyPressEventHendler,
  time,
}) => {
  return (
    <Container>
      <Row className="bg-primary py-2 justify-content-center text-white">
        <h6>{word}</h6>
      </Row>
      <Row className="timerdisplay bg-info p-2 justify-content-center text-white">
        <div className="circle justify-content-center border-primary">
          <h1
            className="center py-2"
            style={{ animation: animateTimer !== null ? animateTimer : '' }}
          >
            {time}
          </h1>
        </div>
      </Row>
      <Row className="bg-primary p-2">
        <Col xs={8}>
          <Form.Control
            type="text"
            placeholder={disabled ? ' ' : 'Start Typing... Press Enter'}
            className="bg-primary text-white"
            value={wordInput}
            disabled={disabled}
            ref={inputRef}
            onKeyPress={(e) => onKeyPressEventHendler(e)}
            onChange={(e) => setWordInput(e.target.value)}
          />
        </Col>
        <Col xs={4} className="btnclass">
          <Button className="ml-auto bg-success" onClick={startClicked}>
            {disabled ? 'Start' : 'Reset'}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Worddisplay
