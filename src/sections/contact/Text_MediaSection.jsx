import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactForm } from "../../components/Hooks/ContactForm";
import { Link } from "react-router-dom";

export const Text_MediaSection = () => {
  return (
    <div className="w-full  bg-primary border-b  border-gray-300">
      <div className="max-w-[1400px] flex mx-auto gap-5 lg:gap-20 max-lg:flex-col-reverse md:gap-6 pad pt-2  ">
        <div className="my-auto lg:w-1/2 relative  ">
          <h2 className="text-secondary relative z-10">Talk Directly To Our Team
          </h2>
          <p className="mt-4 text-lg ">
            Whether you need permanent recruitment, payroll management support, or advice on statutory compliance, we are ready to listen and provide people-centred, practical guidance.
          </p>
          <h3 className="text-black  font-bold mt-5 mb-5">
            Address
          </h3>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-black text-xl shrink-0" />
            <span className="text-lg">Hyderabad, Telangana, India</span>
          </div>
          <h3 className="text-black  font-bold mt-5 mb-5">
            Phone
          </h3>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-black text-xl shrink-0" />
            <Link
              to="tel:+917842639975"
              className="underline underline-offset-2 transition-opacity hover:text-secondary hover:no-underline text-lg font-normal"
            >
              78426 39975
            </Link>
          </div>
          <h3 className="text-black  font-bold mt-5 mb-5">
            E-Mail
          </h3>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-black text-xl shrink-0" />
            <Link
              to="mailto:info@liorasolutions.in"
              className="underline underline-offset-2 transition-opacity hover:text-secondary hover:no-underline text-lg font-normal"
            >
              info@liorasolutions.in
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 relative py-10">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};
