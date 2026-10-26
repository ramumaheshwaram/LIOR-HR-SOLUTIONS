import React from "react";

export const Text_MediaSection1 = () => {
  return (
    <div className="w-full  bg-primary">
      <div className="max-w-[1400px] flex mx-auto gap-5 lg:gap-20 max-lg:flex-col-reverse md:gap-6 pad-bot">
        <div className="my-auto lg:w-1/2 relative ">
          <h2 className="text-secondary relative z-10">Your Career. Your Potential. Your Next Opportunity.</h2>
          <p className="mt-4 text-lg ">
            We help job seekers discover opportunities that match their skills, experience, and career ambitions. Our focus is on connecting the right candidates with organizations where they can grow, contribute, and build a rewarding professional future.
            <br />
            <span className="text-lg font-bold">
              Our support includes:
            </span>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-lg">
              <li>Connecting candidates with relevant job opportunities.</li>
              <li>Helping match skills and experience to suitable roles.</li>
              <li>Supporting a smoother recruitment journey.</li>
            </ul>
          </p>
        </div>
        <div className="lg:w-1/2 relative py-10">
          <img
            src="/images/mina-rad.jpg"
            alt="Making Presentation"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/vitaly-gariev.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -left-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>
        </div>

      </div>
    </div>
  );
};
