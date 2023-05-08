import React from "react";
import {
  AiFillPhone,
  AiFillLinkedin,
  AiTwotoneMail,
  AiFillInstagram,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#867070] mt-20 md:px-20 p-5 text-white ">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/256/924/924514.png"
            className="w-20 h-20"
            alt=""
          />
          <span className="footer-title text-xl font-bold font-['cursive']">
            Espresso Emporium
          </span>
          <a className="link link-hover w-1/2 mt-2">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </a>
          <div className="flex gap-3 items-center">
            <BsFacebook className="text-2xl" />
            <AiFillInstagram className="text-3xl" />
            <BsTwitter className="text-2xl " />
            <AiFillLinkedin className="text-3xl text-white" />
          </div>
          <a className="link mt-4 text-2xl font-bold link-hover font-['cursive']">
            Get in Touch
          </a>

          <div className="flex gap-3 text-center">
            <AiFillPhone className="text-2xl" /> +918765645352
          </div>
          <div className="flex gap-3 text-center">
            <AiTwotoneMail className="text-2xl" /> info@gmail.com
          </div>
          <div className="flex gap-3 text-center">
            <HiLocationMarker className="text-2xl" /> 72, Wall street, King
            Road, Kolkata
          </div>
        </div>
        <div>
          <span className="footer-title mt-3  text-xl font-bold font-['cursive']">
            Contact With Us
          </span>
          <div className="form-control w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full mt-4 pr-16"
              />
            </div>
            <div className="relative mt-4">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
            </div>
            <button className="px-3 w-1/2 mx-auto mt-5  font-bold bg-orange-400 py-2 rounded-2xl font-['cursive']">
              Send Message
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
