import { Building2, Handshake, UsersRound } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard } from "../components/Card";
import { ContactForm } from "../components/Forms";

export default function PartnersPage() {
  const items = ["Why partnerships matter", "Referral pathway", "School collaboration", "Community workshops", "Volunteer opportunities", "Shared resource planning"];
  const types = ["Schools", "Community organizations", "Healthcare referral partners", "Charities", "Local businesses", "Volunteers", "Government programs", "Donors"];
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Community Partners</span>
        <h1>Partnership pathways for schools, services, and community organizations.</h1>
        <p>This demo page helps funders and partners understand how a child development center could coordinate referral pathways, workshops, and accessible programs.</p>
      </section>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Partnership Areas" title="A clear structure for collaboration." align="center" />
        <div className="card-grid three">{items.map((item) => <IconCard key={item} icon={Handshake} title={item} text="Demo collaboration content for proposal and outreach presentation." />)}</div>
      </AnimatedSection>
      <AnimatedSection className="split-section reverse">
        <div>
          <SectionHeading eyebrow="Partner Types" title="Built for a community-facing service model." />
          <div className="mini-list">{types.map((item) => <span key={item}>{item}</span>)}</div>
          <IconCard icon={UsersRound} title="Referral pathway" text="Production versions can include secure referral instructions, eligibility details, forms, and consent-reviewed workflows." />
        </div>
        <div>
          <SectionHeading eyebrow="Inquiry Form" title="Start a demo partnership conversation." />
          <ContactForm funding />
        </div>
      </AnimatedSection>
      <section className="cta-band">
        <div><span className="icon-bubble"><Building2 size={22} /></span><h2>Bring schools and community supports into one clear website experience.</h2></div>
      </section>
    </>
  );
}
