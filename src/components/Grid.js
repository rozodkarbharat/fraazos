import React, { useState, useEffect } from 'react'
import "./css/grid.css"

export const Addgrid = ({ item }) => {
  const [add, setAdd] = useState("ADD")


  var arr = JSON.parse(localStorage.getItem("cartitms")) || []

  var tocompare = JSON.parse(localStorage.getItem("cartitms"))

  const AddtoCart = (item) => {
    arr.push(item)
    localStorage.setItem("cartitms", JSON.stringify(arr))
    console.log(arr)
    setAdd("ADDED")
  }

  useEffect(() => {
    const tofind = tocompare.find((x) => x.image === item.image)
    console.log(tofind)
    if (!tofind) {
      setAdd("ADD")
    } else {
      setAdd("ADDED")
    }
  })

  return (
    <div className='g-ccard' key={item.image}>
      <img src={item.image} alt="" className='g-imgg' />
      <p>{item.name}</p>
      <p>{item.quantity}</p>
      <div className='g-card-detail'>
        <div className='g-card-detail-left'>
          <h5>₹{Number(item.price)}</h5>
          <del>₹{Number(item?.delprice) || Number(item.price) + 10}</del>
        </div>
        <div className='g-card-detail-right'>
          <button onClick={() => AddtoCart(item)}>{add}</button>
        </div>
      </div>
    </div>
  )
}


function Grid({ name, title }) {

  return (
    <div className="grid">
      <h2>{name}</h2>
      <hr />
      <div className="grid-posters">
        {title.map(item => {
          return (
            <Addgrid item={item} />
          )
        })}
      </div>
    </div>
  )
}

export default Grid