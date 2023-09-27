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
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(
                    {username: username, password: password,}),
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
                    {/* Toke: {" "}
                    <p value={token} onChange={(e) =>setToken(e.target.value)}></p> */}
            </form>

        </div>
        
    )
}