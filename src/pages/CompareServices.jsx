import { useSeo } from "../hooks/useSeo";
import PageIntro from "../components/common/PageIntro";
import ComparisonSection from "../components/comparison/ComparisonSection";
export default function CompareServices() {
  useSeo(
    "Compare providers",
    "Explore sample credit monitoring comparisons, provider reviews, and credit education.",
  );
  return (
    <>
      <PageIntro title="Compare providers">
        <p>Clear information to help you understand your options.</p>
      </PageIntro>
      <ComparisonSection />
    </>
  );
}
