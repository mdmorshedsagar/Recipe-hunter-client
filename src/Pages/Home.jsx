// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Testimoneal from "./HomepageSection/Testimoneal";
import JoinUs from "./HomepageSection/JoinUs";
import Header from "./HomepageSection/Header";
import ShefData from "./HomepageSection/shefData";

const Home = () => {
  const [shef, setShef] = useState([]);
   useEffect(()=>{
    fetch('https://chef-recipe-hunter-server-osq5ttqaj-mdmorshedsagar.vercel.app/shef')
    .then(res => res.json())
    .then(data => setShef(data))
   },[])
  return (
    <div >
<Header></Header>
<div className="my-[40px] lg:mx-[40px] grid md:grid-cols-2  lg:grid-cols-3 gap-5">
{
  shef.map((data) => <ShefData key={data.id} data={data}></ShefData>  )
}
</div>



<Testimoneal></Testimoneal>
<JoinUs></JoinUs>

     
    </div>
  );
};

export default Home;
