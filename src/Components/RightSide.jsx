import React from 'react';
const RightSide = () => {
    const questionList = JSON.parse(localStorage.getItem('questionlist'));

    return (
        <div className="RightSide">
            <div className="Lists">
                <h1> Questions List</h1>
                {questionList ? (
                    questionList.map((item, i) => {
                        return (
                            <div className="QuestionList" key={item.id}>
                                {item.question}
                            </div>
                        );
                    })
                ) : (
                    <p>No question are here!</p>
                )}
            </div>
        </div>
    );
};

export default RightSide;
