import React from "react";

export const Text_MediaSection3 = () => {
  return (
    <div className="w-full  bg-primary">
      <div className="max-w-[1400px] flex mx-auto gap-5 lg:gap-20 max-lg:flex-col-reverse md:gap-6 pad">
        <div className="my-auto lg:w-1/2 relative " id="payroll-management">
          <span class="block watermark font-dm-sans max-sm:hidden -top-12 text-5xl">Payroll Management</span>
          <h2 className="text-secondary relative z-10">Accurate Payroll. Greater Peace of Mind.</h2>
          <p className="mt-4 text-lg ">
            Your employees work hard for your business, and they deserve a payroll process they can rely on. LIORA HR SOLUTIONS helps simplify payroll management through organised processes, careful calculations, and timely salary processing based on your company's requirements.

            By taking the complexity out of routine payroll tasks, we help your team spend less time on administrative work and more time focusing on business priorities.

          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 text-lg ">
            <li>Monthly salary processing</li>
            <li>Payroll records and payslip management</li>
            <li>Support for payroll-related queries and reporting</li>
          </ul>
        </div>
        <div className="lg:w-1/2 relative py-10">
          <img
            src="/images/top-view-payroll.jpg"
            alt="payroll"
            className="w-full h-auto rounded-lg shadow-lg"
          ></img>
          <img src="/images/financial-adviser.jpg" className="w-[45%] h-auto border-10 border-primary rounded-2xl absolute bottom-10 -left-10 text-media2 max-md:w-[30%] max-md:-left-5 max-sm:hidden"></img>

        </div>

      </div>
    </div>
  );
};
