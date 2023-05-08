import React, { useEffect, useState } from "react";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { CiCoffeeBean } from "react-icons/ci";
import { FaBitbucket } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
const App = () => {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  console.log(loadedCoffee);

  return (
    <>
      <div className="p-6 h-[500px] bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_960_720.jpg')]">
        <div className=" items-center flex ">
          <div className="m-40 ms-52">
            <h2 className="ms-36 text-4xl font-bold text-center font-['cursive'] text-white">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="w-3/4 ms-52 text-white mt-3">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="ms-52 font-bold text-xl text-center px-2 py-1 mt-8 bg-orange-300 rounded-lg font-['cursive']">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="md:px-20 gap-5 grid grid-cols-1 md:grid-cols-4 pb-5 mt-16 p-4">
        <div className="shadow-2xl shadow-[#867070] p-4">
          <AiOutlineCoffee className="text-5xl text-[#867070] " />
          <h2 className="text-3xl font-bold mt-4  font-['cursive'] text-[#867070]">
            Awesome Aroma
          </h2>
          <p className="mt-2 font-['cursive']  text-[#867070]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="shadow-2xl shadow-[#867070] p-4">
          <BsFillBalloonHeartFill className="text-5xl text-[#867070] " />
          <h2 className="text-3xl font-bold mt-4  font-['cursive'] text-[#867070]">
            High Quality{" "}
          </h2>
          <p className="mt-2 font-['cursive']  text-[#867070]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="shadow-2xl shadow-[#867070] p-4">
          <CiCoffeeBean className="text-5xl text-[#867070] " />
          <h2 className="text-3xl font-bold mt-4  font-['cursive'] text-[#867070]">
            Pure Grades
          </h2>
          <p className="mt-2 font-['cursive']  text-[#867070]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="shadow-2xl shadow-[#867070] p-4">
          <FaBitbucket className="text-5xl text-[#867070] " />
          <h2 className="text-3xl font-bold mt-4  font-['cursive'] text-[#867070]">
            Proper Roasting
          </h2>
          <p className="mt-2 font-['cursive']  text-[#867070]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
      <div className="md:px-20 pb-5 mt-16 p-4 bg-[#F5EBEB]">
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
      <div className="md:mx-20  p-4 mt-14">
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
