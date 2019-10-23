import React from 'react';
import Category from './Category';

const CategoryList = ({ categories }) => {
  const categoriesArray = categories.map((user, i) => {
    return <Category key={categories[i].id}
                    id={categories[i].id}
                    name={categories[i].name}
            />
  })
  return (
    <div>
      {categoriesArray}
    </div>
  );
}


export default CategoryList;
