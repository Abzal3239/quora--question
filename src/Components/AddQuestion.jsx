import React, { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const AddQuestion = () => {
    const navigate = useNavigate();
    const [questionList, setQuestionList] = useState(
        JSON.parse(localStorage.getItem('questionlist')) || []
    );
    const [question, setQuestion] = useState();

    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (question && user) {
            const questions = {
                id: uuidv4(),

                answeredBy: 'Abzal Khan',
                questionedBy: user.name,
                question: question,
                answer: '',
            };
            const newQuestionList = [...questionList, questions].reverse();

            setQuestionList(newQuestionList);
            localStorage.setItem(
                'questionlist',
                JSON.stringify(newQuestionList)
            );

            setQuestion('');
            navigate('/');
        }
    };

    return (
        <>
            <NavBar />
            <div className="QuestionBox3">
                <div className="AddQuestion">
                    <div className="Header">
                        <h1>Question : </h1>
                        <input
                            type="text"
                            placeholder="Type your question here....... "
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>

                    <div className="Buttons2">
                        <button className="Cancel2">
                            <Link to="/">Cancel</Link>
                        </button>

                        <button className="Add" onClick={() => handleSubmit()}>
                            Add question
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddQuestion;
