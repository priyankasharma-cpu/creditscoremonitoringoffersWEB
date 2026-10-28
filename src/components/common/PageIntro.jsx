import { Link } from "react-router-dom";
export default function PageIntro({
  title,
  eyebrow = "CREDIT SCORE MONITORING OFFERS",
  children,
}) {
  return (
    <div
      className={
        "page-intro container " +
        (title === "About us"
          ? "about-banner"
          : title.includes("sample review")
            ? "review-banner"
            : "")
      }
    >
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        {title}
      </div>
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
