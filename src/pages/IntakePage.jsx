import { ClipboardCheck } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard } from "../components/Card";
import { IntakeForm } from "../components/Forms";
import ContactCTA from "../components/ContactCTA";

export default function IntakePage() {
  const steps = ["Tell us about your child", "Share your goals", "Choose program interest", "Book a consultation", "Receive next-step guidance"];
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Family Intake</span>
        <h1>Start with a simple, supportive intake process.</h1>
        <p>The demo intake page is designed to feel calm, mobile-friendly, and clear for families exploring child development support.</p>
      </section>
      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Intake Steps" title="A predictable path from first contact to next guidance." />
          <div className="step-grid">{steps.map((step, index) => <div className="step-card" key={step}><span>{index + 1}</span><strong>{step}</strong></div>)}</div>
          <IconCard icon={ClipboardCheck} title="Privacy note" text="Do not submit real personal health information through demo forms. A production site should use a reviewed privacy workflow." />
        </div>
        <IntakeForm />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
