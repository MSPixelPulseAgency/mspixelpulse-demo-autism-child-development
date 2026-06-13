import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageRibbon, ImageTile, PhotoCard } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import { HandHeart, Heart, ShieldCheck, Users } from "lucide-react";
import { images, pageVisuals } from "../data/siteData";

export default function About() {
  const values = ["Respect", "Inclusion", "Dignity", "Family partnership", "Accessibility", "Evidence-informed care", "Neurodiversity-affirming language"];
  const supports = ["Autistic children", "Children with developmental delays", "Neurodiverse children", "Families and caregivers", "School-age children needing transition support", "Parents looking for guidance", "Community partners"];
  return (
    <>
      <section className="page-hero visual-hero">
        <div>
          <span className="eyebrow">About BrightPath</span>
          <h1>A softer path through autism support.</h1>
          <p>BrightPath organizes Ontario autism resources, caregiver questions, child development planning, and official support links in a warm family-friendly way.</p>
        </div>
        <div className="page-hero-media">
          <img src={images.family} alt="Family sharing a warm moment together" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={pageVisuals.about} />
      </AnimatedSection>
      <AnimatedSection className="split-section">
        <div className="stack">
          <IconCard icon={Heart} title="Mission" text="Help families understand OAP pathways, caregiver learning options, school transitions, and child development support questions." />
          <IconCard icon={ShieldCheck} title="Vision" text="A community where autistic children and neurodiverse families can find respectful information, inclusive spaces, and clearer next steps." />
        </div>
        <ImageTile src={images.family} alt="Family spending time together in a warm community setting" title="Family-centered communication" text="The website keeps content plain, respectful, and easy to scan." />
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Values" title="Soft principles, clear presentation." align="center" />
        <div className="card-grid four">
          {values.map((value, index) => (
            <PhotoCard
              key={value}
              src={pageVisuals.about[index % pageVisuals.about.length].src}
              alt={`${value} value visual`}
              icon={HandHeart}
              title={value}
              text="Respectful, accessible, family-centered support navigation."
            />
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection className="split-section reverse">
        <div>
          <SectionHeading eyebrow="Who We Support" title="Built for families and community partners." text="The content is designed for parents, caregivers, schools, service providers, community organizations, and support partners." />
          <div className="mini-list">{supports.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <IconCard icon={Users} title="Why this website exists" text="Families often need one calm place to organize official links, intake questions, school transition notes, and funding/resource pathways." />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
