import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Category = (props) => {

  return (
    <Dropdown.Item eventKey={props.id}>{props.name}</Dropdown.Item>
  );
}

export default Category;
