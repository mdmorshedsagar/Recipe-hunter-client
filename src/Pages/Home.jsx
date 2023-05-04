// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Testimoneal from "./HomepageSection/Testimoneal";
import JoinUs from "./HomepageSection/JoinUs";
import Header from "./HomepageSection/Header";
import ShefData from "./HomepageSection/shefData";

const Home = () => {
  const [shef, setShef] = useState([]);
  useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://chef-recipe-hunter-server-osq5ttqaj-mdmorshedsagar.vercel.app/shef');
        const json = await response.json();
        setShef(json);
      }
      fetchData();
  }, []);
  return (
    <div className="my-container2">
      <Header></Header>
      <div className="mt-[36px]">
        <div className="text-center">
        <h1 className="text-5xl font-bold ">SHEFS</h1>
        <p className="text-xl my-2">There are six shef details card</p>
        </div>
      <div className="my-[40px] lg:mx-[40px] grid md:grid-cols-2  lg:grid-cols-3 gap-5">
        {shef.map((data) => (
          <ShefData key={data.id} data={data}></ShefData>
        ))}
      </div>
      </div>
      

      <Testimoneal></Testimoneal>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
