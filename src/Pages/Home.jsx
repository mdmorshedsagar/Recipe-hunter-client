// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import bg_image from "../assets/top-view-fully-set-rustic-260nw-772641289.webp";
import manImage from '../assets/img_1.png'
const Home = () => {
  return (
    <div >
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


<div className="text-center mt-5 pt-5">
    <p className="text-orange-600 ">
    TESTIMONIAL
    </p>
    <h1 className="text-5xl font-bold py-3">What they say</h1>
    <p className="w-[650px] mx-auto text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
</div>


      <div className="hero min-h-screen md:p-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={manImage} className="md:w-[600px] md:h-[500px]" />
    <div className="md:w-[50%] md:p-5 md:m-5">
      <h1 className="text-xl font-bold text-orange-600">JOIN US</h1>
      <p className= "text-6xl py-6 font-semibold"> Lets start sharing your awesome recipes</p>
      <button className="px-5 py-2 text-white text-xl font-bold bg-orange-600">Join now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
