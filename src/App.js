import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './ScreenPages/HomePage'
import ToDoList from './ScreenPages/ToDoList'
import Contact from './ScreenPages/Contact'
import NotFound from './ScreenPages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="App py-3">
        <Switch>
          <Route path="/projects/todolist" to component={ToDoList} exact />
          <Route path="/contact" to component={Contact} exact />
          <Route path="/" to component={HomePage} exact />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
