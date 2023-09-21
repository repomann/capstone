import { useState, useEffect } from "react";
import SingleItem from "./Singlepage.jsx"


export default function Cart (SingleItem, Login) {
    const [successMessage, setSuccessMessage] = useState("");
    const [userCart, setUserCart] = useState(null);
    const [error, setError] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    // const [isLoggedIn, setIsLoggedIn] = useState(!! localStorage.getItem("token"));
    const [cartItems, setCartItems] = useState (localStorage.getItem("cartItems") ? localStorage.getItem("cartItems") : "")


    useEffect(()=> {
        console.log(cartItems)
      }, [cartItems]);
    
    //   const [cartItems, setCartItems] = useState (localStorage.getItem("cartItems") ? localStorage.getItem("cartItems") : "")
      
    useEffect(() => {

        // if logedIn state = true; do the API call for the login, if False, use localStorage getItems()
        // this way it will show the items in a user's cart, OR allow a new cart to be created.
        // maybe if it is a user - just leave off the "add to cart" button on single page.  No confusion
        
        

        async function viewCart() {
            const response = await fetch('https://fakestoreapi.com/carts/user/3')
            const results = await response.json()
            console.log(results)
            setUserCart(results)
                // .then(res=>res.json())
                // .then(json=>console.log(json))
            setSuccessMessage(results.message)
        }
        viewCart();
    }, [])

    return (
        // <h1>Your Cart</h1>
        <div id="container">
            {isLoggedIn ? (
    <div>
            {error && <p>{error}</p>}
            {userCart.map((userCart)) && <div id="main-content" key={userCart.userId}>
                <div id="title"> Product ID {userCart.productId}</div>
                <div id="cat"> Quantity: {userCart.quantity}</div>
        </div>}
    </div>
)
:
(
    <div>
        {cartItems.map((items) => {
            return <div id="main-content" key={items.id}>
            <div id="title"> Product {items.title}</div>
        </div>

        }) }
    </div>
)
}
        </div>
    )
}








// OLD CODE
// (
//     <div>
//         {cartItems.map((cartItems)) && <div id="main-content" key={cartItems.id}>
//             <div id="title"> Product {cartItems.title}</div>
//             </div>}
//     </div>
// )


