import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header/Header'
import Routes from './../Routes/Routes'

import 'normalize.css'
import './../../base.css'
import styles from './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <div className={styles.container}>
            <Routes />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
