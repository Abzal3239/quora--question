import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AddQuestion from './Components/AddQuestion';
import AnswerQuestion from './Components/AnswerQuestion';
import Login from './Components/Login';
import Register from './Components/Register';
import './Stylesheet/Navbar.css';
import './Stylesheet/QuestionBox3.css';

const App = () => {
    // const [isLogin, setIsLogin] = useState(
    //     JSON.parse(localStorage.getItem('isLogin')) === true
    // );

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<Home />} />
                <Route path="/add-question" element={<AddQuestion />} />
                <Route path="/answer-question" element={<AnswerQuestion />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
