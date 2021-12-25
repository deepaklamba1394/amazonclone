import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,} from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const history = useHistory();

    const signIn = async(event) => {
        event.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            history.push('/');
        }
        catch(error){
            alert(error.message);
        }
    }

    const register = async(event) => {
        //createUserWithEmailAndPassword will return a promise which will be stored in user
        event.preventDefault();
       try{ 
        const user = await createUserWithEmailAndPassword(auth, email, password);
           console.log(user);
           history.push('/');
    }
       catch(error){
           alert(error.message);
        }
    }


    return <div className="login">
        <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG18.png" className="login_logo" alt="" /></Link>
        <div className="login_container">
            <h1 className="sign_in">Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(event) => {
                    setEmail(event.target.value);
                }} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={(event) => { 
                    setPassword(event.target.value) }} />
                <button type="submit" className="login_signInButton" onClick={signIn}>Sign in</button>
            </form>
            <p className="login_conditions">By Signing-in you agree to Amazon's Conditions of Use & Save.</p>
            <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>
        </div>
    </div>;
}

export default Login;