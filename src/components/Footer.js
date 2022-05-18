import React from 'react'
import footer1 from "../images/footer-1.png"
import footerinfo from "../images/footer-info.png"
import frazzo from "../images/rfazzo.png"

function Footer() {
  return (
    <div> 
        <img src="	https://fraazo.com/static/footerDesign-26fcca451f726500fd06e7fc02d09cb4.svg" alt="" id='footer-poster-static' className='footerimg'/>
    <div className='footer'>
       <img src={frazzo} alt="" className='frazzo'/>
       <div className='ul'>
         <h6>Useful Links</h6>
         <ul>
    <li>Privacy Policy</li>
    <li>FAQ</li>
    <li>Terms & Conditions</li>
        </ul>
       </div>
       <div className='ul'>
         <h6>Cities We Serve</h6>
         <ul>
    <li>Mumbai</li>
    <li>Hyderabad</li>
    <li>Bangalore</li>
    <li>Delhi</li>
    <li>Noida</li>
    <li>Gurugram</li>
    <li>Pune</li>
        </ul>
       </div>
       <img src={footer1} alt="" />
    </div>
    <img src={footerinfo} alt="" id='footer-poster-static' />
  </div>
  )
}

export default Footer