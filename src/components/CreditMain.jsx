import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Invite } from '../component/Invite'
import { MyCredits } from '../component/MyCredits'
import { MyOrders } from '../component/MyOrders'
// import { CreditRoutes } from '../component/Routes/creditroutes'
import { Sidelist } from '../component/Sidelist'
import { Support } from '../component/Support'


export const CreditMain = () => {
  return (
    <div>
    
        <div className='main'>
            <Sidelist/>
          <div>
                
         <Routes>
            <Route path="myorders" element={<MyOrders/>}/>
         <Route path="credit" element={<MyCredits/>}/>
         <Route path="invite" element={<Invite/>}/>
         <Route path="support" element={<Support/>}/>   
        <Route path="orders" element={<MyOrders/>} />
    </Routes>
          </div>
       
        </div>
    </div>
  )
}
