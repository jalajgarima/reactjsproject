import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { CartContext } from '../../CartContext/CartContext'
import './shoppingcart.css'

const Cardstyle = ({ id, img, price }) => {
  const [cart, setCart] = useContext(CartContext)

  const addToCart = ({ img, id, price }) => {
    const cartItem = { img: img, id: uuidv4(), price: price }
    /* console.log(cartItem) */
    setCart((prevState) => [...prevState, cartItem])
  }

  return (
    <Card className="my-1">
      <Card.Img
        style={{ width: 'auto', height: '350px' }}
        variant="top"
        src={img}
        alt="Painting"
      />
      <Card.Body as="div" className="carditem">
        <Card.Text style={{ fontWeight: 'bold' }} as="h3">
          ${price}
        </Card.Text>
        <Button onClick={() => addToCart({ img, id, price })} variant="primary">
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Cardstyle
