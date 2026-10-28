import { useSeo } from "../hooks/useSeo";
import PageIntro from "../components/common/PageIntro";
import ArticleCards from "../components/education/ArticleCards";
export default function Education() {
  useSeo(
    "The credit learning center",
    "Explore sample credit monitoring comparisons, provider reviews, and credit education.",
  );
  return (
    <>
      <PageIntro title="The credit learning center">
        <p>Clear information to help you understand your options.</p>
      </PageIntro>
      <section className="container section">
        <ArticleCards all />
      </section>
    </>
  );
}
