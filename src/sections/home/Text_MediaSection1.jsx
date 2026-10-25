import React from "react";

export const Text_MediaSection1 = () => {
  return (
    <div className="w-full  bg-primary">
      <div className="max-w-[1400px] flex mx-auto gap-5 lg:gap-20 max-lg:flex-col-reverse md:gap-6 pad-bot">
        <div className="my-auto lg:w-1/2 relative ">
          <span class="block watermark font-dm-sans max-sm:hidden -top-12 text-8xl">About Us</span>
          <p className="text-xl text-black mb-3 font-bold relative z-5">MORE ABOUT LIORA</p>
          <h2 className="text-secondary relative z-10">People Solutions That Move Businesses Forward</h2>
          <p className="mt-4 text-lg ">
            Every successful organization starts with the right people. At LIORA HR SOLUTIONS, we help businesses build capable teams and support professionals in finding opportunities that match their skills and ambitions.

            Our approach combines people-focused recruitment with practical HR support, helping organizations streamline workforce operations, manage essential HR functions, and create stronger working environments.

            Whether you are searching for your next career opportunity or building a team for the future, we work to understand your needs and deliver solutions that make a difference.
          </p>
        </div>
        <div className="lg:w-1/2 relative py-10">
          <img
            src="/images/laptop-documents.jpg"
            alt="Making Presentation"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/talking-job-interview.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -left-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>
          <div className="absolute p-5 bg-secondary rounded-2xl -right-10 top-15 max-md:w-[30%] max-md:-right-5 max-md:p-3 max-sm:hidden">
            <span className=" block text-5xl text-gold font-bold text-center">10+</span>
            <p className="text-lg text-white text-center mt-4">Year of experience</p>
          </div>
        </div>

      </div>
    </div>
  );
};
