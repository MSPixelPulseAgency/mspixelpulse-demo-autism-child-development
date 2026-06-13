import { ArrowRight, Building2, HeartHandshake, Target } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageRibbon, PhotoCard } from "../components/Card";
import { ContactForm } from "../components/Forms";
import ContactCTA from "../components/ContactCTA";
import { fundingPriorities, images, impactMetrics, pageVisuals, partnerTypes } from "../data/siteData";

export default function FundingImpactPage() {
  const needs = ["Long wait times", "Parent stress", "Service navigation challenges", "Need for early support", "School transition support", "Community inclusion"];
  const model = ["Inputs", "Programs", "Family Support", "Child Development Goals", "Community Impact"];
  const helps = ["More accessible program fees", "More caregiver education", "More sensory-friendly materials", "More outreach to families", "More inclusive group programs", "Better digital intake tools", "More community partnerships"];
  return (
    <>
      <section className="page-hero visual-hero funding-hero">
        <div>
          <span className="eyebrow">Funding & Impact</span>
          <h1>Funding and support links, clearly organized.</h1>
          <p>Official Ontario and Canada resource pathways for OAP, AccessOAP, DTC, SSAH, ACSD, school supports, and community navigation.</p>
          <div className="hero-actions">
            <a className="btn" href="#priorities">View Resource Areas <ArrowRight size={18} /></a>
            <a className="btn btn-light" href="#partnership">Partner Inquiry</a>
          </div>
        </div>
        <div className="page-hero-media">
          <img src={images.community} alt="Community group support moment" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={pageVisuals.funding} />
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Community Need" title="Clear needs, easy to scan." text="Families may need help understanding registration, service options, school transitions, urgent needs, and funding-related programs." align="center" />
        <div className="card-grid three">{needs.map((need, index) => (
          <PhotoCard
            key={need}
            src={pageVisuals.funding[index % pageVisuals.funding.length].src}
            alt={`${need} community support visual`}
            icon={Target}
            title={need}
            text="A real navigation concern families may bring to intake or planning conversations."
          />
        ))}</div>
      </AnimatedSection>
      <AnimatedSection className="section soft-band" id="priorities">
        <SectionHeading eyebrow="Resource Areas" title="Official support areas with quick visual rhythm." align="center" />
        <div className="card-grid five">{fundingPriorities.map((item) => <IconCard key={item} icon={HeartHandshake} title={item} />)}</div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Navigation Model" title="From questions to clearer next steps." align="center" />
        <div className="funding-model">
          {model.map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}
        </div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Resource Map" title="Key public pathways families can review." align="center" />
        <div className="metric-grid">{impactMetrics.map((metric) => <IconCard key={metric.label} icon={metric.icon} title={metric.value} text={metric.label} />)}</div>
        <p className="center-note">These are resource categories, not eligibility decisions. Families should confirm details with official programs and qualified professionals.</p>
      </AnimatedSection>
      <AnimatedSection className="split-section reverse">
        <div>
          <SectionHeading eyebrow="How Resource Planning Helps" title="Planning creates clearer access." />
          <div className="mini-list">{helps.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div>
          <SectionHeading eyebrow="Partners" title="Who can collaborate." />
          <div className="mini-list">{partnerTypes.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="split-section" id="partnership">
        <div>
          <SectionHeading eyebrow="Partnership Inquiry" title="Start a resource partnership conversation." text="Use this form for general questions only. Do not submit private health information." />
          <IconCard icon={Building2} title="Resource disclaimer" text="BrightPath is fictional. Official program details, eligibility, funding, and tax information must be confirmed with the linked source or qualified professionals." />
        </div>
        <ContactForm funding />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
