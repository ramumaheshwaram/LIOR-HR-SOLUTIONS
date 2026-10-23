import React from "react";
import { Link } from "react-router-dom";

export const PodsSection = () => {
  return (
    <div className="w-full bg-primary">
      <div className="pad max-w-[1400px] mx-auto ">
        <div className="text-center  mb-12">
          <h2 className="text-secondary mt-o">
            Our People-First Operating Principles
          </h2>
          <p className=" mt-2 text-lg">
            Everything we do centres on respect, transparency, and delivering
            tangible business results daily.
          </p>
        </div>
        <div className="flex grid grid-cols-4 max-lg:grid-cols-1 gap-6">
          <div className="bg-secondary rounded-2xl">
            <img
              src="/images/Hero.jpg"
              alt="podimg"
              className="rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="p-6">
              <h3 className="text-white font-bold">People-First Approach</h3>
              <p className="text-white text-lg">
                Human needs guide every solution.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl">
            <img
              src="/images/Hero.jpg"
              alt="podimg"
              className="rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="p-6">
              <h3 className="text-white font-bold">People-First Approach</h3>
              <p className="text-white text-lg">
                Human needs guide every solution.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl">
            <img
              src="/images/Hero.jpg"
              alt="podimg"
              className="rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="p-6">
              <h3 className="text-white font-bold">People-First Approach</h3>
              <p className="text-white text-lg">
                Human needs guide every solution.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl">
            <img
              src="/images/Hero.jpg"
              alt="podimg"
              className="rounded-tr-2xl rounded-tl-2xl"
            />
            <div className="p-6">
              <h3 className="text-white font-bold">People-First Approach</h3>
              <p className="text-white text-lg">
                Human needs guide every solution.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-lg font-semibold text-black transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
