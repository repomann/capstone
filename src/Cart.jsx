import { useState, useEffect } from "react";
import SingleItem from "./Singlepage.jsx";

export default function Cart(SingleItem, Login) {
  const [successMessage, setSuccessMessage] = useState("");
  const [userCart, setUserCart] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(!! localStorage.getItem("token"));
  const [cartItems, setCartItems] = useState(null); 
  const totalPrice = calculateTotalPrice();

  useEffect(() => {

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


function RemoveFromCart(itemId) {
    // Retrieve the current cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  
    if (cartItems) {
      // Find the index of the item to remove based on its id
      const itemIndex = cartItems.findIndex((item) => item.id === itemId);
  
      if (itemIndex !== -1) {
        // Remove the item from the cart array
        cartItems.splice(itemIndex, 1);
  
        // Update local storage with the modified cart
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
        // Update the state to reflect the changes in your component
        setCartItems(cartItems);
      }
    }
  }

  function calculateTotalPrice() {
    // Retrieve the current cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  
    if (cartItems) {
      // Use the reduce method to sum the prices
      const totalPrice = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0); // Start with an initial value of 0
  
      return totalPrice;
    }
  
    return 0; // Return 0 if there are no items in the cart
  }
  
  
  
  

  return (
    // <h1>Your Cart</h1>
    <div id="container">
        

      {cartItems ? (
        
        <div>
        <div id="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
        <button>Proceed to Checkout</button>
          {cartItems.map((items) => {
            return (
                
              <div id="main-content" key={items.id}>
                <div id="title"> Product {items.title}</div>
                {/* <figure>
                          <img className={StyleSheet.img}
                          src={item.image}
                          alt="Content is not Loading" />
                </figure>  */}
                <div id="title"> Price ${items.price}</div>
                <button onClick={()=> RemoveFromCart(items.id)}>Remove from cart</button>

              </div>
            );
          })}
        </div>
      ) : (
        <h2> There are no items in your cart </h2>
      )}
    </div>
  );
}


