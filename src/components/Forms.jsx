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
  "Website Demo Inquiry",
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

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export function IntakeForm() {
  return (
    <form className="form-panel" aria-label="Demo family intake form">
      <Field label="Parent/Caregiver Name"><input type="text" placeholder="Demo caregiver name" /></Field>
      <Field label="Email"><input type="email" placeholder="name@example.com" /></Field>
      <Field label="Phone"><input type="tel" placeholder="+1 (000) 000-0000" /></Field>
      <Field label="Child Age"><select>{childAges.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="City"><input type="text" placeholder="Toronto" /></Field>
      <Field label="Preferred Program"><select>{programs.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Main Area of Support"><select>{supportAreas.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Preferred Contact Method"><select><option>Email</option><option>Phone</option><option>Either</option></select></Field>
      <Field label="Message"><textarea rows="5" placeholder="Please do not enter real personal health information in this demo form." /></Field>
      <button className="btn" type="button">Submit Intake Request</button>
      <p className="form-note">Demo form only. In production, this can connect to EmailJS, Formspree, CRM, Google Sheets, or a backend API.</p>
    </form>
  );
}

export function ContactForm({ funding = false }) {
  return (
    <form className="form-panel" aria-label={funding ? "Demo partnership inquiry form" : "Demo contact form"}>
      <Field label={funding ? "Name" : "Name"}><input type="text" placeholder="Demo name" /></Field>
      {funding && <Field label="Organization"><input type="text" placeholder="Demo organization" /></Field>}
      <Field label="Email"><input type="email" placeholder="name@example.com" /></Field>
      <Field label="Phone"><input type="tel" placeholder="+1 (000) 000-0000" /></Field>
      <Field label={funding ? "Partnership Type" : "Inquiry Type"}>
        <select>{(funding ? partnerTypes : inquiryTypes).map((item) => <option key={item}>{item}</option>)}</select>
      </Field>
      {funding && <Field label="Funding Interest"><input type="text" placeholder="Caregiver workshops, sensory room setup, outreach..." /></Field>}
      {!funding && <Field label="City"><input type="text" placeholder="Toronto" /></Field>}
      <Field label="Message"><textarea rows="5" placeholder="Please do not enter real personal health information in this demo form." /></Field>
      <button className="btn" type="button">{funding ? "Submit Partnership Inquiry" : "Send Message"}</button>
    </form>
  );
}
