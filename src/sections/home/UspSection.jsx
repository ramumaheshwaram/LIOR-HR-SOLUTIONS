import React from 'react'

export const UspSection = () => {
  return (
    <div className="bg-primary pad text-img w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className='text-white'>Our Core People Service Pillars</h2>
          <p className=' mt-2 text-lg'>Four integrated offerings deliver the structure, insight, and support your growing workforce needs.</p>
        </div>
        <div className="mx-auto grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
          <div className="relative  rounded-3xl rounded-tr-[200px] bg-white p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1 usp-img">
            <img
              src="/images/usp1.webp"
              alt="USP 1"
              className="absolute right-0 top-0.5 z-10 h-auto w-[80px] rounded-full bg-white p-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-black">Strategic Talent Acquisition</h3>
            <p className="mt-2 text-black text-lg">Accurate, timely salaries processed without stress everywhere.</p>
          </div>
          <div className="relative  rounded-3xl rounded-tr-[200px] bg-white p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1 usp-img">
            <img
              src="/images/usp1.webp"
              alt="USP 1"
              className="absolute right-0 top-0.5 z-10 h-auto w-[80px] rounded-full bg-white p-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-black">Strategic Talent Acquisition</h3>
            <p className="mt-2 text-black text-lg">Accurate, timely salaries processed without stress everywhere.</p>
          </div>
          <div className="relative o rounded-3xl rounded-tr-[200px] bg-white p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1 usp-img">
            <img
              src="/images/usp1.webp"
              alt="USP 1"
              className="absolute right-0 top-0.5 z-10 h-auto w-[80px] rounded-full bg-white p-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-black">Strategic Talent Acquisition</h3>
            <p className="mt-2 text-black text-lg">Accurate, timely salaries processed without stress everywhere.</p>
          </div>
          <div className="relative  rounded-3xl rounded-tr-[200px] bg-white p-8 shadow-2xl transition-transform duration-300 hover:-translate-y-1 usp-img">
            <img
              src="/images/usp1.webp"
              alt="USP 1"
              className="absolute right-0 top-0.5 z-10 h-auto w-[80px] rounded-full bg-white p-4 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-black">Strategic Talent Acquisition</h3>
            <p className="mt-2 text-black text-lg">Accurate, timely salaries processed without stress everywhere.</p>
          </div>

        </div>
      </div>

    </div>
  )
}
