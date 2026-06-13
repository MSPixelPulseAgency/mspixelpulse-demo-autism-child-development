import { Bot, Send, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const responses = {
  "Help me start intake": "Start with the Intake page. Prepare your child age range, key strengths, support goals, and preferred contact method. This demo does not collect real health information.",
  "What programs fit my child?": "Review age ranges on the Programs page, then choose the closest support area: communication, sensory needs, daily routines, school readiness, social participation, or caregiver coaching.",
  "Show funding support options": "The Funding & Impact page shows demo priorities such as caregiver workshops, sensory-friendly equipment, digital intake tools, accessible spaces, and outreach.",
  "Prepare questions for consultation": "Ask about program fit, referral needs, caregiver participation, session structure, accessibility, fees, funding options, and how progress is discussed.",
  "Find caregiver resources": "Visit Family Resources for intake checklists, school-readiness prompts, caregiver wellbeing reminders, and demo funding preparation cards.",
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
        <aside className="guide-panel" aria-label="Demo Family Support Guide">
          <div className="guide-head">
            <div>
              <strong>Family Support Guide</strong>
              <span>Static demo assistant</span>
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
          <p className="guide-disclaimer">This guide is a demo tool and does not replace professional advice.</p>
        </aside>
      )}
    </>
  );
}
