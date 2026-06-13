import {
  ArrowRight,
  Baby,
  CheckCircle2,
  ExternalLink,
  HeartHandshake,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageRibbon, ImageTile, PhotoCard } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import {
  governmentLinks,
  images,
  impactMetrics,
  pageVisuals,
  programs,
  resources,
  trustItems,
  videos,
} from "../data/siteData";

export default function Home() {
  const overview = programs.slice(0, 6);
  const journey = ["Quick family call", "Share strengths & needs", "Complete intake", "Choose the right support", "Start with a calm plan", "Review progress together"];
  const values = ["Respect every child’s pace", "Support communication", "Build confidence", "Include caregivers", "Create sensory-aware spaces", "Celebrate neurodiversity"];
  const services = ["AccessOAP", "OAP services", "Sensory planning", "School readiness", "Caregiver learning", "Funding links", "Community resources", "Official pathways"];
  const guide = ["Find an OAP pathway", "Prepare intake questions", "Review funding links", "Build a school-readiness checklist", "Create caregiver notes", "Explore Autism Ontario"];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Ontario autism resource navigation</span>
          <h1>Warm autism support for Ontario families.</h1>
          <p>Clear guidance for OAP registration, AccessOAP, child development supports, school readiness, and caregiver next steps.</p>
          <div className="hero-actions">
            <Link className="btn" to="/intake">Start Family Intake <ArrowRight size={18} /></Link>
            <Link className="btn btn-muted" to="/programs">View Programs</Link>
            <Link className="btn btn-light" to="/resources">Official Resources</Link>
          </div>
          <div className="hero-highlights" aria-label="Service highlights">
            {services.slice(0, 4).map((item) => <span key={item}><CheckCircle2 size={16} />{item}</span>)}
          </div>
        </div>
        <div className="hero-media glass-panel">
          <img src={images.hero} alt="Caregiver and child sharing a warm learning moment" />
          <div className="floating-card one"><Baby size={18} />Early Support</div>
          <div className="floating-card two"><HeartHandshake size={18} />Family Plan</div>
          <div className="floating-card three"><Sparkles size={18} />Sensory Care</div>
          <div className="floating-card four"><ShieldCheck size={18} />School Ready</div>
        </div>
      </section>

      <AnimatedSection className="trust-strip">
        {trustItems.map(([label, Icon]) => <IconCard key={label} icon={Icon} title={label} />)}
      </AnimatedSection>

      <AnimatedSection className="section">
        <SectionHeading eyebrow="Programs" title="Simple Ontario support pathways." text="Visual cards explain OAP, AccessOAP, school entry, urgent response, and family resource navigation." align="center" />
        <div className="card-grid three">
          {overview.map((program, index) => (
            <PhotoCard
              key={program.title}
              src={pageVisuals.programs[index]}
              alt={`${program.title} visual for child development support`}
              icon={program.icon}
              title={program.title}
              text={`${program.age} · ${program.text}`}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <SectionHeading eyebrow="Warm Visual Flow" title="A calmer way to understand next steps." align="center" />
        <ImageRibbon items={pageVisuals.home} />
      </AnimatedSection>

      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Parent Journey" title="From first question to a clearer pathway." text="Families can organize diagnosis documents, strengths, sensory needs, school questions, and official resource links." />
          <div className="step-grid">
            {journey.map((step, index) => (
              <div className="step-card" key={step}><span>{index + 1}</span><strong>{step}</strong></div>
            ))}
          </div>
        </div>
        <ImageTile src={images.classroom} alt="Bright child-friendly classroom with learning materials" title="School and sensory planning" text="Clear notes help families prepare for conversations with educators and service providers." />
      </AnimatedSection>

      <AnimatedSection className="section video-section soft-band">
        <div>
          <SectionHeading eyebrow="Video Resource" title="A relevant autism support video." text="A real informational video supports families exploring autism, communication, development, and support topics." />
          <div className="video-points">
            <span><PlayCircle size={18} />Real support content</span>
            <span><Sparkles size={18} />Family-friendly learning</span>
            <span><ShieldCheck size={18} />Keeps guidance informational</span>
          </div>
        </div>
        <div className="video-card">
          <iframe src={videos[0].embed} title={videos[0].title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <div>
            <strong>{videos[0].title}</strong>
            <p>{videos[0].text}</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section soft-band">
        <SectionHeading eyebrow="Funding & Resources" title="Official pathways, easy to scan." text="Review Ontario and Canada resources families often ask about, including OAP, AccessOAP, DTC, SSAH, ACSD, and Autism Ontario." align="center" />
        <div className="metric-grid">
          {impactMetrics.slice(0, 4).map((metric) => <IconCard key={metric.label} icon={metric.icon} title={metric.value} text={metric.label} />)}
        </div>
        <p className="center-note">Links are informational and do not imply eligibility, approval, endorsement, or funding.</p>
      </AnimatedSection>

      <AnimatedSection className="section">
        <SectionHeading eyebrow="Helpful References" title="Official and reliable Canadian resources." text="These links help families review public information directly from Ontario, Canada, AccessOAP, and Autism Ontario." align="center" />
        <div className="card-grid four resource-links">
          {governmentLinks.map((link) => (
            <a className="soft-card lift" href={link.href} target="_blank" rel="noreferrer" key={link.title}>
              <span className="icon-bubble"><link.icon size={22} /></span>
              <h3>{link.title}</h3>
              <p>{link.text}</p>
              <span className="text-link">Open official page <ExternalLink size={15} /></span>
            </a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <SectionHeading eyebrow="Values" title="Autism-friendly values throughout the experience." align="center" />
        <div className="pill-grid">
          {values.map((value) => <span key={value}><CheckCircle2 size={18} />{value}</span>)}
        </div>
      </AnimatedSection>

      <AnimatedSection className="split-section reverse">
        <div className="image-collage">
          <ImageTile src={images.blocks} alt="Child development blocks used in play-based learning" title="Play-based development" text="Soft, positive imagery avoids exploitative or medicalized presentation." />
          <ImageTile src={images.art} alt="Child drawing with colorful art supplies" title="Creative routines" text="Cards and galleries stay spacious on mobile." />
        </div>
        <div>
          <SectionHeading eyebrow="Services Preview" title="Short, careful service language." text="Navigation support uses official-resource language without diagnosis, cure, or guaranteed outcome claims." />
          <div className="mini-list">
            {services.map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section guide-feature">
        <SectionHeading eyebrow="Family Guide" title="Meet the Family Support Guide." text="A static resource helper that organizes OAP pathways, intake questions, funding links, and school-readiness notes." align="center" />
        <div className="card-grid three">
          {guide.map((item, index) => <IconCard key={item} icon={resources[index % resources.length].icon} title={item} text="Safe informational guidance based on public resource pathways." />)}
        </div>
        <p className="center-note">This guide organizes public information and does not replace professional advice.</p>
      </AnimatedSection>

      <AnimatedSection className="section">
        <SectionHeading eyebrow="Family Planning Themes" title="Support should be individualized." align="center" />
        <div className="card-grid three">
          {["Autism experiences vary, so supports should adapt to individual needs.", "Communication and sensory differences are part of planning, not problems to erase.", "Families benefit from clear resource navigation, caregiver learning, and school collaboration."].map((quote, index) => (
            <article className="testimonial" key={quote}>
              <p>{quote}</p>
              <strong>{["Individualized supports", "Neurodiversity-affirming language", "Ontario resource navigation"][index]}</strong>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
