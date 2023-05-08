import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AiOutlineArrowLeft } from "react-icons/ai";
const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const updateCoffee = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const taste = event.target.taste.value;
    const category = event.target.category.value;
    const details = event.target.details.value;
    const photo = event.target.photo.value;
    const newUpdateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newUpdateCoffee);
    // add newCoffee to server
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          swal("Wow!!!", " Coffee Updated suceefully", "success");
        }
      });
  };

  return (
    <div className="md:mx-20  p-4 bg-[#E4D0D0]">
      <Link
        to="/"
        className="flex gap-2 items-center font-bold text-white rounded-lg w-[200px] px-3 py-2 bg-[#643A6B] "
      >
        <AiOutlineArrowLeft className="text-2xl" />
        Back to Home
      </Link>
      <h2 className=" font-bold text-center font-['cursive'] text-[#867070] text-4xl mt-4">
        Update Existing Coffee Details of
        <span className="text-red-950 tracking-wider"> {name}</span>
      </h2>
      <p className="w-3/4 mx-auto mt-4  ">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      {/* 1st row */}
      <form onSubmit={updateCoffee}>
        <div className="flex gap-5 font-medium">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
                placeholder="Enter coffee photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value=" Update a Coffee"
          className="btn mt-5 font-['cursive'] bg-[#867070] btn-block"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
