// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const SingleShefData = () => {
  const singleShefData = useLoaderData();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch(
      "https://chef-recipe-hunter-server-osq5ttqaj-mdmorshedsagar.vercel.app/recipe"
    )
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  const {
    id,
    name,
    years_of_experience,
    num_of_recipes,
    likes,
    description,
    photo_url,
  } = singleShefData;

  const recipes = recipe.filter((d) => d.category_id == id);

  return (
    <div>
      <div className="grid grid-cols-2 bg-gradient-to-r from-zinc-300 to-stone-100 py-4">
        <img
          src={photo_url}
          className="max-w-sm rounded-full h-[500px] shadow-2xl lg:order-2  w-full mx-auto "
        />
        <div className=" lg:order-1 mx-auto my-auto ">
          <h1 className="text-5xl font-bold text-orange-600 my-5">
            {" "}
            Name: {name}.
          </h1>
          <p className="text-xl">
            <span className="text-xl font-bold">Decription: </span>{" "}
            {description}.
          </p>
          <p className="text-2xl">
            <span className="text-xl font-bold">Experience:</span>{" "}
            {years_of_experience} years of experience.
          </p>
          <p className="text-2xl">
            <span className="text-xl font-bold">Recipe:</span> {num_of_recipes}{" "}
            delicious food recipe.
          </p>
          <p className="text text-orange-700 font-bold">{likes} likes</p>
        </div>
      </div>

      <div>
        {recipes.map((data) => <Recipe key={data.id} data={data} ></Recipe> )}
      </div>
    </div>
  );
};

export default SingleShefData;
