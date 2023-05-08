import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
import swal from "sweetalert";
import Footer from "../shared/Footer";
const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const taste = event.target.taste.value;
    const category = event.target.category.value;
    const details = event.target.details.value;
    const photo = event.target.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // add newCoffee to server
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Wahhhhhh!!!", "New Coffee Added💓", "success");
        }
      });
  };

  return (
    <>
      <div className="md:mx-20  p-4 bg-[#E4D0D0]">
        <Link
          to="/"
          className="flex gap-2 items-center font-bold text-white rounded-lg w-[200px] px-3 py-2 bg-[#643A6B] "
        >
          <AiOutlineArrowLeft className="text-2xl" />
          Back to Home
        </Link>
        <h2 className=" font-bold text-center font-['cursive'] text-[#867070] text-4xl mt-4">
          Add New Coffee
        </h2>
        <p className="w-3/4 mx-auto mt-4  ">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        {/* 1st row */}
        <form onSubmit={handleAddCoffee}>
          <div className="flex gap-5 font-medium">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="">Available quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex gap-5 font-medium">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex gap-5 font-medium">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* 4th row */}
          <div className=" gap-5 font-medium">
            <div className="form-control w-full">
              <label className="label">
                <span className="">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter coffee photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add a Coffee"
            className="btn mt-5 font-['cursive'] bg-[#867070] btn-block"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddCoffee;
