import { useState } from "react";


export default function Register () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://fakestoreapi.com/users',{
                method:"POST",
                body:JSON.stringify(
                    {
                        email:'John@gmail.com',
                        username:'johnd',
                        password:'m38rmF$',
                        name:{
                            firstname:'John',
                            lastname:'Doe'
                        },
                        address:{
                            city:'kilcoole',
                            street:'7835 new road',
                            number:3,
                            zipcode:'12926-3874',
                            geolocation:{
                                lat:'-37.3159',
                                long:'81.1496'
                            }
                        },
                        phone:'1-570-236-7033'
                    }
                )
            })
            const results = await response.json()
            console.log(results)

            // .then(res=>res.json())
            // .then(json=>console.log(json))
            setSuccessMessage(results.message);
        } catch (error) {
            setError(error.message);
        }
    }  
    
    
    return (
        <div>
            <h2>Sign Up Today!</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:{" "}
                    <input value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:{" "}
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value);}} />
                </label>
                <button>Let the fun begin!</button>
            </form>

        </div>
        
    )
}