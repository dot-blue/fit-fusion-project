import React from "react";
import plusIcon from "../assets/app-section-icon.svg";
import mobileIcon from "../assets/mobile-icon.svg";
import googlePlay from "../assets/google-play.svg";
import appStore from "../assets/app-store.svg";

function MobileApp() {
  return (
    <div className="flex flex-col items-center bg-slate-50">
      <div className="max-w-[1240px] ">
        <div>
          {" "}
          <h2 className="text-2xl md:text-4xl  font-bold pt-6 ml-4 ">
            Discover our mobile app
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-center ">
          <section className="">
            <div className="flex flex-col gap-4 p-4">
              {" "}
              <div className="flex  gap-4 min-h-[100px]">
                <div>
                  <img src={plusIcon} alt="icon" />
                </div>
                <div className="max-w-[80%]">
                  <p className="font-bold">Convenience</p>
                  <p>
                    Access your workouts and track your progress from anywhere,
                    at any time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 min-h-[100px]">
                <div>
                  <img src={plusIcon} alt="icon" className="w-full" />
                </div>

                <div className="max-w-[80%]">
                  <p className="font-bold">Customization</p>
                  <p>
                    Our app allows you to create customized workouts based on
                    your goals, preferences, and available equipment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 min-h-[100px]">
                <div>
                  <img src={plusIcon} alt="icon" />
                </div>
                <div className="max-w-[80%]">
                  <p className="font-bold">Personalization</p>
                  <p>
                    Our app includes a personalized nutrition plan, with options
                    for different dietary needs and preferences.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <img src={mobileIcon} alt="" />
          </section>
        </div>
      </div>

      <div className="max-w-[1240px] flex justify-end gap-6 p-6">
        {" "}
        <img className="h-10 md:h-10" src={appStore} alt="" />{" "}
        <img className="h-10 md:h-10" src={googlePlay} alt="" />
      </div>
    </div>
  );
}

export default MobileApp;
