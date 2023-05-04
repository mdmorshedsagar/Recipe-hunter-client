// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
const Recipe = (data) => {
  const { recipe_image, recipe_name, cooking_method, description, rating } =
    data.data;
  const [decibled, setDecibled] = useState(false);
  const handleFavourite = () => {
    toast("item checked sucessfully", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setDecibled(true);
  };

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl lg:my-[50px] lg:mx-[80px]">
        <figure>
          <img
            className="lg:h-[400px] lg:w-[350px]"
            src={recipe_image}
            alt="Album"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-4xl">Recipe name: {recipe_name}</h2>
          <h2 className="card-title text-2xl">
            Recipe method: {cooking_method}
          </h2>
          <p className="text-xl lg:w-[580px]">{description}</p>
          <div className="card-actions flex justify-between items-center ">
            <div className="flex gap-2 items-center">
              {" "}
              <ReactStars
                count={5}
                value={rating}
                edit={false}
                size={35}
                isHalf={true}
                emptyIcon={<FaStar></FaStar>}
                halfIcon={<FaStar></FaStar>}
                fullIcon={<FaStar></FaStar>}
                activeColor="#ffd700"
              />
              <h2>{rating}</h2>
            </div>
            <button
              onClick={handleFavourite}
              disabled={decibled}
              className="btn btn-primary"
            >
              Favourite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
