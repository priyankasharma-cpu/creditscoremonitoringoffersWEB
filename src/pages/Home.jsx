import { motion } from "framer-motion";
import { useSeo } from "../hooks/useSeo";
import Hero from "../components/home/Hero";
import FeatureStrip from "../components/home/FeatureStrip";
import WhyChooseUs from "../components/home/WhyChooseUs";
import EducationalResources from "../components/home/EducationalResources";
import HomeFAQ from "../components/home/HomeFAQ";
import ClosingCTA from "../components/home/ClosingCTA";
import TopProviders from "../components/providers/TopProviders";
import ComparisonSection from "../components/comparison/ComparisonSection";
import MethodologySection from "../components/common/MethodologySection";
export default function Home() {
  useSeo(
    "Compare Credit Score Monitoring Services",
    "Explore credit monitoring services through transparent sample comparisons and practical educational guides.",
  );
  return (
    <>
      <Hero />
      <FeatureStrip />
      <WhyChooseUs />
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <TopProviders />
      </motion.div>
      <ComparisonSection />
      <MethodologySection />
      <EducationalResources />
      <HomeFAQ />
      <ClosingCTA />
    </>
  );
}
