import {useState, useEffect} from "react"
// import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom"

// import styles from "... SingleItem.css" // this needs to be created

// what I need: display of single item based on key id, button to add to cart.

export default function SingleItem () {
    const {id} = useParams();  

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
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

    return (
        <div id="container">
            {error && <p>{error}</p>}
                {product && <div id="main-content" key={product.id}>

                           <div id="title"> {product.title} </div>
                           <div id="cat"> Category: {product.category} </div>
                           <figure>
                              <img className={StyleSheet.img}
                                src={product.image}
                              alt="Content is not Loading" />
                            </figure> 
                            
                            <div id="description"> {product.description} </div>

                        </div>}
          </div>
        )
      }
