import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import FAQAccordion from "../components/FAQAccordion";
import ContactCTA from "../components/ContactCTA";
import { faqItems } from "../data/siteData";

export default function FAQPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">FAQ</span>
        <h1>Questions families, funders, and future clients may ask.</h1>
        <p>All answers are demo-safe and clarify that this is not a real clinic, medical service, or government-approved organization.</p>
      </section>
      <AnimatedSection className="section narrow">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Plain answers with careful disclaimers." align="center" />
        <FAQAccordion items={faqItems} />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
