import React from 'react'
import { Header } from "../components/layout/Navbar";
import { HeroSection } from "../sections/services/HeroSection";
import { IntroSection } from "../sections/services/IntroSection";
import { Text_MediaSection1 } from "../sections/services/Text_MediaSection1";
import { Text_MediaSection2 } from "../sections/services/Text_MediaSection2";
import { Text_MediaSection3 } from "../sections/services/Text_MediaSection3";
import { Text_MediaSection4 } from "../sections/services/Text_MediaSection4";
import { Text_MediaSection5 } from "../sections/services/Text_MediaSection5";
import { CtaSection } from "../sections/services/CtaSection";
import { Footer } from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { AnimatedSection } from "../components/Hooks/AnimatedSection";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>HR Services | LIORA HR SOLUTIONS</title>

        <meta
          name="description"
          content="Explore LIORA HR SOLUTIONS services including talent acquisition, payroll management, statutory compliance, and HR solutions."
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/services"
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

        <AnimatedSection id="talent-acquisition" className="scroll-mt-35">
          <Text_MediaSection2 />
        </AnimatedSection>

        <AnimatedSection id="payroll-management" className="scroll-mt-35">
          <Text_MediaSection3 />
        </AnimatedSection>

        <AnimatedSection id="statutory-compliance" className="scroll-mt-35">
          <Text_MediaSection4 />
        </AnimatedSection>

        <AnimatedSection id="hr-consulting" className="scroll-mt-35">
          <Text_MediaSection5 />
        </AnimatedSection>

        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>
        <Footer />
      </main>
    </>

  )
}
