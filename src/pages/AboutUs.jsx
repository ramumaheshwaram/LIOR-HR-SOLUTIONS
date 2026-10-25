import { Header } from "../components/layout/Navbar";
import { HeroSection } from "../sections/aboutus/HeroSection";
import { IntroSection } from "../sections/aboutus/IntroSection";
import { Text_MediaSection1 } from "../sections/aboutus/Text_MediaSection1";
import { Text_MediaSection2 } from "../sections/aboutus/Text_MediaSection2";
import { Text_MediaSection3 } from "../sections/aboutus/Text_MediaSection3";
import { CtaSection } from "../sections/aboutus/CtaSection";
import { Footer } from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { AnimatedSection } from "../components/Hooks/AnimatedSection";

import "../styles/Home.css";


export const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | LIORA HR SOLUTIONS</title>

        <meta
          name="description"
          content="Learn about LIORA HR SOLUTIONS and our people-focused approach to talent acquisition, payroll, statutory compliance, and HR management."
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/about-us"
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
          <Text_MediaSection2 />
        </AnimatedSection>
        <AnimatedSection>
          <Text_MediaSection3 />
        </AnimatedSection>
        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>
        <Footer />
      </main>
    </>

  )
}
