import { useState } from "react";
import { submitInquiry } from "../lib/mspInquiry";

const childAges = ["Under 2", "2-4", "5-7", "8-10", "11-14", "15+"];
const programs = [
  "Early Intervention Support",
  "Communication Support",
  "Occupational & Sensory Support",
  "Behaviour & Daily Living Skills",
  "School Readiness",
  "Parent Coaching",
  "Social Skills Group",
  "Not sure yet",
];
const supportAreas = [
  "Communication",
  "Sensory needs",
  "Daily routines",
  "Social interaction",
  "School readiness",
  "Behaviour support",
  "Parent guidance",
  "Funding/navigation",
  "Other",
];
const inquiryTypes = [
  "Family Intake",
  "Program Question",
  "Funding Partnership",
  "Community Partnership",
  "Volunteer Interest",
  "Website Inquiry",
  "Other",
];
const partnerTypes = [
  "Government Funding",
  "Community Grant",
  "Donor Support",
  "School Partnership",
  "Healthcare Referral Partner",
  "Volunteer Program",
  "Corporate Sponsorship",
  "Other",
];

const CONSENT_LABEL = "I agree to be contacted about this request. This is a demo website; no booking, order or appointment is created.";
const HEALTH_NOTE = "Please don't include medical details in this demo form.";
const hiddenStyle = { position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" };

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function useInquiryForm(formType, build) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  async function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const v = (key) => String(data.get(key) || "");
    setStatus("loading");
    setError("");
    const result = await submitInquiry({ ...build(v), formType, consent: data.get("consent") === "on", honeypot: v("company_website") });
    if (result.ok) setStatus("sent");
    else { setStatus("error"); setError(result.error); }
  }
  return { status, error, onSubmit, sending: status === "loading", sent: status === "sent" };
}

function InquiryFooter({ form, label }) {
  return (
    <>
      <div style={hiddenStyle} aria-hidden="true"><label>Company website<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="field" style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontWeight: 600 }}>
        <input type="checkbox" name="consent" required style={{ width: "auto", marginTop: ".25rem" }} />
        <span>{CONSENT_LABEL}</span>
      </label>
      {form.error ? <p className="form-note" role="alert" style={{ color: "#9b2c2c" }}>{form.error}</p> : null}
      <button className="btn" type="submit" disabled={form.sending}>{form.sending ? "Sending…" : label}</button>
      <p className="form-note">{HEALTH_NOTE} This is a demo website: your message goes to the MSPixelPulse inquiry inbox and no appointment or booking is created.</p>
    </>
  );
}

function Success({ title }) {
  return (
    <div className="form-panel" role="status">
      <h3>{title}</h3>
      <p>Your demo request was received by MSPixelPulse and someone will reply by email. No appointment, intake or booking has been created.</p>
    </div>
  );
}

export function IntakeForm() {
  const form = useInquiryForm("consultation", (v) => ({
    name: v("name"), email: v("email"), phone: v("phone"), service: v("program"), message: v("message"),
    details: { childAge: v("childAge"), city: v("city"), supportArea: v("supportArea"), preferredContact: v("preferredContact") },
  }));
  if (form.sent) return <Success title="Intake request received" />;
  return (
    <form className="form-panel" aria-label="Family intake form" onSubmit={form.onSubmit}>
      <Field label="Parent/Caregiver Name"><input type="text" name="name" required autoComplete="name" placeholder="Caregiver name" /></Field>
      <Field label="Email"><input type="email" name="email" required autoComplete="email" placeholder="name@example.com" /></Field>
      <Field label="Phone"><input type="tel" name="phone" autoComplete="tel" placeholder="+1 (000) 000-0000" /></Field>
      <Field label="Child Age"><select name="childAge">{childAges.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="City"><input type="text" name="city" placeholder="Toronto" /></Field>
      <Field label="Preferred Program"><select name="program">{programs.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Main Area of Support"><select name="supportArea">{supportAreas.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Preferred Contact Method"><select name="preferredContact"><option>Email</option><option>Phone</option><option>Either</option></select></Field>
      <Field label="Message"><textarea name="message" rows="5" required placeholder="Share general goals or questions. Please do not enter private health information here." /></Field>
      <InquiryFooter form={form} label="Submit Intake Request" />
    </form>
  );
}

export function ContactForm({ funding = false }) {
  const form = useInquiryForm(funding ? "question" : "contact", (v) => ({
    name: v("name"), email: v("email"), phone: v("phone"), businessName: v("organization"), service: v("type"), message: v("message"),
    details: funding ? { resourceInterest: v("resourceInterest") } : { city: v("city") },
  }));
  if (form.sent) return <Success title={funding ? "Partnership inquiry received" : "Message received"} />;
  return (
    <form className="form-panel" aria-label={funding ? "Partnership inquiry form" : "Contact form"} onSubmit={form.onSubmit}>
      <Field label="Name"><input type="text" name="name" required autoComplete="name" placeholder="Your name" /></Field>
      {funding && <Field label="Organization"><input type="text" name="organization" autoComplete="organization" placeholder="Organization name" /></Field>}
      <Field label="Email"><input type="email" name="email" required autoComplete="email" placeholder="name@example.com" /></Field>
      <Field label="Phone"><input type="tel" name="phone" autoComplete="tel" placeholder="+1 (000) 000-0000" /></Field>
      <Field label={funding ? "Partnership Type" : "Inquiry Type"}>
        <select name="type">{(funding ? partnerTypes : inquiryTypes).map((item) => <option key={item}>{item}</option>)}</select>
      </Field>
      {funding && <Field label="Resource Interest"><input type="text" name="resourceInterest" placeholder="OAP, AccessOAP, SSAH, ACSD, DTC, school resources..." /></Field>}
      {!funding && <Field label="City"><input type="text" name="city" placeholder="Toronto" /></Field>}
      <Field label="Message"><textarea name="message" rows="5" required placeholder="Share general questions. Please do not enter private health information here." /></Field>
      <InquiryFooter form={form} label={funding ? "Submit Partnership Inquiry" : "Send Message"} />
    </form>
  );
}
