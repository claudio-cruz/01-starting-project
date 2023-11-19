import React from 'react'
import '../index.css'
import logo from '../assets/investment-calculator-logo.png'

function Header() {
  return (
    <header id='header'>
        <img src={logo} alt='Logo' />
        <h1>Insvestment Calculator</h1>
    </header>
  )
}

export default Header