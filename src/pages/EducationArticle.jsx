import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { articles } from "../data/articles";
import { useSeo } from "../hooks/useSeo";
import NotFound from "./NotFound";
import PageIntro from "../components/common/PageIntro";
import { ArrowRight } from "lucide-react";
export default function EducationArticle() {
  const { slug } = useParams();
  const article = articles.find((candidate) => candidate.slug === slug);
  useSeo(
    article?.title || "Article not found",
    article?.intro || "The requested guide could not be found.",
  );
  useEffect(() => {
    if (!article) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.intro,
      mainEntityOfPage:
        "https://creditscoremonitoringoffers.com/education/" + article.slug,
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [article]);
  if (!article) return <NotFound />;
  return (
    <>
      <PageIntro title={article.title} eyebrow={article.category}>
        <p>{article.intro}</p>
        <span className="muted">
          {article.minutes} minute guide · General education
        </span>
      </PageIntro>
      <article className="container reading-page">
        <h2>The essentials</h2>
        <p className="lead">{article.body}</p>
        <h2>Questions to ask before you choose</h2>
        <ul>
          <li>Which bureaus and changes are covered?</li>
          <li>How often is information refreshed?</li>
          <li>
            What are the current price, terms, and cancellation conditions?
          </li>
        </ul>
        <p>
          Review the provider’s current documentation before making a decision.
          This draft guide provides general information and is not personalized
          financial advice.
        </p>
        <Link className="button" to="/compare">
          Explore sample comparisons <ArrowRight size={16} />
        </Link>
        <h2>Keep learning</h2>
        {articles
          .filter((candidate) => candidate.slug !== slug)
          .slice(0, 3)
          .map((candidate) => (
            <p key={candidate.slug}>
              <Link className="text-link" to={"/education/" + candidate.slug}>
                {candidate.title} <ArrowRight size={15} />
              </Link>
            </p>
          ))}
      </article>
    </>
  );
}
