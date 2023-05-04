import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { HeartIcon,StarIcon } from '@heroicons/react/24/solid'

const RecipeCard = (props) => {
    const [desable, setDisable] =useState(false);
    const disableBtn=()=>{
        toast("The recipe is your favorite")
        setDisable(true);
    }
    const { recipeName, recipeId, ratings } = props.value;
    console.log(recipeName);
    return (
        <div>
            <div className="w-full p-3 rounded shadow-lg border">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2"></div>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-black text-2xl mb-2">{recipeName}</div>
                    <h2 className='md:text-2xl font-bold'>Ingredients:</h2>
                    <p className="text-gray-700 text-base">
                        
                        {
                            props.value.ingredients.map(element=><li> {element} <br/>
                       </li>) }
                    </p>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Method of Coocking:</div>
                    <p className="text-gray-700 text-base">
                        {props.value.method_of_cooking }
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button disabled={desable} onClick={disableBtn} className="btn btn-danger inline-block bg-gray-200 hover:bg-slate-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Favourite</button><ToastContainer></ToastContainer>
                    <span><StarIcon className=" ms-4 h-6 w-6 text-blue-500 inline me-1" />{ratings}</span> 
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;