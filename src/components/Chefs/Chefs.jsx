import React from 'react';
import { ArrowSmallRightIcon,HandThumbUpIcon } from '@heroicons/react/24/solid'
import './Chefs.css'
import { Link } from 'react-router-dom';

const Chefs = (props) => {
    const { id, name, likes, num_recipes, years_of_experience, picture_url } = props.Chefs;
    return (
            <div className="card card-side bg-base-100 shadow-xl ">
                <img className='card-image' src={`${picture_url}`} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><ArrowSmallRightIcon className="h-6 w-6 text-blue-500 inline" /><strong className='text-green-500'>{years_of_experience}</strong> year's of experience</p>
                    <p><ArrowSmallRightIcon className="h-6 w-6 text-blue-500 inline" /> Total <strong className='text-green-500'>{num_recipes}</strong> recipes</p>
                    <div className="card-actions items-center justify-around">
                        <span><HandThumbUpIcon className="h-6 w-6 text-blue-500 inline" />{likes}</span>
                        <Link to={`/recipe/${id}`} className="btn btn-primary px-2 text-xs">View recipe</Link>
                    </div>
                </div>
            </div>
    );
};

export default Chefs;