import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar';
import './css/checkout.css'

function Address() {

    return (
        <div>
            <Navbar />

            <div className='checkout-header'>
                <img className="head-img" onClick={e => window.location.href = "/myaccount/checkout"} src='https://cdn-icons-png.flaticon.com/128/1170/1170678.png' />
                <img className="head-img" onClick={e => window.location.href = "/myaccount/address"} src='https://cdn-icons.flaticon.com/png/128/2838/premium/2838912.png?token=exp=1652000121~hmac=40eb5a9a7464343685e9f5db08e7351c' />
                <img className="head-img" onClick={e => window.location.href = "/myaccount/delivery"} src='https://cdn-icons.flaticon.com/png/128/2278/premium/2278049.png?token=exp=1652000154~hmac=f33b0cebf604e818eddae0d5c08e41dd' />
                <img className="head-img" onClick={e => window.location.href = "/myaccount/pay"} src='https://cdn-icons-png.flaticon.com/128/2527/2527857.png' />
            </div>
            <div className='main-checkout-div'>
                <div className='address-div'>
                    <h4>Address</h4>
                    <div className='detail'>
                        <p><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjI1IDEwQzE5LjI1IDEyLjE5NzUgMTcuNTExNiAxNC4yNTA4IDE1LjUzMDIgMTUuODQzMkMxNC41NjYyIDE2LjYxOCAxMy41OTgyIDE3LjI0MDggMTIuODY5MSAxNy42NzA2QzEyLjUwOTMgMTcuODgyOCAxMi4yMDk2IDE4LjA0NjcgMTIuMDAwMSAxOC4xNTc1QzExLjc5MDYgMTguMDQ2NiAxMS40OTA5IDE3Ljg4MjYgMTEuMTMxIDE3LjY3MDNDMTAuNDAxOSAxNy4yNDAzIDkuNDMzOSAxNi42MTczIDguNDY5OTIgMTUuODQyNEM2LjQ4ODQyIDE0LjI0OTUgNC43NTAwMyAxMi4xOTYyIDQuNzUgMTBDNC43NDk5NSA1Ljk5NTk1IDcuOTk1OTMgMi43NSAxMiAyLjc1QzE2LjAwNDEgMi43NSAxOS4yNSA1Ljk5NTk0IDE5LjI1IDEwWiIgZmlsbD0iIzVEQzZBRCIgc3Ryb2tlPSIjNURDNkFEIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8bGluZSB4MT0iNi43NSIgeTE9IjIxLjI1IiB4Mj0iMTcuMjUiIHkyPSIyMS4yNSIgc3Ryb2tlPSIjNURDNkFEIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" />Delivering to:</p>
                        <h5>Home-q a</h5>
                    </div>

                    <div className='address'>
                        <div className='add_detail'>
                            <p><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC42Ij4KPHBhdGggZD0iTTIuNTU1NTYgOEgxTDggMUwxNSA4SDEzLjQ0NDQiIHN0cm9rZT0iIzI4MkMzRiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMi41NTQ2OSA4VjEzLjQ0NDRDMi41NTQ2OSAxMy44NTcgMi43MTg1OCAxNC4yNTI3IDMuMDEwMyAxNC41NDQ0QzMuMzAyMDIgMTQuODM2MSAzLjY5NzY4IDE1IDQuMTEwMjQgMTVIMTEuODg4QzEyLjMwMDYgMTUgMTIuNjk2MiAxNC44MzYxIDEyLjk4OCAxNC41NDQ0QzEzLjI3OTcgMTQuMjUyNyAxMy40NDM2IDEzLjg1NyAxMy40NDM2IDEzLjQ0NDRWOCIgc3Ryb2tlPSIjMjgyQzNGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01LjY2NjAyIDE1LjAwMDFWMTAuMzMzNEM1LjY2NjAyIDkuOTIwODMgNS44Mjk5IDkuNTI1MTcgNi4xMjE2MyA5LjIzMzQ0QzYuNDEzMzUgOC45NDE3MiA2LjgwOTAxIDguNzc3ODMgNy4yMjE1NyA4Ljc3NzgzSDguNzc3MTNDOS4xODk2OSA4Ljc3NzgzIDkuNTg1MzUgOC45NDE3MiA5Ljg3NzA3IDkuMjMzNDRDMTAuMTY4OCA5LjUyNTE3IDEwLjMzMjcgOS45MjA4MyAxMC4zMzI3IDEwLjMzMzRWMTUuMDAwMSIgc3Ryb2tlPSIjMjgyQzNGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9zdmc+Cg==" />Home</p>
                            <div className='detail'>
                                <h5>Flat Detail:</h5>
                                <p>a</p>
                            </div>
                            <div className='detail'>
                                <h5>Address:</h5>
                                <p>G Wing, Tex Center, HDFC Bank Compound, 400072, Yadav Nagar, Chandivali, Powai,</p>
                            </div>
                            <div className='detail'>
                                <h5>Building:</h5>
                                <p>2</p>
                            </div>
                            <div className='detail'>
                                <h5>How To Reach:</h5>
                                <p>q</p>
                            </div>
                            <div className='detail'>
                                <h5>Pincode:</h5>
                                <p>400072</p>
                            </div>
                            <div className='detail'>
                                <h5>City:</h5>
                                <p>Mumbai</p>
                            </div>
                        </div>
                        <div className='add_new'>
                            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDI0LjM3NUMyMy44NjQgMjQuMzc1IDI1LjM3NSAyMi44NjQgMjUuMzc1IDIxQzI1LjM3NSAxOS4xMzYgMjMuODY0IDE3LjYyNSAyMiAxNy42MjVDMjAuMTM2IDE3LjYyNSAxOC42MjUgMTkuMTM2IDE4LjYyNSAyMUMxOC42MjUgMjIuODY0IDIwLjEzNiAyNC4zNzUgMjIgMjQuMzc1WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjguMzY0MSAyNy4zNjM4TDIzLjU5MDcgMzIuMTM3MkMyMy4xNjg5IDMyLjU1ODYgMjIuNTk2OSAzMi43OTU0IDIyLjAwMDYgMzIuNzk1NEMyMS40MDQyIDMyLjc5NTQgMjAuODMyMyAzMi41NTg2IDIwLjQxMDQgMzIuMTM3MkwxNS42MzU5IDI3LjM2MzhDMTQuMzc3MyAyNi4xMDUxIDEzLjUyMDEgMjQuNTAxNSAxMy4xNzI5IDIyLjc1NTZDMTIuODI1NyAyMS4wMDk4IDEzLjAwMzkgMTkuMjAwMiAxMy42ODUxIDE3LjU1NTdDMTQuMzY2MyAxNS45MTEyIDE1LjUxOTkgMTQuNTA1NyAxNi45OTk5IDEzLjUxNjdDMTguNDggMTIuNTI3OCAyMC4yMiAxMiAyMiAxMkMyMy43OCAxMiAyNS41MjAxIDEyLjUyNzggMjcuMDAwMSAxMy41MTY3QzI4LjQ4MDEgMTQuNTA1NyAyOS42MzM3IDE1LjkxMTIgMzAuMzE0OSAxNy41NTU3QzMwLjk5NjEgMTkuMjAwMiAzMS4xNzQzIDIxLjAwOTggMzAuODI3MSAyMi43NTU2QzMwLjQ3OTkgMjQuNTAxNSAyOS42MjI3IDI2LjEwNTEgMjguMzY0MSAyNy4zNjM4VjI3LjM2MzhaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMC4wMjk0IDIuNTg5NzFDMjcuNTU1OCAxLjU2NTMyIDI0Ljg0MzkgMSAyMiAxQzEwLjQwMiAxIDEgMTAuNDAyIDEgMjJDMSAzMy41OTggMTAuNDAyIDQzIDIyIDQzQzMzLjU5OCA0MyA0MyAzMy41OTggNDMgMjJDNDMgMTkuODUwNSA0Mi42NzcgMTcuNzc2MyA0Mi4wNzcgMTUuODIzNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIgOUg0MiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzcgNFYxNCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K' />
                            <h5>Add New Address</h5>
                        </div>
                    </div>
                </div>
                <div className='price-div'>
                    {/* <div className='coupon'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABGCAYAAACaGVmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAj9SURBVHgB1VxddtM6EB45OffwciGsgLACygoIK6B3BU1f76U/rKDtCtpS7n1tuwLKClpWQLoCwgowfa41d2Zsp7Isx5IdO+U7B9L4R5LHo9HMN6MoWBNwfzQCrfcA1QQBNujQiP7FSsFcg/oaRXCiTuI5rAEK1gDcfbqHqA4hFUQlVIQn9N8RCSeGHtG7UHDn6TmCmgbcMlcD9bZPrelNKDJdEvxMU2UC4ehVMBGsEPTg44rjI0zwxiGQmKbRET3wy+jsl6LP5wrUNtsV67ox3X+9rH1YIVppCg1mojVsRoDvEGFsnIqp4Rl/aqVu6fyWdZ5R+fb5IfU9GVqFW9apGJU6jVC/AKXEOJf7xSsYRF+o3StoiEZCkTeD+gC12odmuCWBbNZNh+T96JAEcwBNoGCmIvVXkykXLBRWYVJlfguvoBlYIBPfFaWVYFgbExLMf/Es5KZgm1IjkKUPSvbjMkQgjMGn+JDtTs1lVe2NcVBti6oQpCnkXxxk/oWJuUK1DUNS1+xhZRD3NNcVjDX9ixBekO25Hfwbn0BD4PvRJrX3jtr7Re3NAEkQaZ9z45qJBpjatoge8kad/Xrr2ZW/UFIPFL+Zho1uJqNGq0XPzlUdXFOOXtxb9Sm+8bnff/oksGlZ+jkJ5MNjEwiDpxxrR+Gg0lu+93sLRWPRx6Cl8cu6YhMvWHaIvOgJeMJbKBSHFIxrpKGxH9AHsqliavEY95+Mfe71nz4okewDhhC0zK0Ftmd8/2TD5zYvoeDfow2rs9ljtCU2yLm8Nb/zSuhzn5dQkshqDNUP+B2gitpM4cYbn9uWCoX9DVreLiKFnwvH1W8wdQjizxiggHQTd56xMzdZep/roES17Kgl+M0RlLGRvYEGCPUsW8Nh9zhSl4ibeZ2K8ZScN5GixnNHVJvdoMg7jL29Q9wZTYGjZIM2YB8iAXU5PIsvoGPUxU507lB9vCss3wWhVLjxOcSd9/UKfUglphvV6d0H6BisEURFHLq0XsYBeKHO7rYfvuc3UmyBlu3IwETyUehbpbnLAtmsu84ekFfbtBrqIUxDyW2OjcjQHKPtXkBRYx6Esvvsuz1lODqNhtJx0PLLUwYBzx2nuJ0SSxYSl+Dun0RYRRd5e8zaNRkfdXpgPy/RDK+ZZojyi0oX0EAlhmjkj5TU9DajHJ/LQ9hOlSdfYgmEwQIeQyAUa31EL8IexwCP+SNbfexQm1Ta8825YNsRk2WTT622retrPU2HQESTqb1G7kHVONgWRs5BDaI6UqcSrmXOnvcOgS8lnqsEwpoMLcDjUErNrXEQ/5My4eag4jbRb3ZvYcqJgTO/l52nyinalUByEPn11fyeJLDBmjLyHaAvMiZ/AVrVznNB5H5Q8Xp0RtxdC0T6VmUtjRxaMW6dRylzqpK30TvPULxJ2zFMotNSEz0IRKDwhfl1gDAXm2KzVKRS+9CmH5qr9ACnPteKsbTY9r4EItG/gxIRoZBz9sU8rhD32moLPcB+HQvPgrMftDcNIejIfvnCJsYilGgAF1C0JaO22sIQP4ccIk5tGO1TFk9dZX5QoY8+BcKrZIn1RziRz/xAskuBExacqJidLegJfQqEwZSIJZQ5Pe9L/mNBHXAcAZa23EuE2z36FohLSzi+y/9eCIXnEievzQsHgN5pgcYD7FkgDIdpmJsBb5Fk0nYc0W35yjoEkqHoi6ni94VQXCqVAFxCR1ijQHJTYXRMMY/hdS+EwiSMde+8K2ZsnQJhiKlIV0Tj4MMiM5QBcRCn8Q15mguYhmeV8BWIsGU097OCIPGZOHxYFY1JPNEhJrCYGcLdkraw45lqSkIHrDxxF1riLRC+jklzdiLTcUnQygMnIZ0TIfatLQnO4U0535xqi5NP6UJLvAXCtGh6XaVHzXRiVgO30hhNtMXgUybmycGgWQqjsu8QGxKl7JcHxquI0eyEGdyTNjrUsBWfYiNEIC5alFKfH6RqkmlMKCb1VxGj2anVhKgENrSd5YRDVxmb/ecUCLne+fIZkwC2KW0ygYeplXO0jTOWNp9C1EEcZcR0wb33LVlYhibLLpFNzwoHkqgYvctYVYEpkzKyFiDfzK7fi3M+pSBprZ9MoQWYXWvih2grcU+h/cS+xvUQ0BDOLEa+JDv4lAObVw2CRTd6O2aW0WObkQelkt/ee3pcYu0a1smILbXr4iiLwZ8LPsXOgRCves1pVGgCfGgrxFN18TrslxCN+ZOW4O92MbOkYhrkpaTSUjto0SyLYaZNJywIRxvBadPcG6VOZ6FOYPLPaF/5LcvBmxiENE9oFjjy2+bLK4TBNRn6RjnlJvCosg4SiHCxlP2rSvZzHEQCmebfy6UYrFppEnrsaqCv2lmjUuAdZEswJ65IAy9D8ts1lRTiB9lFz2rJgPZpQHuu8yEJ8VUgczDj4ER6uqXmp+sc19kQi7bt0jZVNxhXXQczdIOPcWtiu2uIa5AU7aQIA+Fo2UsdwhJkUpzSen5jllYobOcw9QVNKdDiW6cUxlm8WXefXx1tYvsC2HRbS7+wSkQR/AJdP6H84di+tuItal0gQqtKHP0cPS+hsIGzShY45tiAR47SEjxcoVAYdsmCKy55THCUe8x9Vy//2nxHXPKYpxCtmlPzO4UEN+AJb6G44hJItC9L1ivYYSuVh2Lkna4JynY58s2MkvufOVskNNhIt8vxllmYqY93XuUZLqRxi97SKvrBW+XoJckWX7PmrSq2IXtIfcevwRNhewjTLXPXrjrUtHOY4xIfpmmIUOeqQ0UpaobgwDE4L5rliK6xoQOn2DZFMsiVxC41iFVCfXW9BVckHi1qToIhWqb9tsW2EYjsIRikxcIQiFYZ9Dw2otzsK0Q0p1Tq15CzJFtmy9v+GUu39bMRd/x6RratX/ZFj9hjpX7HhX5BXVG/l20C1pWWFUiSvuoh3bZIjDTlmXin2Sxb4rl68tgpxIrd6LlrsCo6o9taCwN1RroGvf5USG9CyUGs2kkVT1OB3n9UZqW/n+KDvGrS8RspJXD1pBjLnvc/964pOWT1ScTJ2iKuRn4LBTIDrQG+8r7nPtk9E/8DvlGew911YuIAAAAASUVORK5CYII=' />
                        <h4>Apply Coupon/Referral </h4>
                    </div> */}
                    <div className='bill-details'>
                        <h4>Bill Details</h4>
                        <p>Total Item Price</p>
                        <p>Price Savings</p>
                        <hr></hr>
                        <p>Cart Amount</p>
                        <p>Delivery Charges</p>
                        <hr></hr>
                        <p>To Pay</p>
                        <div className='total_btn' onClick={e => window.location.href = "/myaccount/delivery"}>
                            <p>Total</p>
                            <p>SELECT DELIVERY SLOT</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Address