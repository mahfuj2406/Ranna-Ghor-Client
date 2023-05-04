import React from 'react';

const Chefs = (props) => {
    const {id,name,likes,num_recipes,years_of_experience} = props.Chefs;
    return (
        <div className='border m-2 p-3 rounded bg-purple-500'>
            <h2>Name: {name}</h2>
            <p>Likes {likes}</p>
            <p>Id: {likes}</p>
            <p>Recipes count: {num_recipes}</p>
            <p>Experience:  {years_of_experience}</p>
        </div>
    );
};

export default Chefs;