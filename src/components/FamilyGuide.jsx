import { Bot, Send, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const responses = {
  "Help me start intake": "Start with your child's strengths, communication style, sensory needs, school stage, and the questions you want to ask. Do not submit private health details in this presentation form.",
  "What programs fit my child?": "Review OAP pathways such as foundational family services, caregiver-mediated early years, core clinical services, entry to school, and urgent response navigation.",
  "Show funding support options": "Review official links for OAP, Special Services at Home, Assistance for Children with Severe Disabilities, and the Disability Tax Credit. Speak with qualified advisors for eligibility decisions.",
  "Prepare questions for consultation": "Ask about service fit, provider qualifications, goals, family participation, school coordination, sensory accommodations, fees, privacy, and how progress is discussed.",
  "Find caregiver resources": "Visit Family Resources for autism overview notes, communication and sensory planning prompts, school transition questions, and official Ontario/Canada links.",
};

export default function FamilyGuide() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("Choose a prompt to explore a supportive next step.");

  return (
    <>
      <button className="guide-button" type="button" onClick={() => setOpen(true)} aria-label="Open Family Guide">
        <Bot size={20} />
        Family Guide
      </button>
      {open && (
        <aside className="guide-panel" aria-label="Family Support Guide">
          <div className="guide-head">
            <div>
              <strong>Family Support Guide</strong>
              <span>Resource navigation helper</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close Family Guide">
              <X size={20} />
            </button>
          </div>
          <p className="guide-answer">{answer}</p>
          <div className="prompt-list">
            {Object.keys(responses).map((prompt) => (
              <button key={prompt} type="button" onClick={() => setAnswer(responses[prompt])}>
                <Send size={14} />
                {prompt}
              </button>
            ))}
          </div>
          <Link to="/intake" className="btn btn-full" onClick={() => setOpen(false)}>Start Family Intake</Link>
          <p className="guide-disclaimer">This guide organizes public information and does not replace professional advice.</p>
        </aside>
      )}
    </>
  );
}
