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
        <div className="my-auto lg:w-1/2 relative">
          <h2 className="text-white font-bold relative z-5">The Right People Make All the Difference.</h2>
          <p className="mt-4 text-lg text-white relative z-5">
            The Right People Make All the Difference.
            We partner with businesses to identify suitable talent and build capable teams aligned with their goals. From permanent recruitment to HR consulting, we provide practical, people-focused solutions that help organizations improve their hiring processes and strengthen their workforce.
            <br />
            <span className="text-lg text-white font-bold">
              How we support your business:
            </span>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-white text-lg">
              <li>Permanent recruitment and talent acquisition.</li>
              <li>Candidate screening and role alignment.</li>
              <li>HR consulting and workforce support.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
