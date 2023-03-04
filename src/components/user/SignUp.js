import { useState } from "react";
import { useHistory, Link } from 'react-router-dom';


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fetch('/user/sign-up', {
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
                console.log(data);
                setUsername("");
                setPassword("");
                history.push('/login')
            })
            .catch((error) => {
                setIsError(true)
            })
    }
    

    return (
        <div className="login">
            <div className="main">
                <h4>Sign Up</h4>
                {isError ? <p>Unable to create account.<br/> Username already exists.</p> : null}
                <form onSubmit={handleSubmit}>
                    <input onChange={(event) => setUsername(event.target.value)} name="username" id="username" type="text" placeholder="Username" />
                    <input onChange={(event) => setPassword(event.target.value)} name="password" id="password" type="password" placeholder="Password" />
                    <button type="submit">Sign Up</button>
                </form>

                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    )
}

export default SignUp;