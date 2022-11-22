import React , {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import './Login.css';
import { auth } from '../../firebase';

export default function Login() {

    const history = useHistory();
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn= event =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email , password)
        .then(auth =>{
            history.push('/');
        })
        .catch(error => alert(error.message));
    }

    const Register= event =>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <Link to="/">
            <img 
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
            />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" 
                    value={email}
                    onChange= {event => setEmail(event.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password" 
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    />
                    <button className="login__signInButton" type="button"
                    onClick={SignIn}
                    >Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's <a href="#">Conditions of Use and Privacy Notice.</a>
Need help?</p>

            <button className="login__registerButton"
            onClick={Register}
            >Create your amazon account</button>
                </div>
        </div>
    )
}
