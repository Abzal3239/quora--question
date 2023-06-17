import React from 'react';

import Logo from '../Components/logo.png';

import '../Stylesheet/Header.css';

import QuestionBox2 from './AddQuestion';

import QuestionBox from '../Components/QuestionBox';

import QuestionBox3 from './AnswerQuestion';

// import Login from "../Components/Login";

import { useState } from 'react';

const Header = () => {
    const [showNewComponent, setShowNewComponent] = useState(true);

    const [addQuestion, setaddQuestion] = useState(false);

    const [showAnswer, setshowAnswer] = useState(false);

    const addQuestions = () => {
        setShowNewComponent(false);

        setaddQuestion(true);

        setshowAnswer(false);
    };

    const AnswerQuestion = () => {
        setShowNewComponent(false);

        setaddQuestion(false);

        setshowAnswer(true);
    };

    return (
        <>
            <div className="Header_Center">
                <div className="Quora_1">
                    <img src={Logo} alt="logo" className="QuoraImage" />
                </div>

                <div className="Buttons">
                    <div className="Search">
                        <input
                            type="text"
                            placeholder="Serach for Quetions..."
                        />
                    </div>

                    <button onClick={addQuestions} className="Add_questions">
                        Add questions
                    </button>

                    <button
                        onClick={AnswerQuestion}
                        className="Answer_questions">
                        Answer questions
                    </button>

                    <button className="Login">Login</button>
                </div>
            </div>

            {showNewComponent && <QuestionBox />}

            {addQuestion && <QuestionBox2 />}

            {showAnswer && <QuestionBox3 />}
        </>
    );
};

export default Header;
