import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import ContactCTA from "../components/ContactCTA";
import { programs } from "../data/siteData";

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Programs</span>
        <h1>Clear, warm program pathways for child development support.</h1>
        <p>Each demo program includes age ranges, focus areas, and careful expectations so families can understand options without feeling overwhelmed.</p>
      </section>
      <AnimatedSection className="section">
        <SectionHeading eyebrow="Core Program Areas" title="Program cards built for parents and funders." align="center" />
        <div className="program-list">
          {programs.map((program) => (
            <article className="program-detail" key={program.title}>
              <span className="icon-bubble"><program.icon size={22} /></span>
              <div>
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
