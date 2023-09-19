// This function is not to be used - using local storage instead
// no way to add to a users cart via the API - DO NOT ATTEMPT.


import { useState, useEffect, Component } from "react";



export default function addCart () {
    const [successMessage, setSuccessMessage] = useState("");
    const [cartItems, setCartItems] = useState(null);
    const [error, setError] = useState(null)


    // use localstorage - create function () {
    //     update cart here.  
    //     useState to add items to an array 
    //     useEffect - session storage for my cart, so it's persistent

    //     function to add to my cart.  Do this in SinglePage.  NOT in new Component
    //     Then in Cart.jsx add to 
    // }
    useEffect(() => {
        async function addToCart() {
            const response = await fetch('https://fakestoreapi.com/carts/7',{
                method:"PUT",
                headers: {
                    "content-Type": "application/json",
                },
                body:JSON.stringify(
                    {

                    userId:3,
                    date:2019-12-10,
                    products:[{productId:1,quantity:3}]
                        // userId: userId,
                        // date: date,
                        // products:[{productId: productId ,quantity: quantity}]
                    }
                )
            })
            const results = await response.json()
            console.log(results)
            setCartItems(results)
                // .then(res=>res.json())
                // .then(json=>console.log(json))
            setSuccessMessage(results.message)
        }
        addToCart();
    }, )

    return (
        <h1>Cart Contents?  is "Return" not needed?</h1>
    )
}