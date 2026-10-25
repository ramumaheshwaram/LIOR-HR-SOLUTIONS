import React from "react";

export const IntroSection = () => {
  return (
    <div className="w-full  bg-primary intro-img">
      <div className="pt-16 max-w-[1400px] mx-auto pad">
        <img src="/images/intro.png" className="w-15 mx-auto" />
        <p className="text-2xl align-middle text-center mt-4 ">
          From permanent recruitment and payroll processing to statutory compliance and advisory support, we deliver integrated, people-focused services that remove administrative burden, reduce risk, and create room for sustainable growth within organisations.
        </p>
      </div>
    </div>
  );
};
