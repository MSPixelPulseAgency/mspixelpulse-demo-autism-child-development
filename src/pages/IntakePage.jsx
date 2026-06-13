import { ClipboardCheck } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageRibbon } from "../components/Card";
import { IntakeForm } from "../components/Forms";
import ContactCTA from "../components/ContactCTA";
import { images, pageVisuals } from "../data/siteData";

export default function IntakePage() {
  const steps = ["Tell us about your child", "Share your goals", "Choose program interest", "Book a consultation", "Receive next-step guidance"];
  return (
    <>
      <section className="page-hero visual-hero">
        <div>
          <span className="eyebrow">Family Intake</span>
          <h1>A gentle first step.</h1>
          <p>A calm intake flow for organizing strengths, communication, sensory needs, OAP questions, and school-readiness notes.</p>
        </div>
        <div className="page-hero-media">
          <img src={images.family} alt="Caregiver and child preparing for support intake" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={pageVisuals.intake} />
      </AnimatedSection>
      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Intake Steps" title="A predictable path." />
          <div className="step-grid">{steps.map((step, index) => <div className="step-card" key={step}><span>{index + 1}</span><strong>{step}</strong></div>)}</div>
          <IconCard icon={ClipboardCheck} title="Privacy note" text="Do not submit personal health information through this presentation form. A live service should use a reviewed privacy workflow." />
        </div>
        <IntakeForm />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
