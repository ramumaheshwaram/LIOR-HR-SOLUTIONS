import React from 'react'
import { Link } from 'react-router-dom'

export const CtaSection = () => {
  return (
    <div className="relative h-[500px] w-full bg-[url('/images/Hero.jpg')] bg-cover bg-top bg-no-repeat">
      {/* Centering container over the background image */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70 px-4">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
          <h2 className="text-white">
            Let’s build a stronger workforce and future-ready HR foundation together
          </h2>

          <p className="mt-6 text-white">Start your journey today.</p>

          {/* Centered buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-7 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-white px-7 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}