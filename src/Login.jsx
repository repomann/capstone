import { useState } from 'react';


export default function Login () {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState(' ');
    const [password, setPassword] = useState(' ');

    const handleSubmit = async(e) => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                body:JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_"
                    
                })
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
        <h2>Login to see your shopping history</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
            <label>
                Username:{" "}
                <input type="text" 
                placeholder="Your Username"
                onChange={(e) => setUserName(e.target.value)}/>                
            </label>
            <label>
                Password:{" "}
                <input type="test"
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
        </form>


        <button onClick={handleSubmit}>Log me in, Scotty!</button>


        </div>

    )
}





