import { SERVICE_CATEGORIES } from '../../data/services';
import ServiceDetailContent from '../ServiceDetailContent';

export async function generateStaticParams() {
  return SERVICE_CATEGORIES.map(cat => ({ category: cat.id }));
}

const SERVICE_DATA: Record<string, any> = {
  "new-business": {
    title: "New Business Setup",
    category: "Business Formation",
    heroTitle: "Start Your Dream Business in India",
    description: "Launch your enterprise with the perfect legal and institutional framework for long-term growth.",
    price: "5,999",
    time: "7-10 Working Days",
    items: [
      { name: "Proprietorship", href: "/services/new-business/proprietorship", desc: "Simplest form of business owned and managed by one person." },
      { name: "Partnership", href: "/services/new-business/partnership", desc: "Business structure with two or more partners sharing profits and liabilities." },
      { name: "Private Limited Company", href: "/services/new-business/private-limited-company", desc: "Separate legal entity with limited liability and perpetual succession." },
      { name: "LLP Registration", href: "/services/new-business/llp-registration", desc: "Hybrid structure combining partnership flexibility with company benefits." },
      { name: "Trust", href: "/services/new-business/trust", desc: "Legal arrangement for managing assets for charitable or personal purposes." },
      { name: "Society", href: "/services/new-business/society", desc: "Association of persons united for a common non-profit purpose." },
      { name: "MSME", href: "/services/new-business/msme", desc: "Micro, Small & Medium Enterprise registration for government benefits." }
    ],
    definition: "New Business Setup is the strategic process of selecting and registering the right legal structure for your entrepreneurial venture.",
    definitionLong: "Choosing between a Pvt Ltd, LLP, or Proprietorship is a critical decision that impacts your liability, taxation, and fundraising capabilities. Our experts guide you through each step of the registration process.",
    definitionQuote: "The right structure is the foundation of every successful scale-up story.",
    definitionImage: "/services_images/vyaparsewa_01.png",
    benefitsRich: [
      { title: "Limited Liability", desc: "Protect your personal assets from business debts and legal obligations." },
      { title: "Funding Ready", desc: "Institutional-grade structure preferred by Venture Capitalists and Banks." },
      { title: "Brand Credibility", desc: "A registered entity builds trust with customers, suppliers, and employees." },
      { title: "Perpetual Existence", desc: "The business continues to exist even if directors or shareholders change." },
      { title: "Tax Efficiency", desc: "Leverage various tax deductions available to registered corporate entities." },
      { title: "Global Reach", desc: "Easier to expand internationally with a formal Indian registration." }
    ],
    benefits: ["Limited Liability", "Funding Access", "Brand Protection", "Tax Efficiency"],
    scope: [
      "Entity Selection Advisory",
      "DSC & DIN Procurement",
      "Drafting MOA/AOA",
      "PAN & TAN Application",
      "Certificate of Incorporation"
    ],
    docs: ["PAN & Aadhar of Promoters", "Address Proof", "NOC from Owner", "Utility Bill"],
    process: [
      { t: "Consultation", d: "Selecting the right structure." },
      { t: "Name Reservation", d: "Reserving your unique brand." },
      { t: "Filing", d: "Professional drafting and submission." },
      { t: "Approval", d: "Final certification from Ministry." }
    ],
    faqs: [
      { q: "Which business structure is best for a startup?", a: "A Private Limited Company is usually best for startups looking for funding and scalability." },
      { q: "Can a foreigner start a business in India?", a: "Yes, 100% Foreign Direct Investment (FDI) is allowed in many sectors under the automatic route." },
      { q: "What is the importance of DSC?", a: "Digital Signature Certificate (DSC) is mandatory for signing electronic forms on the MCA and Tax portals." },
      { q: "Do I need a physical office address?", a: "Yes, every registered entity must have a physical 'Registered Office' address for communication." },
      { q: "What is DIN?", a: "Director Identification Number (DIN) is a unique 8-digit number required for any person wishing to be a director." },
      { q: "Can I register a company alone?", a: "Yes, you can register as an 'One Person Company' (OPC) if you are the sole founder." },
      { q: "How do I choose a unique name?", a: "The name must not be identical to any existing company name or trademark and must follow MCA naming guidelines." }
    ],
    targetAudience: ["Tech Startups", "Family Businesses", "Freelancers", "First-time Founders"],
    whyUs: ["Zero Hidden Costs", "Expert Legal Drafting", "Speedy Processing", "Free Initial Consultation"]
  },
  "gst": {
    title: "GST Compliance",
    category: "Taxation",
    heroTitle: "Seamless GST Registration & Filings",
    description: "End-to-end GST management and advisory to keep your business tax-efficient and fully compliant.",
    price: "4,999",
    time: "2-3 Working Days",
    definition: "GST Compliance involves registering for the Goods and Services Tax and ensuring regular, accurate filings with the department.",
    definitionLong: "GST is a destination-based tax that replaced multiple indirect taxes. Staying compliant ensures you can claim Input Tax Credit (ITC) and trade across state borders without friction.",
    definitionQuote: "Efficient GST management is the key to healthy cash flow in modern trade.",
    definitionImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    benefitsRich: [
      { title: "ITC Benefits", desc: "Reduce your tax liability by claiming credit for taxes paid on purchases." },
      { title: "Inter-state Sales", desc: "Sell your products and services across India without regulatory barriers." },
      { title: "Legal Recognition", desc: "Become an authorized supplier under the Indian tax regime." },
      { title: "Market Entry", desc: "Major corporates only work with GST-registered vendors." },
      { title: "Simplified Taxes", desc: "One nation, one tax system for all goods and services." },
      { title: "Online Ease", desc: "Entire process from registration to filing is digital and transparent." }
    ],
    benefits: ["ITC Claims", "Inter-state Trade", "Legal Standing", "Market Access"],
    scope: [
      "New Registration",
      "Monthly/Quarterly Filings",
      "GSTR-1 & 3B Management",
      "ITC Reconciliation",
      "LUT for Exports"
    ],
    docs: ["PAN of Business", "Aadhar of Promoters", "Office Address Proof", "Cancelled Cheque"],
    process: [
      { t: "Portal Filing", d: "Preparing data for the GST portal." },
      { t: "Verification", d: "Review by the jurisdictional officer." },
      { t: "Certification", d: "Issuance of GSTIN and portal login." },
      { t: "Compliance", d: "Setting up your first filing cycle." }
    ],
    faqs: [
      { q: "Is GST mandatory for all businesses?", a: "No, it is mandatory only for businesses exceeding specific turnover thresholds or selling inter-state." },
      { q: "What is the penalty for late GST filing?", a: "A late fee of ₹50 per day (₹20 for Nil returns) is charged for delayed filings." },
      { q: "Can I cancel my GST registration?", a: "Yes, if you close your business or your turnover falls below the threshold, you can apply for cancellation." },
      { q: "What are the different types of GST?", a: "There are three types: CGST (Central), SGST (State), and IGST (Integrated for inter-state trade)." },
      { q: "What is the Composition Scheme?", a: "It is a simplified scheme for small taxpayers with lower tax rates and less compliance." },
      { q: "How long does GST registration take?", a: "Registration is typically granted within 3-7 working days after successful application." },
      { q: "Do I need a GSTIN for online selling?", a: "Yes, most e-commerce platforms like Amazon and Flipkart require a GSTIN to list products." }
    ],
    targetAudience: ["Traders", "Manufacturers", "Service Providers", "Online Sellers"],
    whyUs: ["Real-time Tracking", "Audit-ready Books", "Penalty Prevention", "Dedicated Tax Desk"]
  },
  "income-tax": {
    title: "Income Tax Returns",
    category: "Direct Tax",
    heroTitle: "Expert ITR Filing & Tax Strategy",
    description: "Maximize your tax savings with our strategy-led filing process for individuals and businesses.",
    price: "699",
    time: "1-2 Working Days",
    definition: "Income Tax Return is a mandatory declaration of income, expenses, and taxes paid to the government annually.",
    definitionLong: "Filing ITR is not just a legal mandate; it is a critical document for visa applications, loan approvals, and carrying forward business losses to future years.",
    definitionQuote: "Taxes are the price we pay for a civilized society, but overpaying is optional.",
    definitionImage: "https://images.unsplash.com/photo-1554224155-672621d8c991?q=80&w=2070&auto=format&fit=crop",
    benefitsRich: [
      { title: "Penalty Savings", desc: "Avoid heavy interest and late fees by filing before the statutory deadline." },
      { title: "Refund Processing", desc: "Ensure fast and accurate processing of your excess tax refunds." },
      { title: "Financial Record", desc: "ITR is the primary proof of income for banks and embassies." },
      { title: "Loss Carry-forward", desc: "Set off current business losses against future profits to save tax." },
      { title: "Strategic Planning", desc: "Optimize your investments under 80C, 80D to reduce liability." },
      { title: "Legal Peace", desc: "Minimize the risk of scrutiny or notices from the IT department." }
    ],
    benefits: ["Penalty Avoidance", "Refund Accuracy", "Loan Support", "Tax Optimization"],
    scope: [
      "Income Computation",
      "AIS/TIS Analysis",
      "Form 26AS Reconciliation",
      "Capital Gains Calculation",
      "E-filing & Verification"
    ],
    docs: ["Form 16", "Bank Statements", "Investment Proofs", "Stock Trading Data"],
    process: [
      { t: "Data Gathering", d: "Reviewing all sources of income." },
      { t: "Computation", d: "Applying all eligible deductions." },
      { t: "CA Review", d: "Final audit for accuracy and compliance." },
      { t: "Filing", d: "Electronic submission to the department." }
    ],
    faqs: [
      { q: "Who is required to file ITR?", a: "Any individual with income above the basic exemption limit or those with specific assets/investments must file." },
      { q: "What happens if I miss the deadline?", a: "You can file a 'Belated Return' with a penalty ranging from ₹1,000 to ₹5,000." },
      { q: "Can I revise my ITR after filing?", a: "Yes, you can file a 'Revised Return' if you discover an error or omission in your original filing." },
      { q: "Is ITR necessary for a home loan?", a: "Yes, banks typically require the last 3 years of ITR for processing home or business loans." },
      { q: "What is Form 26AS?", a: "It is a consolidated tax statement that shows details of tax deducted at source (TDS) against your PAN." },
      { q: "Can I carry forward losses?", a: "Yes, by filing on time, you can carry forward business and capital losses to offset future profits." },
      { q: "Which ITR form should I use?", a: "The form depends on your income sources (Salary, Business, Capital Gains, etc.). We help you select the correct one." }
    ],
    targetAudience: ["Salaried Employees", "Professionals", "HNI Investors", "Corporates"],
    whyUs: ["Strategy-led Savings", "Notice-proof Filings", "Senior CA Oversight", "Confidential Handling"]
  },
  "partnership": {
    title: "Partnership Firm",
    category: "Business Formation",
    heroTitle: "Start Your Partnership Firm in India",
    description: "Simple, affordable, and legally recognized partnership firm registration with partnership deed drafting, PAN registration, GST, MSME, and compliance support.",
    price: "FREE",
    time: "3-7 Working Days",
    stats: [
      { value: "3000+", label: "Firms Registered" },
      { value: "EXPERT", label: "Legal Drafting" }
    ],
    definition: "A Partnership Firm is a business structure where two or more people come together to run a business under a mutually agreed Partnership Deed.",
    definitionLong: "This deed defines duties, responsibilities, profit-sharing, capital contribution, and management rules. Partnership Firms are easy to register, cost-effective, and suitable for businesses managed by multiple founders.",
    definitionQuote: "Ideal for multi-founder startups, traders, service providers, and small businesses wanting shared management.",
    definitionImage: "https://images.unsplash.com/photo-1573164060897-425941c302f1?q=80&w=2069&auto=format&fit=crop",
    benefitsRich: [
      { title: "Easy to Form", desc: "Simple deed preparation and quick registration." },
      { title: "Low Setup Cost", desc: "Much cheaper than LLP and Private Limited Company." },
      { title: "Shared Responsibilities", desc: "Workload and decision-making are shared among partners." },
      { title: "Flexibility in Management", desc: "Partners can decide rules internally through a deed." },
      { title: "Minimal Compliance", desc: "No mandatory audits unless turnover crosses limits." },
      { title: "Easy Banking & GST", desc: "PAN + GST + Current Account support for seamless operations." }
    ],
    targetAudience: ["Retail Traders", "Small Businesses", "Service Providers", "Consultants", "Agencies", "Local Manufacturers", "Multi-founder Startups", "Family Businesses"],
    audienceDesc: "A Partnership Firm is ideal if you want shared ownership and simple legal requirements.",
    scope: [
      "Partnership Consultation",
      "Partnership Deed Drafting",
      "Deed Registration (Optional)",
      "PAN for Partnership Firm",
      "MSME/Udyam Registration",
      "GST Registration",
      "Bank Current Account Assistance",
      "Post-Registration Support"
    ],
    process: [
      { t: "Submit Details", d: "Submit partner details & business type." },
      { t: "Drafting", d: "We draft the customized Partnership Deed." },
      { t: "Review", d: "Partners review & approve the deed." },
      { t: "Notarization", d: "Deed notarization or registration (as applicable)." },
      { t: "Application", d: "Apply for PAN, GST & MSME." },
      { t: "Delivery", d: "All certificates delivered via email." }
    ],
    docs: [
      "PAN Card of Partners",
      "Aadhaar Card of Partners",
      "Photos of Partners",
      "Business Address Proof",
      "Rent Agreement/NOC",
      "Utility Bill",
      "Witness Details",
      "Stamp Duty Receipt"
    ],
    pricingTimeline: [
      { label: "Deed Drafting", value: "1-2 Days", desc: "Expert drafting of customized deed." },
      { label: "Deed Registration", value: "3-7 Days", desc: "State-based registration timeline." },
      { label: "PAN & MSME", value: "1 Day", desc: "Quick processing of business identity." },
      { label: "GST Registration", value: "3-7 Days", desc: "Portal filing and approval time." }
    ],
    faqs: [
      { q: "Is Partnership Firm registration mandatory?", a: "Unregistered partnership is legal, but registered partnership offers stronger legal protection." },
      { q: "How many partners are required?", a: "Minimum 2, maximum 20 partners." },
      { q: "Can a partnership be converted to LLP or Company?", a: "Yes, it can be upgraded anytime." },
      { q: "Is audit compulsory?", a: "Not unless turnover crosses the income tax audit limit." },
      { q: "Can the partnership deed be changed later?", a: "Yes, amendments can be done anytime through a supplementary deed." }
    ],
    whyUs: ["Expert Legal Drafting", "Zero Hidden Costs", "Fastest Turnaround", "Personalized Advisory"]
  }
};



const DEFAULT_SECTIONS = {
  benefits: ["Statutory Compliance", "Expert Assistance", "Streamlined Workflow", "Digital Documentation"],
  scope: ["Initial Assessment", "Application Filing", "Liaison with Authorities", "Final Certification"],
  faqs: [
    { q: "How do we get started?", a: "Simply upload your documents and our team will initiate the process within 24 hours." },
    { q: "Are there any hidden charges?", a: "No, our professional fees are fixed and transparent." }
  ],
  targetAudience: ["Business Owners", "Entrepreneurs", "Corporates", "HNI Professionals"],
  whyUs: ["Certified Domain Experts", "Fastest Delivery Time", "Premium Client Portal", "10k+ Successful Mandates"],
  reviews: [
    { name: "Rahul Sharma", role: "Business Owner", rating: 5, text: "Exceptional service and professionalism. The team handled everything smoothly and kept me updated at every step. Highly recommended!" },
    { name: "Priya Patel", role: "CA Professional", rating: 5, text: "As a fellow finance professional, I appreciate the depth of knowledge and accuracy they bring. A trusted partner for complex filings." },
    { name: "Amit Kumar", role: "Startup Founder", rating: 5, text: "They made the entire process hassle-free for my startup. Quick turnaround and excellent support throughout. Will definitely use again." },
    { name: "Sneha Gupta", role: "Freelancer", rating: 4, text: "Great experience overall. The team was responsive and clarified all my doubts patiently. Value for money service." },
    { name: "Vikram Singh", role: "SME Director", rating: 5, text: "We have been working with them for over two years now. Their consistency and reliability make them our go-to compliance partner." },
    { name: "Ananya Reddy", role: "Consultant", rating: 5, text: "Outstanding attention to detail and proactive communication. They identified savings I would have missed on my own." },
    { name: "Mohan Desai", role: "Retired Executive", rating: 4, text: "Very professional approach and courteous staff. The process was explained clearly and executed without any issues." }
  ]
};

// Fill missing data
SERVICE_CATEGORIES.forEach(cat => {
  if (!SERVICE_DATA[cat.id]) {
    SERVICE_DATA[cat.id] = {
      title: cat.title,
      description: cat.description,
      price: "1,499",
      time: "5-7 Working Days",
      docs: ["KYC Documents", "Address Proof", "Photo ID", "Business Registration"],
      process: [
        { t: "Consultation", d: "Understanding your specific needs and constraints." },
        { t: "Execution", d: "Drafting and filing the necessary applications." },
        { t: "Follow-up", d: "Proactive tracking of the application status." },
        { t: "Completion", d: "Handover of final certificates and compliance reports." }
      ],
      ...DEFAULT_SECTIONS
    };
  }
});

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = SERVICE_DATA[category] || SERVICE_DATA["gst"];

  return <ServiceDetailContent data={data} />;
}

