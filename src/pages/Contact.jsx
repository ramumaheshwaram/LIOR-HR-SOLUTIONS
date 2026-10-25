import React from 'react'
import { Header } from "../components/layout/Navbar";
import { HeroSection } from "../sections/contact/HeroSection";
import { Text_MediaSection } from "../sections/contact/Text_MediaSection";
import { Footer } from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";
export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | LIORA HR SOLUTIONS</title>

        <meta
          name="description"
          content="Contact LIORA HR SOLUTIONS for talent acquisition, recruitment services, payroll management, statutory compliance, and HR solutions for your business."
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/contact"
        />
      </Helmet>
      <main>
        <Header />
        <HeroSection />
        <Text_MediaSection />
        <Footer />
      </main>
    </>

  )
}
