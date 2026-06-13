import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FamilyGuide from "./components/FamilyGuide";
import MobileBottomBar from "./components/MobileBottomBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProgramsPage from "./pages/ProgramsPage";
import ServicesPage from "./pages/ServicesPage";
import FundingImpactPage from "./pages/FundingImpactPage";
import ResourcesPage from "./pages/ResourcesPage";
import IntakePage from "./pages/IntakePage";
import PartnersPage from "./pages/PartnersPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import { pageMeta } from "./data/siteData";

function MetaUpdater() {
  const location = useLocation();
  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta["/"];
    document.title = meta.title;
    document.querySelector("meta[name='description']")?.setAttribute("content", meta.description);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <MetaUpdater />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/funding-impact" element={<FundingImpactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/intake" element={<IntakePage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FamilyGuide />
      <MobileBottomBar />
    </>
  );
}
