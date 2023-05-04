// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaRegThumbsUp } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const ShefData = (data) => {
  const { id, name, years_of_experience, num_of_recipes, likes, photo_url } =
    data.data;
  return (
    <div className="card  bg-base-100 shadow-xl ">
      <figure>
      <LazyLoadImage src={photo_url}
       className="w-full "
       height={380} 
      
        alt="shef_photo"
        effect="blur"
      />
        
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">
          name:{name}
          <div className="badge badge-secondary py-2">{likes}    <FaRegThumbsUp className=" ml-1 "></FaRegThumbsUp> </div>
        </h2>
        <p>Experience: {years_of_experience} years</p>
        <p>Recipes: {num_of_recipes} </p>
        <div className="card-actions ">
          <Link
            to={`/shef/${id}`}
            className="btn btn-outline hover:bg-orange-600 w-full text-xl font-semibold"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShefData;
