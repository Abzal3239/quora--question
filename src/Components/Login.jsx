import React, { useState, useEffect } from 'react';
import '../Stylesheet/Login.css';
import Home from './Home';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(
        JSON.parse(localStorage.getItem('isLogin')) === true
    );

    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            if (user.name === name && user.password === password) {
                localStorage.setItem('isLogin', true);
                setIsLogin(true);
            } else {
                alert('Invalid Information');
            }
        } else {
            navigate('/register');
        }

        setName('');
        setPassword('');
    };

    return (
        <>
            {isLogin ? (
                <Home />
            ) : (
                <div>
                    <div className="loginContent">
                        <div className="loginHeading">Login</div>
                        <div className="formInput">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                        <div className="formInput">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <div className="formButton">
                            <button
                                variant="primary"
                                onClick={() => handleSubmit()}>
                                Submit
                            </button>
                        </div>
                        <div>
                            <Link to="/register">Create Account</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
