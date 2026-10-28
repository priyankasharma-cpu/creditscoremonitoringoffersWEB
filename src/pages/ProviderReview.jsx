import { useParams } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
import { providers } from "../data/providers";
import NotFound from "./NotFound";
import PageIntro from "../components/common/PageIntro";
import ProviderLogo from "../components/providers/ProviderLogo";
import ProviderReviewContent from "../components/reviews/ProviderReviewContent";
export default function ProviderReview() {
  const { slug } = useParams();
  const provider = providers.find((candidate) => candidate.id === slug);
  useSeo(
    provider ? provider.name + " sample review" : "Review not found",
    "Illustrative provider review. Features and pricing are sample data awaiting verification.",
  );
  if (!provider) return <NotFound />;
  return (
    <>
      <PageIntro title={provider.name + " sample review"}>
        <ProviderLogo provider={provider} />
      </PageIntro>
      <ProviderReviewContent provider={provider} slug={slug} />
    </>
  );
}
