import React, { useEffect, useState } from 'react'
import "./css/Guest.css"
import cartImage from "../images/cart-img.png";
import { Link } from 'react-router-dom';
// import formatCurrency from './util';
// import Footer from './Footer'
// import Navbar from './Navbar'

export const Cartdaata = ({item,remove}) =>{
  var [count,setCount] = useState(item?.count)
  
  const pluss =()=>{
    setCount(count-1)      
  }
  const minuss =()=>{
    setCount(count+1)      
 }
 
  
  console.log(count)
 
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
    <div className='right-s'>
      <a href="#" onClick={()=>remove(item)}>Remove</a>
       <div className='counting'>
       <i class="fas fa-minus" onClick={()=>pluss(item)}></i>
       <p>{count}</p>
       <i class="fas fa-plus" onClick={()=>minuss(item)}></i>
       </div>
    </div>
    
    </div>
  )
}


function Cart({setCarts,carts}) {
 var [count,setCount] = useState(0)
 var [popitems,setPopitems] = useState([])

 
 var Total = popitems?.reduce(function(acc,cv){
   return acc + Number(cv.price)
  },0)
  
  useEffect(()=>{
    setPopitems(JSON.parse(localStorage.getItem("cartitms"))) 
  },[carts])
  
  const removecart = (item) =>{
    localStorage.setItem("cartitms", JSON.stringify(popitems.filter((x) => x.image !== item.image))
    );
    setPopitems(JSON.parse(localStorage.getItem("cartitms")))

}

  return (
    <div className='cart-container'>
        <div className='cart-data'>
        <div className='top-div'>
        <h4>My Cart (<b> {popitems?.length} items </b>)</h4>
        <i class="fas fa-window-close" onClick={()=>setCarts(false)}></i>
        </div>
        <div className='cart-div'>
          {!popitems || popitems?.length===0 && (
            <div className='cartimgg'>
            <img src={cartImage} alt=""/>
            </div>
          ) }
{popitems?.map((item,index )=>{
  return(
   <Cartdaata key={index} item={item} remove={removecart}/>
  )
})}
        </div>
        <div className='last-div'>
          <div className='popitems-price'>
          <p>{popitems?.length} items</p>
          <h5>Total: ₹ {Total}</h5>
          </div>
          <Link to={{pathname: "/myaccount/checkout"}}><button className='last-div-button'>CHECKOUT</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Cart