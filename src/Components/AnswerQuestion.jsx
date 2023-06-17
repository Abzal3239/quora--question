import React, { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AnswerQuestion = () => {
    const questionList = JSON.parse(localStorage.getItem('questionlist')) || [];
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [size, setSize] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleAnswer = () => {
        //todo add answer
        if(question === "" || question === undefined )
        {
            alert("Please add question first");
            console.log("no question")
        }
        else
        {
        const user = JSON.parse(localStorage.getItem('user'));
        const questionLists = JSON.parse(localStorage.getItem('questionlist'));

        console.log(questionLists, user);
        for (let i = 0; i < questionLists.length; i++) {
            if (questionLists[i].id === id) {
                questionLists[i].answeredBy = user.name;
                questionLists[i].answer = answer;
            }
        }
        setAnswer();
        setQuestion();
        localStorage.setItem('questionlist', JSON.stringify(questionLists));
        navigate('/');
    };
    };
console.log(question);
    return (
        <>
            <NavBar />
            <div className="QuestionBox13">
                <div className="Row">
                    <div className="Question">
                        <h1>Select Question </h1>
                        {questionList &&
                            questionList.map((item, i) => {
                                return (
                                    <div
                                        className="QuestionList"
                                        key={item.id}
                                        onClick={() => {
                                            setQuestion(item.question);
                                            setId(item.id);
                                        }}>
                                        {item.answer && item.question
                                            ? null
                                            : item.question}

                                    </div>
                                );
                            })}
                    </div>

                    <div className="Answer">
                        <h1>{question}</h1>
                        <h1>
                            {/* /to do add question here */}
                            Answer:{' '}
                        </h1>
                        <input
                            type="text"
                            placeholder="Type your answer here..."
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </div>
                </div>

                <div className="Row_Button">
                    <button className="Cancel">
                        <Link to="/">Cancel</Link>
                    </button>
                    <button
                        className="Add_Answer"
                        onClick={() => handleAnswer()}>
                        Add Answer
                    </button>
                </div>
            </div>
        </>
    );
};

export default AnswerQuestion;
