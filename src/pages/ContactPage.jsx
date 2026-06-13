import { Mail, MapPin, MessageCircleHeart, Phone } from "lucide-react";
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
          <p>Contact paths for family intake questions, OAP navigation, resource planning, funding links, and partnerships.</p>
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
          <SectionHeading eyebrow="Contact Details" title={brand.name} text="BrightPath is a fictional brand concept using safe placeholder contact details." />
          <div className="stack">
            <IconCard icon={MapPin} title="Location" text={brand.location} />
            <IconCard icon={Phone} title="Phone" text={brand.phone} />
            <IconCard icon={Mail} title="Email" text={brand.email} />
            <a className="btn btn-whatsapp btn-full" href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
              <MessageCircleHeart size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <ContactForm />
      </AnimatedSection>
    </>
  );
}
