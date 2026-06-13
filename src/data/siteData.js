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
  Phone,
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
  whatsapp: "+10000000000",
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
    title: "BrightPath Autism & Child Development Center | Ontario Family Support",
    description:
      "Warm Ontario autism and child development support information with OAP, AccessOAP, caregiver resources, school readiness, and funding guidance.",
  },
  "/about": {
    title: "About | BrightPath Autism & Child Development Center",
    description:
      "Learn about BrightPath's family-centered approach to autism-informed navigation, caregiver education, and child development support.",
  },
  "/programs": {
    title: "Programs | Autism & Child Development Support",
    description:
      "Explore Ontario-informed autism support pathways including foundational family services, caregiver-mediated early years, core clinical services, school entry, and urgent response navigation.",
  },
  "/services": {
    title: "Services | Child Development & Family Support",
    description:
      "Review family intake, referral guidance, ABA-informed support, speech-style communication support, occupational and sensory support, and caregiver workshops.",
  },
  "/funding-impact": {
    title: "Funding & Impact | BrightPath Autism Support Resources",
    description:
      "Ontario and Canada resource guidance for autism supports, AccessOAP, Special Services at Home, ACSD, Disability Tax Credit, and community partnerships.",
  },
  "/resources": {
    title: "Family Resources | Autism Support & Child Development",
    description:
      "Parent-friendly resources for intake preparation, autism support, communication, sensory needs, school transitions, and caregiver wellbeing.",
  },
  "/intake": {
    title: "Family Intake | BrightPath Autism & Child Development Center",
    description:
      "A simple family intake page for autism support navigation, OAP preparation, caregiver goals, school readiness, and child development next steps.",
  },
  "/partners": {
    title: "Community Partners | BrightPath",
    description:
      "Explore partnership pathways for schools, community organizations, healthcare providers, charities, donors, and volunteers.",
  },
  "/faq": {
    title: "FAQ | BrightPath Autism & Child Development Center",
    description:
      "Frequently asked questions about autism support, OAP registration, AccessOAP, funding resources, intake forms, and safe usage.",
  },
  "/contact": {
    title: "Contact | BrightPath Autism & Child Development Center",
    description:
      "Contact BrightPath for intake, program questions, Ontario autism resource navigation, funding partnerships, and community partnerships.",
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
    { src: images.room, alt: "Clean child development room", title: "Welcoming space", text: "Clear contact paths and privacy-aware forms." },
    { src: images.familyCare, alt: "Caregiver and child support moment", title: "Family first", text: "Clear next steps for every inquiry." },
  ],
};

export const videos = [
  {
    title: "Autism support information for families",
    text: "A relevant video resource for families learning about autism support, communication, development, and next steps.",
    embed: "https://www.youtube.com/embed/VT5Dl1vXGUc?si=7fWp7IQClhepQ3SH",
  },
];

export const governmentLinks = [
  {
    title: "Ontario Autism Program",
    text: "Official Ontario information about OAP registration, eligibility, service options, and supports for children and youth.",
    href: "https://www.ontario.ca/page/ontario-autism-program",
    icon: ClipboardList,
  },
  {
    title: "AccessOAP",
    text: "Independent intake organization for the OAP, including account setup, care coordinators, and family portal access.",
    href: "https://accessoap.ca",
    icon: Phone,
  },
  {
    title: "Autism Spectrum Disorder in Canada",
    text: "Government of Canada overview of autism as a lifelong neurodevelopmental condition and individualized supports.",
    href: "https://www.canada.ca/en/public-health/services/diseases/autism-spectrum-disorder-asd.html",
    icon: Brain,
  },
  {
    title: "Disability Tax Credit",
    text: "CRA information about the non-refundable tax credit for people with severe and prolonged impairments.",
    href: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html",
    icon: ShieldCheck,
  },
  {
    title: "Special Services at Home",
    text: "Ontario support program information for children with developmental or physical disabilities.",
    href: "https://www.ontario.ca/page/special-services-home",
    icon: HandHeart,
  },
  {
    title: "Assistance for Children with Severe Disabilities",
    text: "Ontario program information for eligible families who may need help with disability-related costs.",
    href: "https://www.ontario.ca/page/assistance-children-severe-disabilities-program",
    icon: HeartHandshake,
  },
  {
    title: "Autism Ontario",
    text: "Ontario autism community resources, events, learning materials, school supports, and family information.",
    href: "https://www.autismontario.com",
    icon: Users,
  },
];

export const programs = [
  {
    title: "AccessOAP & OAP Registration Navigation",
    age: "Ontario families under age 18",
    focus: "AccessOAP account setup, eligibility documents, care coordinator questions",
    icon: Sprout,
    text:
      "Guidance for families preparing to register or update information through AccessOAP.",
    expect:
      "Families review age, Ontario residency, written diagnosis requirements, and practical questions for AccessOAP.",
  },
  {
    title: "Foundational Family Services",
    age: "OAP-registered families",
    focus:
      "Workshops, coaching, family education, navigation, transition planning",
    icon: MessageCircle,
    text:
      "Family-focused learning and navigation supports that can help caregivers understand next steps.",
    expect:
      "Families can prepare questions, organize goals, and connect official resources with daily routines.",
  },
  {
    title: "Caregiver-Mediated Early Years",
    age: "12 - 48 months",
    focus: "Caregiver coaching, social communication, play, early learning",
    icon: Puzzle,
    text:
      "Ontario-informed guidance for families exploring caregiver-mediated early years programs.",
    expect:
      "Families learn what to ask providers and how to match supports with a child's strengths and needs.",
  },
  {
    title: "Core Clinical Services Planning",
    age: "Children and youth in OAP",
    focus:
      "Behavioural services, speech-language pathology, occupational therapy, mental health supports",
    icon: Layers3,
    text:
      "Support for families comparing core clinical service options and preparing service goals.",
    expect:
      "Families keep language practical, respectful, individualized, and reviewed with qualified professionals.",
  },
  {
    title: "Entry to School Preparation",
    age: "Starting kindergarten or Grade 1",
    focus:
      "Classroom routines, transition planning, communication, group participation",
    icon: School,
    text:
      "Planning support for children entering school and families preparing for classroom routines.",
    expect:
      "Families organize school-readiness questions, strengths, sensory needs, and transition supports.",
  },
  {
    title: "Urgent Response Navigation",
    age: "Eligible children and youth",
    focus: "Time-sensitive needs, safety concerns, rapid support pathways",
    icon: HeartHandshake,
    text:
      "Information pathway for families who need to understand urgent response services.",
    expect:
      "Families are directed toward official lead organizations and qualified crisis or health supports when needed.",
  },
  {
    title: "Sensory & Communication Planning",
    age: "Individualized by child",
    focus: "Communication differences, sensory processing differences, visual supports",
    icon: Users,
    text:
      "Practical planning for daily routines, school meetings, and provider conversations.",
    expect:
      "Families document preferences, accommodations, communication styles, and supportive environments.",
  },
  {
    title: "Community & School Resource Navigation",
    age: "All family stages",
    focus: "Autism Ontario resources, school supports, community events, funding links",
    icon: Compass,
    text:
      "A warm way to connect official resources with real-life family planning.",
    expect:
      "Families leave with organized links, questions, and next-step resource pathways.",
  },
];

export const services = [
  "AccessOAP registration preparation",
  "OAP eligibility document checklist",
  "Foundational family service navigation",
  "Caregiver-mediated early years guidance",
  "Core clinical services planning",
  "Entry to school preparation",
  "Urgent response service direction",
  "Autism Ontario resource navigation",
  "Special Services at Home information",
  "ACSD and DTC resource guidance",
  "Sensory and communication planning notes",
  "School and community support planning",
];

export const impactMetrics = [
  { value: "OAP", label: "Ontario Autism Program registration and services", icon: ClipboardList },
  { value: "AccessOAP", label: "Independent intake and care coordination pathway", icon: Phone },
  { value: "DTC", label: "CRA tax credit information for eligible impairments", icon: ShieldCheck },
  { value: "SSAH", label: "Ontario Special Services at Home resource link", icon: Home },
  { value: "ACSD", label: "Assistance for Children with Severe Disabilities information", icon: HeartHandshake },
  { value: "Autism Ontario", label: "Community learning, events, school resources, and supports", icon: Users },
];

export const resources = [
  { title: "Understanding Autism", text: "Autism is a lifelong neurodevelopmental condition; support should adapt to individual needs.", icon: Brain },
  { title: "Communication Differences", text: "Families can note how a child communicates, connects, understands language, and uses supports.", icon: MessageCircle },
  { title: "Sensory Processing", text: "Document sensory preferences, regulation supports, and environments that feel easier for the child.", icon: Sparkles },
  { title: "School Transition", text: "Prepare questions about classroom routines, accommodations, entry to school supports, and communication.", icon: School },
  { title: "Daily Routines", text: "Organize notes about sleep, meals, transitions, self-help skills, and predictable routines.", icon: Home },
  { title: "Caregiver Wellbeing", text: "Caregivers can ask for navigation help, peer learning, respite information, and community support.", icon: HeartHandshake },
  { title: "Funding Pathways", text: "Review OAP, SSAH, ACSD, and DTC links with qualified professionals where needed.", icon: ClipboardList },
  { title: "Community Programs", text: "Autism Ontario offers events, learning resources, school supports, and family information.", icon: HandHeart },
];

export const faqItems = [
  ["Is BrightPath a real clinic?", "BrightPath is a fictional brand concept, but the resource information links to official Ontario and Canadian sources."],
  ["Does this website provide medical advice?", "No. It organizes information and questions families may discuss with qualified health, education, tax, or service professionals."],
  ["What is autism?", "The Government of Canada describes autism as a lifelong neurodevelopmental condition. Autistic people may communicate, connect, process sensory information, and learn differently."],
  ["Who can register for the Ontario Autism Program?", "Ontario states that children and youth under 18 who live in Ontario and have a written autism diagnosis from a qualified professional can register for the OAP."],
  ["What is AccessOAP?", "AccessOAP is the OAP's independent intake organization. It supports registration, care coordination, service options, and family portal access."],
  ["What are foundational family services?", "Ontario describes these as services available to families registered in the OAP, such as workshops, coaching, navigation, and family education."],
  ["What are caregiver-mediated early years programs?", "Ontario identifies these programs for OAP-registered children between 12 and 48 months, focused on helping caregivers support early development."],
  ["What are core clinical services?", "Ontario lists core clinical services as needs-based supports that may include behavioural services, speech-language pathology, occupational therapy, and mental health services."],
  ["What is the entry to school program?", "Ontario describes it as support for OAP-registered children starting kindergarten or Grade 1."],
  ["What are urgent response services?", "Ontario provides urgent response services for eligible children or youth with urgent needs through local lead organizations."],
  ["What is the Disability Tax Credit?", "The CRA describes the DTC as a non-refundable tax credit for people with severe and prolonged impairments, or their supporting family member, if approved."],
  ["What is Special Services at Home?", "Ontario lists Special Services at Home as a related support program families may review for children with developmental or physical disabilities."],
  ["What is ACSD?", "Assistance for Children with Severe Disabilities is an Ontario program families may review when disability-related costs create financial need."],
  ["Can this site imply government approval?", "No. It can link to official resources, but it must not imply endorsement, approval, funding, licensing, or partnership unless those are real and documented."],
  ["Can families submit real health information here?", "No. The current forms are presentation forms only and should not receive personal health information without a proper privacy-reviewed production setup."],
  ["Does this website claim to cure autism?", "No. The website never uses cure-based language. It focuses on support, development, family guidance, and inclusion."],
];

export const fundingPriorities = [
  "OAP registration preparation",
  "AccessOAP account setup",
  "Foundational family services",
  "Caregiver-mediated early years",
  "Core clinical services planning",
  "Entry to school transition",
  "Urgent response direction",
  "SSAH resource review",
  "ACSD and DTC information",
  "Autism Ontario community supports",
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
