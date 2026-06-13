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
          <h1>A softer story for family-centered support.</h1>
          <p>A fictional community center concept showing how services, funding, resources, and intake can feel warm and easy to explore.</p>
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
          <IconCard icon={Heart} title="Mission" text="Compassionate programs, caregiver education, inclusive development support, and community partnerships." />
          <IconCard icon={ShieldCheck} title="Vision" text="A community where every child can grow, communicate, participate, and feel understood." />
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
              text="Respectful, accessible, family-centered communication."
            />
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection className="split-section reverse">
        <div>
          <SectionHeading eyebrow="Who We Support" title="Built for families and community partners." text="The content structure can be adapted for real organizations after professional, legal, and clinical review." />
          <div className="mini-list">{supports.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <IconCard icon={Users} title="Why this website exists" text="This fictional demo website shows how a child development center can communicate services, impact, funding needs, and family intake in a professional, accessible way." />
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
