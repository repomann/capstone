import {useState, useEffect} from "react"
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"



export default function SingleItem () {
    const {id} = useParams();  
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
     const [cartItems, setCartItems] = useState([]);

    const baseURL = 'https://fakestoreapi.com'
    
    useEffect(() => {
        async function getSingleItem() {
            console.log()
            const response = await fetch(`${baseURL}/products/${id}`)
            const singleItem = await response.json();
            console.log(singleItem)
            setProduct(singleItem)
        }
        getSingleItem()

    }, [] )

    function AddToCart() {
      
      let cartArray 
      const items = JSON.parse(localStorage.getItem("cartItems"))
      if (items==undefined ) {
          cartArray = [product]
      } else {
        cartArray = [... items, product]
      }
      
      console.log(cartArray);
      localStorage.setItem('cartItems', JSON.stringify(cartArray));
  
    }

    return (
        <div id="container">
            {error && <p>{error}</p>}
                {product && <div id="main-content" key={product.id}>

                           <div id="title"> {product.title} </div>
                           <div id="cat"> Category: {product.category} </div>
                           <div id="cat"> Price: ${product.price} </div>
                            
                           <figure>
                              <img className={StyleSheet.img}
                                src={product.image}
                              alt="Content is not Loading" />
                            </figure> 
                            
                            <div id="description"> {product.description} </div>
                            <button onClick={() => {navigate(`/cart`);}}> Go to Cart </button>  

                           
                            <button onClick={()=> AddToCart()}>Add to Cart</button>
                           
                          
                            

                        </div>}
          </div>
        )
      }

