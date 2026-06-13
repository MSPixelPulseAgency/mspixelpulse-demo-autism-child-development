import { ArrowRight, Baby, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { IconCard, ImageTile } from "../components/Card";
import ContactCTA from "../components/ContactCTA";
import { images, impactMetrics, programs, resources, trustItems } from "../data/siteData";

export default function Home() {
  const overview = programs.slice(0, 6);
  const journey = ["Connect with us", "Share your child’s needs", "Complete intake", "Build a support plan", "Start programs", "Track progress together"];
  const values = ["Respect every child’s pace", "Support communication", "Build confidence", "Include caregivers", "Create sensory-aware spaces", "Celebrate neurodiversity"];
  const services = ["ABA-informed support", "Speech and communication support", "Occupational therapy style support", "Social skills groups", "Parent coaching", "School transition support", "Respite and community programs", "Funding navigation support"];
  const guide = ["Find a program", "Prepare intake questions", "Understand funding options", "Build a school-readiness checklist", "Create a caregiver support plan", "Explore community resources"];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Fictional demo website for MSPixelPulseAgency</span>
          <h1>Compassionate autism and child development support for families.</h1>
          <p>A warm, accessible demo website for early intervention, caregiver support, therapy programs, school readiness, and community-based child development services.</p>
          <div className="hero-actions">
            <Link className="btn" to="/intake">Start Family Intake <ArrowRight size={18} /></Link>
            <Link className="btn btn-muted" to="/programs">View Programs</Link>
            <Link className="btn btn-light" to="/funding-impact">Support the Mission</Link>
          </div>
        </div>
        <div className="hero-media">
          <img src={images.hero} alt="Caregiver and child sharing a warm learning moment" />
          <div className="floating-card one"><Baby size={18} />Early Intervention</div>
          <div className="floating-card two"><HeartHandshake size={18} />Family Support</div>
          <div className="floating-card three"><Sparkles size={18} />Sensory-Friendly Care</div>
          <div className="floating-card four"><ShieldCheck size={18} />School Readiness</div>
        </div>
      </section>

      <AnimatedSection className="trust-strip">
        {trustItems.map(([label, Icon]) => <IconCard key={label} icon={Icon} title={label} />)}
      </AnimatedSection>

      <AnimatedSection className="section">
        <SectionHeading eyebrow="Programs" title="Support options families can understand quickly." text="Each program is written in plain, respectful language with clear age ranges and gentle next steps." align="center" />
        <div className="card-grid three">
          {overview.map((program) => <IconCard key={program.title} icon={program.icon} title={program.title} meta={program.age} text={program.text} cta="Learn More" />)}
        </div>
      </AnimatedSection>

      <AnimatedSection className="split-section">
        <div>
          <SectionHeading eyebrow="Parent Journey" title="A simple support journey for families." text="The flow is designed to feel calm, predictable, and easy to follow on mobile." />
          <div className="step-grid">
            {journey.map((step, index) => (
              <div className="step-card" key={step}><span>{index + 1}</span><strong>{step}</strong></div>
            ))}
          </div>
        </div>
        <ImageTile src={images.classroom} alt="Bright child-friendly classroom with learning materials" title="Sensory-aware spaces" text="Warm visuals help the site feel parent-friendly and funding-ready." />
      </AnimatedSection>

      <AnimatedSection className="section soft-band">
        <SectionHeading eyebrow="Funding & Impact" title="Built for community impact and funding support." text="This demo includes a funding-ready structure for grant applications, social service proposals, community partnerships, and donor engagement." align="center" />
        <div className="metric-grid">
          {impactMetrics.slice(0, 4).map((metric) => <IconCard key={metric.label} icon={metric.icon} title={metric.value} text={metric.label} />)}
        </div>
        <p className="center-note">All impact numbers are demo placeholders.</p>
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
          <SectionHeading eyebrow="Services Preview" title="Careful service language for a demo support website." text="Services use referral-aware and professional-review language without diagnosis or guaranteed outcome claims." />
          <div className="mini-list">
            {services.map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section guide-feature">
        <SectionHeading eyebrow="AI-style Demo Feature" title="Meet the Family Support Guide." text="A demo AI-style assistant that helps parents explore programs, prepare intake questions, understand funding pathways, and find the right next step." align="center" />
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
