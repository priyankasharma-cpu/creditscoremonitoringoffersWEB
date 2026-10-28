import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import CompareServices from "./pages/CompareServices";
import TopPicks from "./pages/TopPicks";
import Reviews from "./pages/Reviews";
import Education from "./pages/Education";
import NotFound from "./pages/NotFound";
import ProviderReview from "./pages/ProviderReview";
import EducationArticle from "./pages/EducationArticle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Methodology from "./pages/Methodology";
import EditorialPolicy from "./pages/EditorialPolicy";
import AdvertiserDisclosure from "./pages/AdvertiserDisclosure";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import "./styles/index.css";
export default function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<CompareServices />} />
            <Route path="/best-credit-monitoring" element={<TopPicks />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:slug" element={<ProviderReview />} />
            <Route path="/education" element={<Education />} />
            <Route path="/education/:slug" element={<EducationArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/editorial-policy" element={<EditorialPolicy />} />
            <Route
              path="/advertiser-disclosure"
              element={<AdvertiserDisclosure />}
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </MotionConfig>
    </BrowserRouter>
  );
}
