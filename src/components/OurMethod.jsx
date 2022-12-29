import React from "react";

import perk1 from "../assets/perk1.svg";
import perk2 from "../assets/perk2.svg";
import perk3 from "../assets/perk3.svg";

function OurMethod() {
  return (
    <div
      className=" bg-purple-200  w-full transfrom
    "
    >
      <div className="max-w-[1240px] m-auto ">
        <h2 className="text-4xl font-bold py-6 px-4">
          FitFusion method really works.{" "}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 ">
          <div className=" flex flex-col   w-full items-center p-6 ">
            <div className="">
              <p className="text-xl font-bold">Tailored to each individual</p>
              <p className="">
                Our team of experts will work with you to create a personalized
                workout plan and nutrition plan based on your specific goals and
                needs
              </p>
              <img src={perk1} alt="perk1" />
            </div>
          </div>

          <div className=" flex flex-col  w-full items-center p-6">
            <div>
              {" "}
              <p className="text-xl font-bold">Supportive community</p>
              <p>
                Losing weight can be a tough journey, but you don't have to go
                it alone. Our community of clients and trainers offer support
                and motivation to help you stay on track and reach your goals.{" "}
              </p>
              <img src={perk2} alt="perk2" />
            </div>
          </div>

          <div className=" flex flex-col   w-full items-center p-6">
            <div>
              <p className="text-xl font-bold">Challenging workouts</p>
              <p>
                Our workouts are challenging, but achievable: We believe in
                pushing our clients to their limits, but not to the point of
                burnout.
              </p>
              <img src={perk3} alt="perk3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMethod;
