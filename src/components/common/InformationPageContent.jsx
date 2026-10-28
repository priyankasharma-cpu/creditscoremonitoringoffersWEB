import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MethodologySection from "./MethodologySection";
export default function InformationPageContent({
  data,
  showMethodology = false,
}) {
  return (
    <div className="container reading-page">
      <p className="lead">{data[1]}</p>
      <p>{data[2]}</p>
      {showMethodology && <MethodologySection />}
      <Link className="text-link" to="/compare">
        Explore sample comparisons <ArrowRight size={16} />
      </Link>
    </div>
  );
}
