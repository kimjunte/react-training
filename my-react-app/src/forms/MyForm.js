import {useState, useEffect} from 'react'

const MyForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <p>
                <label>Username</label>
                <input/>
            </p>
            <p>
                <label>Password</label>
                <input type="password"/>
            </p>
            <button>Login</button>
        </form>
    );
}

export default MyForm;