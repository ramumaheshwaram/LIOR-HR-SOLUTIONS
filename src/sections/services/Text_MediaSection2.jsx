import React from "react";

export const Text_MediaSection2 = () => {
  return (
    <div className="bg-secondary pad text-img">
      <div className="max-w-[1400px] mx-auto flex mx-auto gap-5 lg:gap-20 md:gap-6 max-lg:flex-col">
        <div className="lg:w-1/2 relative">
          <img
            src="/images/woman-selecting.jpg"
            alt="Making Presentation"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/working-together-office.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -right-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>
        </div>
        <div className="my-auto lg:w-1/2 relative" id="talent-acquisition">
          <span class="block watermark1 font-dm-sans max-sm:hidden -top-14 text-6xl">Talent Acquisition</span>
          <h2 className="text-white font-bold relative z-5">Finding the Right People for Your Business</h2>
          <p className="mt-4 text-lg text-white relative z-5">
            Great businesses are built by the right people. At LIORA HR SOLUTIONS, we help you find talented professionals who bring the right skills, experience, and mindset to your team. From understanding your hiring needs to identifying suitable candidates, we make recruitment more focused, efficient, and straightforward.

            Our goal is simple: to connect you with people who can contribute to your business today and grow with you tomorrow.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-white text-lg">
            <li>Candidate sourcing and screening</li>
            <li>Recruitment tailored to your requirements</li>
            <li>Support throughout the hiring process</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
