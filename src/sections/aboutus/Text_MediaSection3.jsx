import React from "react";

export const Text_MediaSection3 = () => {
  return (
    <div className="w-full  bg-primary">
      <div className="max-w-[1400px] flex mx-auto gap-5 lg:gap-20 max-lg:flex-col-reverse md:gap-6 pad animate-fade-in-scale">
        <div className="my-auto lg:w-1/2 relative ">
          <h2 className="text-secondary relative z-10">Reliable HR Solutions for a Stronger Workplace.</h2>
          <p className="mt-4 text-lg ">
            Managing people involves more than recruitment. We support organizations with structured payroll management, HR processes, policy development, and statutory compliance assistance, helping businesses organize essential HR responsibilities and focus on their growth.
            <br />
            <span className="text-lg font-bold">
              Our core services:
            </span>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-lg">
              <li>Payroll management and processing support.</li>
              <li>HR policy formulation and process improvement.</li>
              <li>Statutory compliance support and HR consulting.</li>
            </ul>
          </p>
        </div>
        <div className="lg:w-1/2 relative py-10">
          <img
            src="/images/laptop-documents.jpg"
            alt="Making Presentation"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/talking-job-interview.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -left-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>
        </div>

      </div>
    </div>
  );
};
