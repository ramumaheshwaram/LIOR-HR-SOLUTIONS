import React from "react";

export const IntroSection = () => {
  return (
    <div className="w-full  bg-primary intro-img">
      <div className="pt-16 max-w-[1400px] mx-auto pad">
        <img src="/images/intro.png" className="w-15 mx-auto" />
        <span className="block text-xl text-center mx-auto mt-8 font-bold">CONNECTING TALENT. CREATING POSSIBILITIES.</span>
        <p className="text-2xl align-middle text-center mt-4 ">
          We partner with forward-thinking organisations to source the right
          talent, simplify payroll, navigate statutory requirements, and refine
          HR processes, ensuring every people decision supports long-term growth
          and a stronger workforce strategy.
        </p>
      </div>
    </div>
  );
};
