import React, { useState } from 'react';
import NavBar from './NavBar';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [questionList, setQuestionList] = useState(
        JSON.parse(localStorage.getItem('questionlist')) || []
    );
    const [filteredQuestions, setFilteredQuestions] = useState(questionList);

    const handleSearchQueryChange = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        filterQuestions(value);
    };

    const filterQuestions = (query) => {
        const filtered = questionList.filter(
            (question) =>
                question.question.toLowerCase().includes(query.toLowerCase()) ||
                question.answer.toLowerCase().includes(query.toLowerCase()) ||
                question.questionedBy
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                question.answeredBy.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredQuestions(filtered);
    };

    return (
        <>
            <NavBar
                searchQuery={searchQuery}
                handleSearchQueryChange={handleSearchQueryChange}
            />
            <div className="Box">
                <LeftSide filteredQuestions={filteredQuestions} />
                <RightSide />
            </div>
        </>
    );
};

export default Home;
