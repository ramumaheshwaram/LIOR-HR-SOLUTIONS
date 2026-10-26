import React from "react";

export const Text_MediaSection5 = () => {
  return (
    <div className="w-full  bg-primary">
      <div className="max-w-[1400px] flex mx-auto gap-5 lg:gap-20 max-lg:flex-col-reverse md:gap-6 pad">
        <div className="my-auto lg:w-1/2 relative " id="hr-consulting">
          <span class="block watermark font-dm-sans max-sm:hidden -top-12 text-6xl">HR Consulting</span>
          <h2 className="text-secondary relative z-10">Practical HR Solutions for a Stronger Workplace</h2>
          <p className="mt-4 text-lg ">
            Every organisation has different people challenges. Whether you're building your HR processes from the ground up or looking to improve the way your team works, LIORA HR SOLUTIONS provides practical HR guidance aligned with your business goals.

            We work with you to understand your challenges, identify opportunities for improvement, and develop people-focused solutions that support a more organised, productive, and positive workplace.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-lg">
            <li>HR process development and improvement</li>
            <li>Employee engagement and people management support</li>
            <li>Guidance on HR practices and organisational needs</li>
          </ul>
        </div>
        <div className="lg:w-1/2 relative py-10">
          <img
            src="/images/people-meeting.jpg"
            alt="HR-Consulting"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/concept-m.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -left-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>

        </div>

      </div>
    </div>
  );
};
