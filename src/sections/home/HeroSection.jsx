import { Link } from "react-router-dom";
import "../../styles/Home.css";

export const HeroSection = () => {
  return (
    <section className="hero-img w-full overflow-hidden bg-primary">
      <div className="mx-auto flex min-h-[90vh] w-full items-center lg:gap-10 lg:pl-[4%] max-lg:flex-col-reverse max-md:min-h-auto">

        {/* Left Content */}
        <div className="w-full px-[4%] py-[6%] lg:w-[46%] lg:px-0 lg:py-0">
          <p className="mb-4 text-base font-medium text-white sm:text-lg">
            CONNECTING TALENT. CREATING POSSIBILITIES.
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Connecting Talent, Creating Possibilities for Confident Business
            Growth
          </h1>

          <p className="mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            At LIORA HR SOLUTIONS, we align people and organisations,
            delivering tailored recruitment, payroll, compliance, and HR
            support that helps businesses expand with clarity and confidence.
          </p>

          {/* Call to Action */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className=" inline-flex items-center justify-center rounded-md bg-secondary px-7 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black" >
              Contact Us
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-white px-7 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full min-w-0 lg:w-[54%]">
          <img
            src="/images/Hero.jpg"
            alt="Professional HR and talent acquisition services"
            className="block h-64 w-full max-w-full object-cover shadow-lg sm:h-80 md:h-[420px] lg:h-[800px]"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;