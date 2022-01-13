import {useState, useEffect} from 'react'

const MyForm = () => {
    /*
     * A React form is made up of controlled components
     * A controlled component is one that is linked to state both ways
     * Changes to state should affect the rendering of the component
     * User changes should affect the state
     */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hasInputedInUserBox, setUserInputted] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setUserInputted(true)
    }

    const handleLogin = () => {
        setFormSubmitted(true);
        if (username && password) {
            console.log({username, password})
        }
    }

    return (
        <form>
            <p>
                <label>Username</label>
                <input value={username} onChange={handleUsernameChange}/>
                {!username && formSubmitted &&<span style={{color: 'red'}}>The username is required</span>}
            </p>
            <p>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                {!password && formSubmitted &&<span style={{color: 'red'}}>The password is required</span>}
            </p>
            <button type="button" onClick={handleLogin}>Login</button>
            <button type="reset" onClick={()=> setFormSubmitted(false)}>Reset</button>
        </form>
    );
}

export default MyForm;