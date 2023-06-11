import React, { useState, useEffect } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return regex.test(password);
    };

    const handleSignup = () => {
        const user = {
            name: name,
            email: email,

            password: password,
        };

        if (!validateEmail(email)) {
            alert('Invalid email');
            return;
        }

        if (!validatePassword(password)) {
            alert(
                'Password must be 6-20 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
            );
            return;
        }

        setOpen(true);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
    };
    return (
        <div>
            <div>
                <div className="loginContent">
                    <div className="loginHeading">Register</div>
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
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>

                    <div className="formInput">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            onBlur={(e) => validatePassword(e.target.value)}
                        />
                    </div>

                    <div className="formButton">
                        <button
                            variant="primary"
                            onClick={() => handleSignup()}>
                            Submit
                        </button>
                    </div>
                    <div className="d-flex">
                        Already have an account?{'  '}
                        <Link to="/"> Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
