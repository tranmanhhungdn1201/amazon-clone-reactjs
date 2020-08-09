import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/img/amazon-logo-blank.png';
import { Link, useHistory } from 'react-router-dom';
import './Login.scss';
import { auth } from '../../../firebase';
import { useState } from 'react';

Login.propTypes = {
    
};

function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={logo}
                    alt="logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button
                        onClick={login}
                        type="submit"
                        className="login__signInButton"
                    >
                        Sign in
                    </button>
                </form>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore qui numquam labore unde similique quos ea aspernatur ne
                    cessitatibus optio quia odit beatae, possimus animi quo velit saepe debitis rem.
                </p>
                <button
                    onClick={register}
                    className="login__registerButton"
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;