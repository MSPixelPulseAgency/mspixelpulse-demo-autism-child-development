import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageTile } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import { HandHeart, Heart, ShieldCheck, Users } from "lucide-react";
import { images } from "../data/siteData";

export default function About() {
  const values = ["Respect", "Inclusion", "Dignity", "Family partnership", "Accessibility", "Evidence-informed care", "Neurodiversity-affirming language"];
  const supports = ["Autistic children", "Children with developmental delays", "Neurodiverse children", "Families and caregivers", "School-age children needing transition support", "Parents looking for guidance", "Community partners"];
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About BrightPath</span>
        <h1>A compassionate demo concept for child development support.</h1>
        <p>BrightPath is a fictional community-based center concept created to show how an autism support organization can present programs, services, impact, funding needs, family resources, intake forms, and community partnerships.</p>
      </section>
      <AnimatedSection className="split-section">
        <div className="stack">
          <IconCard icon={Heart} title="Mission" text="To support neurodiverse children and their families through compassionate programs, caregiver education, inclusive development support, and community partnerships." />
          <IconCard icon={ShieldCheck} title="Vision" text="A community where every child can grow, communicate, participate, and feel understood." />
        </div>
        <ImageTile src={images.family} alt="Family spending time together in a warm community setting" title="Family-centered communication" text="The website keeps content plain, respectful, and easy to scan." />
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Values" title="Principles that guide the demo content." align="center" />
        <div className="card-grid four">
          {values.map((value) => <IconCard key={value} icon={HandHeart} title={value} text="Designed for respectful, accessible, family-centered communication." />)}
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
