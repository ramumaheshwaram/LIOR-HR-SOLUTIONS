import { HeroSection } from "../sections/home/HeroSection";
import { IntroSection } from "../sections/home/IntroSection";
import { Text_MediaSection1 } from "../sections/home/Text_MediaSection1";
import { UspSection } from "../sections/home/UspSection";
import { PodsSection } from "../sections/home/PodsSection";
import { Text_MediaSection2 } from "../sections/home/Text_MediaSection2";
import { TestimonialSection } from "../sections/home/TestimonialSection";
import { CtaSection } from "../sections/home/CtaSection";
import { Footer } from "../components/layout/Footer";

export const Home = () => {
  return (
    <main>
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
  );
};
