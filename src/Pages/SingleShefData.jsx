// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {  useLoaderData } from 'react-router-dom';

const SingleShefData = () => {
    const singleShefData = useLoaderData();
   const [recipe, setRecipe] = useState([]);
   useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/recipe');
      const json = await response.json();
      setRecipe(json);
    }
      fetchData();
    
    },[])
   

    const {id,name,
    years_of_experience,
    num_of_recipes,
    likes,description,
    photo_url} = singleShefData;

    const recipes = recipe.filter((d) => d.category_id == id);
    
    return (
        <div>
            
  <div className="grid grid-cols-2 bg-gradient-to-r from-zinc-300 to-stone-100 py-4">
    <img src={photo_url} className="max-w-sm rounded-full h-[500px] shadow-2xl lg:order-2  w-full mx-auto " />
    <div className=' lg:order-1 mx-auto my-auto '>
      <h1 className="text-5xl font-bold text-orange-600 my-5"> Name: {name}.</h1>
      <p className="text-xl"><span className='text-xl font-bold'>Decription: </span> {description}.</p>
      <p className="text-2xl"><span className='text-xl font-bold'>Experience:</span> {years_of_experience} years of experience.</p>
      <p className="text-2xl"><span className='text-xl font-bold'>Recipe:</span> {num_of_recipes} delicious food recipe.</p>
      <p className="text text-orange-700 font-bold">{likes} likes</p>
      
    </div>
  </div>

  <div>
        {
            recipes.map((data) => <>
               <div  className="card lg:card-side bg-base-100 shadow-xl lg:my-[50px] lg:mx-[80px]">
  <figure><img className='lg:h-[400px] lg:w-[350px]' src={data.recipe_image} alt="Album"/></figure>
  <div className="card-body ">
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

export default SingleShefData;