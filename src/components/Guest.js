import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import "./css/Guest.css"
import { CreditMain } from './CreditMain'


function Guest() {
  
  return (
    <div>
      <Navbar/>
     <CreditMain/>
      <Footer/>
    </div>
  )
}

export default Guest