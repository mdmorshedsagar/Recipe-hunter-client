// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipeCard = useLoaderData();
    
    return (
        <div>
    


    <div>
        {
            recipeCard.map((data) => <>
               <div key={data.id} className="card lg:card-side bg-base-100 shadow-xl lg:my-[50px] lg:mx-[80px]">
  <figure><img className='lg:h-[400px] lg:w-[350px]' src={data.recipe_image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl">Recipe name: {data.recipe_name}</h2>
    <h2 className="card-title text-2xl">Recipe method: {data.cooking_method}</h2>
    <p className='text-xl lg:w-[580px]'>{data.description}</p>
    <div className="card-actions flex justify-between items-center ">
        <h2>{data.rating}</h2>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            </> )
        }
    </div>
        </div>
    );
};

export default Recipe;