import { useState, useEffect } from "react"
import { fetchAllProducts } from "./api"



function Home() {
    const [merch, setMerch] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState("");  // for Search Bar
  
    useEffect(() => {
      async function getAllData() {
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json()
        
        setMerch(products)
        console.log(merch)
        console.log(products)

        // const APIResponse = await fetchAllProducts();
        // console.log(APIResponse.then(res=>res.json()))
        // console.log("products")
        // if (APIResponse.success) {
        //     setMerch(APIResponse.json());
        // } else {
        //     setError(APIResponse.error.message);
        // }
      }
      getAllData()
    }, [])
    

    // search parameters and navigation - to be read, probably in another component
    const productToDisplay = searchParam
    ? merch.filter((title) =>
        merch.title.toLowerCase().includes(searchParam)
        ) : merch

    return (
    <div id="container">
        {/* <pre>{JSON.stringify(merch, null, 2) }</pre> */}
        {/* // search bar code
        // <div>
        //     <label>
        //         search:{" "}
        //         <input type="text" placeholder="search" onChange={(e) => setSearchParam(e.target.value.toLowerCase())}/>
        //     </label>
        // </div> */}

        {/* <CreateProductForm merch={merch} setMerch={setMerch} /> */}
        {error && <p>{error}</p>}
        {merch.map((item) => {
            return <div key={item.id}>
                    

                        {item.title}
                       <figure>
                        <img className={StyleSheet.img}
                        src={item.image}
                        alt="Content is not Loading" /></figure> 
                        {item.category}
                        {item.description} 
                    </div>
                    
                    ;
        })}

{/* old code */}
      {/* <div id="main-section">
        {!!merch.length &&
          merch.map((el, i) => {
            return (
              <div key={i}>
                <h1>{el.id}</h1>
              </div>
            )
          })}
      </div> */}
      
      
      </div>
    )
  }

  export default Home