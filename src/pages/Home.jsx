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
import { IconCard, ImageTile } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import {
  governmentLinks,
  images,
  impactMetrics,
  programs,
  resources,
  trustItems,
  videos,
} from "../data/siteData";

export default function Home() {
  const overview = programs.slice(0, 6);
  const journey = ["Quick family call", "Share strengths & needs", "Complete intake", "Choose the right support", "Start with a calm plan", "Review progress together"];
  const values = ["Respect every child’s pace", "Support communication", "Build confidence", "Include caregivers", "Create sensory-aware spaces", "Celebrate neurodiversity"];
  const services = ["Early intervention", "Communication support", "Sensory routines", "School readiness", "Parent coaching", "Social skills groups", "Funding navigation", "Community programs"];
  const guide = ["Find a program", "Prepare intake questions", "Understand funding options", "Build a school-readiness checklist", "Create a caregiver support plan", "Explore community resources"];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Fictional demo website for MSPixelPulseAgency</span>
          <h1>Warm autism support website for families and child development centers.</h1>
          <p>A polished, accessible demo experience for early intervention, caregiver support, therapy programs, school readiness, funding guidance, and community-based child development services.</p>
          <div className="hero-actions">
            <Link className="btn" to="/intake">Start Family Intake <ArrowRight size={18} /></Link>
            <Link className="btn btn-muted" to="/programs">View Programs</Link>
            <Link className="btn btn-light" to="/resources">Explore Resources</Link>
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
        <SectionHeading eyebrow="Programs" title="Support options families can understand quickly." text="Each program uses clear, respectful language, age ranges, visual cards, and gentle next steps so parents do not feel overwhelmed." align="center" />
        <div className="card-grid three">
          {overview.map((program) => <IconCard key={program.title} icon={program.icon} title={program.title} meta={program.age} text={program.text} cta="Learn More" />)}
        </div>
      </AnimatedSection>

      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Parent Journey" title="A smoother intake journey from first visit to first plan." text="The flow is designed to feel calm, predictable, and easy to follow on desktop and mobile." />
          <div className="step-grid">
            {journey.map((step, index) => (
              <div className="step-card" key={step}><span>{index + 1}</span><strong>{step}</strong></div>
            ))}
          </div>
        </div>
        <ImageTile src={images.classroom} alt="Bright child-friendly classroom with learning materials" title="Sensory-aware spaces" text="Warm visuals help the site feel parent-friendly, professional, and funding-ready." />
      </AnimatedSection>

      <AnimatedSection className="section video-section soft-band">
        <div>
          <SectionHeading eyebrow="Video Preview" title="Add an engaging intro video section for the demo." text="This area can be replaced with a real clinic video, parent welcome message, YouTube embed, or short service explainer." />
          <div className="video-points">
            <span><PlayCircle size={18} />Perfect for hero walkthroughs</span>
            <span><Sparkles size={18} />Builds trust quickly</span>
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
        <SectionHeading eyebrow="Funding & Impact" title="Built for community impact and funding support." text="This demo includes a funding-ready structure for grant applications, social service proposals, community partnerships, donor engagement, and transparent impact storytelling." align="center" />
        <div className="metric-grid">
          {impactMetrics.slice(0, 4).map((metric) => <IconCard key={metric.label} icon={metric.icon} title={metric.value} text={metric.label} />)}
        </div>
        <p className="center-note">All impact numbers are demo placeholders.</p>
      </AnimatedSection>

      <AnimatedSection className="section">
        <SectionHeading eyebrow="Helpful References" title="Official resource links for Canadian families." text="These buttons link to official government pages families can review. They do not imply endorsement or approval of this fictional demo site." align="center" />
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
          <SectionHeading eyebrow="Services Preview" title="Clear service language for a professional support website." text="Services use referral-aware and professional-review language without diagnosis, cure, or guaranteed outcome claims." />
          <div className="mini-list">
            {services.map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section guide-feature">
        <SectionHeading eyebrow="AI-style Demo Feature" title="Meet the Family Support Guide." text="A demo assistant concept that helps parents explore programs, prepare intake questions, understand funding pathways, and find the right next step." align="center" />
        <div className="card-grid three">
          {guide.map((item, index) => <IconCard key={item} icon={resources[index % resources.length].icon} title={item} text="Static demo prompt with safe, informational guidance only." />)}
        </div>
        <p className="center-note">This guide is a demo tool and does not replace professional advice.</p>
      </AnimatedSection>

      <AnimatedSection className="section">
        <SectionHeading eyebrow="Demo Stories" title="Supportive testimonials for portfolio presentation." align="center" />
        <div className="card-grid three">
          {["The intake flow feels calm and easy for parents to understand.", "The programs are explained in a way that feels supportive, not overwhelming.", "The funding section makes the mission clear for partners and donors."].map((quote, index) => (
            <article className="testimonial" key={quote}>
              <p>“{quote}”</p>
              <strong>{["Demo Parent Story", "Demo Caregiver Story", "Demo Community Partner Story"][index]}</strong>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <ContactCTA />
    </>
  );
}
