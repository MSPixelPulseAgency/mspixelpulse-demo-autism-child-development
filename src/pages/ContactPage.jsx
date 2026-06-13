import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { ContactForm } from "../components/Forms";
import { IconCard, ImageRibbon } from "../components/Card";
import { brand, images, pageVisuals } from "../data/siteData";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero visual-hero">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Reach out with a clear next step.</h1>
          <p>Demo contact paths for family intake, programs, funding, partners, and website inquiries.</p>
        </div>
        <div className="page-hero-media">
          <img src={images.community} alt="Warm community support image for contact page" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={pageVisuals.contact} />
      </AnimatedSection>
      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Demo Contact Details" title={brand.name} text="Placeholder details for a fictional MSPixelPulseAgency demo." />
          <div className="stack">
            <IconCard icon={MapPin} title="Location" text={brand.location} />
            <IconCard icon={Phone} title="Phone" text={brand.phone} />
            <IconCard icon={Mail} title="Email" text={brand.email} />
          </div>
        </div>
        <ContactForm />
      </AnimatedSection>
    </>
  );
}
