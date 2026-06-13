import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { ContactForm } from "../components/Forms";
import { IconCard } from "../components/Card";
import { brand } from "../data/siteData";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Contact</span>
        <h1>Contact the BrightPath demo center.</h1>
        <p>Use this page for family intake questions, program information, funding partnerships, community partnerships, volunteer interest, or website demo inquiries.</p>
      </section>
      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Demo Contact Details" title={brand.name} text="All details are placeholders for a fictional MSPixelPulseAgency demo website." />
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
