import { useState, useEffect } from "react";
import SingleItem from "./Singlepage.jsx"


export default function Cart (setLocalStorage) {
    const [successMessage, setSuccessMessage] = useState("");
    const [cartItems, setCartItems] = useState(null);
    const [error, setError] = useState(null)


    useEffect(() => {

        // if logedIn state = true; do the API call for the login, if False, use localStorage getItems()
        // this way it will show the items in a user's cart, OR allow a new cart to be created.
        // maybe if it is a user - just leave off the "add to cart" button on single page.  No confusion
        
        

        async function viewCart() {
            const response = await fetch('https://fakestoreapi.com/carts/user/3')
            const results = await response.json()
            console.log(results)
            setCartItems(results)
                // .then(res=>res.json())
                // .then(json=>console.log(json))
            setSuccessMessage(results.message)
        }
        viewCart();
    }, [])

    return (
        // <h1>Your Cart</h1>
        <div id="container">
            {error && <p>{error}</p>}
            {cartItems.map((cartItems)) && <div id="main-content" key={cartItems.userId}>
                <div id="title"> Product ID {cartItems.productId}</div>
                <div id="cat"> Quantity: {cartItems.quantity}</div>
            </div>}
        </div>
    )
}



