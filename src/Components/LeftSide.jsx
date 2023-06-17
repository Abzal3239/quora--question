import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const LeftSide = ({ filteredQuestions }) => {
    console.log(filteredQuestions);
    return (
        <div className="LeftSide">
            {filteredQuestions && filteredQuestions.length > 0 ? (
                filteredQuestions.map((item, i) => {
                    return item.answer ? (
                        <div className="Lists">
                            {' '}
                            <h1>
                                <FaUserCircle /> {item.questionedBy}
                            </h1>
                            <h3> {item.question}</h3>
                            {item.answer}
                        </div>
                    ) : null
                })
            ) : (
                <p style={{ textAlign: 'Left' }}>No question found...</p>
            )}
        </div>
    );
};

export default LeftSide;
