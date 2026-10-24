import React from "react";

export const Text_MediaSection2 = () => {
  return (
    <div className="bg-secondary pad text-img">
      <div className="max-w-[1400px] mx-auto flex mx-auto gap-5 lg:gap-20 md:gap-6 max-lg:flex-col">
        <div className="lg:w-1/2 relative">
          <img
            src="/images/successful-teamwork.jpg"
            alt="Making Presentation"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/working-together-office.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -right-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>
        </div>
        <div className="my-auto lg:w-1/2">
          <h2 className="text-white font-bold">Why Partner with LIORA HR</h2>
          <p className="mt-4 text-lg text-white">
            Your people strategy deserves a partner who thinks as carefully
            about culture as cost. Our consultants prioritise listening,
            analysing your objectives before tailoring solutions that add
            measurable value. We screen candidates beyond CVs, validate skills,
            mindset, and alignment to your goals. In payroll and compliance,
            meticulous processes and up-to-date knowledge minimise risk. Clear
            reporting keeps you informed, while responsive support means
            questions never linger. The result is an organised, future-ready HR
            foundation that empowers confident decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};
