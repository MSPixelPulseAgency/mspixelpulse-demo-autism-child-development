import { ArrowRight, Building2, HeartHandshake, Target } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard } from "../components/Card";
import { ContactForm } from "../components/Forms";
import ContactCTA from "../components/ContactCTA";
import { fundingPriorities, impactMetrics, partnerTypes } from "../data/siteData";

export default function FundingImpactPage() {
  const needs = ["Long wait times", "Parent stress", "Service navigation challenges", "Need for early support", "School transition support", "Community inclusion"];
  const model = ["Inputs", "Programs", "Family Support", "Child Development Goals", "Community Impact"];
  const helps = ["More accessible program fees", "More caregiver education", "More sensory-friendly materials", "More outreach to families", "More inclusive group programs", "Better digital intake tools", "More community partnerships"];
  return (
    <>
      <section className="page-hero funding-hero">
        <span className="eyebrow">Funding & Impact</span>
        <h1>Funding accessible child development support for families.</h1>
        <p>BrightPath is a fictional demo concept showing how a community autism and child development center can present funding goals, program needs, measurable impact, and partnership opportunities.</p>
        <div className="hero-actions">
          <a className="btn" href="#priorities">View Funding Priorities <ArrowRight size={18} /></a>
          <a className="btn btn-light" href="#partnership">Contact for Partnership</a>
        </div>
      </section>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Community Need" title="Families need clear guidance and accessible pathways." text="Families often need clear guidance, accessible programs, caregiver education, and coordinated support when navigating autism and developmental services." align="center" />
        <div className="card-grid three">{needs.map((need) => <IconCard key={need} icon={Target} title={need} text="General demo need statement for funding proposal structure." />)}</div>
      </AnimatedSection>
      <AnimatedSection className="section soft-band" id="priorities">
        <SectionHeading eyebrow="Funding Priorities" title="Where support can make the demo mission visible." align="center" />
        <div className="card-grid five">{fundingPriorities.map((item) => <IconCard key={item} icon={HeartHandshake} title={item} />)}</div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Impact Model" title="Inputs lead to stronger family and community pathways." align="center" />
        <div className="funding-model">
          {model.map((item, index) => <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>)}
        </div>
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Demo Metrics" title="Proposal-ready numbers, clearly marked as placeholders." align="center" />
        <div className="metric-grid">{impactMetrics.map((metric) => <IconCard key={metric.label} icon={metric.icon} title={metric.value} text={metric.label} />)}</div>
        <p className="center-note">All impact numbers are demo placeholders and do not represent an active funded organization.</p>
      </AnimatedSection>
      <AnimatedSection className="split-section reverse">
        <div>
          <SectionHeading eyebrow="How Funding Helps" title="Funding can widen access and strengthen supports." />
          <div className="mini-list">{helps.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div>
          <SectionHeading eyebrow="Partners" title="Partnership opportunities." />
          <div className="mini-list">{partnerTypes.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="split-section" id="partnership">
        <div>
          <SectionHeading eyebrow="Funding Inquiry" title="Submit a demo partnership inquiry." text="This form is visual only and should not receive real private or health information in demo mode." />
          <IconCard icon={Building2} title="Funding disclaimer" text="Funding goals, impact numbers, programs, and partnership details shown on this demo website are placeholders only." />
        </div>
        <ContactForm funding />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
