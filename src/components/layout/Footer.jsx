import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-secondary">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-12 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <NavLink to="/">
              <img
                src="/images/Liora-hr-solutions-logo.png"
                alt="Liora HR Solutions"
                className="h-26 w-60 object-contain"
              />
            </NavLink>
          </div>

          {/* Address Column */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-secondary">Address</h3>
            <address className="not-italic leading-relaxed text-secondary text-lg">
              <p>Hyderabad,Telangana</p>
              <p>India</p>
            </address>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-secondary">Contact</h3>
            <div className="space-y-2 text-secondary">
              <p>
                <span className="font-bold text-lg">Phone:</span>{" "}
                <Link
                  to="tel:+917842639975"
                  className="underline underline-offset-2 transition-opacity hover:text-secondary hover:no-underline"
                >
                  78426 39975
                </Link>
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <Link
                  to="mailto:guntrupoojarani@gmail.com"
                  className="underline underline-offset-2 transition-opacity hover:text-secondary hover:no-underline"
                >
                  guntrupoojarani@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-12 border-t border-black/20" />

        {/* Bottom Section */}
        <div className="text-center text-lg sm:text-base text-secondary">
          <span>LIORA HR SOLUTIONS © All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
