import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Credit.Module.css"

export const MyOrders = () => {
  const navigate=useNavigate()
  return (
    <div className='order-main'>
        <div className='order-a'>
          Your Orders
        </div>
        <div className='order-b'>
            <div >
                <img className='order-c' src="https://fraazo.com/static/empty-cart-1468d71b9bd1d91401f28d1734cae373.svg" alt="" />
            </div>
            <div>
                <h3>No Orders Found!</h3>
                <h4>Let's Add Some Items!</h4>
                <div>
                    <button className='order-button' navigate="/">START SHOPPING</button>
                </div>
            </div>
        </div>
    </div>
  )
}

