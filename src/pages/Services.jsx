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


export const Services = () => {
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
        <HeroSection />
        <IntroSection />
        <Text_MediaSection1 />
        <Text_MediaSection2 />
        <Text_MediaSection3 />
        <Text_MediaSection4 />
        <Text_MediaSection5 />
        <CtaSection />
        <Footer />
      </main>
    </>

  )
}
