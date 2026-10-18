import React from 'react'

export const TestimonialSection = () => {
  return (
    <div className='pad max-w-[1400px] mx-auto '>
      <div className="text-center  mb-12">
        <h2>Client Success Stories & Results</h2>
        <p className=' mt-2 text-lg'>Organisations across industries have simplified HR administration, improved compliance, and secured high-calibre professionals through our focused partnership, freeing leaders to pursue growth and innovation with confidence daily.</p>
      </div>
      <div className='flex grid grid-cols-3 max-lg:grid-cols-1 gap-6'>
        <div className='bg-primary rounded-2xl'>
          <div className='p-6'>
            <p className='text-white text-lg'>“Compliance deadlines no longer keep managers awake. With structured reminders and clear guidance, our clients submit returns on time and concentrate on creating engaging workplaces instead today.”</p>
            <p className='text-white text-lg mt-4 font-bold'>Operations Director Comment Note</p>
          </div>
        </div>
        <div className='bg-primary rounded-2xl'>
          <div className='p-6'>
            <p className='text-white text-lg'>“Compliance deadlines no longer keep managers awake. With structured reminders and clear guidance, our clients submit returns on time and concentrate on creating engaging workplaces instead today.”</p>
            <p className='text-white text-lg mt-4 font-bold'>Operations Director Comment Note</p>
          </div>
        </div>
        <div className='bg-primary rounded-2xl'>
          <div className='p-6'>
            <p className='text-white text-lg'>“Strategic recruitment through LIORA HR introduced leaders who understand both our values and our goals, accelerating project delivery and lifting team morale across the organisation significantly today.”</p>
            <p className='text-white text-lg mt-4 font-bold'>Human Resources Manager Note</p>
          </div>
        </div>

      </div>
    </div>
  )
}
