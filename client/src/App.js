import React, { Component } from 'react'
import Navigation from 'components/Navigation'
import PreFooter from 'components/PreFooter'
import Footer from 'components/Footer'
import 'styles/app.scss'

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Navigation />
        <PreFooter />
        <Footer />
      </div>
    )
  }
}

export default App
