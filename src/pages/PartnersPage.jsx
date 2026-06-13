import { Building2, Handshake, UsersRound } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageRibbon, PhotoCard } from "../components/Card";
import { ContactForm } from "../components/Forms";
import { images, pageVisuals } from "../data/siteData";

export default function PartnersPage() {
  const items = ["Why partnerships matter", "Referral pathway", "School collaboration", "Community workshops", "Volunteer opportunities", "Shared resource planning"];
  const types = ["Schools", "Community organizations", "Healthcare referral partners", "Charities", "Local businesses", "Volunteers", "Government programs", "Donors"];
  return (
    <>
      <section className="page-hero visual-hero">
        <div>
          <span className="eyebrow">Community Partners</span>
          <h1>Partnerships made easier to picture.</h1>
          <p>Schools, services, funders, and community groups can quickly see where they fit.</p>
        </div>
        <div className="page-hero-media">
          <img src={images.community} alt="Inclusive community gathering for partnership support" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={pageVisuals.funding} />
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Partnership Areas" title="Collaboration at a glance." align="center" />
        <div className="card-grid three">{items.map((item, index) => (
          <PhotoCard
            key={item}
            src={pageVisuals.funding[index % pageVisuals.funding.length].src}
            alt={`${item} partnership visual`}
            icon={Handshake}
            title={item}
            text="Demo collaboration content for outreach."
          />
        ))}</div>
      </AnimatedSection>
      <AnimatedSection className="split-section reverse">
        <div>
          <SectionHeading eyebrow="Partner Types" title="A community-facing model." />
          <div className="mini-list">{types.map((item) => <span key={item}>{item}</span>)}</div>
          <IconCard icon={UsersRound} title="Referral pathway" text="Production versions can include secure referral instructions, eligibility details, forms, and consent-reviewed workflows." />
        </div>
        <div>
          <SectionHeading eyebrow="Inquiry Form" title="Start a demo conversation." />
          <ContactForm funding />
        </div>
      </AnimatedSection>
      <section className="cta-band">
        <div><span className="icon-bubble"><Building2 size={22} /></span><h2>Bring schools and community supports into one clear experience.</h2></div>
      </section>
    </>
  );
}
