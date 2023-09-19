import { useState } from 'react';

// export default function Login (... passed Login Parameters) {
export default function Login () {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [token, setToken] = useState(' ');
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // delete this, when finished passing from app.jsx

    const handleLogin = async(e) => {
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                body:JSON.stringify({
                    username: userName,
                    password: password,
                    
                })
            })
                const results = await response.json()
                console.log(results)
                localStorage.setToken('token', results.token);
                setIsLoggedIn(true);

                // .then(res=>res.json())
                // .then(json=>console.log(json))
                setSuccessMessage(results.message);
        } catch (error) {
            setError(error.message);
            
        }}

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log(isLoggedIn);
    }
        

    return (
        <div>
        <h2>Login to see your shopping history</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}

        <form onSubmit={handleLogin}>
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


        <button onClick={handleLogin}>Log me in, Scotty!</button>

        {/* conditionally render this button to only appear when user is loggedin  */}
        <button onClick={handleLogout}>Log out</button>

        {/* <div>You are currently Logged in as: {results.username}</div> */}

    </div>

    )
}



// handleLogout (
//     Button that has logout - onClick changes the login state to false.  Then navigate back to Home.
// )

