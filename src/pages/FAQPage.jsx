import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import FAQAccordion from "../components/FAQAccordion";
import ContactCTA from "../components/ContactCTA";
import { ImageRibbon } from "../components/Card";
import { faqItems, images, pageVisuals } from "../data/siteData";

export default function FAQPage() {
  return (
    <>
      <section className="page-hero visual-hero">
        <div>
          <span className="eyebrow">FAQ</span>
          <h1>Clear answers, calmer browsing.</h1>
          <p>Ontario and Canada resource answers for families reviewing autism support pathways.</p>
        </div>
        <div className="page-hero-media">
          <img src={images.room} alt="Calm child development room for FAQ page" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={pageVisuals.resources} />
      </AnimatedSection>
      <AnimatedSection className="section narrow">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Plain answers with careful disclaimers." align="center" />
        <FAQAccordion items={faqItems} />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
