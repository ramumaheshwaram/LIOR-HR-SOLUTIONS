import React from "react";

export const TestimonialSection = () => {
  return (
    <div className="w-full bg-primary">
      <div className="pad max-w-[1400px] mx-auto ">
        <div className="text-center  mb-8 relative">
          <span class="block watermark font-dm-sans max-sm:hidden -top-16 text-center left-0 w-full text-8xl ">Testimonial</span>
          <h2 className="text-secondary relative z-2">Client Success Stories & Results</h2>
          <p className=" mt-5 text-lg">
            Organisations across industries have simplified HR administration,
            improved compliance, and secured high-calibre professionals through
            our focused partnership, freeing leaders to pursue growth and
            innovation with confidence daily.
          </p>
        </div>
        <div className="flex grid grid-cols-3 max-lg:grid-cols-1 gap-6">
          <div className="bg-secondary rounded-2xl relative testimonial-eight__single mb-10 ">
            <div className="p-6">
              <span className="text-gold text-2xl">★★★★★</span>
              <p className="text-white text-lg mt-4">
                “Compliance deadlines no longer keep managers awake. With
                structured reminders and clear guidance, our clients submit
                returns on time and concentrate on creating engaging workplaces
                instead today.”
              </p>
              <p className="text-white text-lg mt-4 font-bold">
                Operations Director Comment Note
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl relative testimonial-eight__single mb-10">
            <div className="p-6">
              <span className="text-gold text-2xl">★★★★★</span>
              <p className="text-white text-lg mt-4">
                “Compliance deadlines no longer keep managers awake. With
                structured reminders and clear guidance, our clients submit
                returns on time and concentrate on creating engaging workplaces
                instead today.”
              </p>
              <p className="text-white text-lg mt-4 font-bold">
                Operations Director Comment Note
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl relative testimonial-eight__single mb-10">
            <div className="p-6">
              <span className="text-gold text-2xl">★★★★★</span>
              <p className="text-white text-lg mt-4">
                “Compliance deadlines no longer keep managers awake. With
                structured reminders and clear guidance, our clients submit
                returns on time and concentrate on creating engaging workplaces
                instead today.”
              </p>
              <p className="text-white text-lg mt-4 font-bold">
                Operations Director Comment Note
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
