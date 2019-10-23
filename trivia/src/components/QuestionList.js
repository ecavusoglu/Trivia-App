import React from 'react';
import Question from './Question';

const QuestionList = ({ questions, category_id }) => {
  const questionsArray = questions.map((user, i) => {
    return <Question key={questions[i].question}
                    id={i}
                    category={questions[i].category}
                    question={questions[i].question}
                    difficulty={questions[i].difficulty}
                    correct_answer={questions[i].correct_answer}
                    category_id={category_id}
            />
  })
  return (
    <div>
      {questionsArray}
    </div>
  );
}


export default QuestionList;
