import React from "react";
import { Link } from "react-router-dom";

export const PodsSection = () => {
  return (
    <div className="w-full bg-primary">
      <div className="pad max-w-[1400px] mx-auto ">
        <div className="text-center  mb-12 relative">
          <span class="block watermark font-dm-sans max-sm:hidden -top-16 text-center left-0 w-full text-8xl ">Our Services</span>
          <h2 className="text-secondary mt-o relative z-4">
            Our Services. Your Workforce Advantage.
          </h2>
          <p className=" mt-2 text-lg  relative z-4">
            rom finding the right talent to supporting essential HR operations, we deliver practical people solutions for professionals and growing businesses.
          </p>
        </div>
        <div className="flex grid grid-cols-4 max-lg:grid-cols-1 gap-6">
          <div className="bg-secondary rounded-2xl flex flex-col h-full">
            <img
              src="/images/woman-selecting.jpg"
              alt="woman-selecting"
              className="rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white font-bold">Talent Acquisition </h3>
              <p className="text-white text-lg mt-3 mb-4">
                Find qualified candidates who match your roles, skills, and company culture.
              </p>
              <Link
                to="/contact"
                className=" inline-flex items-left justify-left rounded-md bg-primary px-7 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-black mt-auto"
              >
                Explore Recruitment →
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl flex flex-col h-full">
            <img
              src="/images/top-view-payroll.jpg"
              alt="payroll"
              className="rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white font-bold">Payroll Management</h3>
              <p className="text-white text-lg mt-3 mb-4">
                Simplify payroll processing through organized coordination and reliable business-focused support.              </p>
              <Link
                to="/contact"
                className=" inline-flex items-left justify-left rounded-md bg-primary px-7 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-black mt-auto"
              >
                Explore Payroll →
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl flex flex-col h-full">
            <img
              src="/images/informal-colleagues.jpg"
              alt="informal-colleagues"
              className="rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white font-bold">Statutory Compliance</h3>
              <p className="text-white text-lg mt-3 mb-4">
                Manage employment compliance through structured documentation and regulatory support services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-left justify-left rounded-md bg-primary px-7 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-black mt-auto"
              >
                Explore Support →
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl flex flex-col h-full">
            <img
              src="/images/smiling-divers.jpg"
              alt="HR-Consulting"
              className="rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="p-6 flex flex-col flex-grow ">
              <h3 className="text-white font-bold">HR Consulting</h3>
              <p className="text-white text-lg mt-3 mb-4">
                Improve people management with practical guidance and streamlined HR processes.
              </p>
              <Link
                to="/contact"
                className=" inline-flex items-left justify-left rounded-md bg-primary px-7 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-black  mt-auto "
              >
                Explore HR Consulting →
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
