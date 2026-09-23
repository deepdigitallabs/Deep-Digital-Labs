export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  experience: string;
  specialty: string[];
  techStack: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  metric?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Deep Digital Labs gave our firm an exceptional digital presence. The website loads instantaneously and our prospective corporate clients immediately comment on the seamless experience.',
    author: 'Rahul B. Kavale',
    role: 'Managing Partner',
    company: 'Rahul B. Kavale & Co.',
    location: 'Maharashtra, India 🇮🇳',
    rating: 5
  },
  {
    id: '2',
    quote: 'During high-stakes campaign weeks when tens of thousands accessed our candidate manifesto simultaneously, our portal never stuttered for a single millisecond. Zero server degradation and volunteers onboarded seamlessly.',
    author: 'Santosh Phadtare Campaign Office',
    role: 'Chief Digital Strategist',
    company: 'Karyala Jodo Initiative',
    location: 'Maharashtra, India 🇮🇳',
    rating: 5
  },
  {
    id: '3',
    quote: 'Dairy Flow Pro eliminated hours of manual spreadsheet bookkeeping every week. Their engineering pod operates with speed and high technical rigor.',
    author: 'Chief Executive Officer',
    role: 'Founder & Managing Director',
    company: 'Dairy Flow Pro SaaS',
    location: 'Pune, India 🇮🇳',
    rating: 5
  }
];
