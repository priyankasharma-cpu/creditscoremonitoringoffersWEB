import { useSeo } from "../hooks/useSeo";
import PageIntro from "../components/common/PageIntro";
import TopProviders from "../components/providers/TopProviders";
export default function TopPicks() {
  useSeo(
    "Best credit monitoring services",
    "Explore sample credit monitoring comparisons, provider reviews, and credit education.",
  );
  return (
    <>
      <PageIntro title="Best credit monitoring services">
        <p>Clear information to help you understand your options.</p>
      </PageIntro>
      <TopProviders />
    </>
  );
}
