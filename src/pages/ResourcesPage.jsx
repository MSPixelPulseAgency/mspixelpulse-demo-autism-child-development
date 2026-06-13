import { Download, FileText } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageRibbon, ImageTile, PhotoCard } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import { images, pageVisuals, resources } from "../data/siteData";

export default function ResourcesPage() {
  const prep = ["What to prepare before intake", "Questions to ask", "Documents to organize", "How to describe your child’s strengths and needs"];
  const downloads = ["Intake checklist", "Parent questions guide", "School readiness checklist", "Caregiver support plan", "Funding preparation checklist"];
  return (
    <>
      <section className="page-hero visual-hero">
        <div>
          <span className="eyebrow">Family Resources</span>
          <h1>Official resources without the overwhelm.</h1>
          <p>Visual cards for autism basics, OAP, AccessOAP, funding links, school planning, and caregiver wellbeing.</p>
        </div>
        <div className="page-hero-media">
          <img src={images.art} alt="Colorful child art activity for family resources" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={pageVisuals.resources} />
      </AnimatedSection>
      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Getting Started" title="Prepare without overwhelm." />
          <div className="step-grid">{prep.map((item, index) => <div className="step-card" key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}</div>
        </div>
        <ImageTile src={images.room} alt="Calm child-friendly learning room with tables and chairs" title="Organized resources" text="Families can scan supports by topic and choose a next step." />
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Resource Topics" title="Simple cards for common needs." align="center" />
        <div className="card-grid four">{resources.map((resource, index) => (
          <PhotoCard
            key={resource.title}
            src={pageVisuals.resources[index % pageVisuals.resources.length].src}
            alt={`${resource.title} family resource visual`}
            icon={resource.icon}
            title={resource.title}
            text={resource.text}
          />
        ))}</div>
      </AnimatedSection>
      <AnimatedSection className="section soft-band">
        <SectionHeading eyebrow="Planning Checklists" title="Helpful notes families can prepare." align="center" />
        <div className="card-grid five">{downloads.map((item) => <IconCard key={item} icon={Download} title={item} text="Use this as a planning prompt before speaking with providers or official programs." />)}</div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <IconCard icon={FileText} title="Resource disclaimer" text="Resources are informational only and do not replace professional medical, clinical, therapeutic, legal, tax, financial, or educational advice." />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
