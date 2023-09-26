import { useState, useEffect } from "react";
import SingleItem from "./Singlepage.jsx";

export default function Cart(SingleItem, Login) {
  const [successMessage, setSuccessMessage] = useState("");
  const [userCart, setUserCart] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(!! localStorage.getItem("token"));
  const [cartItems, setCartItems] = useState(null); //(localStorage.getItem("cartItems") ? localStorage.getItem("cartItems") : [])

//   useEffect(() => {
//     console.log(cartItems);
//     console.log(localStorage.getItem("cartItems"));
//   }, [cartItems]);

  //   const [cartItems, setCartItems] = useState (localStorage.getItem("cartItems") ? localStorage.getItem("cartItems") : "")

  useEffect(() => {
    // if logedIn state = true; do the API call for the login, if False, use localStorage getItems()
    // this way it will show the items in a user's cart, OR allow a new cart to be created.
    // maybe if it is a user - just leave off the "add to cart" button on single page.  No confusion

    async function viewCart() {
    //   const response = await fetch("https://fakestoreapi.com/carts/user/3");
      const results = JSON.parse(localStorage.getItem("cartItems"));
      console.log(results);
      setCartItems(results);
      // .then(res=>res.json())
      // .then(json=>console.log(json))
    //   setSuccessMessage(results.message);
    }
    viewCart();
  }, []);

  return (
    // <h1>Your Cart</h1>
    <div id="container">
      {cartItems ? (
        <div>
          {cartItems.map((items) => {
            return (
              <div id="main-content" key={items.id}>
                <div id="title"> Product {items.title}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1> No cart </h1>
      )}
    </div>
  );
}

// OLD CODE
// (
//     <div>
//         {cartItems.map((cartItems)) && <div id="main-content" key={cartItems.id}>
//             <div id="title"> Product {cartItems.title}</div>
//             </div>}
//     </div>
// )
