import React from "react";

export const Text_MediaSection1 = () => {
  return (
    <div className="w-full  bg-primary">
      <div className="max-w-[1400px] flex mx-auto gap-5 lg:gap-20 max-lg:flex-col-reverse md:gap-6 pad-bot">
        <div className="my-auto lg:w-1/2 relative">
          <span class="block watermark font-dm-sans max-sm:hidden -top-12 text-6xl">HR Policies</span>
          <h2 className="text-secondary relative z-10">Clear Policies. Better Workplaces.</h2>
          <p className="mt-4 text-lg ">
            A well-managed workplace starts with clear expectations. We help businesses develop and organise HR policies that explain workplace standards, employee responsibilities, and internal procedures in a simple, consistent way.

            From leave and attendance to workplace conduct and employee grievance procedures, we help you establish guidelines that bring clarity to everyday working relationships and support a more transparent workplace culture.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-lg">
            <li>HR policy drafting and documentation</li>
            <li>Leave, attendance, and workplace conduct policies</li>
            <li>Employee guidelines and internal procedures</li>
          </ul>
        </div>
        <div className="lg:w-1/2 relative py-10">
          <img
            src="/images/successful-teamwork.jpg"
            alt="woman-selecting"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/talking-job-interview.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -left-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>

        </div>

      </div>
    </div>
  );
};
