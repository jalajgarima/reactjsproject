/* eslint-disable no-unreachable */
import React from 'react'
import './wordlearning.css'
import { Container, Row, Col } from 'react-bootstrap'

const ResultDisplay = ({ correctCount, correctResult, inCorretResult }) => {
  return (
    <Container className="ml-auto">
      <Row className="bg-primary py-2 text-white justify-content-center">
        <h5>Correct Count = {correctCount}</h5>
      </Row>
      <Row className="resultdisplay bg-info p-2">
        <Col className="text-success">
          {/* <Row className="text-success justify-content-center"> */}
          <h5>
            <i className="fas fa-check"></i>
          </h5>
          {/* </Row> */}
          <div className="text-white justify-content-center">
            {correctResult.map((correctWord, index) => {
              // console.log('Error1')
              return (
                <div key={index}>
                  {/* style={{ listStyleType: 'none' }} */}
                  {correctWord}
                </div>
              )
            })}
          </div>
        </Col>
        <Col className="text-danger">
          <h5>
            <i className="fas fa-times"></i>
          </h5>
          <div>
            {inCorretResult.map((inCorrectWord, index) => {
              // console.log('Error2')
              return (
                <div key={index} className="text-white justify-content-center">
                  {inCorrectWord}
                </div>
              )
            })}
          </div>
        </Col>
      </Row>
      <Row className="bg-primary py-2 text-warning justify-content-center">
        <h5>Thanks For Trying Out!</h5>
      </Row>
    </Container>
  )
}

export default ResultDisplay
