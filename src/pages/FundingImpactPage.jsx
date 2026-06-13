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
          <h1>Funding stories with a human face.</h1>
          <p>A visual proposal-style page for community need, funding priorities, placeholder impact, and partnerships.</p>
          <div className="hero-actions">
            <a className="btn" href="#priorities">View Priorities <ArrowRight size={18} /></a>
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
        <SectionHeading eyebrow="Community Need" title="Clear needs, easy to scan." text="Short cards make the proposal feel lighter while keeping the message funding-ready." align="center" />
        <div className="card-grid three">{needs.map((need, index) => (
          <PhotoCard
            key={need}
            src={pageVisuals.funding[index % pageVisuals.funding.length].src}
            alt={`${need} community support visual`}
            icon={Target}
            title={need}
            text="Demo need statement for proposal structure."
          />
        ))}</div>
      </AnimatedSection>
      <AnimatedSection className="section soft-band" id="priorities">
        <SectionHeading eyebrow="Funding Priorities" title="Priority areas with quick visual rhythm." align="center" />
        <div className="card-grid five">{fundingPriorities.map((item) => <IconCard key={item} icon={HeartHandshake} title={item} />)}</div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Impact Model" title="From resources to community impact." align="center" />
        <div className="funding-model">
          {model.map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}
        </div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Demo Metrics" title="Placeholder metrics with clear labels." align="center" />
        <div className="metric-grid">{impactMetrics.map((metric) => <IconCard key={metric.label} icon={metric.icon} title={metric.value} text={metric.label} />)}</div>
        <p className="center-note">All impact numbers are demo placeholders and do not represent an active funded organization.</p>
      </AnimatedSection>
      <AnimatedSection className="split-section reverse">
        <div>
          <SectionHeading eyebrow="How Funding Helps" title="Funding creates more access." />
          <div className="mini-list">{helps.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div>
          <SectionHeading eyebrow="Partners" title="Who can collaborate." />
          <div className="mini-list">{partnerTypes.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="split-section" id="partnership">
        <div>
          <SectionHeading eyebrow="Funding Inquiry" title="Start a demo partnership inquiry." text="Visual only. Do not submit real private or health information." />
          <IconCard icon={Building2} title="Funding disclaimer" text="Funding goals, impact numbers, programs, and partnership details shown on this demo website are placeholders only." />
        </div>
        <ContactForm funding />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
