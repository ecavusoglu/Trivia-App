import React from 'react';
import Question from './Question';

const QuestionDetail = ({ questions, category_id, order }) => {
  const questionsArray = questions.map((user, i) => {
    if (order == i) {
      return (
      <div className='pl-5 mt-5'>
        <div className='d-flex'>
          <div className='ml-5 w-50'>
            <h5 className='text-dark' style={{fontSize: 18}}>{questions[i].question}</h5>
            <p className='text-success'>{questions[i].correct_answer}</p>
            <hr/>
          </div>
        </div>
      </div>
    )}
  })
  return (
    <div>
      {questionsArray}
    </div>
  );
}


export default QuestionDetail;
