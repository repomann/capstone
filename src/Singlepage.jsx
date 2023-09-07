import {useState, useEffect} from "react"
// import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom"

// import styles from "... SingleItem.css" // this needs to be created


// what I need: display of single item based on key id, button to add to cart.

export default function SingleItem () {
    const {id} = useParams();  

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getSingleItem() {
           
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const singleItem = await response.json();
            console.log(singleItem)
            setProduct(singleItem)
                 
             console.log(product)
             console.log(singleItem)
        }
        
        getSingleItem()
    }, [] )

// product is probably an object... so no mapping (array). 

    return (
        <div id="container">
            {error && <p>{error}</p>}
            {product.map((item) => {
                return <div id="main-content" key={item.id}>
                           <div id="title"> {item.title} </div>
                           <div id="cat"> Category: {item.category} </div>
                           <figure>
                              <img className={StyleSheet.img}
                              src={item.image}
                              alt="Content is not Loading" />
                            </figure> 
                            
                            <div id="description"> {item.description} </div>
                        </div>;
            })}         
          </div>
        )
      }