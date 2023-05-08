import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Footer from "../shared/Footer";

const ShowCoffee = () => {
  const eachCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    eachCoffee;
  return (
    <>
      <div className="md:mx-36  p-4 bg-[#E4D0D0]">
        <Link
          to="/"
          className="flex gap-2 items-center font-bold text-white rounded-lg w-[200px] px-3 py-2 bg-[#643A6B] "
        >
          <AiOutlineArrowLeft className="text-2xl" />
          Back to Home
        </Link>
        <h3 className="font-['cursive'] text-center font-bold text-5xl">
          Details of {name}{" "}
        </h3>
        <div className="card text-white w-1/2 mx-auto mt-5 card-side bg-[#6D5D6E] rounded-2xl p-7 shadow-xl">
          <figure>
            <img
              src={photo}
              className="w-[200px] h-[200px] bg-white p-4 rounded-full"
              alt="Movie"
            />
          </figure>
          <div className="card-body bg-white rounded-2xl ms-4  text-[#6D5D6E] font-bold ">
            <h2 className="card-title px-7">Name:{name}</h2>
            <div className="space-y-2 px-7">
              <p>Quantity:{quantity}</p>
              <p>Supplier:{supplier}</p>
              <p>Taste:{taste}</p>
              <p>Category:{category}</p>
              <p>Details:{details}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ShowCoffee;
