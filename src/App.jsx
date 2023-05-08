import React, { useEffect, useState } from "react";
import { AiOutlineCoffee } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
const App = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  console.log(loadedCoffee);

  return (
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
  );
};

export default App;
