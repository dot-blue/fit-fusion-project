import React from "react";
import logo from "../assets/FitFusion.svg";
import fb from "../assets/fb-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import ig from "../assets/instagram-icon.svg";
import tiktok from "../assets/tiktok-icon.svg";

function Footer() {
  return (
    <div className=" bg-purple-400 flex flex-col justify-center px-4 py-6">
      <div className=" max-w-[1240px] flex flex-col md:flex-row  items-center justify-between  ">
        <div className="md:basis-1/3  ">
          <p className="text-xl font-bold py-2 md:text-3xl ">
            Stay ahead of the game{" "}
          </p>
          <p className="">
            Subscribe to our weekly newsletter and get access to special
            discounts and promotions
          </p>
        </div>

        <div className="bg-gray-200/40 p-6 my-4 flex flex-col ">
          <div className="flex   ">
            {" "}
            <input
              type="text"
              placeholder="Email address"
              className="h-10 pl-4 "
            />
            <button className="bg-purple-500 px-4 text-white">Subscribe</button>
          </div>

          <div className="flex pt-2 gap-2">
            <input type="checkbox" className="" />
            <p className="text-xs">
              I agree to receive marketing email from FitFusion.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between   items-center">
        <img src={logo} alt="" className="h-6" />

        <div className="flex gap-4 items-center">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={twitter} alt="" />
          <img src={tiktok} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
