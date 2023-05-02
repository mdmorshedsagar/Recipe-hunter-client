// eslint-disable-next-line no-unused-vars
import React from 'react';
import manImage from '../../../public/img_1.png'
const JoinUs = () => {
    return (
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
    );
};

export default JoinUs;