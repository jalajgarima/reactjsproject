import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap'

import './ToDoList.css'

const ToDoList = () => {
  const [inputItem, setInputItem] = useState('')
  const [listItems, setListItems] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const addToDo = (e) => {
    e.preventDefault()
    if (inputItem.trim() === '') {
      inputRef.current.focus()
      return
    }
    setListItems([
      ...listItems,
      {
        id: uuidv4(),
        item: inputItem,
      },
    ])
    setInputItem('')
    inputRef.current.focus()
  }

  const deletehandler = (id) => {
    setListItems(listItems.filter((listItem) => listItem.id !== id))
  }

  return (
    <Container className="todocontainer">
      <div>
        <h3 className="forh3">To do List</h3>
      </div>
      <Row className="inputrow">
        <InputGroup className="p-3">
          <FormControl
            type="text"
            placeholder="Enter List Items Here"
            value={inputItem}
            ref={inputRef}
            onChange={(e) => setInputItem(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="success" type="submit" onClick={addToDo}>
              Add Item
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Row>
      <Row>
        <Col>
          {listItems.map((listItem) => {
            return (
              <div key={listItem.id} className="tododiv">
                <p>{listItem.item}</p>
                <i
                  className="fas fa-trash-alt"
                  onClick={() => deletehandler(listItem.id)}
                ></i>
              </div>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default ToDoList
