import React from "react";

export const IntroSection = () => {
  return (
    <div className="w-full  bg-primary intro-img">
      <div className="pt-16 max-w-[1400px] mx-auto pad">
        <img src="/images/intro.png" className="w-15 mx-auto" />
        <p className="text-2xl align-middle text-center mt-4 ">
          Liora HR Solutions connects forward-thinking organisations with professionals who match their culture, skills, and ambitions, ensuring every hire accelerates productivity while supporting long-term strategic objectives.
        </p>
      </div>
    </div>
  );
};
