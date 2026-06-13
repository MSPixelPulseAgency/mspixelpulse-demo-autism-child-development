import { AlertCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageRibbon, ImageTile, PhotoCard } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import { images, pageVisuals, services } from "../data/siteData";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero visual-hero">
        <div>
          <span className="eyebrow">Services</span>
          <h1>Support navigation, shown simply.</h1>
          <p>Short cards and calm visuals explain Ontario autism resource pathways without heavy clinical language.</p>
        </div>
        <div className="page-hero-media">
          <img src={images.consult} alt="Supportive caregiver consultation" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={pageVisuals.services.map((item) => ({ ...item, text: "Warm visual support for planning conversations." }))} />
      </AnimatedSection>
      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Offerings" title="Browse support at a glance." />
          <div className="service-grid">
            {services.map((service) => <span key={service}><CheckCircle2 size={18} />{service}</span>)}
          </div>
        </div>
        <ImageTile src={images.consult} alt="Caregiver consultation in a professional support setting" title="Supportive consultation flow" text="The copy avoids diagnosis claims and encourages qualified professional guidance." />
      </AnimatedSection>
      <AnimatedSection className="section soft-band">
        <SectionHeading eyebrow="Careful Language" title="Referral-aware and family-safe." align="center" />
        <div className="card-grid three">
          <IconCard icon={AlertCircle} title="No diagnosis claims" text="Screening referral guidance does not mean diagnosis." />
          <PhotoCard src={images.sensoryRoom} alt="Sensory-friendly support room" title="Calm environment" text="Visuals stay supportive and respectful." />
          <IconCard icon={CheckCircle2} title="Professional review" text="Families should consult qualified professionals for assessment, therapy, education, tax, and funding decisions." />
        </div>
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
