import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import ContactCTA from "../components/ContactCTA";
import { ImageRibbon } from "../components/Card";
import { images, pageVisuals, programs } from "../data/siteData";

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero visual-hero">
        <div>
          <span className="eyebrow">Programs</span>
          <h1>Playful pathways for child development.</h1>
          <p>Short program cards, warm imagery, and clear next steps for families.</p>
        </div>
        <div className="page-hero-media">
          <img src={images.blocks} alt="Colorful blocks for play-based child development" />
        </div>
      </section>
      <AnimatedSection className="section">
        <ImageRibbon items={[
          { src: images.learning, alt: "Caregiver and child learning together", title: "Early learning", text: "Support that starts gently." },
          { src: images.sensory, alt: "Sensory-friendly therapy room detail", title: "Sensory support", text: "Calm routines and spaces." },
          { src: images.school, alt: "Bright school-ready classroom", title: "School readiness", text: "Confidence for transitions." },
        ]} />
      </AnimatedSection>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Core Program Areas" title="Programs families can scan quickly." align="center" />
        <div className="program-list">
          {programs.map((program, index) => (
            <article className="program-detail" key={program.title}>
              <img src={pageVisuals.programs[index]} alt={`${program.title} support setting`} loading="lazy" />
              <div>
                <span className="icon-bubble"><program.icon size={22} /></span>
                <span className="card-meta">{program.age}</span>
                <h2>{program.title}</h2>
                <p><strong>Focus:</strong> {program.focus}</p>
                <p><strong>What families can expect:</strong> {program.expect}</p>
                <button className="btn btn-small" type="button">Ask About This Program</button>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
      <ContactCTA />
    </>
  );
}
