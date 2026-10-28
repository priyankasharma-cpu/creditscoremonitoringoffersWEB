import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles } from "../../data/articles";
export default function ArticleCards({ all = false }) {
  const photos = [
    "/images/learning.jpg",
    "/images/laptop.jpg",
    "/images/planning.jpg",
  ];
  return (
    <div className="article-grid">
      {articles.slice(0, all ? articles.length : 3).map((article, index) => (
        <Link
          className="article-card"
          to={"/education/" + article.slug}
          key={article.slug}
        >
          <div className="article-art">
            <img
              src={photos[index % photos.length]}
              alt={
                [
                  "Notebook and study materials on a desk",
                  "A person working with a laptop",
                  "People reviewing documents together",
                ][index % 3]
              }
              loading="lazy"
            />
            <span className="art-index">THE CREDIT LIBRARY / 0{index + 1}</span>
          </div>
          <div className="article-body">
            <div className="overline">
              {article.category}
              <span>{article.minutes} MIN READ</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.intro}</p>
            <span className="text-link">
              Read the guide <ArrowRight size={20} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
