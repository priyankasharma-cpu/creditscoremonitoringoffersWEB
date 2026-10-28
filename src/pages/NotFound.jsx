import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <div className="container empty-page">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>Let’s find a clearer path.</h1>
      <p>The page you requested isn’t available.</p>
      <Link className="button" to="/">
        Back to home <ArrowRight size={16} />
      </Link>
    </div>
  );
}
