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
          <span class="block watermark1 font-dm-sans max-sm:hidden -top-14 text-7xl">Why Choose Us</span>
          <h2 className="text-white font-bold relative z-5">Why Partner with LIORA HR</h2>
          <p className="mt-4 text-lg text-white relative z-5">
            Managing people requires more than filling vacancies or processing payroll. It requires an understanding of your business, your workforce, and the processes that help your organization operate effectively.

            LIORA HR SOLUTIONS brings recruitment and HR support together to help businesses approach workforce challenges with greater clarity and confidence. From identifying suitable candidates to supporting payroll, compliance coordination, and HR processes, we focus on solutions that align with your operational needs.

            For job seekers, we aim to make career connections more meaningful. For employers, we work to make talent acquisition and HR support more organized, practical, and people focused.
          </p>
        </div>
      </div>
    </div>
  );
};
