// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ShefData = (data) => {
  const { id, name, years_of_experience, num_of_recipes, likes, photo_url } =
    data.data;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[400px]" src={photo_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          name:{name}
          <div className="badge badge-secondary">{likes}</div>
        </h2>
        <p>Experience {years_of_experience} years</p>
        <p>Recipes {num_of_recipes} </p>
        <div className="card-actions justify-end">
         
         <Link to={`/shef/${id}`}  className="btn btn-outline hover:bg-orange-600 w-full text-xl font-semibold">View Recipes</Link>
         
          
        </div>
      </div>
    </div>
  );
};

export default ShefData;
