import React, { useEffect, useState } from 'react'
import "./css/Navbar.css"
import "./css/App.css"

export const Addbutton=({item,carts})=>{
  const [add,setAdd] = useState("ADD")
  var compare = JSON.parse(localStorage.getItem("cartitms")) || []

  useEffect(()=>{
      const tofind = compare.find((x) => x.image === item.image)
      console.log(tofind)
      if(!tofind){
        setAdd("ADD")
      }else{
        setAdd("ADDED")
      }
  },[carts])
  
  
  const AddtoCart = (item) =>{
    var arr = JSON.parse(localStorage.getItem("cartitms")) || []
    const obj = {
      ...item,
      count: 1
    }
    arr.push(obj)
    localStorage.setItem("cartitms",JSON.stringify(arr))
    setAdd("ADDED")
    
    
  }


return(
      <div className='ccard' key={item.image}>
                          <img src={item.image} alt="" className='imgg'/>
                          <p>{item.name}</p>
                           <p>{item.quantity}</p>
                          <div className='card-detail'>
                            <div className='card-detail-left'>
                            <h5>₹{Number(item.price)}</h5>
                            <del>₹{Number(item?.delprice) || Number(item.price) + 10}</del>
                            </div>
                            <div className='card-detail-right'>
                                  <button onClick={()=>AddtoCart(item)}>{add}</button>
                            </div>
                          </div>    
               </div>
)
}

function Row({title,name,carts}) {

  return (
    <div className="row">
    <h2>{name}</h2>
    <hr />
    <div className="row-posters">
    {title.map((item,index) =>{
             return(
                <Addbutton key={index}  item={item} carts={carts}/>
             )
           })}
      </div>
  </div>
  )
}

export default Row