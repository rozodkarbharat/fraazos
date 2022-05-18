import React, { useState } from 'react'
import { Carousel, InputGroup, Button, FormControl } from 'react-bootstrap';
import Navbar from './Navbar';
import { bestdeal, mangeos, fruits, VEGETABLES, herbs, dryfruits, staples } from "./data"
import Row from './Row';
import "./css/App.css"
import Footer from './Footer';
import {Link} from "react-router-dom"
import Cart from './Cart';






function Home() {
 const [carts,setCarts] = useState(false)

  console.log(carts)

  return (
    <div className='home-container'>

      <Navbar setCarts={setCarts}/>
      <div className={carts ? "show" : "hide"}>
      <Cart setCarts={setCarts} carts={carts}/>
      </div>

      <div className='sliding'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2166.png?1651056728"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2312.png?1651429346"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2340.png?1651429269"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2336.png?1651429536"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2326.png?1651429409"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2395.png?1651429486"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2459.png?1651429687"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2460.png?1651429614"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className='static-img'>
          <img src="https://fraazo.com/static/Web1-cafcda6bf22c11e6bbaed467d13a0eb7.png" alt="" />
          <img src="https://fraazo.com/static/Web3-9f5a46f22ff99bcfe079257218356413.png" alt="" />
          <img src="https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png" alt="" />
        </div>
      </div>

      <Row title={bestdeal} name="BESTDEALS" carts={carts}/>

      <Link to="/products#pagetop">
      <div className='fic-images'>
   <img src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/298.png?1647330831" alt="" />
        <img src="https://fraazo-master.s3.ap-south-1.amazonaws.com/webban/Fruits.png" alt="" />
        <img src="https://fraazo-master.s3.ap-south-1.amazonaws.com/webban/Vegetables.png" alt="" />
        <img src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/1.png?1619161151" alt="" />
        <img src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/199.png?1635058415" alt="" />
        <img src="https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/201.png?1635224001" alt="" />
      </div>
        </Link>

      <Row title={mangeos} name="MANGOES" />
      <Row title={fruits} name="FRUITS" />
      <Row title={VEGETABLES} name="VEGETABLES" />
      <Row title={herbs} name="HERBS" />
      <Row title={dryfruits} name="CASHEWS" />
      <Row title={staples} name="HERBS" />


      <div className='download-app'>
        <div className='download-img'>
          <img src="https://fraazo.com/static/app-screen-95bf468762091341a8e4bb213eeda2f8.png" alt="ioje" />
        </div>
        <div className='download-form'>
          <h2>Download The App</h2>
          <h5>Enter your phone number to recieve a text with a link to download the app</h5>
          <div className='bbb'>

            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                + 91
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder='Enter Mobile Number'
              />
            </InputGroup>
          </div>
          <button id='button'>SUBMIT</button>
          <div className='available'>
            Available on
            <img src="https://www.edsys.in/wp-content/uploads/Play-Store-Logo-2.png" alt="" />
            <img src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png" alt="" />
          </div>
        </div>

      </div>

    <Footer/>

    </div>
  )
}

export default Home


