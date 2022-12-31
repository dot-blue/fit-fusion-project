import React from "react";
import logo from "../assets/FitFusion.svg";
import fb from "../assets/fb-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import ig from "../assets/instagram-icon.svg";
import tiktok from "../assets/tiktok-icon.svg";

function Footer() {
  return (
    <div className=" bg-slate-100 flex flex-col px-4 py-6 items-center ">
      <div className=" max-w-[1240px]">
        <div className=" max-w-[1240px] flex flex-col md:flex-row  items-center    ">
          <div className="md:basis-2/4 px-4 ">
            <p className="text-xl font-bold py-2 md:text-3xl ">
              Stay ahead of the game{" "}
            </p>
            <p className="">
              Subscribe to our weekly newsletter and get access to special
              discounts and promotions
            </p>
          </div>

          <div className=" p-6 my-4 flex flex-col  bg-purple-100/80 rounded-md md:basis-2/4">
            <div className="flex justify-between gap-2 ">
              {" "}
              <input
                type="text"
                placeholder="Email address"
                className="h-10 pl-4 rounded-md w-full"
              />
              <button className="bg-purple-500 px-4 text-white rounded-md">
                Subscribe
              </button>
            </div>

            <div className="flex pt-2 gap-2">
              <input type="checkbox" className="" />
              <p className="text-xs">
                I agree to receive marketing email from FitFusion.
              </p>
            </div>
          </div>
        </div>
        <div className="flex  px-4 justify-between">
          <div>
            {" "}
            <img src={logo} alt="" className="h-6" />
          </div>

          <div className="flex gap-4 items-center">
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={twitter} alt="" />
            <img src={tiktok} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
