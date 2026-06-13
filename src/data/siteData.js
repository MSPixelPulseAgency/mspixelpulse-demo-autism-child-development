import {
  Baby,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Compass,
  HandHeart,
  HeartHandshake,
  Home,
  Layers3,
  MessageCircle,
  Puzzle,
  School,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";

export const brand = {
  name: "BrightPath Autism & Child Development Center",
  shortName: "BrightPath",
  tagline: "Helping children grow with confidence, communication, and care.",
  location: "Toronto, Ontario, Canada",
  phone: "+1 (000) 000-0000",
  email: "hello@mspixelpulse.com",
  socials: "#",
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Services", path: "/services" },
  { label: "Funding & Impact", path: "/funding-impact" },
  { label: "Resources", path: "/resources" },
  { label: "Intake", path: "/intake" },
  { label: "Contact", path: "/contact" },
];

export const pageMeta = {
  "/": {
    title: "BrightPath Autism & Child Development Center | Demo Website Canada",
    description:
      "A compassionate autism support center website demo for child development programs, early intervention, caregiver support, resources, and funding proposal content in Canada.",
  },
  "/about": {
    title: "About | BrightPath Autism & Child Development Center",
    description:
      "Learn about the fictional BrightPath mission, values, and neurodiversity-affirming child development website concept.",
  },
  "/programs": {
    title: "Programs | Autism & Child Development Support",
    description:
      "Explore demo autism support programs for early intervention, communication, sensory support, school readiness, caregiver coaching, and community participation.",
  },
  "/services": {
    title: "Services | Child Development & Family Support",
    description:
      "Review family intake, referral guidance, ABA-informed support, speech-style communication support, occupational and sensory support, and caregiver workshops.",
  },
  "/funding-impact": {
    title: "Funding & Impact | BrightPath Autism Support Demo",
    description:
      "A funding-ready demo page presenting community needs, funding priorities, placeholder impact metrics, and partnership opportunities.",
  },
  "/resources": {
    title: "Family Resources | Autism Support & Child Development",
    description:
      "Parent-friendly demo resources for intake preparation, autism support, communication, sensory needs, school transitions, and caregiver wellbeing.",
  },
  "/intake": {
    title: "Family Intake | BrightPath Autism & Child Development Center",
    description:
      "A simple demo family intake page for autism support, child development programs, and caregiver next-step guidance.",
  },
  "/partners": {
    title: "Community Partners | BrightPath",
    description:
      "Explore demo partnership pathways for schools, community organizations, healthcare providers, charities, donors, and volunteers.",
  },
  "/faq": {
    title: "FAQ | BrightPath Autism & Child Development Center",
    description:
      "Frequently asked questions about this fictional autism therapy website Canada demo, services, funding content, intake forms, and safe usage.",
  },
  "/contact": {
    title: "Contact | BrightPath Autism & Child Development Center",
    description:
      "Contact the fictional BrightPath demo center for intake, program questions, funding partnerships, community partnerships, and website demo inquiries.",
  },
};

export const images = {
  hero:
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=85",
  classroom:
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80",
  blocks:
    "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=1000&q=80",
  family:
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
  room:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
  art:
    "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=1000&q=80",
  group:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
  consult:
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1000&q=80",
  therapy:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
  sensory:
    "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1000&q=80",
  learning:
    "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1000&q=80",
  playroom:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
  caregiver:
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
  sensoryRoom:
    "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1000&q=80",
  school:
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&q=80",
  community:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
  familyCare:
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=80",
  childBlocks:
    "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=1000&q=80",
};

export const pageVisuals = {
  home: [
    { src: images.classroom, alt: "Warm classroom with child-friendly learning materials", title: "Learning spaces", text: "Soft, organized areas for growth." },
    { src: images.blocks, alt: "Colorful blocks for play-based learning", title: "Play-based support", text: "Visual routines and gentle discovery." },
    { src: images.family, alt: "Caregiver and child spending warm time together", title: "Family connection", text: "Caregivers are part of the plan." },
  ],
  about: [
    { src: images.family, alt: "Diverse family smiling together outdoors", title: "Family-centered", text: "Warm language for parent trust." },
    { src: images.room, alt: "Calm child development room with tables", title: "Accessible spaces", text: "Designed to feel clear and welcoming." },
    { src: images.art, alt: "Child drawing with bright art supplies", title: "Creative growth", text: "Every child’s pace matters." },
  ],
  programs: [
    images.blocks,
    images.learning,
    images.sensory,
    images.playroom,
    images.school,
    images.caregiver,
    images.group,
    images.community,
  ],
  services: [
    { src: images.consult, alt: "Caregiver consultation in a supportive setting", title: "Family consultation" },
    { src: images.sensoryRoom, alt: "Soft sensory-friendly room details", title: "Sensory routines" },
    { src: images.school, alt: "Classroom setup for school readiness", title: "School readiness" },
  ],
  funding: [
    { src: images.community, alt: "Community group gathered outdoors", title: "Community partnerships", text: "Funding stories feel human and local." },
    { src: images.room, alt: "Child-friendly program room", title: "Program spaces", text: "Visual priorities for grants and donors." },
    { src: images.caregiver, alt: "Caregiver and child learning together", title: "Caregiver education", text: "Workshops and next-step guidance." },
  ],
  resources: [
    { src: images.art, alt: "Child art activity with colorful supplies", title: "Printable guides", text: "Download-style resource cards." },
    { src: images.school, alt: "Learning table in a bright classroom", title: "School planning", text: "Transition prompts and checklists." },
    { src: images.familyCare, alt: "Family support moment outdoors", title: "Caregiver wellbeing", text: "Support for the whole family." },
  ],
  intake: [
    { src: images.family, alt: "Caregiver holding a child in a warm family setting", title: "Start gently", text: "Simple steps and friendly forms." },
    { src: images.consult, alt: "Supportive conversation at a table", title: "Talk through needs", text: "No overwhelming intake language." },
    { src: images.playroom, alt: "Playful learning area for child development intake", title: "Choose support", text: "Programs feel easier to explore." },
  ],
  contact: [
    { src: images.community, alt: "Community members sharing a warm moment", title: "Community-ready", text: "Contact paths for families and partners." },
    { src: images.room, alt: "Clean child development room", title: "Welcoming space", text: "Placeholder details stay demo-safe." },
    { src: images.familyCare, alt: "Caregiver and child support moment", title: "Family first", text: "Clear next steps for every inquiry." },
  ],
};

export const videos = [
  {
    title: "A calm walk-through for new families",
    text: "Demo video block for explaining intake, programs, funding support, and next steps in a friendly way.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const governmentLinks = [
  {
    title: "Ontario Autism Program",
    text: "Official Ontario information for autism services and program pathways.",
    href: "https://www.ontario.ca/page/ontario-autism-program",
    icon: ClipboardList,
  },
  {
    title: "Autism Spectrum Disorder in Canada",
    text: "Government of Canada public health information and national autism context.",
    href: "https://www.canada.ca/en/public-health/services/diseases/autism-spectrum-disorder-asd.html",
    icon: Brain,
  },
  {
    title: "Disability Tax Credit",
    text: "Canada Revenue Agency information families may review with qualified advisors.",
    href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html",
    icon: ShieldCheck,
  },
  {
    title: "Special Services at Home",
    text: "Ontario support program information for children with developmental or physical disabilities.",
    href: "https://www.ontario.ca/page/special-services-home",
    icon: HandHeart,
  },
];

export const programs = [
  {
    title: "Early Intervention Support",
    age: "18 months - 6 years",
    focus: "Communication, play, daily routines, caregiver support",
    icon: Sprout,
    text:
      "Gentle early support for play, communication, routines, and family confidence.",
    expect:
      "Families can expect a calm intake, strengths-based goals, caregiver-friendly next steps, and progress conversations.",
  },
  {
    title: "Communication & Speech Support",
    age: "2 - 12 years",
    focus:
      "Expressive language, receptive language, social communication, visual supports",
    icon: MessageCircle,
    text:
      "Communication development support with visual tools and family-centered strategies.",
    expect:
      "Families can expect simple communication goals, activity ideas, and referral-aware guidance for qualified speech services.",
  },
  {
    title: "Occupational & Sensory Support",
    age: "2 - 12 years",
    focus: "Sensory regulation, fine motor, daily living skills, classroom readiness",
    icon: Puzzle,
    text:
      "Sensory-aware routines, fine motor play, and daily skill support in calm spaces.",
    expect:
      "Families can expect sensory-friendly planning, everyday routine support, and recommendations to consult qualified professionals.",
  },
  {
    title: "Behaviour & Daily Living Skills",
    age: "3 - 14 years",
    focus:
      "Routines, independence, transitions, self-help skills, emotional regulation",
    icon: Layers3,
    text:
      "ABA-informed skill building language for routines, transitions, and independence.",
    expect:
      "Families can expect respectful support planning that avoids promises and focuses on practical, observable goals.",
  },
  {
    title: "School Readiness Program",
    age: "4 - 8 years",
    focus:
      "Classroom routines, group participation, communication, transitions, self-advocacy",
    icon: School,
    text:
      "Support for classroom routines, group participation, and confident transitions.",
    expect:
      "Families can expect school-readiness checklists, transition planning, and collaboration-friendly summaries.",
  },
  {
    title: "Parent & Caregiver Coaching",
    age: "All ages",
    focus: "Home strategies, routines, understanding needs, confidence, support planning",
    icon: HeartHandshake,
    text:
      "Caregiver guidance that helps families understand needs and prepare next steps.",
    expect:
      "Families can expect plain-language coaching, resource navigation, and supportive planning without medical advice.",
  },
  {
    title: "Social Skills Groups",
    age: "5 - 14 years",
    focus: "Peer interaction, play, turn-taking, group communication",
    icon: Users,
    text:
      "Small-group participation concepts for play, communication, and belonging.",
    expect:
      "Families can expect inclusive group structures, careful pacing, and strengths-based participation goals.",
  },
  {
    title: "Community Participation Program",
    age: "6 - 16 years",
    focus: "Outings, confidence, life skills, safe community participation",
    icon: Compass,
    text:
      "Community confidence, safe participation, and family-supported life skills.",
    expect:
      "Families can expect demo outings, confidence-building goals, and caregiver-informed safety planning.",
  },
];

export const services = [
  "Autism support planning",
  "Family intake consultation",
  "Developmental needs screening referral guidance",
  "Speech and communication support",
  "Occupational and sensory support",
  "ABA-informed skill building",
  "Parent coaching",
  "School readiness support",
  "Social skills groups",
  "Caregiver workshops",
  "Community navigation",
  "Funding support guidance",
];

export const impactMetrics = [
  { value: "150+", label: "demo families supported", icon: Users },
  { value: "8", label: "demo program areas", icon: Layers3 },
  { value: "40+", label: "demo caregiver workshops", icon: CalendarCheck },
  { value: "12", label: "demo community partners", icon: HandHeart },
  { value: "85%", label: "demo families report clearer next steps", icon: CheckCircle2 },
  { value: "100%", label: "placeholder metrics for proposal layout only", icon: ShieldCheck },
];

export const resources = [
  { title: "Understanding Autism", text: "Plain-language overview prompts for respectful family education.", icon: Brain },
  { title: "Communication Supports", text: "Ideas for visual supports, expressive language, and questions to ask professionals.", icon: MessageCircle },
  { title: "Sensory Needs", text: "Supportive language for sensory preferences, regulation, and calm routines.", icon: Sparkles },
  { title: "School Transition", text: "Checklists for classroom routines, meetings, and transition planning.", icon: School },
  { title: "Daily Routines", text: "Family-friendly planning cards for home routines and predictable next steps.", icon: Home },
  { title: "Caregiver Wellbeing", text: "Prompts for support circles, rest, and asking for help without guilt.", icon: HeartHandshake },
  { title: "Funding Pathways", text: "Demo preparation prompts for grants, community programs, and documentation.", icon: ClipboardList },
  { title: "Community Programs", text: "A simple way to organize local supports, workshops, and partner contacts.", icon: HandHeart },
];

export const faqItems = [
  ["Is BrightPath a real clinic?", "No. This is a fictional demo website created by MSPixelPulseAgency."],
  ["Does this website provide medical advice?", "No. This demo provides informational website content only and does not replace advice from qualified professionals."],
  ["Can this website be customized for a real autism therapy center?", "Yes. Branding, services, intake forms, funding pages, resources, and contact details can be customized."],
  ["Can this work for ABA therapy clinics?", "Yes. The layout can be adapted for ABA-informed services, with proper professional and legal review."],
  ["Can this work for speech therapy?", "Yes. It includes communication support sections that can be customized for speech-language services."],
  ["Can this work for occupational therapy?", "Yes. It includes sensory, fine motor, daily living, and school readiness sections."],
  ["Can this website help with funding proposals?", "Yes. It includes a Funding & Impact page designed to present community need, funding priorities, impact metrics, and partnership opportunities."],
  ["Are the impact numbers real?", "No. All numbers are demo placeholders only."],
  ["Can parents submit intake forms?", "The demo includes intake forms visually. In production, forms can connect to email, CRM, Google Sheets, or a backend."],
  ["Can this website support donations?", "Yes. Donation CTAs and partner inquiry sections can be added or connected to a donation platform."],
  ["Can this website be bilingual?", "Yes. It can be expanded with English/French pages for Canadian accessibility."],
  ["Is the site mobile-friendly?", "Yes. The website is built to be fully responsive and mobile-first."],
  ["Can this be used for a non-profit?", "Yes. It can be adapted for non-profit organizations, charities, community programs, or private clinics."],
  ["Can this include AI support?", "Yes. The demo includes a frontend Family Guide assistant for navigation and intake support."],
  ["Can it connect to government funding pages?", "Yes. Approved external resources can be linked in production, but this demo does not imply government approval."],
  ["Does this website claim to cure autism?", "No. The website never uses cure-based language. It focuses on support, development, family guidance, and inclusion."],
];

export const fundingPriorities = [
  "Therapy room setup",
  "Sensory-friendly equipment",
  "Caregiver workshops",
  "Low-cost program spaces",
  "Staff training",
  "School readiness materials",
  "Community outreach",
  "Digital intake and reporting tools",
  "Transportation support",
  "Accessibility improvements",
];

export const partnerTypes = [
  "Government programs",
  "Schools",
  "Community organizations",
  "Healthcare providers",
  "Charities",
  "Local businesses",
  "Donors",
  "Volunteers",
];

export const trustItems = [
  ["Family-centered support", HandHeart],
  ["Autism-informed programs", Brain],
  ["Caregiver guidance", Users],
  ["Inclusive community model", ShieldCheck],
];
