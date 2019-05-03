import React, { Component } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from 'components/Footer'
import './styles/app.scss'

function App() {
  return (
    <div id='app' className='app'>
      <Header />
      <Navigation />
      <Footer />
    </div>
  )
}

export default App
