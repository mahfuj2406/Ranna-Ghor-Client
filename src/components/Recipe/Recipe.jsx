import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css'
import { ArrowSmallRightIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipe = () => {
    const { id } = useParams();
    const [chef, setChef] = useState([]);
    const [rec, setRec] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/recipe/${id}`)
            .then(res => res.json())
            .then(data => {
                setRec(data.recipes)
                setChef(data);
            })
            .catch(error => console.log(error))
    }, []);

    // console.log("dynamic data: ", chef);
    return (
        <div>
            <div className='container-fluid'>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={`${chef.picture_url}`} className="max-w-sm rounded-lg shadow-2xl recipe-banner-photo" />
                        <div>
                            <h1 className="text-5xl font-bold font-dark">{chef.name}</h1>
                            <p className="py-6">{chef.short_bio}</p>
                            <p><ArrowSmallRightIcon className="h-6 w-6 text-blue-500 inline me-2" /><strong className='text-green-500'>{chef.years_of_experience}</strong> year's of experience</p>
                            <p><ArrowSmallRightIcon className="h-6 w-6 text-blue-500 inline me-1" /> Total <strong className='text-green-500'>{chef.num_recipes}</strong> recipes</p>
                            <span><HandThumbUpIcon className="h-6 w-6 text-blue-500 inline me-1" />{chef.likes}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='w-1/4 rounded-full d-block text-center md:text-3xl text-slate-500 font-black  mx-auto ring-2 ring-blue-500 my-5'>Recipes</h1>
            </div>
            <div className='container-fluid grid md:grid-cols-2 gap-4 p-5'>
                {
                rec.map(element=><RecipeCard key={element.recipeId} value={element}></RecipeCard>)
            }
            </div>
        </div>
    );
};

export default Recipe;