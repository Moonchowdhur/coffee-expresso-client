import React, { useEffect, useState } from "react";
import { AiOutlineCoffee } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
const App = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  console.log(loadedCoffee);

  return (
    <>
      <div className="md:mx-20  p-4 bg-[#F5EBEB]">
        <h2 className=" font-bold text-center font-['cursive'] text-[#867070] text-4xl mt-4">
          Our Popular Products
        </h2>
        <Link to="/addcoffee">
          <button className=" flex bg-[#867070] rounded-2xl items-center text-xl mx-auto font-bold text-center font-['cursive'] text-white p-3  mt-2">
            Add Coffee
            <AiOutlineCoffee className="text-2xl -mt-1" />
          </button>
        </Link>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></CoffeeCard>
          ))}
        </div>
      </div>
      <div className="md:mx-20  p-4 mt-5">
        <h2 className=" text-4xl font-bold text-center font-['cursive'] text-[#867070]">
          Follow on Instagram
        </h2>
        <div className="grid  pt-9 p-2 grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_960_720.jpg"
            alt=""
            className="w-[400px] rounded-2xl"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_960_720.jpg"
            alt=""
            className="w-[400px] rounded-2xl"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/04/25/08/02/coffee-beans-2258839_960_720.jpg"
            alt=""
            className="w-[400px] rounded-2xl"
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/12/52/coffee-1869647_960_720.jpg"
            alt=""
            className="w-[400px] rounded-2xl"
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/03/26/23/23/starbucks-1281880_960_720.jpg"
            alt=""
            className="w-[400px] rounded-2xl"
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/12/46/coffee-1869599_960_720.jpg"
            alt=""
            className="w-[400px] rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default App;
