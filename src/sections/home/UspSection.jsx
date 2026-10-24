import React from "react";

export const UspSection = () => {
  return (
    <div className="bg-secondary pad text-img w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center text-white mb-12">
          <span class="block watermark1 font-dm-sans max-sm:hidden top-6 text-center left-0 w-full ">Our Approach</span>
          <h2 className="text-white relative z-3">A People-First Approach to Every Partnership</h2>
          <p className=" mt-2 text-lg">
            We believe better workforce decisions begin with understanding people, business goals, and the value of a strong professional relationship.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
          <div className="relative  rounded-3xl rounded-tr-[150px] bg-primary p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 usp-img">
            <div className="usp_icon absolute right-0 top-0.5 z-10">
              <img
                src="/images/jigsaw.png"
                alt="Fit-icon"
                className="h-auto w-[80px] rounded-full bg-secondary p-4 shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mr-15">
              Finding the Right Fit
            </h3>
            <p className="mt-2 text-black text-lg">
              Matching skilled candidates with the right workforce opportunities.            </p>
          </div>
          <div className="relative  rounded-3xl rounded-tr-[150px] bg-primary p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 usp-img">
            <div className="usp_icon absolute right-0 top-0.5 z-10">
              <img
                src="/images/work.png"
                alt="Operations-icon"
                className="h-auto w-[80px] rounded-full bg-secondary p-4 shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mr-8">
              Improving HR Operations            </h3>
            <p className="mt-2 text-black text-lg">
              Supporting structured payroll, documentation, and compliance processes.            </p>
          </div>
          <div className="relative o rounded-3xl rounded-tr-[150px] bg-primary p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 usp-img">
            <div className="usp_icon absolute right-0 top-0.5 z-10">
              <img
                src="/images/people.png"
                alt="Opportunities-icon"
                className="h-auto w-[80px] rounded-full bg-secondary p-4 shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mr-8">
              Connecting Career Opportunities            </h3>
            <p className="mt-2 text-black text-lg">
              Connecting professionals with careers that match their skills and ambitions.
            </p>
          </div>
          <div className="relative  rounded-3xl rounded-tr-[150px] bg-primary p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 usp-img">
            <div className="usp_icon absolute right-0 top-0.5 z-10">
              <img
                src="/images/job-search.png"
                alt="job-seekers-icon"
                className="h-auto w-[80px] rounded-full bg-secondary p-4 shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mr-8">
              Empowering Job Seekers
            </h3>
            <p className="mt-2 text-black text-lg">
              Helping job seekers find suitable roles and grow professionally.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
