import React from "react";

export const Text_MediaSection4 = () => {
  return (
    <div className="bg-secondary pad text-img">
      <div className="max-w-[1400px] mx-auto flex mx-auto gap-5 lg:gap-20 md:gap-6 max-lg:flex-col">
        <div className="lg:w-1/2 relative">
          <img
            src="/images/informal-colleagues.jpg"
            alt="informal-colleagues"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/job-applicant-interview.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -right-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>
        </div>
        <div className="my-auto lg:w-1/2 relative" id="statutory-compliance">
          <span class="block watermark1 font-dm-sans max-sm:hidden -top-14 text-5xl">Statutory Compliance</span>
          <h2 className="text-white font-bold relative z-5">Stay Compliant. Move Forward with Confidence.</h2>
          <p className="mt-4 text-lg text-white relative z-5">
            Keeping up with employment regulations and statutory requirements can be challenging as your business grows. We help you navigate HR compliance with a structured, practical approach, supporting the documentation, processes, and compliance activities relevant to your organisation.

            With a clearer view of your responsibilities and deadlines, you can manage your workforce more confidently while keeping compliance an important part of your business operations.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-white text-lg">
            <li>Support with applicable labour law requirements</li>
            <li>Assistance with statutory records and documentation</li>
            <li>Compliance tracking and deadline coordination</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
