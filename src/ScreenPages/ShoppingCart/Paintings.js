import React from 'react'
import Cardstyle from './Cardstyle'
import { PaintingImages } from './PaintingImages'
import { Container, Row, Col } from 'react-bootstrap'

const Paintings = () => {
  return (
    <Container>
      <h3>ColoursbyDJ</h3>

      <Row>
        {PaintingImages.map((paintingimage) => (
          <Col key={paintingimage.id} sm={12} md={6} lg={4}>
            <Cardstyle
              id={paintingimage.id}
              img={paintingimage.painting}
              price={paintingimage.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Paintings
