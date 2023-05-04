import React from 'react';
import './TopChef.css'
import { ArrowSmallRightIcon,HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const TopChef = (props) => {
    const { id, name, short_bio, years_of_experience, picture_url } = props.Chefs;
    return (
        <div className="card card-side shadow-xl p-10 border">
                <img className='card-image1' src={`${picture_url}`} />
                <div className="card-body bg-white border rounded">
                    <h2 className="card-title md:text-3xl text-black font-black">{name}</h2>
                    <p><ArrowSmallRightIcon className="h-6 w-6 text-blue-500 inline" /><strong className='text-green-500'>{years_of_experience}</strong> year's of experience</p>
                    <p>{short_bio}</p>
                    
                </div>
            </div>
    );
};

export default TopChef;