import { Download, FileText } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageTile } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import { images, resources } from "../data/siteData";

export default function ResourcesPage() {
  const prep = ["What to prepare before intake", "Questions to ask", "Documents to organize", "How to describe your child’s strengths and needs"];
  const downloads = ["Intake checklist", "Parent questions guide", "School readiness checklist", "Caregiver support plan", "Funding preparation checklist"];
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Family Resources</span>
        <h1>Helpful parent-facing resources for calmer next steps.</h1>
        <p>These demo cards organize common family questions while reminding visitors to seek qualified professional guidance.</p>
      </section>
      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Getting Started" title="Prepare for intake without overwhelm." />
          <div className="step-grid">{prep.map((item, index) => <div className="step-card" key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}</div>
        </div>
        <ImageTile src={images.room} alt="Calm child-friendly learning room with tables and chairs" title="Organized resources" text="Families can scan supports by topic and choose a next step." />
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Resource Topics" title="Simple cards for common support areas." align="center" />
        <div className="card-grid four">{resources.map((resource) => <IconCard key={resource.title} icon={resource.icon} title={resource.title} text={resource.text} />)}</div>
      </AnimatedSection>
      <AnimatedSection className="section soft-band">
        <SectionHeading eyebrow="Download-style Placeholders" title="Visual resource cards ready for future PDFs." align="center" />
        <div className="card-grid five">{downloads.map((item) => <IconCard key={item} icon={Download} title={item} text="Demo placeholder only. Real PDF can be added in production." />)}</div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <IconCard icon={FileText} title="Resource disclaimer" text="Resources are informational only and do not replace professional medical, clinical, therapeutic, legal, financial, or educational advice." />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
