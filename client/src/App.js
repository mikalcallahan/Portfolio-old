import React, { Component } from 'react'
import Header from 'components/Header'
import Navigation from 'components/Navigation'
import Footer from 'components/Footer'
import 'styles/app.scss'

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Header />
        <Navigation />
        <Footer />
      </div>
    )
  }
}

export default App
