import React from 'react'
import "./css/Guest.css"
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='thanks'>
      <Link to="/">{<img src='https://thumbs.dreamstime.com/z/thank-you-your-purchase-vector-typography-banner-poster-invitation-greeting-postcard-design-online-store-brush-calligraphy-131464319.jpg'></img>}
      </Link>
    </div>
  )
}

export default Thanks