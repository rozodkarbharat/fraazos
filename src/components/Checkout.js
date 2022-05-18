import React from 'react'
import { useEffect,useState } from 'react';
import Footer from './Footer'
import Navbar from './Navbar';
import './css/checkout.css'


export const Cartdaata = ({item,remove}) =>{
    
   
    return(
      <div className='pop-cart'>
      <div className='left-s'>
      <img src={item.image} alt="" />
      <div className='left-s-info'>
            <h5>{item.name}</h5>
            <p>{item.quantity}</p>
            <div className='prices'>
            <h5>₹{Number(item.price)}</h5>
                            <del>₹{Number(item?.delprice) || Number(item.price) + 10}</del>
            </div>
      </div>
      </div>

      </div>
    )
  }



function Checkout() {
    var compare = JSON.parse(localStorage.getItem("cartitms")) || []
console.log(compare);

var Total = compare?.reduce(function(acc,cv){
    return acc + Number(cv.price)
   },0)
    return (
        <div>
            <Navbar />

            <div className='checkout-header'>
                <img className="head-img" onClick={e => window.location.href = "/myaccount/checkout"}src='https://cdn-icons-png.flaticon.com/128/1170/1170678.png'/>
                <img className="head-img" onClick={e => window.location.href = "/myaccount/address"} src='https://cdn-icons.flaticon.com/png/128/2838/premium/2838912.png?token=exp=1652000121~hmac=40eb5a9a7464343685e9f5db08e7351c' />
                <img className="head-img" onClick={e => window.location.href = "/myaccount/delivery"} src='https://cdn-icons.flaticon.com/png/128/2278/premium/2278049.png?token=exp=1652000154~hmac=f33b0cebf604e818eddae0d5c08e41dd' />
                <img className="head-img" onClick={e => window.location.href = "/myaccount/pay"} src='https://cdn-icons-png.flaticon.com/128/2527/2527857.png' />
            </div>
            <div className='main-checkout-div'>
                <div className='items-div'>
                    <h4>Cart-Items:</h4>
                    <div className='check-cart'>
                    {compare?.map(item =>{
  return(
   <Cartdaata item={item} />
  )
})}
                    </div>
                </div>
                <div className='price-div'>
                    <div className='coupon'>
                        <img src='data:image/png;base64,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' />
                        <h4>Apply Coupon/Referral </h4>
                    </div>
                    <div className='bill-details'>
                        <h4>Bill Details</h4>
                        <div>
                        <p>Total Item Price</p>
                        <h4>₹{Total}</h4>

                        </div>
                        <div>
                        <p>Price Savings</p>
<p>₹ 50</p>
                        </div>
                        <hr></hr>
                        <div>
                        <p>Cart Amount</p>
                        <p>₹{Total}</p>

                        </div>
                        <div>
                        <p>Delivery Charges</p>
                        <p>₹ 50</p>

                        </div>
                        <hr></hr>
                        <div>
                        <p>To Pay</p>
                        <h4>₹ {Total}</h4>

                        </div>
                        <div className='total_btn' onClick={e => window.location.href = "/myaccount/address"}>
                            <p>Total</p>
                            <p >SELECT ADDRESS</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Checkout