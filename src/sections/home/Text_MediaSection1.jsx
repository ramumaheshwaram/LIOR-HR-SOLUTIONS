import React from 'react'

export const Text_MediaSection1 = () => {
  return (
    <div className='max-w-[1400px] flex mx-auto gap-5 lg:gap-10 max-lg:flex-col-reverse md:gap-6 pad-bot'>
      <div className="my-auto lg:w-1/2">
        <h2>People Solutions Aligned to Growth
        </h2>
        <p className='mt-4 text-lg'>
          Growing companies often juggle multiple HR demands at once. Our end-to-end support removes that pressure. From drafting job descriptions and interviewing candidates to processing salaries, filing statutory returns, and advising on policy, we handle the detail so you can focus on strategy. With a people-first approach and transparent communication, we deliver consistent, quality-focused outcomes that strengthen culture, improve compliance, and give leadership the confidence to scale without administrative distractions.
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src="/images/making-presentation.jpg" alt="Making Presentation" className='w-full h-auto rounded-lg shadow-lg'>
        </img>
      </div>
    </div>
  )
}
