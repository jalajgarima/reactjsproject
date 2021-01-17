import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './ScreenPages/HomePage'
import ToDoList from './ScreenPages/ToDoList/ToDoList'
import Contact from './ScreenPages/Contact'
import WordLearning from './ScreenPages/WordLearning/WordLearning'
import DrivingDistance from './ScreenPages/DrivingDistance/DrivingDistance'
import Paintings from './ScreenPages/ShoppingCart/Paintings'
import ShoppingCart from './ScreenPages/ShoppingCart/ShoppingCart'
import { CartProvider } from './CartContext/CartContext'
import NotFound from './ScreenPages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main className="App py-3">
          <Switch>
            <Route
              path="/projects/wordlearning"
              to
              component={WordLearning}
              exact
            />
            <Route path="/projects/todolist" to component={ToDoList} exact />
            <Route
              path="/projects/drivingdistance"
              to
              component={DrivingDistance}
              exact
            />

            <Route
              path="/projects/paintingstore"
              to
              component={Paintings}
              exact
            />
            <Route path="/shoppingcart" to component={ShoppingCart} exact />

            <Route path="/contact" to component={Contact} exact />
            <Route path="/" to component={HomePage} exact />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
