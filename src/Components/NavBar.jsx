import React, { useState } from 'react';
import Logo from '../Components/logo.png';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ searchQuery, handleSearchQueryChange }) => {
    const checkLogin = JSON.parse(localStorage.getItem('isLogin'));
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
        window.location.reload();
    };

    return (
        <>
            <div className="Header_Center">
                <div className="Quora_1">
                    <Link to="/">
                        <img src={Logo} alt="logo" className="QuoraImage" />
                    </Link>
                </div>

                <div className="Search">
                    <BsSearch />{' '}
                    <input
                        type="text"
                        placeholder="Search for Questions..."
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                    />
                </div>

                <button className="Add_questions">
                    <Link to="/add-question"> Add questions</Link>
                </button>

                <button className="Answer_questions">
                    <Link to="/answer-question">Answer questions</Link>
                </button>

                <button className="Login">
                    {checkLogin === true ? (
                        <span onClick={() => handleLogout()}>Logout</span>
                    ) : (
                        <Link to="/"> Login</Link>
                    )}
                </button>
            </div>
        </>
    );
};

export default NavBar;
