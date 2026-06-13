import { AlertCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageTile } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import { images, services } from "../data/siteData";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Services</span>
        <h1>Child development and family support services, explained carefully.</h1>
        <p>This service page is written for a demo autism support center website and uses referral-aware, non-medical wording.</p>
      </section>
      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Offerings" title="Support families can browse with confidence." />
          <div className="service-grid">
            {services.map((service) => <span key={service}><CheckCircle2 size={18} />{service}</span>)}
          </div>
        </div>
        <ImageTile src={images.consult} alt="Caregiver consultation in a professional support setting" title="Supportive consultation flow" text="The copy avoids diagnosis claims and encourages qualified professional guidance." />
      </AnimatedSection>
      <AnimatedSection className="section soft-band">
        <SectionHeading eyebrow="Important Safety Note" title="Professional review matters." align="center" />
        <IconCard icon={AlertCircle} title="Referral-aware language" text="Developmental needs screening referral guidance does not mean diagnosis. Families should consult qualified healthcare, clinical, and education professionals for assessment, diagnosis, therapy, and support decisions." />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
