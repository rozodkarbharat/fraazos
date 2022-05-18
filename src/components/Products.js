import React, { useState } from 'react'
import Navbar from './Navbar';
import { Accordion } from 'react-bootstrap';
import "./css/Products.css"
import { Masala, Atta, Dals, Rice, dryfruitsdata, applesdata, orangedata, grapedata, exoticfruitdata, fruitcombodata, mangodata, dailyvegetables, oniondata, rootdata, exoticvegetabledata, exoticvegcombodata, herbsdata } from "./data"
import Grid from './Grid';
import Footer from "./Footer"
import Cart from './Cart';


function Products() {
    const [product, setProduct] = useState(Masala)
    const [name, setName] = useState("Masalas")
    const [carts, setCarts] = useState(false)


    console.log(product)

    return (
        <div>
            <Navbar setCarts={setCarts} />
            <div className={carts ? "show" : "hide"}>
                <Cart setCarts={setCarts} carts={carts} />
            </div>

            <div className='product-deatils'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Mangoes</Accordion.Header>
                        <Accordion.Body>
                            <p onClick={() => {
                                setProduct(mangodata)
                                setName("Mangeos")
                            }}>Mangeos</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Fruits</Accordion.Header>
                        <Accordion.Body>
                            <p onClick={() => {
                                setProduct(applesdata)
                                setName("Apples,Pears,Plums")
                            }}>Apples,Pears,Plums</p>
                            <p onClick={() => {
                                setProduct(orangedata)
                                setName("Papaya, Pineapple,Pomegranate")
                            }}>Papaya, Pineapple,Pomegranate</p>
                            <p onClick={() => {
                                setProduct(grapedata)
                                setName("Grapes, Banana, Guaua & Sapota")
                            }}>Grapes, Banana, Guaua & Sapota</p>
                            <p onClick={() => {
                                setProduct(exoticfruitdata)
                                setName("Exotic Fruits")
                            }}>Exotic Fruits</p>
                            <p onClick={() => {
                                setProduct(fruitcombodata)
                                setName("Fruits Combos")
                            }}>Fruits Combos</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Vegetables</Accordion.Header>
                        <Accordion.Body>
                            <p onClick={() => {
                                setProduct(dailyvegetables)
                                setName("Daily Veggies")
                            }}>Daily Veggies</p>
                            <p onClick={() => {
                                setProduct(oniondata)
                                setName("Onion, Potato & Tomatoes")
                            }}>Onion, Potato & Tomatoes</p>
                            <p onClick={() => {
                                setProduct(rootdata)
                                setName("Root Vegetables")
                            }}>Root Vegetables</p>
                            <p onClick={() => {
                                setProduct(exoticvegetabledata)
                                setName("Exotic Vegetables")
                            }}>Exotic Vegetables</p>
                            <p onClick={() => {
                                setProduct(exoticvegcombodata)
                                setName("Vegetables Combos")
                            }}>Vegetables Combos</p>
                            <p onClick={() => {
                                setProduct(rootdata)
                                setName("Cuts, Peeled & Sprouts")
                            }}>Cuts, Peeled & Sprouts</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Herbs</Accordion.Header>
                        <Accordion.Body>
                            <p onClick={() => {
                                setProduct(herbsdata)
                                setName("Herbs & Leafy Products")
                            }}>Herbs & Leafy Products</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Dry Fruits</Accordion.Header>
                        <Accordion.Body>
                            <p onClick={() => {
                                setProduct(dryfruitsdata)
                                setName("Premium Quality Dry Fruits")
                            }}>Premium Quality Dry Fruits</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Kitchen Staples</Accordion.Header>
                        <Accordion.Body>
                            <p onClick={() => {
                                setProduct(Masala)
                                setName("Powder Spices & Masalas")
                            }}>Powder Spices & Masalas</p>
                            <p onClick={() => {
                                setProduct(Dals)
                                setName("Dals & Pulses")
                            }}>Dals & Pulses</p>
                            <p onClick={() => {
                                setProduct(Atta)
                                setName("Atta, Flour & Sooji")
                            }}>Atta, Flour & Sooji</p>
                            <p onClick={() => {
                                setProduct(Rice)
                                setName("Rice & Rice Products")
                            }}>Rice & Rice Products</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className='productss'>
                    <Grid title={product} name={name} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products