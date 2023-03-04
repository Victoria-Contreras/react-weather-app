import { useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import Navbar from "../Navbar";

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        if (result.status === 403) {
            setIsError(true)
            return 
        };

        return await result.json()
            .then((data) => {
                setUsername("");
                setPassword("");
                history.push('/')
            })
            .catch((error) => {
                setIsError(true)
                return
            });
    }

    return ( 
        <div>
            <nav>
                <div id="logo"><h1 id='sun-logo'>SUN</h1><h1 id='shine-logo'>SHINE</h1></div>
            </nav>
            <div className="login">
                <div className="main">
                    <h2>Log in to SunShine</h2> 
                    {isError ? <p>Unable to log in. Try again.</p> : null} 
                    <form onSubmit={handleSubmit}>
                        <input onChange={(event) => setUsername(event.target.value)} name="username" id="username" type="text" placeholder="Username" />
                        <input onChange={(event) => setPassword(event.target.value)} name="password" id="password" type="password" placeholder="Password" />
                        <button type="submit">Log in</button>
                    </form> 

                    <p>Don't have an account? <Link to="sign-up">Sign Up</Link></p>
                </div>
            </div>
        </div>
     );
}
 
export default Login;