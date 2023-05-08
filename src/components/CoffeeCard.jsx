import React from "react";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BsPenFill } from "react-icons/bs";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const deleteCoffee = (id) => {
    swal({
      title: "Are you sure to delete?",
      text: "Once deleted, you will not be able to recover this coffee",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // swal("Poof! Your imaginary file has been deleted!", {
        //   icon: "success",
        // });

        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Okay,Coffee has been deleted🙂", {
                icon: "success",
              });
            }
            const remainingCoffees = coffees.filter(
              (coffee) => coffee._id !== id
            );
            setCoffees(remainingCoffees);
          });
      }
    });
  };

  return (
    <div className=" ">
      <div className="card card-side bg-[#D5B4B4] rounded-2xl p-7 shadow-xl">
        <figure>
          <img
            src={photo}
            className="w-[100px] h-[100px] rounded"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name:{name}</h2>
          <div className="flex items-center gap-4">
            <p>Quantity:{quantity}</p>
            <p>Supplier:{supplier}</p>
            <p>Taste:{taste}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to={`/showcoffee/${_id}`}>
              <button className="bg-orange-500 text-white px-2 py-1 rounded-lg text-3xl">
                <AiFillEye />
              </button>
            </Link>
            <Link to={`/updatecoffee/${_id}`}>
              <button className="bg-[#867070] text-white px-2 py-1 rounded-lg text-3xl">
                <BsPenFill />
              </button>
            </Link>
            <button
              onClick={() => deleteCoffee(_id)}
              className="bg-red-500 px-2 py-1 rounded-lg text-white text-3xl"
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
