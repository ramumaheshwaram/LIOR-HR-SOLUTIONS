import { Link } from "react-router-dom";
import "../../styles/Home.css";

export const HeroSection = () => {
  return (
    <>
      <div className="relative h-[90vh] w-full bg-[url('/images/Main_Hero.jpg')] bg-cover bg-top bg-no-repeat max-md:h-[60vh] hero-img ">
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
            <h1 className="text-white font-bold">LIORA HR SOLUTIONS</h1>
            <p className="mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              At LIORA HR SOLUTIONS, we align people and organisations,
              delivering tailored recruitment, payroll, compliance, and HR
              support that helps businesses expand with clarity and confidence.
            </p>

            {/* Call to Action */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className=" inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-lg font-semibold text-secondary transition-colors duration-300 hover:bg-secondary hover:text-white"
              >
                Explore Career Opportunities
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md border border-white px-7 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-secondary"
              >
                Find the Right Candidates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
