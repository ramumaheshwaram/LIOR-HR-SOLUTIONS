import { Header } from "../components/layout/Navbar";
import { HeroSection } from "../sections/home/HeroSection";
import { IntroSection } from "../sections/home/IntroSection";
import { Text_MediaSection1 } from "../sections/home/Text_MediaSection1";
import { UspSection } from "../sections/home/UspSection";
import { PodsSection } from "../sections/home/PodsSection";
import { Text_MediaSection2 } from "../sections/home/Text_MediaSection2";
import { TestimonialSection } from "../sections/home/TestimonialSection";
import { CtaSection } from "../sections/home/CtaSection";
import { Footer } from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>LIORA HR SOLUTIONS | Talent Acquisition & HR Solutions</title>

        <meta
          name="description"
          content="LIORA HR SOLUTIONS provides talent acquisition, payroll management, statutory compliance, and HR solutions for growing businesses."
        />

        <link
          rel="canonical"
          href="https://liora-hr-solutions.com/"
        />
      </Helmet>
      <main>
        <Header />
        <HeroSection />
        <IntroSection />
        <Text_MediaSection1 />
        <UspSection />
        <PodsSection />
        <Text_MediaSection2 />
        <TestimonialSection />
        <CtaSection />
        <Footer />
      </main>
    </>

  );
};
