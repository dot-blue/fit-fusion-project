import React from "react";

import perk1 from "../assets/perk1.svg";
import perk2 from "../assets/perk2.svg";
import perk3 from "../assets/perk3.svg";

function OurMethod() {
  return (
    <div
      className=" bg-slate-50  w-full
    "
    >
      <div className="max-w-[1240px] m-auto pt-6 pb-8">
        <h2 className="text-4xl font-bold py-6 px-4">
          FitFusion method really works.{" "}
        </h2>

        <div className="flex flex-col  md:flex-row  gap-4 p-6">
          <div className=" flex-1">
            <div className=" flex flex-col h-full bg-purple-100  rounded-md	drop-shadow-md	p-6">
              <img src={perk1} alt="perk1" className="h-40" />
              <p className="text-xl font-bold py-2">
                Tailored to each individual
              </p>
              <p className="h-1/3 py-2">
                Our team of experts will work with you to create a personalized
                workout plan and nutrition plan based on your specific goals and
                needs
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className=" flex flex-col h-full bg-purple-100  rounded-md 	drop-shadow-md	p-6">
              <img src={perk2} alt="perk2 " className="h-40" />{" "}
              <p className="text-xl font-bold py-2">Supportive community</p>
              <p className="h-1/3 py-2">
                Losing weight can be a tough journey, but you don't have to go
                it alone. Our community of clients and trainers offer support
                and motivation to help you stay on track and reach your goals.{" "}
              </p>
            </div>
          </div>

          <div className=" flex-1 ">
            <div className=" flex flex-col h-full bg-purple-100  rounded-md	drop-shadow-md	p-6">
              <img src={perk3} alt="perk3" className="h-40" />
              <p className="text-xl font-bold py-2">Challenging workouts</p>
              <p className="h-1/3 py-2">
                Our workouts are challenging, but achievable: We believe in
                pushing our clients to their limits, but not to the point of
                burnout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMethod;
