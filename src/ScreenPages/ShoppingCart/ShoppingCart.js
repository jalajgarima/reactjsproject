import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './shoppingcart.css'

const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext)
  //   console.log(cart)
  const totalprice = cart.reduce((acc, curr) => acc + curr.price, 0)

  const removeHandler = (id) => {
    setCart(() => cart.filter((item) => item.id !== id))
  }

  return (
    <Container>
      <h2 style={{ color: 'blue', textDecoration: 'underline' }}>
        Shopping Cart
      </h2>

      {totalprice === 0 ? (
        ''
      ) : (
        <div>
          <h3 style={{ fontWeight: 'bold', color: 'orange' }}>
            Total: AUD {totalprice} Inc GST
          </h3>
        </div>
      )}
      <br />
      {totalprice === 0 ? (
        <Link to="/projects/paintingstore">
          <h3 style={{ color: 'orange' }}>
            Empty Cart Click Here To Go To Shop
          </h3>
        </Link>
      ) : (
        cart.map((item) => (
          <Row className="itemdisplay mr-auto" key={item.id}>
            <Col>
              <img
                src={item.img}
                style={{ width: '15%', height: 'auto' }}
                alt="Painting"
              ></img>
            </Col>
            <Col>
              <span>Price: AUD {item.price} Inc GST</span>

              <span style={{ color: 'red', paddingLeft: '15px' }}>
                <i
                  className="fas fa-times"
                  onClick={() => removeHandler(item.id)}
                ></i>
              </span>
            </Col>
          </Row>
        ))
      )}
    </Container>
  )
}

export default ShoppingCart
