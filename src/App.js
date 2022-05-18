import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./components/Home";
import Guest from "./components/Guest";
import Credit from "./components/Credit";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products";
import Login from "./components/login";
import Requiredauth from "./component/requiredauth";
import Checkout from "./components/Checkout";
import Address from "./components/Address";
import Delivery from "./components/Delivery";
import Pay from "./components/Pay";
import Thanks from "./components/Thanks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myaccount/orders/*' element={<Guest />} />
          <Route path='/myaccount/credits/*' element={
            <Requiredauth>
              <Credit />
            </Requiredauth>} />

          <Route path='/myaccount/cart' element={<Cart />} />
          <Route path='/myaccount/checkout' element={<Checkout />} />
          <Route path='/myaccount/address' element={<Address/>}></Route>
          <Route path='/myaccount/delivery' element={<Delivery/>}></Route>
          <Route path='/myaccount/pay' element={<Pay/>}></Route>
          <Route path='/myaccount/Thanks' element={<Thanks/>}></Route>
          <Route path='/products' element={<Products />} />
          <Route path="/login" element={<Login />} />

            

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
