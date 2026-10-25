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
import { AnimatedSection } from "../components/Hooks/AnimatedSection";

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


        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection>
          <IntroSection />
        </AnimatedSection>

        <AnimatedSection>
          <Text_MediaSection1 />
        </AnimatedSection>

        <AnimatedSection>
          <UspSection />
        </AnimatedSection>

        <AnimatedSection>
          <PodsSection />
        </AnimatedSection>

        <AnimatedSection>
          <Text_MediaSection2 />
        </AnimatedSection>

        <AnimatedSection>
          <TestimonialSection />
        </AnimatedSection>

        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>

        <Footer />
      </main>
    </>
  );
};