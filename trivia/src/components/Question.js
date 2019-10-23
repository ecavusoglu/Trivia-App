import React from 'react';

import { SimpleLink } from './SimpleLink';
import { QuestionDetailView } from '../views/QuestionDetailView';

const Question = (props) => {

  return (
    <div className='pl-5'>
      <div className='d-flex'>
        <div className='ml-5 w-50'>
          <h5 className='text-dark' style={{fontSize: 18}}><SimpleLink to={`/category/${props.category_id}/id/${props.id}`}>{props.question}</SimpleLink></h5>
          <p>Category: {props.category}</p>
          <p>Difficulty: {props.difficulty}</p>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default Question;
