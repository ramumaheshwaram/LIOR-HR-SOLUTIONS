import React from 'react'
import { Link } from 'react-router-dom'

export const CtaSection = () => {
  return (
    <>

      <div className='bg-secondary w-full flex max-sm:flex-col'>
        <div className='w-1/2 p-20 my-auto max-md:p-10 max-sm:w-full max-sm:p-5'>
          <h2 className="text-white">
            Let’s build a stronger workforce and future-ready HR foundation together
          </h2>

          <p className="mt-6 text-white">Start your journey today.</p>

          {/* Centered buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-7 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black border-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className='w-1/2 img-box max-sm:w-full'>
          <img src="/images/hr-handshaking.jpg" alt="hr-handshaking" className='w-full h-full img-box-bg max-sm:h-60' />
        </div>
      </div>
    </>

  )
}