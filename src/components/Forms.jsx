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
    <form className="form-panel" aria-label="Family intake form">
      <Field label="Parent/Caregiver Name"><input type="text" placeholder="Caregiver name" /></Field>
      <Field label="Email"><input type="email" placeholder="name@example.com" /></Field>
      <Field label="Phone"><input type="tel" placeholder="+1 (000) 000-0000" /></Field>
      <Field label="Child Age"><select>{childAges.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="City"><input type="text" placeholder="Toronto" /></Field>
      <Field label="Preferred Program"><select>{programs.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Main Area of Support"><select>{supportAreas.map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Preferred Contact Method"><select><option>Email</option><option>Phone</option><option>Either</option></select></Field>
      <Field label="Message"><textarea rows="5" placeholder="Share general goals or questions. Please do not enter private health information here." /></Field>
      <button className="btn" type="button">Submit Intake Request</button>
      <p className="form-note">Use this form for general questions only. A live version should use a privacy-reviewed email, CRM, secure form, or backend workflow.</p>
    </form>
  );
}

export function ContactForm({ funding = false }) {
  return (
    <form className="form-panel" aria-label={funding ? "Partnership inquiry form" : "Contact form"}>
      <Field label={funding ? "Name" : "Name"}><input type="text" placeholder="Your name" /></Field>
      {funding && <Field label="Organization"><input type="text" placeholder="Organization name" /></Field>}
      <Field label="Email"><input type="email" placeholder="name@example.com" /></Field>
      <Field label="Phone"><input type="tel" placeholder="+1 (000) 000-0000" /></Field>
      <Field label={funding ? "Partnership Type" : "Inquiry Type"}>
        <select>{(funding ? partnerTypes : inquiryTypes).map((item) => <option key={item}>{item}</option>)}</select>
      </Field>
      {funding && <Field label="Resource Interest"><input type="text" placeholder="OAP, AccessOAP, SSAH, ACSD, DTC, school resources..." /></Field>}
      {!funding && <Field label="City"><input type="text" placeholder="Toronto" /></Field>}
      <Field label="Message"><textarea rows="5" placeholder="Share general questions. Please do not enter private health information here." /></Field>
      <button className="btn" type="button">{funding ? "Submit Partnership Inquiry" : "Send Message"}</button>
    </form>
  );
}
