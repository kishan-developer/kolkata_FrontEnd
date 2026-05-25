export interface Mentor {
  id: string;
  name: string;
  title: string;
  experience: string;
  expertise: string[];
  rating: number;
  reviews: number;
  price: number;
  image: string;
  bio: string;
  availability: string[]; // All possible slots
  bookedSlots?: Record<string, string[]>; // Date string (e.g., "Mon 24 Apr") -> Array of booked times
}

export const MENTORS: Mentor[] = [
  {
    id: "1",
    name: "Dr. Arvind Subramanian",
    title: "Senior Tax Consultant & Auditor",
    experience: "15+ Years",
    expertise: ["GST Compliance", "Income Tax", "Direct Tax"],
    rating: 4.9,
    reviews: 124,
    price: 499,
    image: "/mentors/arvind.jpg",
    bio: "Ex-Big 4 specialist with deep expertise in cross-border taxation and institutional GST frameworks.",
    availability: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
    bookedSlots: {
      "Mon 24 Apr": ["10:00", "15:00"],
      "Tue 25 Apr": ["09:00", "14:00"]
    }
  },
  {
    id: "2",
    name: "Meera Kapoor",
    title: "Venture Formation Strategist",
    experience: "8 Years",
    expertise: ["Startup India Setup", "Corporate Formation", "LLP Setup"],
    rating: 4.8,
    reviews: 89,
    price: 499,
    image: "/mentors/meera.jpg",
    bio: "Focused on helping startups navigate the early-stage regulatory landscape and Series A compliance.",
    availability: ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
    bookedSlots: {
      "Wed 26 Apr": ["11:00", "12:00"],
      "Fri 28 Apr": ["15:00"]
    }
  },
  {
    id: "3",
    name: "Rajesh Varma",
    title: "Fractional CFO & ERP Expert",
    experience: "20+ Years",
    expertise: ["CFO Services", "Payroll Advisory", "ERP Migration"],
    rating: 5.0,
    reviews: 56,
    price: 499,
    image: "/mentors/rajesh.jpg",
    bio: "Strategic advisor for SMEs transitioning to algorithmic backend operations and digital financial systems.",
    availability: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"],
    bookedSlots: {
      "Mon 24 Apr": ["10:30", "13:00"]
    }
  },
  {
    id: "4",
    name: "Sanjay Khanna",
    title: "Legal & Regulatory Head",
    experience: "12 Years",
    expertise: ["Corporate Law", "Intellectual Property", "Trademark"],
    rating: 4.7,
    reviews: 112,
    price: 499,
    image: "/mentors/sanjay.jpg",
    bio: "NLU alumnus specializing in IP protection, joint ventures, and labour law audits.",
    availability: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
    bookedSlots: {
      "Tue 25 Apr": ["14:30", "16:30"]
    }
  },
  {
    id: "5",
    name: "Ananya Iyer",
    title: "Strategic Advisory Lead",
    experience: "10 Years",
    expertise: ["M&A Due Diligence", "Capital Gain Strategy", "RERA Advisory"],
    rating: 4.9,
    reviews: 74,
    price: 499,
    image: "/mentors/ananya.jpg",
    bio: "Specialist in M&A due diligence and bespoke financial diagnostics for growing enterprises.",
    availability: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
    bookedSlots: {
      "Thu 27 Apr": ["10:00", "12:00", "14:00"]
    }
  },
  {
    id: "6",
    name: "Vikram Malhotra",
    title: "SME IPO & Capital Mandates",
    experience: "18+ Years",
    expertise: ["SME IPO Mandates", "Capital Markets", "Board Consulting"],
    rating: 4.9,
    reviews: 42,
    price: 499,
    image: "/mentors/vikram.jpg",
    bio: "Seasoned consultant for high-growth enterprises aiming for public listing and institutional funding.",
    availability: ["11:00", "11:30", "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "17:00", "17:30"],
    bookedSlots: {
      "Mon 24 Apr": ["11:00", "17:00"]
    }
  }
];
