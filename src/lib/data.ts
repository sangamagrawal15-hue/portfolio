import { Code2, Palette, Globe, ShieldCheck, Zap, MessageSquare, Rocket, BarChart3 } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Website Design",
    description: "Visually stunning, high-converting designs tailored to your brand identity and business goals.",
    icon: Palette,
    benefits: ["Custom UI/UX Design", "Brand Integration", "Conversion Optimization"],
  },
  {
    title: "Frontend Development",
    description: "Fast, responsive, and interactive websites built with the latest technologies like React and Next.js.",
    icon: Code2,
    benefits: ["SEO Friendly Code", "High Performance", "Mobile Responsive"],
  },
  {
    title: "Website Redesign",
    description: "Transform your outdated website into a modern powerhouse that attracts more customers.",
    icon: Zap,
    benefits: ["Modern Performance", "Enhanced UX", "Updated Visuals"],
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support to keep your website secure, updated, and performing at its best.",
    icon: ShieldCheck,
    benefits: ["Regular Updates", "Security Monitoring", "Content Updates"],
  },
];

export const portfolio = [
  {
    title: "EcoSpa Wellness",
    category: "Spa & Wellness",
    description: "A premium booking platform for a local spa, focusing on elegance and ease of use.",
    challenge: "The client lacked an online booking system, resulting in manual scheduling headaches.",
    solution: "Implemented a custom booking engine with a serene, premium design that reflects the spa experience.",
    outcome: "40% increase in bookings within the first 2 months.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200", // Fallback image
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Bean & Brew Café",
    category: "Hospitality",
    description: "Modern landing page for a local cafe featuring interactive menus and event listings.",
    challenge: "Low digital visibility despite having the best coffee in town.",
    solution: "Created a visual-heavy website with high-quality photography and easy location access.",
    outcome: "Doubled foot traffic through improved local SEO and Google Maps integration.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Framer Motion", "Contentful"],
  },
  {
    title: "FitPulse Academy",
    category: "Fitness & Health",
    description: "Comprehensive website for a fitness coaching institute with student registration.",
    challenge: "Needed a way to manage course registrations and showcase student success stories.",
    solution: "Built a robust portal with registration forms and a dynamic testimonial section.",
    outcome: "Streamlined registration process, saving 10+ hours of admin work weekly.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js", "TypeScript", "Node.js"],
  },
];

export const processSteps = [
  {
    title: "Discovery Call",
    description: "We discuss your goals, target audience, and project requirements to ensure we're the right fit.",
    icon: MessageSquare,
  },
  {
    title: "Strategy & Planning",
    description: "I develop a roadmap, sitemap, and wireframes to outline the structure and user journey.",
    icon: BarChart3,
  },
  {
    title: "Design & Development",
    description: "Using the latest tools, I bring your vision to life with high-fidelity designs and clean code.",
    icon: Code2,
  },
  {
    title: "Launch & Support",
    description: "Your site goes live! I provide ongoing support to ensure everything runs smoothly.",
    icon: Rocket,
  },
];

export const testimonials = [
  {
    name: "Anjali Sharma",
    business: "Lotus Spa Owner",
    content: "Sangam transformed our business! Our new website is elegant and so easy for our clients to use. We've seen a huge spike in bookings.",
    image: "https://i.pravatar.cc/150?u=anjali",
  },
  {
    name: "Rohan Gupta",
    business: "Brew & Bites Café",
    content: "The attention to detail and professional communication was outstanding. Our cafe's digital presence is now as premium as our coffee.",
    image: "https://i.pravatar.cc/150?u=rohan",
  },
  {
    name: "Dr. Vikram Singh",
    business: "Wellness Clinic",
    content: "The redesign of our clinic's website has significantly improved patient trust. The mobile experience is flawless.",
    image: "https://i.pravatar.cc/150?u=vikram",
  },
];

export const faqs = [
  {
    question: "How long does a project take?",
    answer: "Typically, a standard website takes 2-4 weeks, while more complex projects can take 6-8 weeks depending on requirements.",
  },
  {
    question: "What industries do you work with?",
    answer: "I specialize in local service businesses like spas, cafes, clinics, and fitness centers, as well as tech startups.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! I offer maintenance packages that include security monitoring, updates, and content management.",
  },
  {
    question: "Can existing websites be redesigned?",
    answer: "Absolutely. I can take your outdated site and transform it into a modern, high-performing digital asset.",
  },
  {
    question: "Are websites mobile responsive?",
    answer: "Every website I build is 'mobile-first', ensuring a perfect experience across all devices and screen sizes.",
  },
];
