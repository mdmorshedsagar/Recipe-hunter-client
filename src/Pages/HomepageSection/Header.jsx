// eslint-disable-next-line no-unused-vars
import React from 'react';
import bg_image from "../../../public/top-view-fully-set-rustic-260nw-772641289.webp";
const Header = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[50rem]">
            <h1 className="mb-5 text-5xl font-bold">no matter how you cook, Yumma has many the recipes</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className=" btn btn-lg bg-orange-600">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Header;