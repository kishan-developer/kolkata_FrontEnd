import { SERVICE_CATEGORIES } from '../../../data/services';
import ServiceDetailContent from '../../ServiceDetailContent';

const ALL_SERVICES_DATA: Record<string, any> = {
  // --- New Business ---
  "proprietorship": {
    title: "Proprietorship",
    category: "Business Formation",
    heroTitle: "Start Your Sole Proprietorship Business in India",
    description: "Fast and affordable proprietorship registration with GST, MSME, and complete compliance support.",
    image: "/services_images/proprietorship.png",
    stats: [
      { value: "5000+", label: "Registered" },
      { value: "SECURE", label: "Documentation" }
    ],
    definition: "A Sole Proprietorship is the simplest business structure in India, owned and managed by one individual. It does not involve complex legal processes and allows the owner full authority over decisions, profits, and operations.",
    definitionLong: "Since it is not a separate legal entity, the proprietor is personally responsible for liabilities while enjoying full ownership of the business.",
    definitionQuote: "Best for small businesses, freelancers, shop owners, and independent consultants.",
    benefitsRich: [
      { title: "Easy to Start", desc: "Minimal legal formalities and fast setup." },
      { title: "Low Registration Cost", desc: "Most affordable structure for starting small." },
      { title: "Full Business Control", desc: "Owner has complete control over decisions and operations." },
      { title: "Minimal Compliance", desc: "No annual filings like companies; low operational burden." },
      { title: "Easy Tax Filing", desc: "Income is taxed as individual income." },
      { title: "Quick Decision Making", desc: "No board meetings or partner approvals required." }
    ],
    benefits: ["Easy to Start", "Low Cost", "Full Control", "Minimal Compliance"],
    audienceDesc: "Proprietorship is ideal for entrepreneurs who want simple, fast, and low-cost business startup.",
    targetAudience: ["Retail Shops", "Freelancers", "Consultants", "Online Sellers", "Local Traders", "Service Providers", "Youtubers", "Home Businesses"],
    included: [
      "Business Consultation", "GST Registration", "MSME (Udyam) Registration",
      "Business Current Account Assistance", "Shop & Establishment License",
      "Document Preparation", "Ongoing Compliance Support"
    ],
    process: [
      { t: "Submit Details", d: "Submit your basic details to our experts." },
      { t: "Share Documents", d: "Share required documents securely." },
      { t: "Expert Review", d: "Expert review and verification of your application." },
      { t: "Apply", d: "Apply for GST, MSME, or Shop Act." },
      { t: "Certification", d: "Certificate issued via email." },
      { t: "Launch", d: "Start operations legally as a proprietor." }
    ],
    docs: [
      "PAN Card", "Aadhaar Card", "Passport-size Photo", "Mobile Number & Email",
      "Business Address Proof", "Rent Agreement / Ownership Proof", "Electricity/Utility Bill",
      "Bank Proof (Optional)", "State-specific Shop Act documents (Optional)"
    ],
    pricingTimeline: [
      { label: "Proprietorship Setup", value: "Low Cost", desc: "Starting at most affordable rates." },
      { label: "MSME Registration", value: "Same Day", desc: "Official certificate issuance." },
      { label: "GST Registration", value: "3-7 Days", desc: "Working days for approval." },
      { label: "Shop Act License", value: "2-10 Days", desc: "State dependent timeline." }
    ],
    faqs: [
      { q: "Is proprietorship registration mandatory?", a: "Not mandatory, but GST/Shop Act may be required depending on business." },
      { q: "How long does it take to start?", a: "You can start operations on the same day with basic registrations." },
      { q: "Is audit required?", a: "Audit is not required unless turnover crosses specified limits." },
      { q: "Can I convert into a company later?", a: "Yes, proprietorship can be upgraded to LLP or Private Limited." }
    ]
  },
  "virtual-cfo-service": {
    title: "Virtual CFO Service",
    category: "Business Advisory",
    heroTitle: "Expert Financial Leadership Without Full-Time Cost",
    description: "Get strategic financial oversight, budgeting, cash flow management, and compliance support from experienced CFOs on a flexible retainer model.",
    image: "/services_images/company.png",
    stats: [
      { value: "STRATEGIC", label: "Financial Planning" },
      { value: "COST", label: "Effective" }
    ],
    definition: "Virtual CFO Service provides high-level financial expertise and strategic guidance to businesses without the expense of hiring a full-time Chief Financial Officer.",
    definitionLong: "Our virtual CFOs become an integral part of your leadership team, providing financial analysis, forecasting, compliance oversight, and strategic decision support tailored to your business needs.",
    definitionQuote: "Ideal for growing businesses, startups, and SMEs seeking expert financial guidance on demand.",
    benefitsRich: [
      { title: "Cost Effective", desc: "Access CFO expertise at a fraction of the cost of a full-time hire." },
      { title: "Strategic Planning", desc: "Expert financial forecasting, budgeting, and strategic roadmapping." },
      { title: "Cash Flow Management", desc: "Optimize working capital and improve financial health." },
      { title: "Compliance Oversight", desc: "Ensure regulatory compliance and accurate financial reporting." },
      { title: "Investment Ready", desc: "Prepare financials for funding rounds and investor meetings." },
      { title: "Flexible Engagement", desc: "Scale services up or down based on your business needs." }
    ],
    benefits: ["Cost Effective", "Strategic Planning", "Cash Flow Management", "Compliance Oversight"],
    audienceDesc: "Virtual CFO Service is perfect for businesses that need expert financial guidance but aren't ready for a full-time CFO.",
    targetAudience: ["Startups", "SMEs", "Growing Businesses", "Family Businesses", "E-Commerce", "Tech Companies", "Service Firms", "Manufacturing Units"],
    included: [
      "Financial Planning & Analysis", "Budgeting & Forecasting", "Cash Flow Management",
      "Financial Reporting", "Compliance Support", "Strategic Advisory",
      "Investor Pitch Preparation", "KPI Dashboard Setup", "Regular Board Meetings"
    ],
    process: [
      { t: "Discovery Call", d: "Understand your business needs and financial challenges." },
      { t: "Assessment", d: "Financial health assessment and gap analysis." },
      { t: "Plan Development", d: "Create customized financial strategy and roadmap." },
      { t: "Implementation", d: "Implement systems, processes, and reporting frameworks." },
      { t: "Ongoing Support", d: "Regular reviews, updates, and strategic guidance." }
    ],
    docs: [
      "Previous Financial Statements", "Bank Statements", "Tax Returns",
      "Business Plan", "Budget Documents", "Cash Flow Records",
      "Company Registration Documents", "Loan Documents (if any)"
    ],
    pricingTimeline: [
      { label: "Setup", value: "1 Week", desc: "Initial assessment and planning." },
      { label: "Ongoing", value: "Monthly", desc: "Regular reviews and updates." },
      { label: "Review Frequency", value: "Quarterly", desc: "Strategic planning sessions." }
    ],
    faqs: [
      { q: "What does a Virtual CFO do?", a: "A Virtual CFO provides strategic financial guidance, financial planning, cash flow management, compliance oversight, and helps with investor presentations and decision-making." },
      { q: "Who needs a Virtual CFO?", a: "Growing businesses, startups, SMEs, and companies looking to scale but not ready for a full-time CFO benefit from virtual CFO services." },
      { q: "How is this different from an accountant?", a: "While accountants handle day-to-day bookkeeping and tax filing, a Virtual CFO focuses on strategic financial planning, forecasting, and business growth." },
      { q: "What is the engagement model?", a: "We offer flexible retainer models - monthly, quarterly, or project-based engagements tailored to your specific needs." }
    ]
  },
  "opc-registration": {
    title: "One Person Company (OPC)",
    category: "Corporate Formation",
    heroTitle: "Start Your One Person Company in India",
    description: "The power of a company with the control of a proprietorship. Perfect for solo entrepreneurs.",
    image: "/services_images/company.png",
    stats: [
      { value: "SOLO", label: "Control" },
      { value: "MCA", label: "Registered" }
    ],
    definition: "An OPC is a hybrid structure that allows a single founder to operate a corporate entity with limited liability protection.",
    definitionLong: "It is a legal entity distinct from its member, offering the benefits of a private limited company without the need for a second director or shareholder.",
    definitionQuote: "Best for solo founders who want limited liability and corporate status.",
    benefitsRich: [
      { title: "Limited Liability", desc: "Personal assets are protected from business debts." },
      { title: "Separate Identity", desc: "The company is a separate legal person in the eyes of the law." },
      { title: "Easy Funding", desc: "Higher credibility with banks and lenders compared to proprietorship." },
      { title: "Perpetual Succession", desc: "The company continues to exist even if the member changes (via nominee)." }
    ],
    benefits: ["Single Owner", "Limited Liability", "Corporate Status", "Easy Loans"],
    process: [
      { t: "Name Approval", d: "Selecting a unique name ending with (OPC) Private Limited." },
      { t: "DSC/DIN", d: "Obtaining director credentials." },
      { t: "Nominee Appointment", d: "Mandatory appointment of a nominee member." },
      { t: "Incorporation", d: "Filing SPICe+ forms with MCA." }
    ],
    docs: ["PAN & Aadhar of Director", "KYC of Nominee", "Office Address Proof", "Utility Bill", "NOC from Owner"],
    pricingTimeline: [
      { label: "Incorporation", value: "5-10 Days", desc: "MCA approval timeline." },
      { label: "Bank Account", value: "2-3 Days", desc: "Post-incorporation setup." }
    ],
    faqs: [
      { q: "Can a foreigner start an OPC?", a: "No, only an Indian citizen and resident can start an OPC." },
      { q: "Is audit mandatory?", a: "Yes, OPCs must undergo annual statutory audits." }
    ]
  },
  "section-8-company": {
    title: "Section 8 Company (NGO)",
    category: "NGO Formation",
    heroTitle: "Form a Section 8 NGO for Social Impact",
    description: "The most prestigious NGO structure in India, ideal for large-scale social, charitable, and welfare projects.",
    image: "/services_images/company.png",
    stats: [
      { value: "NON-PROFIT", label: "Structure" },
      { value: "GLOBAL", label: "Funding" }
    ],
    definition: "A Section 8 Company is registered for promoting research, social welfare, religion, charity, commerce, art, science, sports, education, and protection of the environment.",
    definitionLong: "It is a non-profit entity where profits are applied back to the objectives of the company and no dividend is paid to members.",
    definitionQuote: "Preferred by corporate donors and international agencies for CSR projects.",
    benefitsRich: [
      { title: "High Credibility", desc: "Most trusted NGO structure by government and donors." },
      { title: "No Dividend", desc: "Ensures all resources are used for the social cause." },
      { title: "Tax Benefits", desc: "Eligible for 12A, 80G, and CSR-1 registrations." },
      { title: "Limited Liability", desc: "Protection for the promoters/directors." }
    ],
    benefits: ["CSR Ready", "High Trust", "Tax Exemptions", "No Min Capital"],
    process: [
      { t: "License Application", d: "Obtaining a Section 8 License from the Central Government." },
      { t: "Name Approval", d: "Reserving a name that reflects the social objective." },
      { t: "Incorporation", d: "Standard MCA company formation process." },
      { t: "Post-Setup", d: "Applying for tax exemptions and CSR status." }
    ],
    docs: ["KYC of 2 Directors", "Objectives List", "Draft MOA/AOA", "Office Address Proof", "Utility Bill"],
    pricingTimeline: [
      { label: "License", value: "7-10 Days", desc: "Central Govt approval." },
      { label: "Incorporation", value: "5-7 Days", desc: "MCA certification." }
    ],
    faqs: [
      { q: "Is it better than a Trust?", a: "Yes, for large-scale operations and institutional funding." },
      { q: "Can it be converted to a normal company?", a: "Yes, but with stringent government permissions." }
    ]
  },
  "partnership": {
    title: "Partnership Firm",
    category: "Business Formation",
    heroTitle: "Start Your Partnership Firm in India",
    description: "Simple, affordable, and legally recognized partnership firm registration with partnership deed drafting, PAN registration, GST, MSME, and compliance support.",
    image: "/services_images/partnership.png",
    stats: [
      { value: "3000+", label: "Firms Registered" },
      { value: "EXPERT", label: "Legal Drafting" }
    ],
    definition: "A Partnership Firm is a business structure where two or more people come together to run a business under a mutually agreed Partnership Deed. This deed defines duties, responsibilities, profit-sharing, capital contribution, and management rules.",
    definitionLong: "Partnership Firms are easy to register, cost-effective, and suitable for businesses managed by multiple founders.",
    definitionQuote: "Ideal for multi-founder startups, traders, service providers, and small businesses wanting shared management.",
    benefitsRich: [
      { title: "Easy to Form", desc: "Simple deed preparation and quick registration." },
      { title: "Low Setup Cost", desc: "Much cheaper than LLP and Private Limited Company." },
      { title: "Shared Responsibilities", desc: "Workload and decision-making are shared among partners." },
      { title: "Flexibility in Management", desc: "Partners can decide rules internally through a deed." },
      { title: "Minimal Compliance", desc: "No mandatory audits unless turnover crosses limits." },
      { title: "Easy Banking & GST Setup", desc: "PAN + GST + Current Account support for seamless operations." }
    ],
    benefits: ["Easy to Start", "Low Cost", "Shared Risks", "Minimal Compliance"],
    audienceDesc: "A Partnership Firm is ideal if you want shared ownership and simple legal requirements.",
    targetAudience: ["Retail Traders", "Small Businesses", "Service Providers", "Consultants", "Agencies", "Local Manufacturers", "Logistic Businesses", "Multi-founder Startups", "Family Businesses"],
    included: [
      "Partnership Consultation", "Partnership Deed Drafting", "Deed Registration (Optional)",
      "PAN for Partnership Firm", "MSME/Udyam Registration", "GST Registration",
      "Bank Current Account Assistance", "Post-Registration Support"
    ],
    process: [
      { t: "Submit Details", d: "Submit partner details & business type." },
      { t: "Deed Drafting", d: "We draft the customized Partnership Deed." },
      { t: "Review & Approval", d: "Partners review & approve the deed." },
      { t: "Notarization", d: "Deed notarization or registration (as applicable)." },
      { t: "Tax Setup", d: "Apply for PAN, GST & MSME." },
      { t: "Delivery", d: "All certificates delivered via email." }
    ],
    docs: [
      "PAN Card (Partners)", "Aadhaar Card (Partners)", "Passport Photo", "Mobile & Email",
      "Business Address Proof", "Rent Agreement / Ownership Proof", "Utility Bill",
      "Two Witnesses (for registration)", "State-specific stamp duty"
    ],
    pricingTimeline: [
      { label: "Deed Drafting", value: "1-2 Days", desc: "Expert legal drafting." },
      { label: "Deed Registration", value: "3-7 Days", desc: "State-based timeline." },
      { label: "PAN & MSME", value: "1 Day", desc: "Fast processing." },
      { label: "GST Registration", value: "3-7 Days", desc: "Working days for approval." }
    ],
    faqs: [
      { q: "Is Partnership Firm registration mandatory?", a: "Unregistered partnership is legal, but registered partnership offers stronger legal protection." },
      { q: "How many partners are required?", a: "Minimum 2, maximum 20 partners." },
      { q: "Can a partnership be converted to LLP or Company?", a: "Yes, it can be upgraded anytime." },
      { q: "Is audit compulsory?", a: "Not unless turnover crosses the income tax audit limit." },
      { q: "Can the partnership deed be changed later?", a: "Yes, amendments can be done anytime through a supplementary deed." }
    ]
  },
  "private-limited-company": {
    title: "Private Limited Company",
    category: "Corporate Formation",
    heroTitle: "Start Your Private Limited Company in India",
    description: "Fast and reliable company registration with DIN, DSC, MOA, AOA, PAN, TAN, GST, and compliance support.",
    image: "/services_images/company.png",
    stats: [
      { value: "5000+", label: "Companies Registered" },
      { value: "EXPERT", label: "MCA Compliance" }
    ],
    definition: "A Private Limited Company is a legally recognized corporate structure under the Companies Act, 2013. It provides limited liability protection, separate legal identity, and strong credibility, making it the most popular structure for startups and growing businesses.",
    definitionLong: "The company continues to exist even if ownership changes, ensuring stability and long-term scalability.",
    definitionQuote: "Best suited for startups, SMEs, agencies, and businesses looking to raise investment or build long-term brand credibility.",
    benefitsRich: [
      { title: "Limited Liability Protection", desc: "Personal assets of shareholders stay protected." },
      { title: "High Credibility & Trust", desc: "Preferred by banks, investors, vendors, and clients." },
      { title: "Separate Legal Entity", desc: "Company can own assets, enter contracts, and sue/be sued." },
      { title: "Funding Access", desc: "Ideal for angel funding, VC funding, and ESOPs." },
      { title: "Easy Share Transfer", desc: "Ownership changes smoothly through share transfer." },
      { title: "Perpetual Existence", desc: "Company continues regardless of ownership changes." }
    ],
    benefits: ["Limited Liability", "Funding Ready", "High Credibility", "Perpetual Existence"],
    audienceDesc: "A Private Limited Company is ideal for businesses focused on growth, funding, and corporate structure.",
    targetAudience: ["Startups", "IT Companies", "E-Commerce Brands", "Marketing Agencies", "Manufacturing Units", "Traders & Exporters", "Service Businesses", "Consulting Firms", "Family Businesses"],
    included: [
      "Business Consultation", "DSC (Digital Signatures)", "DIN (Director Identification Numbers)",
      "MOA & AOA Drafting", "Name Approval (RUN/SPICe+)", "Incorporation Certificate",
      "PAN & TAN for Company", "GST Registration", "MSME/Udyam Registration",
      "Bank Account Assistance", "Post-Incorporation Support"
    ],
    process: [
      { t: "Submit Details", d: "Submit director details & business name choices." },
      { t: "DSC Creation", d: "DSC creation & verification." },
      { t: "Name Approval", d: "Name approval from MCA." },
      { t: "Drafting", d: "MOA & AOA drafting." },
      { t: "Filing", d: "File SPICe+ form & supporting documents." },
      { t: "Issuance", d: "Receive Incorporation Certificate, PAN, TAN." },
      { t: "Post-Setup", d: "Apply for GST, MSME & open bank account." }
    ],
    docs: [
      "PAN Card (Directors)", "Aadhaar Card (Directors)", "Passport Photo", "Email & Mobile",
      "Bank Statement/Utility Bill (Address Proof)", "Rent Agreement / Ownership Proof",
      "NOC from property owner", "Passport (if foreign director)", "Attested Address Proof (if foreign)"
    ],
    pricingTimeline: [
      { label: "Name Approval", value: "1-2 Days", desc: "MCA reservation." },
      { label: "DSC & DIN", value: "1-2 Days", desc: "Director credentials." },
      { label: "Incorporation", value: "3-7 Days", desc: "Government timeline." },
      { label: "GST Registration", value: "3-7 Days", desc: "Post-incorporation." }
    ],
    faqs: [
      { q: "How many directors are required?", a: "Minimum 2 directors and 2 shareholders." },
      { q: "Can a company be formed with zero capital?", a: "Companies can start with very low capital." },
      { q: "Is audit mandatory?", a: "Yes, every company must undergo an annual audit." },
      { q: "Can the company add or remove directors later?", a: "Yes, directors can be added/removed anytime." },
      { q: "Is the company structure suitable for small businesses?", a: "Yes, especially businesses with long-term plans and scalability." },
      { q: "Can a company convert to LLP or OPC later?", a: "Yes, conversion is allowed under MCA guidelines." }
    ]
  },
  "llp-registration": {
    title: "LLP Registration",
    category: "Corporate Formation",
    heroTitle: "Start Your LLP in India",
    description: "A flexible and low-cost business structure with limited liability, easy compliance, and professional credibility.",
    image: "/services_images/LLP.png",
    stats: [
      { value: "3000+", label: "LLPs Registered" },
      { value: "MCA", label: "Compliant" }
    ],
    definition: "A Limited Liability Partnership (LLP) is a hybrid business structure that combines the flexibility of a partnership with the limited liability protection of a company. It is registered under the LLP Act, 2008.",
    definitionLong: "Partners are protected from personal liability, and the LLP has a separate legal identity—making it ideal for professionals, consultants, agencies, and small-medium businesses.",
    definitionQuote: "Best for agencies, service firms, professionals, and small businesses looking for limited liability with simple compliance.",
    benefitsRich: [
      { title: "Limited Liability Protection", desc: "Partners are not personally liable for business debts." },
      { title: "Low Compliance Cost", desc: "No heavy audits until turnover crosses thresholds." },
      { title: "Separate Legal Entity", desc: "LLP can own assets, enter contracts, and operate independently." },
      { title: "Flexible Management", desc: "Profit-sharing, duties, and rights can be customized." },
      { title: "Easy to maintain", desc: "Straightforward registration and fewer compliances than a company." },
      { title: "No Min Capital", desc: "Start with any amount of capital." }
    ],
    benefits: ["Limited Liability", "Low Compliance", "Separate Entity", "Flexible Management"],
    audienceDesc: "LLP is suitable for businesses needing a partnership-like structure with liability protection.",
    targetAudience: ["Consultancy Firms", "Marketing Agencies", "Service Providers", "Small Traders", "Professional Groups", "Family Partnerships", "SMEs", "Startups"],
    included: [
      "Business Consultation", "DSC (Digital Signatures)", "DPIN Identification Number",
      "Name Reservation (RUN LLP)", "LLP Agreement Drafting", "Incorporation Certificate",
      "PAN & TAN Issuance", "GST Registration", "MSME Registration (Udyam)",
      "Bank Account Assistance"
    ],
    process: [
      { t: "Submit Details", d: "Submit partner details & name choices." },
      { t: "DSC Creation", d: "DSC creation for partners." },
      { t: "Name Reservation", d: "Reserve LLP name via RUN-LLP." },
      { t: "Filing", d: "File FiLLiP form with documents." },
      { t: "Issuance", d: "Receive LLP Incorporation Certificate (LLPIN)." },
      { t: "Agreement", d: "Draft & register LLP Agreement." },
      { t: "Tax Setup", d: "Apply for PAN, TAN & GST." }
    ],
    docs: [
      "PAN Card (Partners)", "Aadhaar Card (Partners)", "Passport Photo", "Email & Mobile",
      "Bank Statement/Utility Bill (Address Proof)", "Rent Agreement / Ownership Proof",
      "NOC from Property Owner", "Passport (if foreign partner)", "Notarized Address Proof (if foreign)"
    ],
    pricingTimeline: [
      { label: "Name Reservation", value: "1-2 Days", desc: "MCA approval." },
      { label: "DSC & DPIN", value: "1-3 Days", desc: "Partner IDs." },
      { label: "Incorporation", value: "3-7 Days", desc: "LLPIN issuance." },
      { label: "Agreement Filing", value: "2-3 Days", desc: "Post-incorporation." }
    ],
    faqs: [
      { q: "How many partners are required to start an LLP?", a: "Minimum 2 partners; no maximum limit." },
      { q: "Is audit mandatory for LLP?", a: "Only if turnover exceeds limits (as per LLP Act)." },
      { q: "Can an LLP raise funding?", a: "Limitations exist; better suited for service firms and SMEs." },
      { q: "Is LLP suitable for a small business?", a: "Yes; low cost and simple compliance make it ideal." },
      { q: "Can partners be added or removed later?", a: "Yes; LLP allows flexible restructuring." }
    ]
  },
  "trust": {
    title: "Trust Registration",
    category: "NGO Formation",
    heroTitle: "Start Your Trust Registration in India",
    description: "Register a Public, Private, or Charitable Trust with legally compliant documentation, deed drafting, and expert guidance.",
    image: "/services_images/trust.png",
    stats: [
      { value: "ROBUST", label: "Legal Deeds" },
      { value: "FAST", label: "Processing" }
    ],
    definition: "A Trust is a legally recognized entity created for charitable, religious, or private objectives. It operates under the Indian Trusts Act, 1882 or relevant state-specific laws.",
    definitionLong: "A trust involves a Settlor, Trustees, and Beneficiaries. Trusts are popular for NGOs, social welfare activities, and family wealth protection.",
    definitionQuote: "Best for NGOs, social service groups, family trusts, religious institutions, and welfare-based organizations.",
    benefitsRich: [
      { title: "Simple Formation", desc: "Quick registration with minimal legal hurdles." },
      { title: "Low Cost Structure", desc: "Affordable compared to other NGO models." },
      { title: "Legal Identity", desc: "Ensures transparency and credibility for fundraising." },
      { title: "Tax Exemptions", desc: "Eligibility for 12A & 80G approval post-registration." },
      { title: "Asset Protection", desc: "Assets are safeguarded and managed for specific beneficiaries." },
      { title: "Long-Term Stability", desc: "Trust continues even if trustees change." }
    ],
    benefits: ["Simple Formation", "Low Cost", "Legal Identity", "Tax Exemptions"],
    audienceDesc: "A Trust is suitable for individuals or groups aiming to create impact or manage assets ethically.",
    targetAudience: ["NGOs", "Religious Organizations", "Education Providers", "Family Trusts", "Philanthropy Groups", "Community Organizations", "Foundations"],
    included: [
      "Pre-Registration Consultation", "Drafting Trust Deed", "Name Approval Support",
      "Registrar Office Filing", "Registration Certificate", "PAN Card for Trust",
      "Bank Account Setup Support", "12A/80G Advisory (Optional)", "NGO Darpan (Optional)"
    ],
    process: [
      { t: "Type Selection", d: "Select trust type and define objectives." },
      { t: "Preparation", d: "Prepare trustee details & documents." },
      { t: "Deed Drafting", d: "Draft the Trust Deed with objectives." },
      { t: "Execution", d: "Finalize deed and execute on stamp paper." },
      { t: "Registration", d: "Register deed at Sub-Registrar Office." },
      { t: "Issuance", d: "Collect Registration Certificate." },
      { t: "Tax Setup", d: "Apply for PAN and 12A/80G." }
    ],
    docs: [
      "PAN Card (Settlor & Trustees)", "Aadhaar Card", "Passport Photo", "Occupation Details",
      "Address Proof (Bank/Utility)", "Rent Agreement / Ownership Proof", "Utility Bill",
      "NOC from Owner", "Two Witnesses (KYC)"
    ],
    pricingTimeline: [
      { label: "Deed Drafting", value: "1-2 Days", desc: "Custom drafting." },
      { label: "Execution", value: "1 Day", desc: "Stamp paper signing." },
      { label: "Registration", value: "1-2 Days", desc: "Sub-registrar office." },
      { label: "PAN Issuance", value: "5-7 Days", desc: "Official tax ID." }
    ],
    faqs: [
      { q: "How many trustees are required?", a: "Minimum 2, no upper limit." },
      { q: "Can a family run a Private Trust?", a: "Yes, Private Trusts are widely used for family assets and estate planning." },
      { q: "Is Trust registration mandatory?", a: "Yes, registration is required for legal validity and tax exemption." },
      { q: "Can a Trust run a school, hospital, or NGO?", a: "Yes, after registration and obtaining necessary permissions." },
      { q: "Can trustees receive salary?", a: "They may receive reasonable remuneration if the trust deed allows." }
    ]
  },
  "society": {
    title: "Society Registration",
    category: "NGO Formation",
    heroTitle: "Register Your Society in India",
    description: "Form an NGO for charitable, educational, cultural, social, or welfare-based activities with full compliance and expert support.",
    image: "/services_images/society.png",
    stats: [
      { value: "GOVT", label: "Compliant" },
      { value: "EXPERT", label: "Legal Support" }
    ],
    definition: "A Society is a legally recognized non-profit organization formed by a group of people for charitable, cultural, educational, religious, literary, or social welfare activities.",
    definitionLong: "It is registered under the Societies Registration Act, 1860. Societies are governed by a Managing Committee and operate under democratic decision-making.",
    definitionQuote: "Best for groups or organizations aiming to perform community service, run institutions, or implement social development programs.",
    benefitsRich: [
      { title: "Separate Legal Entity", desc: "Can own property, open bank accounts, and enter contracts." },
      { title: "Democratic Structure", desc: "Managed by an elected governing body/committee." },
      { title: "Tax Exemption Eligibility", desc: "Qualify for 12A, 80G, and CSR-1 for funding." },
      { title: "Better Credibility", desc: "Well-recognized structure for NGO operations." },
      { title: "Large-Scale Activities", desc: "Ideal for running schools, hospitals, and institutions." },
      { title: "Easy Compliance", desc: "Annual reporting with fewer legal complexities." }
    ],
    benefits: ["Legal Entity", "Democratic Structure", "Tax Exemptions", "Credibility"],
    audienceDesc: "Society structure suits organizations working in education, health, culture, or community development.",
    targetAudience: ["Social Welfare Groups", "Cultural Organizations", "Educational Institutions", "Sports Clubs", "Women Empowerment Groups", "Health NGOs", "Community Projects"],
    included: [
      "Pre-Registration Consultation", "Name Availability Check", "MOA Drafting",
      "Rules & Regulations Drafting", "Registration Filing", "Registration Certificate",
      "PAN for Society", "12A/80G Approval (Optional)", "NGO Darpan (Optional)"
    ],
    process: [
      { t: "Planning", d: "Determine society objectives & member roles." },
      { t: "Formation", d: "Select 7 founding members." },
      { t: "Drafting", d: "Prepare MOA and bylaws." },
      { t: "Submission", d: "Submit name approval & documents to Registrar." },
      { t: "Registration", d: "Registration at Registrar of Societies." },
      { t: "Issuance", d: "Receive Registration Certificate & PAN." }
    ],
    docs: [
      "PAN Card (7 Members)", "Aadhaar Card", "Two Photos", "Address Proof",
      "Occupation Details", "Rent Agreement / Ownership Proof", "Utility Bill",
      "NOC from Property Owner", "Objectives List"
    ],
    pricingTimeline: [
      { label: "Drafting MOA", value: "2-3 Days", desc: "Custom bylaws." },
      { label: "Registrar Filing", value: "3-7 Days", desc: "State-wise filing." },
      { label: "Issuance", value: "7-15 Days", desc: "Approval timeline." },
      { label: "PAN Issuance", value: "5-7 Days", desc: "Tax ID." }
    ],
    faqs: [
      { q: "How many members are required?", a: "Minimum 7 members (varies by state)." },
      { q: "Can a Society receive donations?", a: "Yes, with a PAN and optionally with 80G for donor tax benefit." },
      { q: "Is Society better than Trust?", a: "Societies are more democratic, better for public groups; Trusts are easier for founder-driven control." },
      { q: "Can foreigners be members?", a: "Yes, but specific state rules apply." },
      { q: "Does Society need annual filings?", a: "Yes, annual return submission to the Registrar is mandatory." }
    ]
  },
  "msme": {
    title: "MSME Registration",
    category: "Business Identification",
    heroTitle: "Get Your MSME (Udyam) Registration Instantly",
    description: "Register your business as Micro, Small, or Medium Enterprise to access subsidies, bank loan benefits, government tenders, and tax rebates.",
    image: "/services_images/msme.png",
    stats: [
      { value: "INSTANT", label: "Registration" },
      { value: "GOVT", label: "Recognized" }
    ],
    definition: "MSME (Micro, Small, Medium Enterprises) are businesses recognized by the Government of India under the Udyam Registration system. It provides business identity, government benefits, and financial support.",
    definitionLong: "MSME classification is based on Investment in Plant & Machinery/Equipment and Annual Turnover.",
    definitionQuote: "Best for manufacturers, service providers, traders, startups, and small businesses seeking government benefits.",
    benefitsRich: [
      { title: "Tender Preference", desc: "Udyam-registered businesses get priority in e-tenders." },
      { title: "Easy Loan Approvals", desc: "Access to collateral-free loans under CGTMSE." },
      { title: "Lower Interest Rates", desc: "Special interest rate subsidies for MSMEs." },
      { title: "Payment Protection", desc: "Buyers must pay within 45 days of delivery." },
      { title: "Certification Support", desc: "Financial support for ISO certification reimbursement." },
      { title: "Bill Concession", desc: "Discounts in industrial electricity charges." }
    ],
    benefits: ["Tender Priority", "Loan Benefits", "Payment Protection", "Subsidies"],
    audienceDesc: "Udyam Registration is ideal for manufacturers, traders, and service providers seeking growth.",
    targetAudience: ["Small Businesses", "Manufacturers", "Traders", "Startups", "E-commerce Sellers", "Freelancers", "Home Businesses", "Retail Units"],
    included: [
      "Business Assessment", "Document Verification", "Udyam Application Filing",
      "Certificate Issuance", "PAN & GST Update", "Trademark Guidance (Optional)",
      "Startup India Support (Optional)"
    ],
    process: [
      { t: "Details Submission", d: "Provide Aadhaar & business details." },
      { t: "Validation", d: "Validate PAN & GST (if available)." },
      { t: "Application", d: "Fill online Udyam application." },
      { t: "Verification", d: "Submit and verify with OTP." },
      { t: "Issuance", d: "Receive MSME/Udyam Certificate instantly." },
      { t: "Download", d: "Download PDF certificate for records." }
    ],
    docs: [
      "Aadhaar of Owner", "Business Name", "Activities Description", "Bank Account Details",
      "Office Address", "Mobile & Email", "Business PAN (if available)", "GSTIN (if available)"
    ],
    pricingTimeline: [
      { label: "Filing", value: "Same Day", desc: "Immediate processing." },
      { label: "Issuance", value: "Instant", desc: "5-10 minutes." },
      { label: "Updates", value: "1 Day", desc: "Portal modifications." }
    ],
    faqs: [
      { q: "Is MSME registration mandatory?", a: "Not mandatory but highly beneficial for loans, subsidies, and tenders." },
      { q: "Is MSME applicable for traders?", a: "Yes, both wholesale and retail traders are eligible." },
      { q: "How long is the MSME certificate valid?", a: "Lifetime validity. No renewal required." },
      { q: "Can I update business details later?", a: "Yes, the Udyam portal allows unlimited updates." },
      { q: "Can a business without GST get MSME?", a: "Yes, GST is optional unless your business is required to register." }
    ]
  },

  "lei": {
    title: "Legal Entity Identifier (LEI)",
    category: "Regulatory Compliance",
    heroTitle: "Get Your LEI Registration Fast",
    description: "Obtain a globally recognized 20-character Legal Entity Identifier for regulatory reporting and international transactions.",
    image: "/services_images/LEI.png",
    stats: [
      { value: "GLOBAL", label: "Recognition" },
      { value: "FAST", label: "Issuance" }
    ],
    definition: "A Legal Entity Identifier (LEI) is a 20-character, alpha-numeric code based on the ISO 17442 standard. It connects to key reference information that enables clear and unique identification of legal entities participating in financial transactions.",
    definitionLong: "LEI is mandatory for entities engaging in financial transactions and reporting in India and globally. It enhances transparency in the global marketplace.",
    definitionQuote: "Best for companies, trusts, and entities involved in capital markets, derivatives, and cross-border financial transactions.",
    benefitsRich: [
      { title: "Global Identity", desc: "Recognized identifier across 200+ countries for cross-border trade and reporting." },
      { title: "Regulatory Compliance", desc: "Mandatory for derivative trading, securities reporting, and RBI filings." },
      { title: "Risk Reduction", desc: "Improves counterparty risk assessment and market transparency." },
      { title: "One-Time Setup", desc: "Single registration valid globally with annual renewal." }
    ],
    benefits: ["Global ID", "RBI Compliant", "Risk Reduction", "One-Time Setup"],
    audienceDesc: "LEI is essential for businesses in capital markets, banking, and international trade.",
    targetAudience: ["Corporates", "NBFCs", "Banks", "Insurance Companies", "Trusts", "Mutual Funds", "Brokers", "Fintechs"],
    included: [
      "LEI Application Filing", "Document Verification", "LOU (Letter of Authorization) Support",
      "LEI Code Issuance", "Annual Renewal Reminder", "LEI Profile Update Support"
    ],
    process: [
      { t: "Submit Details", d: "Provide entity and authorized person details." },
      { t: "Document Upload", d: "Upload incorporation documents and address proof." },
      { t: "Verification", d: "Local Operating Unit (LOU) verifies the data." },
      { t: "Issuance", d: "Receive your 20-character LEI code." },
      { t: "Confirmation", d: "Email confirmation with LEI certificate." }
    ],
    docs: [
      "Certificate of Incorporation", "PAN Card of Entity", "GST Certificate (if applicable)",
      "Address Proof", "Board Resolution / Authorization Letter", "Authorized Person KYC"
    ],
    pricingTimeline: [
      { label: "Standard Filing", value: "2-5 Days", desc: "Normal processing timeline." },
      { label: "Renewal", value: "Annual", desc: "Required every year to keep LEI active." }
    ],
    faqs: [
      { q: "Who needs an LEI?", a: "Entities dealing in derivatives, securities, foreign exchange, and certain RBI-mandated transactions require an LEI." },
      { q: "Is LEI mandatory in India?", a: "Yes, RBI has mandated LEI for large corporate borrowers and derivative market participants." },
      { q: "How long is the LEI valid?", a: "LEI is valid for one year and must be renewed annually." },
      { q: "Can a foreign entity get an LEI in India?", a: "Yes, any legal entity globally can obtain an LEI through an Indian LOU." }
    ]
  },
  "12a-80g": {
    title: "12A & 80G Registration",
    category: "Tax Exemption",
    heroTitle: "Secure Tax Exemptions for Your NGO",
    description: "Get 12A and 80G registrations to avail income tax exemptions and enable tax-deductible donations for your donors.",
    image: "/services_images/12A_&_80G.png",
    stats: [
      { value: "TAX FREE", label: "Income" },
      { value: "DONOR", label: "Benefits" }
    ],
    definition: "12A registration exempts the income of trusts, NGOs, and charitable institutions from income tax. 80G registration allows donors to claim tax deductions on donations made to the organization.",
    definitionLong: "Together, these registrations are essential for NGOs, charitable trusts, and religious institutions to attract funding and maintain tax-exempt status.",
    definitionQuote: "Best for NGOs, charitable trusts, religious institutions, and social welfare organizations seeking tax benefits.",
    benefitsRich: [
      { title: "Income Tax Exemption", desc: "Complete exemption from income tax on surplus under Section 12A." },
      { title: "Donor Tax Deduction", desc: "Donors can claim 50% or 100% deduction under Section 80G." },
      { title: "Funding Access", desc: "Attracts CSR funding, government grants, and institutional donations." },
      { title: "Credibility Boost", desc: "Registered NGOs are more trusted by donors and authorities." }
    ],
    benefits: ["Tax Exemption", "Donor Deductions", "CSR Ready", "High Credibility"],
    audienceDesc: "12A and 80G are vital for NGOs and charitable institutions seeking long-term sustainability.",
    targetAudience: ["NGOs", "Trusts", "Societies", "Section 8 Companies", "Religious Institutions", "Charitable Hospitals", "Educational Trusts"],
    included: [
      "Eligibility Assessment", "Application Preparation", "Form 10A/10AB Filing",
      "IT Department Liaison", "Provisional/Regular Registration", "Renewal Support"
    ],
    process: [
      { t: "Assessment", d: "Check eligibility based on objectives and activities." },
      { t: "Documentation", d: "Prepare MOA, financials, and activity reports." },
      { t: "Filing", d: "File Form 10A or 10AB on the Income Tax portal." },
      { t: "Verification", d: "Respond to IT Department queries if any." },
      { t: "Approval", d: "Receive 12A and/or 80G registration order." }
    ],
    docs: [
      "Registration Certificate (Trust/Society/Sec 8)", "PAN of Organization", "MOA / Trust Deed",
      "Financial Statements (3 years)", "Activity Report", "Donor Details (for 80G)"
    ],
    pricingTimeline: [
      { label: "12A Registration", value: "2-4 Months", desc: "IT Department processing time." },
      { label: "80G Registration", value: "3-6 Months", desc: "Includes verification and approval." }
    ],
    faqs: [
      { q: "Can a new NGO apply for 12A/80G?", a: "Yes, new NGOs can apply for provisional registration under the amended rules." },
      { q: "Is renewal required?", a: "Yes, 12A and 80G registrations need to be renewed every 5 years as per current rules." },
      { q: "Can donations without 80G still be received?", a: "Yes, but donors cannot claim tax deductions without 80G registration." },
      { q: "What is the difference between 12A and 80G?", a: "12A exempts the NGO's income from tax; 80G gives tax benefits to the donors." }
    ]
  },
  "digital-signature": {
    title: "Digital Signature Certificate (DSC)",
    category: "Digital Identity",
    heroTitle: "Get Your DSC for Secure Digital Filings",
    description: "Class 3 Digital Signature Certificates for MCA, GST, Income Tax, e-tendering, and secure online document signing.",
    image: "/services_images/digital_signature.png",
    stats: [
      { value: "CLASS 3", label: "Certified" },
      { value: "INSTANT", label: "Delivery" }
    ],
    definition: "A Digital Signature Certificate (DSC) is an electronic format of a physical signature, used to authenticate the identity of the sender and sign digital documents securely.",
    definitionLong: "Class 3 DSC is the highest level of assurance and is mandatory for MCA filings, GST registration, Income Tax e-filing, e-tendering, and patent filing.",
    definitionQuote: "Best for company directors, chartered accountants, company secretaries, government contractors, and business owners filing statutory returns online.",
    benefitsRich: [
      { title: "Legal Validity", desc: "Equivalent to a handwritten signature under the IT Act, 2000." },
      { title: "Secure Filings", desc: "Prevents tampering and ensures authenticity of e-forms." },
      { title: "Time Saving", desc: "File returns and sign documents from anywhere instantly." },
      { title: "Multi-Purpose", desc: "Works for MCA, GST, Income Tax, EPFO, and e-tenders." }
    ],
    benefits: ["Legal Validity", "Time Saving", "Multi-Portal", "Tamper Proof"],
    audienceDesc: "DSC is mandatory for professionals and organizations filing statutory documents online.",
    targetAudience: ["Company Directors", "CAs & CSs", "Business Owners", "Government Contractors", "Legal Professionals", "Exporters", "HR Managers", "Startups"],
    included: [
      "Applicant KYC Verification", "DSC Token/USB", "eKYC Video Verification",
      "Certificate Download Support", "Installation Guide", "One-Year Validity"
    ],
    process: [
      { t: "Apply", d: "Fill the DSC application form with basic details." },
      { t: "eKYC", d: "Complete video KYC or Aadhaar-based eKYC." },
      { t: "Verification", d: "Certifying Authority verifies documents." },
      { t: "Issuance", d: "DSC is issued and downloaded to the token." },
      { t: "Delivery", d: "USB token couriered to your address." }
    ],
    docs: [
      "PAN Card", "Aadhaar Card", "Passport Photo", "Mobile Number & Email",
      "Organization Proof (for organization DSC)", "Authorization Letter"
    ],
    pricingTimeline: [
      { label: "Individual DSC", value: "Same Day", desc: "After successful eKYC." },
      { label: "Organization DSC", value: "1-2 Days", desc: "With document verification." },
      { label: "Token Delivery", value: "2-4 Days", desc: "Courier timeline." }
    ],
    faqs: [
      { q: "What is the validity of a DSC?", a: "DSCs are typically issued for 1, 2, or 3 years depending on your choice." },
      { q: "Can I use one DSC for multiple portals?", a: "Yes, a Class 3 DSC is valid across MCA, GST, Income Tax, and other government portals." },
      { q: "What happens when my DSC expires?", a: "You need to renew or purchase a new DSC before expiration to continue filings." },
      { q: "Is DSC mandatory for GST?", a: "Yes, GST registration for companies and LLPs requires DSC for authorized signatories." }
    ]
  },
  "iso": {
    title: "ISO Registration",
    category: "Quality Certification",
    heroTitle: "Get ISO Certified for Global Standards",
    description: "Achieve ISO certification to demonstrate quality, reliability, and international standards compliance for your business.",
    image: "/services_images/ISO_registration.png",
    stats: [
      { value: "GLOBAL", label: "Standard" },
      { value: "TRUSTED", label: "Quality" }
    ],
    definition: "ISO certification is a seal of approval from an independent body that a company runs to one of the international standards developed and published by the International Organization for Standardization.",
    definitionLong: "Popular certifications include ISO 9001 (Quality Management), ISO 14001 (Environment), and ISO 27001 (Information Security). They improve credibility and operational efficiency.",
    definitionQuote: "Best for manufacturers, service providers, IT companies, and exporters seeking global recognition and tender eligibility.",
    benefitsRich: [
      { title: "Global Recognition", desc: "Accepted worldwide as a mark of quality and consistency." },
      { title: "Tender Eligibility", desc: "Many government and private tenders require ISO certification." },
      { title: "Process Improvement", desc: "Streamlines operations and reduces waste." },
      { title: "Customer Confidence", desc: "Builds trust with clients and stakeholders." }
    ],
    benefits: ["Global Recognition", "Tender Ready", "Process Improvement", "Customer Trust"],
    audienceDesc: "ISO certification is ideal for businesses looking to compete globally and streamline internal processes.",
    targetAudience: ["Manufacturers", "Exporters", "IT Companies", "Healthcare Providers", "Construction Firms", "Logistics Companies", "Educational Institutions", "Service Providers"],
    included: [
      "Standard Gap Analysis", "Documentation Support", "Internal Audit Assistance",
      "Certification Body Liaison", "Stage 1 & 2 Audits", "Certificate Issuance Support"
    ],
    process: [
      { t: "Consultation", d: "Identify the right ISO standard for your business." },
      { t: "Gap Analysis", d: "Assess current processes against ISO requirements." },
      { t: "Documentation", d: "Prepare manuals, procedures, and records." },
      { t: "Implementation", d: "Apply changes and train employees." },
      { t: "Audit", d: "Undergo internal and external audits by a certifying body." },
      { t: "Certification", d: "Receive ISO certificate upon successful audit." }
    ],
    docs: [
      "Company Registration Certificate", "PAN & GST Certificate", "Organization Chart",
      "Process Flow Documents", "Employee List", "Previous Audit Reports (if any)"
    ],
    pricingTimeline: [
      { label: "Gap Analysis", value: "3-5 Days", desc: "Initial assessment." },
      { label: "Documentation", value: "7-15 Days", desc: "Manual and SOP preparation." },
      { label: "Audit & Certification", value: "15-30 Days", desc: "External audit timeline." }
    ],
    faqs: [
      { q: "Which ISO standard should I choose?", a: "ISO 9001 for quality, ISO 14001 for environment, and ISO 27001 for information security are the most common." },
      { q: "How long is ISO certification valid?", a: "Typically 3 years, with surveillance audits conducted annually." },
      { q: "Can a small business get ISO certified?", a: "Yes, ISO 9001 is suitable for organizations of all sizes." },
      { q: "Is ISO mandatory for government tenders?", a: "Many tenders, especially in manufacturing and IT, require or prefer ISO-certified vendors." }
    ]
  },
  "shop-act": {
    title: "Shop Act Registration",
    category: "Labor Law Compliance",
    heroTitle: "Register Under Shop & Establishment Act",
    description: "Mandatory Shop and Establishment Act registration for commercial establishments, shops, hotels, and theaters.",
    image: "/services_images/shop_act_registration.png",
    stats: [
      { value: "MANDATORY", label: "Compliance" },
      { value: "STATE", label: "Level" }
    ],
    definition: "The Shops and Establishment Act regulates the working conditions of employees in commercial establishments, shops, hotels, restaurants, and theaters.",
    definitionLong: "Registration ensures compliance with working hours, rest periods, holidays, and employee welfare measures as mandated by state labor departments.",
    definitionQuote: "Best for retail shops, restaurants, hotels, and any commercial establishment employing staff.",
    benefitsRich: [
      { title: "Legal Compliance", desc: "Avoid penalties by operating with a valid Shop Act license." },
      { title: "Business Credibility", desc: "Essential for opening bank accounts and applying for loans." },
      { title: "Employee Welfare", desc: "Ensures adherence to labor laws and working condition standards." },
      { title: "Government Benefits", desc: "Eligibility for certain state-level subsidies and schemes." }
    ],
    benefits: ["Legal Operation", "Bank Compliance", "Employee Welfare", "No Penalties"],
    audienceDesc: "Shop Act registration is mandatory for any business operating a physical commercial establishment.",
    targetAudience: ["Retail Shops", "Restaurants", "Hotels", "Theaters", "Commercial Offices", "Warehouses", "Factories", "Service Centers"],
    included: [
      "Application Preparation", "Document Compilation", "Online Filing",
      "Labor Department Liaison", "License Issuance", "Renewal Reminders"
    ],
    process: [
      { t: "Details Submission", d: "Provide business and employee details." },
      { t: "Document Upload", d: "Upload address proof, owner KYC, and photos." },
      { t: "Application Filing", d: "File online with the state labor department." },
      { t: "Fee Payment", d: "Pay applicable government fee." },
      { t: "Inspection", d: "Physical inspection if required by the department." },
      { t: "License", d: "Receive Shop Act license/certificate." }
    ],
    docs: [
      "PAN Card of Owner", "Aadhaar Card", "Passport Photo", "Business Address Proof",
      "Rent Agreement / Ownership Proof", "Electricity Bill", "Employee Details"
    ],
    pricingTimeline: [
      { label: "Online Filing", value: "1-3 Days", desc: "Form submission." },
      { label: "Inspection", value: "3-7 Days", desc: "If required by authority." },
      { label: "License Issuance", value: "7-15 Days", desc: "State dependent." }
    ],
    faqs: [
      { q: "Who needs Shop Act registration?", a: "Any commercial establishment employing workers, including shops, hotels, and restaurants." },
      { q: "Is it required for home-based businesses?", a: "Usually not, unless employees are hired or commercial activity is significant." },
      { q: "What is the renewal period?", a: "Varies by state; typically 1 to 5 years." },
      { q: "Can I operate without Shop Act registration?", a: "Operating without it can lead to penalties and legal action from labor authorities." }
    ]
  },
  "udyam": {
    title: "Udyam Registration",
    category: "Business Identification",
    heroTitle: "Register Your Business Under Udyam",
    description: "Official Udyam (MSME) registration to access government subsidies, priority lending, and tender benefits.",
    image: "/services_images/udyam_registration.png",
    stats: [
      { value: "INSTANT", label: "Registration" },
      { value: "GOVT", label: "Recognized" }
    ],
    definition: "Udyam Registration is the new process for MSME registration in India under the Ministry of Micro, Small and Medium Enterprises. It provides a permanent identity number to enterprises.",
    definitionLong: "Based on investment and turnover, businesses are classified as Micro, Small, or Medium enterprises, unlocking a host of government benefits.",
    definitionQuote: "Best for manufacturers, service providers, traders, and startups seeking government recognition and benefits.",
    benefitsRich: [
      { title: "Collateral-Free Loans", desc: "Access credit under CGTMSE without collateral." },
      { title: "Interest Subsidy", desc: "Lower interest rates on MSME loans." },
      { title: "Tender Preference", desc: "Exclusive purchase preferences in government e-tenders." },
      { title: "ISO Reimbursement", desc: "Financial support for obtaining ISO certification." }
    ],
    benefits: ["Easy Loans", "Tender Access", "Tax Rebates", "ISO Support"],
    audienceDesc: "Udyam Registration is ideal for all small and medium businesses looking for government support.",
    targetAudience: ["Small Manufacturers", "Service Providers", "Traders", "Startups", "Retailers", "Home Businesses", "Exporters", "Consultants"],
    included: [
      "Eligibility Check", "Aadhaar-Based Filing", "Udyam Certificate",
      "PAN & GST Linkage Support", "Classification Guidance", "Update & Modification Support"
    ],
    process: [
      { t: "Details Submission", d: "Provide Aadhaar and business details." },
      { t: "OTP Verification", d: "Verify with Aadhaar-linked mobile OTP." },
      { t: "Classification", d: "Determine Micro/Small/Medium based on investment/turnover." },
      { t: "Filing", d: "File on the official Udyam portal." },
      { t: "Certificate", d: "Download Udyam Registration Certificate instantly." }
    ],
    docs: [
      "Aadhaar of Owner/Applicant", "Business PAN", "GSTIN (if applicable)",
      "Business Address", "Investment Details", "Bank Account Details"
    ],
    pricingTimeline: [
      { label: "Udyam Filing", value: "Same Day", desc: "Instant certificate download." },
      { label: "PAN/GST Linkage", value: "1-2 Days", desc: "If updates are needed." }
    ],
    faqs: [
      { q: "Is Udyam registration free?", a: "Yes, government filing is free. Professional assistance may involve service fees." },
      { q: "Can I update Udyam details later?", a: "Yes, the Udyam portal allows updates to turnover and investment figures." },
      { q: "Is GST mandatory for Udyam?", a: "No, but having GST helps in accurate classification and loan applications." },
      { q: "What if my turnover exceeds limits?", a: "You must update your Udyam profile. Continuous exceedance may shift classification." }
    ]
  },
  "darpan": {
    title: "NGO Darpan Registration",
    category: "NGO Compliance",
    heroTitle: "Register Your NGO on NGO Darpan",
    description: "Mandatory NITI Aayog NGO Darpan registration for NGOs, trusts, and societies to access government grants and funding.",
    image: "/services_images/S_20_Darpan_Registration.png",
    stats: [
      { value: "MANDATORY", label: "For Grants" },
      { value: "NITI", label: "Aayog" }
    ],
    definition: "NGO Darpan is an online portal maintained by NITI Aayog that serves as an interface between the government and voluntary organizations (NGOs) in India.",
    definitionLong: "Registration on NGO Darpan is mandatory for NGOs seeking government grants under various ministries and departments.",
    definitionQuote: "Best for NGOs, trusts, societies, and Section 8 companies applying for government funding and CSR partnerships.",
    benefitsRich: [
      { title: "Grant Access", desc: "Required for applying to government schemes and grants." },
      { title: "Unique ID", desc: "Each NGO gets a unique Darpan ID for all government interactions." },
      { title: "Transparency", desc: "Builds credibility with donors and government bodies." },
      { title: "Scheme Tracking", desc: "Track applications for various ministry schemes." }
    ],
    benefits: ["Grant Access", "Unique ID", "Transparency", "Scheme Tracking"],
    audienceDesc: "NGO Darpan is essential for any organization seeking government grants or CSR partnerships.",
    targetAudience: ["NGOs", "Trusts", "Societies", "Section 8 Companies", "Charitable Institutions", "Self-Help Groups", "Volunteer Organizations"],
    included: [
      "Portal Account Creation", "Organization Profile Setup", "Registration Certificate Upload",
      "Darpan ID Generation", "Ministry Scheme Mapping", "Annual Update Support"
    ],
    process: [
      { t: "Account Creation", d: "Create login on the NGO Darpan portal." },
      { t: "Profile Setup", d: "Fill organization details, PAN, and registration info." },
      { t: "Document Upload", d: "Upload registration certificate and PAN." },
      { t: "Verification", d: "NITI Aayog verifies the submitted details." },
      { t: "ID Issuance", d: "Receive unique NGO Darpan ID." }
    ],
    docs: [
      "Organization PAN", "Registration Certificate", "Memorandum of Association",
      "Trust Deed / Society Rules", "Office Address Proof", "Authorized Person KYC"
    ],
    pricingTimeline: [
      { label: "Profile Setup", value: "1-2 Days", desc: "Data entry and upload." },
      { label: "Verification", value: "7-15 Days", desc: "NITI Aayog approval." },
      { label: "ID Issuance", value: "Instant", desc: "After verification." }
    ],
    faqs: [
      { q: "Is Darpan registration mandatory?", a: "Yes, for NGOs seeking government grants or funding from ministries." },
      { q: "Can a new NGO register?", a: "Yes, but the organization must have a valid registration certificate." },
      { q: "Is Darpan ID the same as 12A/80G?", a: "No, Darpan is for government grant tracking; 12A/80G is for tax exemptions." },
      { q: "What happens if details change?", a: "The NGO Darpan profile must be updated with the latest information annually." }
    ]
  },
  "icegate": {
    title: "ICEGATE Registration",
    category: "Customs Compliance",
    heroTitle: "Register on ICEGATE for Customs Filings",
    description: "Get ICEGATE registration for e-filing of customs documents, shipping bills, and baggage declarations with Indian Customs.",
    image: "/services_images/S_21_ICEGATE_Registration.png",
    stats: [
      { value: "CUSTOMS", label: "Compliant" },
      { value: "DGFT", label: "Linked" }
    ],
    definition: "ICEGATE (Indian Customs Electronic Commerce/Electronic Data interchange Gateway) is the national portal of Indian Customs offering e-filing services to trade and cargo carriers.",
    definitionLong: "Registration on ICEGATE allows importers, exporters, and shipping agents to file customs documents, track consignments, and pay duties online.",
    definitionQuote: "Best for importers, exporters, customs brokers, shipping agents, and freight forwarders.",
    benefitsRich: [
      { title: "E-Filing", desc: "File shipping bills, bills of entry, and baggage declarations online." },
      { title: "Real-Time Tracking", desc: "Track the status of customs clearance in real time." },
      { title: "Duty Payment", desc: "Pay customs duties and integrated taxes online." },
      { title: "Document Access", desc: "Download e-docs and query responses instantly." }
    ],
    benefits: ["E-Filing", "Real-Time Tracking", "Online Payments", "Paperless"],
    audienceDesc: "ICEGATE is essential for anyone involved in import/export logistics and customs clearance.",
    targetAudience: ["Importers", "Exporters", "Customs Brokers", "Shipping Agents", "Freight Forwarders", "CHA", "Manufacturers", "Trading Houses"],
    included: [
      "ICEGATE Account Creation", "Document Verification", "Digital Signature Integration",
      "Role Assignment", "Training Support", "Query Resolution"
    ],
    process: [
      { t: "Registration", d: "Apply for ICEGATE ID with basic business details." },
      { t: "DSC Mapping", d: "Link Class 3 DSC to your ICEGATE profile." },
      { t: "Role Assignment", d: "Assign importer, exporter, or CHA roles." },
      { t: "Verification", d: "Customs verifies the registration request." },
      { t: "Activation", d: "Profile activated for e-filing and tracking." }
    ],
    docs: [
      "IEC Certificate", "PAN of Entity", "DSC Token", "Authorized Signatory KYC",
      "Organization Registration Proof", "Bank Account Details"
    ],
    pricingTimeline: [
      { label: "Registration", value: "1-3 Days", desc: "Portal approval." },
      { label: "DSC Mapping", value: "Same Day", desc: "Post activation." }
    ],
    faqs: [
      { q: "Who needs ICEGATE registration?", a: "Importers, exporters, and customs brokers who file shipping bills and bills of entry online." },
      { q: "Is DSC mandatory for ICEGATE?", a: "Yes, a Class 3 Digital Signature is required for filing and signing documents." },
      { q: "Can I track my consignment on ICEGATE?", a: "Yes, you can track the real-time status of customs clearance for your shipments." },
      { q: "What is the difference between IEC and ICEGATE?", a: "IEC is the import-export license; ICEGATE is the customs e-filing portal linked to your IEC." }
    ]
  },
  "logo": {
    title: "Logo Registration",
    category: "Intellectual Property",
    heroTitle: "Protect Your Brand Logo",
    description: "Register your business logo as a trademark to prevent unauthorized use and build a valuable brand asset.",
    image: "/services_images/S_23_Logo_Registration.png",
    stats: [
      { value: "BRAND", label: "Protection" },
      { value: "LEGAL", label: "Exclusive Rights" }
    ],
    definition: "Logo registration under the Trademark Act protects your brand's visual identity from being copied or misused by competitors.",
    definitionLong: "A registered logo gives you exclusive rights to use the mark, sue for infringement, and license it for commercial gain.",
    definitionQuote: "Best for startups, e-commerce brands, product companies, and service businesses building visual brand identity.",
    benefitsRich: [
      { title: "Exclusive Rights", desc: "Legal ownership and exclusive right to use the logo nationwide." },
      { title: "Legal Protection", desc: "Sue infringers and counterfeiters in court." },
      { title: "Brand Value", desc: "A registered logo is an intangible asset that adds to company valuation." },
      { title: "Customer Trust", desc: "Builds consumer confidence and brand loyalty." }
    ],
    benefits: ["Exclusive Rights", "Legal Action", "Brand Asset", "Customer Trust"],
    audienceDesc: "Logo registration is crucial for any business investing in brand building and visual identity.",
    targetAudience: ["Startups", "E-Commerce Brands", "Product Companies", "Design Studios", "Restaurants", "Retail Chains", "Tech Companies", "Fashion Brands"],
    included: [
      "Logo Search & Clearance", "Trademark Application Filing", "Examination Report Reply",
      "Journal Publication", "Opposition Handling (if any)", "Registration Certificate"
    ],
    process: [
      { t: "Search", d: "Conduct a trademark search to ensure logo uniqueness." },
      { t: "Filing", d: "File the trademark application with the registry." },
      { t: "Examination", d: "Respond to examination reports from the Trademark Office." },
      { t: "Publication", d: "Logo published in the Trademark Journal for opposition." },
      { t: "Registration", d: "Receive registration certificate if no opposition." }
    ],
    docs: [
      "Logo Image (JPEG/PNG)", "Applicant PAN", "Business Registration Proof",
      "Power of Attorney", "User Affidavit (if in use)", "Address Proof"
    ],
    pricingTimeline: [
      { label: "Search & Filing", value: "1-2 Days", desc: "Application submission." },
      { label: "Examination", value: "3-6 Months", desc: "Trademark Office review." },
      { label: "Registration", value: "12-18 Months", desc: "Total timeline." }
    ],
    faqs: [
      { q: "Can I register a logo before starting business?", a: "Yes, you can file on an intent-to-use basis." },
      { q: "What is the validity of logo registration?", a: "10 years from the date of registration, renewable indefinitely." },
      { q: "Can I register both word mark and logo?", a: "Yes, it is recommended to register both for comprehensive protection." },
      { q: "What if someone opposes my logo?", a: "We provide opposition handling and legal representation during the process." }
    ]
  },

  // --- Other Services ---
  "accounting": {
    title: "Accounting & Bookkeeping",
    category: "Financial Services",
    heroTitle: "Professional Accounting & Bookkeeping Services",
    description: "Accurate, timely, and compliant financial record-keeping for businesses of all sizes.",
    image: "/services_images/website_service_plan.png",
    stats: [
      { value: "100%", label: "Accuracy" },
      { value: "SECURE", label: "Financials" }
    ],
    definition: "Accounting and Bookkeeping involves the systematic recording, analysis, and reporting of financial transactions to ensure transparency and compliance.",
    definitionLong: "Good accounting is the backbone of a successful business, providing insights for growth and ensuring you're always audit-ready.",
    definitionQuote: "Numbers tell a story; we make sure yours is one of success.",
    benefitsRich: [
      { title: "Informed Decisions", desc: "Real-time visibility into your financial health." },
      { title: "Statutory Compliance", desc: "Avoid penalties with timely tax and regulatory filings." },
      { title: "Audit Readiness", desc: "Always prepared for internal or external audits." },
      { title: "Cash Flow Management", desc: "Keep track of receivables and payables efficiently." }
    ],
    benefits: ["Accuracy", "Compliance", "Insightful Reports", "Audit Ready"],
    process: [
      { t: "Data Collection", d: "Secure collection of invoices, receipts, and statements." },
      { t: "Categorization", d: "Systematic entry and classification of transactions." },
      { t: "Reconciliation", d: "Matching bank statements with internal records." },
      { t: "Reporting", d: "Generation of P&L, Balance Sheet, and Cash Flow statements." }
    ],
    docs: ["Bank Statements", "Purchase Invoices", "Sales Invoices", "Expense Vouchers", "Previous Financial Records"],
    pricingTimeline: [
      { label: "Monthly Retainer", value: "Custom", desc: "Based on transaction volume." },
      { label: "Quarterly Review", value: "Fixed", desc: "Ensuring period-end accuracy." }
    ],
    faqs: [
      { q: "Why do I need professional accounting?", a: "It ensures accuracy, prevents fraud, and keeps you compliant with tax laws." },
      { q: "Can you manage my existing software?", a: "Yes, we work with Tally, Zoho, QuickBooks, and more." }
    ],
    audienceDesc: "Professional accounting is essential for businesses of all sizes to maintain accurate financial records and stay compliant.",
    targetAudience: ["Small Businesses", "Startups", "SMEs", "Manufacturers", "Traders", "Service Providers", "E-commerce Sellers", "Professionals"],
    included: [
      "Bookkeeping", "Ledger Maintenance", "Bank Reconciliation",
      "GST Reconciliation", "Monthly MIS Reports", "Year-end Financials"
    ]
  },
  "due-diligence": {
    title: "Legal & Financial Due Diligence",
    category: "Compliance",
    heroTitle: "Institutional-Grade Due Diligence Services",
    description: "Deep-dive assessment of legal, financial, and operational health for mergers, acquisitions, or investments.",
    image: "/services_images/company.png",
    stats: [
      { value: "EXHAUSTIVE", label: "Reporting" },
      { value: "EXPERT", label: "Analysis" }
    ],
    definition: "Due Diligence is a comprehensive investigation of a business or person prior to signing a contract, or an act with a certain standard of care.",
    definitionLong: "Our process uncovers hidden liabilities, verifies asset ownership, and assesses the true financial standing of an entity.",
    definitionQuote: "Trust, but verify. We provide the verification.",
    benefitsRich: [
      { title: "Risk Mitigation", desc: "Identify potential legal or financial pitfalls before they become problems." },
      { title: "Valuation Support", desc: "Ensure you are paying or receiving a fair price based on facts." },
      { title: "Compliance Verification", desc: "Confirm all regulatory and statutory mandates are being met." },
      { title: "Operational Insight", desc: "Understand the efficiency and sustainability of business operations." }
    ],
    benefits: ["Risk Identification", "Valuation Accuracy", "Legal Safety", "Operational Insight"],
    process: [
      { t: "Scope Definition", d: "Determining focus areas based on transaction type." },
      { t: "Data Room Review", d: "Analyzing provided documents and requesting missing info." },
      { t: "Management Interviews", d: "Direct discussions to clarify operational nuances." },
      { t: "Reporting", d: "Final report with findings, risks, and recommendations." }
    ],
    docs: ["Corporate Records", "Financial Statements", "Tax Filings", "Employee Contracts", "Legal Agreements", "Intellectual Property Records"],
    pricingTimeline: [
      { label: "Initial Review", value: "3-5 Days", desc: "Quick health check." },
      { label: "Full Audit", value: "2-4 Weeks", desc: "Deep-dive investigation." }
    ],
    faqs: [
      { q: "When is due diligence necessary?", a: "Before M&A, significant investments, or entering major partnerships." },
      { q: "What types of due diligence do you offer?", a: "Legal, Financial, Tax, and Operational Due Diligence." }
    ],
    audienceDesc: "Due diligence is critical for investors, acquirers, and businesses entering major transactions or partnerships.",
    targetAudience: ["Investors", "Private Equity Firms", "Venture Capitalists", "Acquirers", "Banks", "NBFCs", "Corporate Buyers", "Joint Venture Partners"],
    included: [
      "Legal Document Review", "Financial Statement Analysis", "Compliance Verification",
      "Management Interview", "Risk Assessment Report", "Red Flag Identification"
    ]
  },
  "bank-account-assistance": {
    title: "Bank Account Assistance",
    category: "Business Support",
    heroTitle: "Seamless Business Bank Account Opening",
    description: "Expert assistance in choosing the right bank and opening current accounts for your new or existing business.",
    image: "/services_images/company.png",
    stats: [
      { value: "TOP BANKS", label: "Partnered" },
      { value: "FAST", label: "Approvals" }
    ],
    definition: "Bank Account Assistance involves guiding businesses through the documentation and KYC requirements of various banks to ensure a smooth onboarding process.",
    definitionLong: "We help you select banks that offer the best digital features, lower charges, and high-quality relationship management for your industry.",
    definitionQuote: "The right banking partner is a catalyst for business growth.",
    benefitsRich: [
      { title: "Expert Selection", desc: "Choose a bank that fits your transaction volume and digital needs." },
      { title: "Document Preparedness", desc: "We ensure all your KYC and business proofs are exactly as banks require." },
      { title: "Liaison Support", desc: "Direct coordination with bank relationship managers for faster processing." },
      { title: "Fee Negotiation", desc: "Guidance on special corporate accounts with waived minimum balances or lower charges." }
    ],
    benefits: ["Right Choice", "Fast Onboarding", "Document Support", "Digital Priority"],
    process: [
      { t: "Requirement Analysis", d: "Understanding your business's banking needs." },
      { t: "Bank Selection", d: "Comparing top banks' offerings and charges." },
      { t: "Documentation", d: "Collecting and verifying all necessary KYC and registration proofs." },
      { t: "Coordination", d: "Setting up a meeting or digital onboarding with the bank." }
    ],
    docs: ["Business PAN", "Certificate of Incorporation/Registration", "MOA/AOA or Deed", "Directors/Partners KYC", "Address Proof of Office"],
    pricingTimeline: [
      { label: "Consultation", value: "Instant", desc: "Selecting the best bank." },
      { label: "Opening", value: "2-7 Days", desc: "Varies by bank's internal KYC speed." }
    ],
    faqs: [
      { q: "Which bank is best for a startup?", a: "It depends on your digital needs and funding status; we provide a custom comparison." },
      { q: "Can you help with foreign currency accounts?", a: "Yes, we assist with EEFC and other specialized accounts." }
    ],
    audienceDesc: "Bank account assistance is valuable for newly incorporated businesses and those seeking better banking solutions.",
    targetAudience: ["Startups", "New Companies", "LLPs", "Partnership Firms", "Proprietorships", "Trusts", "Societies", "Foreign Entities"],
    included: [
      "Bank Comparison", "KYC Document Preparation", "Application Filing",
      "Relationship Manager Liaison", "Account Activation Support", "Net Banking Setup"
    ]
  },

  // --- Registrations ---
  "startup-india": {
    title: "Startup India Registration",
    category: "Government Recognition",
    heroTitle: "DPIIT Recognition for Your Startup",
    description: "Get recognized by Startup India to access tax exemptions, easier public procurement, and self-certification compliance.",
    image: "/services_images/startup_india.png",
    stats: [
      { value: "TAX EXEMPT", label: "Benefit" },
      { value: "GOVT", label: "Recognized" }
    ],
    definition: "Startup India is a flagship initiative of the Government of India intended to build a strong ecosystem for nurturing innovation and Startups in the country.",
    definitionLong: "DPIIT Recognition allows startups to access various benefits like tax holidays for 3 years, capital gains tax exemptions, and easier patent filing.",
    definitionQuote: "Fuel your innovation with the right government backing.",
    benefitsRich: [
      { title: "Income Tax Exemption", desc: "Eligibility for 3 years of tax holiday under Section 80-IAC." },
      { title: "Self-Certification", desc: "Easier compliance for 6 labor and 3 environmental laws." },
      { title: "Patent Support", desc: "80% rebate in patent filing fees and fast-track processing." },
      { title: "Public Procurement", desc: "Relaxation in EMD, prior turnover, and experience for government tenders." }
    ],
    benefits: ["Tax Holiday", "Self Certification", "Patent Rebate", "Easy Tenders"],
    process: [
      { t: "Entity Setup", d: "Startup must be a Pvt Ltd, LLP, or Registered Partnership." },
      { t: "Innovation Proof", d: "Preparing write-up on innovation or scalability." },
      { t: "DPIIT Filing", d: "Online application on Startup India portal." },
      { t: "Verification", d: "Review by DPIIT officials." },
      { t: "Recognition", d: "Issuance of DPIIT Recognition Certificate." }
    ],
    docs: ["Certificate of Incorporation", "MOA/AOA or LLP Agreement", "Write-up on Business Innovation", "Awards/Letters of Intent (Optional)", "Business Deck (Optional)"],
    pricingTimeline: [
      { label: "Documentation", value: "2-3 Days", desc: "Preparing the write-up." },
      { label: "Filing", value: "1 Day", desc: "Portal submission." },
      { label: "Approval", value: "7-15 Days", desc: "Government review time." }
    ],
    faqs: [
      { q: "Who is eligible for Startup India?", a: "Entity must be under 10 years old with turnover below ₹100 crore and working on innovation." },
      { q: "Does every recognized startup get tax exemption?", a: "No, tax exemption (80-IAC) requires a separate application after recognition." }
    ],
    audienceDesc: "Startup India recognition is ideal for innovative businesses, tech startups, and scalable ventures seeking government benefits and investor credibility.",
    targetAudience: ["Tech Startups", "Innovative Businesses", "Scalable Ventures", "DPIIT Applicants", "Early-Stage Founders", "Seed-Stage Companies", "Product Startups", "R&D Firms"],
    included: [
      "Eligibility Assessment", "Innovation Write-up Preparation", "DPIIT Portal Filing",
      "Document Compilation", "Recognition Certificate", "Post-Recognition Advisory",
      "Tax Exemption Application Support (Optional)"
    ]
  },
  "trademark": {
    title: "Trademark Registration",
    category: "Intellectual Property",
    heroTitle: "Protect Your Brand with Trademark Registration",
    description: "Secure your brand name, logo, or slogan from misuse and build a valuable intellectual property asset.",
    image: "/services_images/S_22_Trademark_Registration.png",
    stats: [
      { value: "GLOBAL", label: "Protection" },
      { value: "LEGAL", label: "Security" }
    ],
    definition: "A Trademark is a unique symbol, word, or words legally registered or established by use as representing a company or product.",
    definitionLong: "Trademark registration gives you the exclusive right to use the mark and prevents others from using identical or confusingly similar marks in the same line of business.",
    definitionQuote: "Your brand is your identity; don't let anyone else use it.",
    benefitsRich: [
      { title: "Brand Protection", desc: "Legal right to stop others from using your brand name/logo." },
      { title: "Intangible Asset", desc: "A registered trademark is a valuable IP asset that can be sold or licensed." },
      { title: "TM Symbol", desc: "Right to use the ™ symbol immediately and ® after registration." },
      { title: "Global Recognition", desc: "Basis for international trademark filing under Madrid Protocol." }
    ],
    benefits: ["Exclusive Rights", "Asset Value", "Legal Protection", "Market Trust"],
    process: [
      { t: "TM Search", d: "Checking availability to avoid conflicts." },
      { t: "Filing", d: "Submitting application to the Trademark Registry." },
      { t: "Examination", d: "Review by the Trademark Examiner." },
      { t: "Publication", d: "Publication in the TM Journal for opposition." },
      { t: "Registration", d: "Issuance of Trademark Registration Certificate." }
    ],
    docs: ["Logo (if applicable)", "Identity Proof of Applicant", "Address Proof", "Power of Attorney", "User Affidavit (if mark is already in use)"],
    pricingTimeline: [
      { label: "Filing", value: "1-2 Days", desc: "Immediate ™ usage." },
      { label: "Examination", value: "3-6 Months", desc: "Registry review." },
      { label: "Registration", value: "12-18 Months", desc: "Total timeline." }
    ],
    faqs: [
      { q: "What is the validity of a trademark?", a: "A trademark is valid for 10 years and can be renewed indefinitely." },
      { q: "Can I register a generic name?", a: "No, generic names like 'Apple' for a fruit shop cannot be trademarked." }
    ],
    audienceDesc: "Trademark registration is essential for any business investing in brand identity and seeking legal protection against infringement.",
    targetAudience: ["Startups", "E-Commerce Brands", "Product Companies", "Design Studios", "Restaurants", "Retail Chains", "Tech Companies", "Fashion Brands"],
    included: [
      "Trademark Search & Clearance", "Trademark Application Filing", "Examination Report Reply",
      "Journal Publication", "Opposition Handling (if any)", "Registration Certificate"
    ]
  },
  "iec": {
    title: "Import Export Code (IEC)",
    category: "Trade License",
    heroTitle: "Start International Trade with IEC",
    description: "Mandatory 10-digit code for anyone importing or exporting goods and services from India.",
    image: "/services_images/import_export.png",
    stats: [
      { value: "LIFETIME", label: "Validity" },
      { value: "GLOBAL", label: "Trade" }
    ],
    definition: "The Import Export Code (IEC) is a key business identification number which is mandatory for Exports or Imports from India.",
    definitionLong: "No export or import shall be made by any person without obtaining an IEC unless specifically exempted.",
    definitionQuote: "The passport for your products to cross international borders.",
    benefitsRich: [
      { title: "Global Expansion", desc: "Necessary for expanding your business to international markets." },
      { title: "Benefit Claims", desc: "Claim benefits from DGFT, Customs, and Export Promotion Councils." },
      { title: "No Renewal", desc: "IEC has lifetime validity and requires no periodic renewal (only annual update)." },
      { title: "Easy Setup", desc: "Quick and entirely online application process." }
    ],
    benefits: ["Global Access", "No Renewal", "Incentives", "Fast Issuance"],
    process: [
      { t: "Registration", d: "Register on the DGFT portal." },
      { t: "Application", d: "Fill the ANF 2A form online." },
      { t: "Payment", d: "Pay the nominal government application fee." },
      { t: "Issuance", d: "Receive the IEC certificate electronically." }
    ],
    docs: ["PAN Card", "Voter ID/Aadhar/Passport", "Cancelled Cheque", "Address Proof of Business"],
    pricingTimeline: [
      { label: "Documentation", value: "1 Day", desc: "Gathering basic proofs." },
      { label: "Filing", value: "1 Day", desc: "Online submission." },
      { label: "Issuance", value: "1-2 Days", desc: "Fast-track processing." }
    ],
    faqs: [
      { q: "Is IEC required for services?", a: "Yes, IEC is required if the service provider is taking benefits under the Foreign Trade Policy." },
      { q: "Do individuals need IEC?", a: "Yes, individuals importing or exporting for business purposes need an IEC." }
    ],
    audienceDesc: "IEC is mandatory for any individual or business engaged in international trade of goods or services from India.",
    targetAudience: ["Exporters", "Importers", "Manufacturers", "E-Commerce Sellers", "Service Exporters", "Trading Houses", "Customs Brokers", "Logistics Companies"],
    included: [
      "Eligibility Verification", "DGFT Portal Registration", "ANF 2A Form Filing",
      "Fee Payment Support", "IEC Certificate Issuance", "Annual Update Reminder"
    ]
  },

  // --- Income Tax ---
  "itr-filing": {
    title: "Income Tax Return Filing (ITR)",
    category: "Direct Tax",
    heroTitle: "Expert ITR Filing & Tax Strategy",
    description: "Maximize your tax savings with our strategy-led filing process for individuals and businesses.",
    image: "/services_images/S_24_Income_Tax.png",
    stats: [
      { value: "ACCURATE", label: "Filing" },
      { value: "FAST", label: "Refund" }
    ],
    definition: "Income Tax Return is a mandatory declaration of income, expenses, and taxes paid to the government annually.",
    definitionLong: "Filing ITR is not just a legal mandate; it is a critical document for visa applications, loan approvals, and carrying forward business losses to future years.",
    definitionQuote: "Taxes are the price we pay for a civilized society, but overpaying is optional.",
    benefitsRich: [
      { title: "Penalty Savings", desc: "Avoid heavy interest and late fees by filing before the statutory deadline." },
      { title: "Refund Processing", desc: "Ensure fast and accurate processing of your excess tax refunds." },
      { title: "Financial Record", desc: "ITR is the primary proof of income for banks and embassies." },
      { title: "Loss Carry-forward", desc: "Set off current business losses against future profits to save tax." }
    ],
    benefits: ["Penalty Avoidance", "Refund Accuracy", "Loan Support", "Tax Optimization"],
    audienceDesc: "ITR filing is essential for all individuals and businesses earning taxable income in India.",
    targetAudience: ["Salaried Employees", "Business Owners", "Professionals", "NRIs", "Freelancers", "Startups", "Investors", "Senior Citizens"],
    included: [
      "Income Computation", "AIS/TIS Analysis", "Form 26AS Reconciliation",
      "Capital Gains Calculation", "E-filing & Verification", "Refund Tracking"
    ],
    process: [
      { t: "Data Gathering", d: "Collecting Form 16, bank statements, and investment proofs." },
      { t: "Computation", d: "Applying all eligible deductions under Sections 80C to 80U." },
      { t: "CA Review", d: "Final audit for accuracy and compliance." },
      { t: "Filing", d: "Electronic submission to the Income Tax Department." }
    ],
    docs: ["Form 16/16A", "Bank Statements", "Investment Proofs", "Aadhaar & PAN", "Property Documents (if any)"],
    pricingTimeline: [
      { label: "Salaried ITR", value: "1 Day", desc: "Basic filing." },
      { label: "Business ITR", value: "2-3 Days", desc: "Complex computation." }
    ],
    faqs: [
      { q: "Who is required to file ITR?", a: "Individuals with income above basic exemption limit or those with specific assets/investments must file." },
      { q: "What happens if I miss the deadline?", a: "You can file a Belated Return with a penalty ranging from Rs.1,000 to Rs.5,000." }
    ]
  },
  "revised-return": {
    title: "Revised Return Filing",
    category: "Direct Tax",
    heroTitle: "File a Revised Return Correctly",
    description: "Correct errors or omissions in your originally filed ITR with expert assistance for a stress-free revised return.",
    image: "/services_images/S_25_Income_Tax_Return_Filing_(ITR_Filing).png",
    stats: [
      { value: "CORRECT", label: "Mistakes" },
      { value: "SAFE", label: "Compliance" }
    ],
    definition: "A Revised Return allows taxpayers to rectify mistakes or omissions in their originally filed Income Tax Return under Section 139(5).",
    definitionLong: "Filing a revised return ensures your tax records are accurate, preventing future scrutiny and notices from the Income Tax Department.",
    definitionQuote: "Better to correct today than face a notice tomorrow.",
    benefitsRich: [
      { title: "Error Correction", desc: "Fix income omission, wrong deductions, or incorrect personal details." },
      { title: "Avoid Penalties", desc: "Proactive correction reduces the risk of scrutiny and penalties." },
      { title: "Accurate Refunds", desc: "Ensure you receive the correct refund amount without delay." },
      { title: "Compliance Safety", desc: "Maintain clean tax records for loans and visa applications." }
    ],
    benefits: ["Error Fix", "Penalty Avoidance", "Correct Refund", "Clean Record"],
    audienceDesc: "Revised return filing is ideal for anyone who discovers an error in their submitted ITR.",
    targetAudience: ["Salaried Individuals", "Business Owners", "Professionals", "Investors", "NRIs", "Freelancers"],
    included: [
      "Original Return Review", "Error Identification", "Corrected Computation",
      "Revised Filing", "Acknowledgment Download", "Future Compliance Advice"
    ],
    process: [
      { t: "Review", d: "Analyze the original filed return for errors." },
      { t: "Correction", d: "Prepare corrected income and deduction details." },
      { t: "Filing", d: "File revised return under Section 139(5)." },
      { t: "Verification", d: "Verify ITR-V or e-verify the revised return." }
    ],
    docs: ["Original ITR Acknowledgment", "Corrected Income Proofs", "Updated Investment Proofs", "PAN & Aadhaar"],
    pricingTimeline: [
      { label: "Review", value: "Same Day", desc: "Error analysis." },
      { label: "Filing", value: "1 Day", desc: "Revised submission." }
    ],
    faqs: [
      { q: "When can I file a revised return?", a: "Before the end of the relevant assessment year or before completion of assessment, whichever is earlier." },
      { q: "Can I file multiple revised returns?", a: "Yes, you can file multiple revised returns for the same assessment year." }
    ]
  },
  "updated-return": {
    title: "Updated Return Filing",
    category: "Direct Tax",
    heroTitle: "File an Updated Return Under Section 139(8A)",
    description: "Missed filing your ITR? You can still update your tax records within 24 months with an Updated Return.",
    image: "/services_images/S_27_Updated_Return_Filing.png",
    stats: [
      { value: "24 MONTHS", label: "Window" },
      { value: "SECTION", label: "139(8A)" }
    ],
    definition: "An Updated Return under Section 139(8A) allows taxpayers to file or update their ITR within 24 months from the end of the relevant assessment year.",
    definitionLong: "This provision enables taxpayers to voluntarily declare additional income and pay additional tax with a simple process, reducing future litigation risk.",
    definitionQuote: "A second chance to get your tax affairs in order.",
    benefitsRich: [
      { title: "Extended Window", desc: "File up to 24 months after the assessment year ends." },
      { title: "Reduced Litigation", desc: "Voluntary disclosure reduces the risk of penalties and prosecution." },
      { title: "Clean Record", desc: "Maintain updated tax compliance history for loans and visas." },
      { title: "Simple Process", d: "Straightforward filing with additional tax payment." }
    ],
    benefits: ["Extended Timeline", "Clean Compliance", "Reduced Risk", "Voluntary Disclosure"],
    audienceDesc: "Updated return filing is ideal for those who missed filing or underreported income in previous years.",
    targetAudience: ["Missed Filers", "Under-reporters", "Business Owners", "Investors", "NRIs", "High Net Worth Individuals"],
    included: [
      "Eligibility Check", "Income Re-computation", "Additional Tax Calculation",
      "Form 139(8A) Filing", "Tax Payment Support", "Acknowledgment Tracking"
    ],
    process: [
      { t: "Assessment", d: "Determine eligibility and additional income." },
      { t: "Computation", d: "Recalculate tax liability with updated figures." },
      { t: "Payment", d: "Pay additional tax with applicable interest." },
      { t: "Filing", d: "Submit Updated Return on Income Tax portal." }
    ],
    docs: ["PAN Card", "Aadhaar", "Income Proofs", "Original ITR (if filed)", "Bank Statements"],
    pricingTimeline: [
      { label: "Assessment", value: "1 Day", desc: "Eligibility check." },
      { label: "Filing", value: "1-2 Days", desc: "Submission and payment." }
    ],
    faqs: [
      { q: "Who can file an Updated Return?", a: "Any person who has not filed or has under-reported income can file under Section 139(8A)." },
      { q: "What is the additional tax rate?", a: "An additional tax of 25% or 50% on the due tax, depending on the filing window." }
    ]
  },
  "tds-tcs-filing": {
    title: "TDS/TCS Return Filing",
    category: "Direct Tax",
    heroTitle: "Timely TDS/TCS Return Filing",
    description: "Ensure compliant quarterly TDS and TCS return filing with Form 24Q, 26Q, 27Q, and 27EQ.",
    image: "/services_images/S_28_TDS_Return_Filing.png",
    stats: [
      { value: "QUARTERLY", label: "Compliance" },
      { value: "ZERO", label: "Penalties" }
    ],
    definition: "TDS (Tax Deducted at Source) and TCS (Tax Collected at Source) returns are quarterly statements filed by deductors/collectors reporting tax deductions and collections.",
    definitionLong: "Timely filing of TDS/TCS returns ensures compliance, avoids late fees under Section 234E, and enables deductees to claim tax credits.",
    definitionQuote: "Accurate TDS filing builds trust with vendors and employees alike.",
    benefitsRich: [
      { title: "Penalty Avoidance", desc: "Avoid late filing fees of Rs.200 per day under Section 234E." },
      { title: "Credit Transfer", desc: "Ensure deductees receive proper Form 16/16A and 26AS credits." },
      { title: "Compliance Score", desc: "Maintain a good TDS compliance rating with the IT Department." },
      { title: "Interest Savings", desc: "Avoid interest charges under Section 201(1A) for late deposits." }
    ],
    benefits: ["No Penalties", "Clean 26AS", "Compliance Rating", "Timely Credits"],
    audienceDesc: "TDS/TCS filing is mandatory for all businesses and professionals deducting or collecting tax at source.",
    targetAudience: ["Employers", "Businesses", "Banks", "NBFCs", "Property Buyers", "Contractors", "Professional Firms", "E-commerce Operators"],
    included: [
      "TAN Verification", "Challan Reconciliation", "Form 24Q/26Q/27Q/27EQ Preparation",
      "Quarterly Filing", "Form 16/16A Generation", "Correction Statement Support"
    ],
    process: [
      { t: "Data Collection", d: "Gather deduction details and challan information." },
      { t: "Reconciliation", d: "Match challans with deductee records." },
      { t: "Preparation", d: "Prepare TDS/TCS return in prescribed format." },
      { t: "Filing", d: "Submit return on TRACES/NSDL portal." }
    ],
    docs: ["TAN Certificate", "Challan Copies", "Deductee PAN Details", "Payment Vouchers", "Previous TDS Returns"],
    pricingTimeline: [
      { label: "Preparation", value: "1-2 Days", desc: "Per quarter." },
      { label: "Filing", value: "Same Day", desc: "Online submission." }
    ],
    faqs: [
      { q: "What is the due date for TDS returns?", a: "Quarterly: 31st July, 31st October, 31st January, and 31st May for Q4." },
      { q: "What happens if I file late?", a: "Late fee of Rs.200 per day under Section 234E, plus interest under Section 201(1A)." }
    ]
  },
  "tds-property": {
    title: "TDS on Property Purchase",
    category: "Direct Tax",
    heroTitle: "TDS Compliance on Property Transactions",
    description: "Expert assistance for TDS deduction, Form 26QB filing, and TDS certificates on property purchases above Rs.50 lakhs.",
    image: "/services_images/S_29_TDS_on_Property_Purchase.png",
    stats: [
      { value: "1%", label: "TDS Rate" },
      { value: "SECTION", label: "194-IA" }
    ],
    definition: "Under Section 194-IA, buyers of immovable property worth over Rs.50 lakhs must deduct 1% TDS and deposit it with the government.",
    definitionLong: "The TDS must be deposited within 30 days from the end of the month of deduction using Form 26QB, and Form 16B must be issued to the seller.",
    definitionQuote: "Property buying comes with tax responsibilities; we handle them for you.",
    benefitsRich: [
      { title: "Legal Compliance", desc: "Avoid penalties for non-deduction or short deduction of TDS." },
      { title: "Form 26QB Filing", desc: "Accurate online filing within the 30-day window." },
      { title: "Form 16B Generation", desc: "Proper TDS certificate issuance to the seller." },
      { title: "Seamless Process", desc: "End-to-end handling from deduction to certificate." }
    ],
    benefits: ["Penalty Free", "On-time Filing", "Seller Certificate", "Hassle Free"],
    audienceDesc: "TDS on property is mandatory for all buyers purchasing residential or commercial property above Rs.50 lakhs.",
    targetAudience: ["Property Buyers", "NRI Buyers", "Real Estate Investors", "Home Buyers", "Commercial Investors"],
    included: [
      "TDS Calculation", "Form 26QB Filing", "TDS Deposit",
      "Form 16B Generation", "Seller PAN Verification", "Compliance Documentation"
    ],
    process: [
      { t: "Verification", d: "Verify seller PAN and property value." },
      { t: "Deduction", d: "Deduct 1% TDS from payment to seller." },
      { t: "Filing", d: "File Form 26QB on TIN-NSDL portal within 30 days." },
      { t: "Certificate", d: "Download and provide Form 16B to seller." }
    ],
    docs: ["Buyer PAN", "Seller PAN", "Sale Agreement", "Payment Receipts", "Property Details"],
    pricingTimeline: [
      { label: "Filing", value: "Same Day", desc: "Quick online submission." },
      { label: "Certificate", value: "2-3 Days", desc: "Form 16B generation." }
    ],
    faqs: [
      { q: "Is TDS applicable on property below Rs.50 lakhs?", a: "No, TDS under Section 194-IA applies only when consideration exceeds Rs.50 lakhs." },
      { q: "What if the seller is an NRI?", a: "For NRI sellers, TDS under Section 195 applies with different rates based on capital gains." }
    ]
  },
  "lower-deduction": {
    title: "Lower Deduction Certificate",
    category: "Direct Tax",
    heroTitle: "Apply for Lower TDS Deduction Certificate",
    description: "Get a certificate under Section 197 to enable lower or nil TDS deduction on your income, improving cash flow.",
    image: "/services_images/S_30_Lower_deduction_Certificate.png",
    stats: [
      { value: "CASH FLOW", label: "Improvement" },
      { value: "SECTION", label: "197" }
    ],
    definition: "A Lower Deduction Certificate under Section 197 allows the assessee to receive income with reduced or zero TDS if their total income is below taxable limits.",
    definitionLong: "This certificate is issued by the Assessing Officer and is beneficial for senior citizens, charitable trusts, and businesses with low taxable income.",
    definitionQuote: "Why pay TDS when your total income is not taxable?",
    benefitsRich: [
      { title: "Cash Flow", desc: "Receive full payment without TDS blockage." },
      { title: "Reduced Refund Wait", desc: "Avoid waiting for TDS refund at year-end." },
      { title: "Simple Application", desc: "Online application on TRACES portal." },
      { title: "Valid PAN-Wide", desc: "Certificate valid for all deductors across India." }
    ],
    benefits: ["Full Payment", "No Refund Wait", "Online Process", "PAN Valid"],
    audienceDesc: "Lower deduction certificates are ideal for those whose estimated total income is below the taxable threshold.",
    targetAudience: ["Charitable Trusts", "Senior Citizens", "Startups with Losses", "NGOs", "Section 8 Companies", "Individuals with Low Income"],
    included: [
      "Eligibility Assessment", "Form 13 Preparation", "Online Application Filing",
      "AO Liaison", "Certificate Download", "Deductor Communication"
    ],
    process: [
      { t: "Assessment", d: "Evaluate eligibility based on estimated income." },
      { t: "Application", d: "Prepare and file Form 13 on TRACES." },
      { t: "Review", d: "Assessing Officer reviews the application." },
      { t: "Certificate", d: "Receive lower/nil deduction certificate." }
    ],
    docs: ["PAN Card", "Income Estimates", "Previous ITR", "Bank Statements", "Financial Projections"],
    pricingTimeline: [
      { label: "Application", value: "1-2 Days", desc: "Form preparation." },
      { label: "Approval", value: "2-4 Weeks", desc: "AO processing time." }
    ],
    faqs: [
      { q: "Who can apply for a lower deduction certificate?", a: "Any person whose estimated total income justifies lower or nil TDS deduction." },
      { q: "How long is the certificate valid?", a: "Typically for the financial year for which it is issued, unless otherwise specified." }
    ]
  },
  "15ca-15cb": {
    title: "15CA/15CB Filing",
    category: "Direct Tax",
    heroTitle: "Remittance Compliance: 15CA & 15CB",
    description: "Expert filing of Form 15CA and Chartered Accountant certification in Form 15CB for foreign remittances.",
    image: "/services_images/import_export.png",
    stats: [
      { value: "RBI", label: "Compliant" },
      { value: "FOREX", label: "Ready" }
    ],
    definition: "Form 15CA is a declaration by the remitter for foreign payments, and Form 15CB is a CA certificate verifying the nature of remittance and TDS applicability.",
    definitionLong: "These forms are mandatory for most foreign remittances under the Income Tax Act and must be filed before initiating the wire transfer.",
    definitionQuote: "Smooth international payments start with proper tax compliance.",
    benefitsRich: [
      { title: "RBI Compliance", desc: "Meet RBI and Income Tax requirements for forex remittances." },
      { title: "Bank Authorization", desc: "Banks require 15CA/15CB before processing outward remittances." },
      { title: "TDS Clarity", desc: "Clear determination of TDS rates under DTAA or domestic law." },
      { title: "Quick Turnaround", desc: "Fast CA certification and online filing." }
    ],
    benefits: ["Bank Ready", "RBI Compliant", "TDS Clarity", "Fast Processing"],
    audienceDesc: "15CA/15CB filing is essential for all businesses and individuals making foreign payments.",
    targetAudience: ["Exporters", "Importers", "MNCs", "Software Companies", "Educational Institutions", "Individuals Sending Money Abroad"],
    included: [
      "Remittance Analysis", "Form 15CB CA Certification", "Form 15CA Filing",
      "DTAA Benefit Check", "TDS Calculation", "Bank Submission Support"
    ],
    process: [
      { t: "Analysis", d: "Determine the purpose code and TDS applicability." },
      { t: "Certification", d: "CA issues Form 15CB after review." },
      { t: "Filing", d: "File Form 15CA on Income Tax portal." },
      { t: "Remittance", d: "Submit forms to bank for outward remittance." }
    ],
    docs: ["Invoice/Agreement", "Beneficiary Bank Details", "PAN of Remitter", "Purpose Code", "Previous 15CA/15CB (if any)"],
    pricingTimeline: [
      { label: "Analysis", value: "Same Day", desc: "Remittance review." },
      { label: "Certification", value: "1-2 Days", desc: "CA Form 15CB." },
      { label: "Filing", value: "Same Day", desc: "Online submission." }
    ],
    faqs: [
      { q: "Is 15CB mandatory for all remittances?", a: "No, certain remittances listed in Rule 37BB do not require 15CB but still need 15CA." },
      { q: "Can individuals file 15CA themselves?", a: "Yes, individuals can file Part A of 15CA without 15CB for certain remittances." }
    ]
  },
  "pan-application": {
    title: "PAN Application",
    category: "Direct Tax",
    heroTitle: "Apply for a New PAN Card",
    description: "Quick and hassle-free PAN card application for individuals, NRIs, minors, and companies.",
    image: "/services_images/S_32_Pan_Application.png",
    stats: [
      { value: "NATIONWIDE", label: "Valid" },
      { value: "FAST", label: "Processing" }
    ],
    definition: "Permanent Account Number (PAN) is a unique 10-digit alphanumeric identifier issued by the Income Tax Department for all tax-related transactions.",
    definitionLong: "PAN is mandatory for filing income tax returns, opening bank accounts, buying property, and making high-value transactions in India.",
    definitionQuote: "Your financial fingerprint in the Indian tax system.",
    benefitsRich: [
      { title: "Tax Compliance", desc: "Mandatory for ITR filing and TDS transactions." },
      { title: "Banking Access", desc: "Required for opening savings and current accounts." },
      { title: "Investment Ready", desc: "Needed for mutual funds, stocks, and fixed deposits." },
      { title: "Property Transactions", desc: "Mandatory for buying or selling immovable property." }
    ],
    benefits: ["Tax ID", "Bank Ready", "Investment", "Property"],
    audienceDesc: "PAN is mandatory for all Indian citizens, NRIs, and foreign entities conducting financial transactions in India.",
    targetAudience: ["Individuals", "NRIs", "Minors", "Companies", "LLPs", "Trusts", "Partnerships", "Foreign Entities"],
    included: [
      "Form 49A/49AA Preparation", "Document Verification", "Online Application Filing",
      "Payment of Fee", "Tracking Support", "Card Delivery Follow-up"
    ],
    process: [
      { t: "Form Filling", d: "Complete Form 49A or 49AA with accurate details." },
      { t: "Document Upload", d: "Upload identity, address, and photo proofs." },
      { t: "Payment", d: "Pay application fee online." },
      { t: "Acknowledgment", d: "Receive acknowledgment for tracking." }
    ],
    docs: ["Aadhaar Card", "Passport Photo", "Address Proof", "Identity Proof", "Date of Birth Proof"],
    pricingTimeline: [
      { label: "e-PAN", value: "48 Hours", desc: "Digital delivery." },
      { label: "Physical PAN", value: "15-20 Days", desc: "Card dispatch." }
    ],
    faqs: [
      { q: "Can NRIs apply for PAN?", a: "Yes, NRIs can apply using Form 49AA with a valid passport." },
      { q: "Is Aadhaar mandatory for PAN?", a: "Yes, Aadhaar is mandatory for Indian residents applying for PAN." }
    ]
  },
  "tan-application": {
    title: "TAN Application",
    category: "Direct Tax",
    heroTitle: "Apply for TAN Online",
    description: "Get your Tax Deduction and Collection Account Number for TDS/TCS compliance.",
    image: "/services_images/S_33_TAN_Application.png",
    stats: [
      { value: "ONLINE", label: "Process" },
      { value: "7 DAYS", label: "Issuance" }
    ],
    definition: "TAN is a unique 10-digit alphanumeric number required for all persons responsible for deducting or collecting tax at source.",
    definitionLong: "TAN must be quoted on all TDS/TCS returns, challans, and certificates. Without TAN, TDS payments are not accepted by banks.",
    definitionQuote: "The essential key to handling TDS and TCS in India.",
    benefitsRich: [
      { title: "TDS Compliance", desc: "Mandatory for filing TDS returns and depositing tax." },
      { title: "Bank Acceptance", desc: "Banks accept TDS payments only with a valid TAN." },
      { title: "Penalty Avoidance", desc: "Avoid Rs.10,000 penalty for failing to quote TAN." },
      { title: "Quick Process", desc: "Simple online application with fast processing." }
    ],
    benefits: ["TDS Ready", "Bank Accepted", "No Penalty", "Fast Setup"],
    audienceDesc: "TAN is mandatory for employers, businesses, and professionals deducting or collecting tax.",
    targetAudience: ["Employers", "Companies", "Banks", "NBFCs", "Government Departments", "Property Buyers", "Contractors"],
    included: [
      "Form 49B Preparation", "Online Application", "Fee Payment",
      "TAN Allotment Letter", "TDS Return Setup Support", "Compliance Guidance"
    ],
    process: [
      { t: "Form Preparation", d: "Complete Form 49B with business details." },
      { t: "Submission", d: "File application on NSDL/TIN portal." },
      { t: "Payment", d: "Pay nominal government fee." },
      { t: "Allotment", d: "Receive TAN allotment letter." }
    ],
    docs: ["PAN of Applicant", "Address Proof", "Identity Proof"],
    pricingTimeline: [
      { label: "Filing", value: "Same Day", desc: "Online submission." },
      { label: "Allotment", value: "5-7 Days", desc: "Government processing." }
    ],
    faqs: [
      { q: "Can a person have multiple TANs?", a: "No, one entity should have only one TAN. Having multiple TANs is illegal." },
      { q: "Is TAN different from PAN?", a: "Yes, PAN is for income tax payers while TAN is specifically for TDS deductors and TCS collectors." }
    ]
  },
  "tax-consulting": {
    title: "Income Tax Consulting Services",
    category: "Direct Tax",
    heroTitle: "Strategic Income Tax Consulting",
    description: "Expert tax planning and advisory to minimize liability and maximize savings within the legal framework.",
    image: "/services_images/S_34_Income_Tax_Consulting_Services.png",
    stats: [
      { value: "TAILORED", label: "Strategy" },
      { value: "LEGAL", label: "Optimization" }
    ],
    definition: "Income Tax Consulting involves strategic planning to legally reduce tax liability through exemptions, deductions, and optimal structuring.",
    definitionLong: "Our consultants analyze your financial situation and recommend strategies to optimize taxes while ensuring full compliance with the Income Tax Act.",
    definitionQuote: "Smart tax planning is not about avoiding taxes, but about paying what is fair and optimal.",
    benefitsRich: [
      { title: "Tax Savings", desc: "Identify all eligible deductions and exemptions under the Act." },
      { title: "Compliance Safety", desc: "Ensure all strategies are within legal boundaries." },
      { title: "Future Planning", desc: "Long-term tax roadmap for business and personal growth." },
      { title: "Notice Prevention", desc: "Reduce chances of scrutiny and departmental notices." }
    ],
    benefits: ["Tax Savings", "Legal Safety", "Future Ready", "Notice Free"],
    audienceDesc: "Tax consulting is ideal for individuals, businesses, and HNIs seeking strategic tax optimization.",
    targetAudience: ["Salaried Professionals", "Business Owners", "HNIs", "NRIs", "Startups", "Investors", "Families", "Retirees"],
    included: [
      "Financial Review", "Tax Planning Report", "Deduction Optimization",
      "Investment Advisory", "Year-Round Support", "Compliance Monitoring"
    ],
    process: [
      { t: "Assessment", d: "Review current income, investments, and tax status." },
      { t: "Planning", d: "Design customized tax saving strategy." },
      { t: "Implementation", d: "Guide through execution of recommended actions." },
      { t: "Review", d: "Periodic review and strategy adjustment." }
    ],
    docs: ["Previous ITRs", "Investment Statements", "Salary Slips", "Business Financials", "Bank Statements"],
    pricingTimeline: [
      { label: "Assessment", value: "1-2 Days", desc: "Initial review." },
      { label: "Planning", value: "3-5 Days", desc: "Strategy report." }
    ],
    faqs: [
      { q: "Is tax consulting only for the rich?", a: "No, anyone paying taxes can benefit from professional tax planning to save money legally." },
      { q: "Can you help with previous year tax issues?", a: "Yes, we can review past filings and suggest corrections or revised return options." }
    ]
  },
  "tax-audit": {
    title: "Income Tax Audit",
    category: "Direct Tax",
    heroTitle: "Professional Tax Audit Services",
    description: "Comprehensive tax audit under Section 44AB for businesses and professionals exceeding prescribed turnover limits.",
    image: "/services_images/S_35_Income_Tax_Audit.png",
    stats: [
      { value: "SECTION", label: "44AB" },
      { value: "CA", label: "Certified" }
    ],
    definition: "A tax audit under Section 44AB is an examination of books of accounts by a Chartered Accountant to ensure compliance with Income Tax laws.",
    definitionLong: "Tax audits are mandatory for businesses with turnover exceeding Rs.1 crore or professionals with receipts over Rs.50 lakhs.",
    definitionQuote: "A thorough audit ensures your financial records are bulletproof.",
    benefitsRich: [
      { title: "Penalty Avoidance", desc: "Avoid penalties for non-compliance with Section 44AB." },
      { title: "Accurate Reporting", desc: "Ensure correct disclosure of income and deductions." },
      { title: "Loan Support", desc: "Audited books improve credibility with banks and lenders." },
      { title: "Error Detection", desc: "Identify and rectify accounting errors before filing." }
    ],
    benefits: ["No Penalty", "Accurate Books", "Loan Ready", "Error Free"],
    audienceDesc: "Tax audit is mandatory for businesses and professionals crossing specified turnover thresholds.",
    targetAudience: ["Businesses", "Professionals", "Partnership Firms", "LLPs", "Companies", "Traders", "Manufacturers"],
    included: [
      "Books of Accounts Review", "Form 3CD Preparation", "Audit Report",
      "Compliance Certificate", "Error Rectification", "ITR Filing Support"
    ],
    process: [
      { t: "Data Collection", d: "Gather all financial records and vouchers." },
      { t: "Verification", d: "Verify income, expenses, and deductions." },
      { t: "Audit", d: "Conduct detailed audit per Section 44AB." },
      { t: "Reporting", d: "Prepare Form 3CD and audit report." }
    ],
    docs: ["Books of Accounts", "Bank Statements", "Invoices", "GST Returns", "Previous Audit Reports"],
    pricingTimeline: [
      { label: "Review", value: "3-5 Days", desc: "Books analysis." },
      { label: "Audit Report", value: "5-10 Days", desc: "Form 3CD preparation." }
    ],
    faqs: [
      { q: "Who needs a tax audit?", a: "Businesses with turnover over Rs.1 crore and professionals with gross receipts over Rs.50 lakhs." },
      { q: "What is the due date for tax audit?", a: "Usually 30th September of the assessment year, subject to extensions." }
    ]
  },
  "tax-notice": {
    title: "Income Tax Notice Handling",
    category: "Direct Tax",
    heroTitle: "Expert Income Tax Notice Response",
    description: "Professional handling and response to Income Tax notices, scrutiny, and departmental communications.",
    image: "/services_images/S_36_Income_Tax_Notice_Handling.png",
    stats: [
      { value: "FAST", label: "Response" },
      { value: "EXPERT", label: "Defense" }
    ],
    definition: "Income Tax Notice Handling involves analyzing notices, preparing appropriate replies, and representing clients before tax authorities.",
    definitionLong: "Timely and accurate response to tax notices can prevent penalties, prosecution, and unnecessary litigation.",
    definitionQuote: "A prompt, well-prepared response is the best defense against tax notices.",
    benefitsRich: [
      { title: "Penalty Prevention", desc: "Avoid penalties by responding within the stipulated time." },
      { title: "Expert Analysis", desc: "Understand the exact issue raised by the department." },
      { title: "Proper Documentation", desc: "Submit the right evidence and explanations." },
      { title: "Representation", desc: "Professional representation before Assessing Officers." }
    ],
    benefits: ["No Penalty", "Expert Reply", "Proper Evidence", "AO Representation"],
    audienceDesc: "Notice handling is essential for anyone who has received an Income Tax department communication.",
    targetAudience: ["Individuals", "Businesses", "Professionals", "Companies", "Trusts", "NRIs", "Startups"],
    included: [
      "Notice Analysis", "Reply Drafting", "Document Compilation",
      "Online Response Filing", "AO Meeting Representation", "Follow-up Support"
    ],
    process: [
      { t: "Review", d: "Analyze the notice type and requirements." },
      { t: "Documentation", d: "Collect relevant documents and evidence." },
      { t: "Reply Preparation", d: "Draft a comprehensive, accurate response." },
      { t: "Submission", d: "Submit reply online or in person as required." }
    ],
    docs: ["Original Notice", "ITRs", "Bank Statements", "Investment Proofs", "Relevant Agreements"],
    pricingTimeline: [
      { label: "Analysis", value: "Same Day", desc: "Notice review." },
      { label: "Reply", value: "1-3 Days", desc: "Response preparation." }
    ],
    faqs: [
      { q: "What should I do if I receive an income tax notice?", a: "Do not panic. Read the notice carefully, note the deadline, and consult a tax expert immediately." },
      { q: "Can I ignore a tax notice?", a: "No, ignoring notices can lead to penalties, prosecution, and ex-parte assessments." }
    ]
  },
  "first-appeal": {
    title: "First Appeal Filing",
    category: "Direct Tax",
    heroTitle: "File Your First Appeal Before CIT(A)",
    description: "Expert representation and appeal filing before the Commissioner of Income Tax (Appeals) against unfavorable assessment orders.",
    image: "/services_images/S_37_First_Appeal_Filing.png",
    stats: [
      { value: "CIT(A)", label: "Forum" },
      { value: "EXPERT", label: "Representation" }
    ],
    definition: "A First Appeal is filed before the Commissioner of Income Tax (Appeals) against an order passed by the Assessing Officer under various sections of the Income Tax Act.",
    definitionLong: "Filing a well-drafted appeal with proper grounds and evidence is crucial to overturning an unfavorable assessment order.",
    definitionQuote: "Every taxpayer has the right to appeal; we ensure it is exercised effectively.",
    benefitsRich: [
      { title: "Expert Drafting", desc: "Appeal prepared by experienced tax professionals." },
      { title: "Strong Grounds", desc: "Comprehensive legal and factual arguments." },
      { title: "Hearing Representation", desc: "Professional appearance before CIT(A)." },
      { title: "Documentation", desc: "Proper compilation of evidence and case law." }
    ],
    benefits: ["Expert Drafting", "Hearing Support", "Strong Grounds", "Proper Evidence"],
    audienceDesc: "First appeals are for taxpayers who disagree with the assessment order passed by the Assessing Officer.",
    targetAudience: ["Assessed Taxpayers", "Businesses", "Professionals", "Companies", "Trusts", "NRIs"],
    included: [
      "Order Review", "Grounds of Appeal Drafting", "Form 35 Filing",
      "Evidence Compilation", "Hearing Representation", "Follow-up & Order Tracking"
    ],
    process: [
      { t: "Review", d: "Analyze the assessment order for appealable grounds." },
      { t: "Drafting", d: "Prepare detailed grounds of appeal." },
      { t: "Filing", d: "File Form 35 before CIT(A) within the time limit." },
      { t: "Representation", d: "Attend hearings and present arguments." }
    ],
    docs: ["Assessment Order", "ITRs", "Evidence Documents", "Legal Precedents", "Power of Attorney"],
    pricingTimeline: [
      { label: "Drafting", value: "3-5 Days", desc: "Appeal preparation." },
      { label: "Filing", value: "Same Day", desc: "Online submission." }
    ],
    faqs: [
      { q: "What is the time limit for filing a first appeal?", a: "Within 30 days from the date of service of the assessment order, extendable in certain cases." },
      { q: "Can I file an appeal myself?", a: "Yes, but professional representation significantly improves success rates." }
    ]
  },
  "second-appeal": {
    title: "Second Appeal Filing",
    category: "Direct Tax",
    heroTitle: "Appeal Before the Income Tax Appellate Tribunal",
    description: "File and argue second appeals before ITAT against orders of CIT(A) with expert legal representation.",
    image: "/services_images/S_38_Second_Appeal_Filing.png",
    stats: [
      { value: "ITAT", label: "Forum" },
      { value: "LEGAL", label: "Expertise" }
    ],
    definition: "A Second Appeal is filed before the Income Tax Appellate Tribunal (ITAT) against the order of the Commissioner of Income Tax (Appeals).",
    definitionLong: "ITAT is the final fact-finding authority. A well-prepared appeal with strong legal arguments is essential for success at this stage.",
    definitionQuote: "The ITAT is where facts meet law; we bring both together for you.",
    benefitsRich: [
      { title: "Legal Expertise", desc: "Appeals drafted by experienced tax advocates." },
      { title: "Memorandum Preparation", desc: "Detailed statement of facts and legal grounds." },
      { title: "Hearing Representation", desc: "Skilled advocacy before the Tribunal." },
      { title: "Stay Application", desc: "Application for stay of demand during appeal." }
    ],
    benefits: ["Legal Expertise", "ITAT Ready", "Stay Support", "Strong Arguments"],
    audienceDesc: "Second appeals are for taxpayers aggrieved by the order of CIT(A) and seeking relief from the ITAT.",
    targetAudience: ["Aggrieved Taxpayers", "Businesses", "Companies", "HNIs", "Trusts", "NRIs"],
    included: [
      "CIT(A) Order Analysis", "Memorandum of Appeal", "Form 36 Filing",
      "Paper Book Preparation", "Hearing Representation", "Stay Application Filing"
    ],
    process: [
      { t: "Analysis", d: "Review CIT(A) order for appealable issues." },
      { t: "Drafting", d: "Prepare memorandum of appeal with facts and law." },
      { t: "Filing", d: "File Form 36 before ITAT within 60 days." },
      { t: "Hearings", d: "Attend hearings and present arguments." }
    ],
    docs: ["CIT(A) Order", "Assessment Order", "Grounds of Appeal", "Evidence", "Legal Precedents"],
    pricingTimeline: [
      { label: "Drafting", value: "5-10 Days", desc: "Memorandum preparation." },
      { label: "Filing", value: "Same Day", desc: "ITAT submission." }
    ],
    faqs: [
      { q: "What is the time limit for ITAT appeal?", a: "60 days from the date of receipt of CIT(A) order, extendable by 15 days on sufficient cause." },
      { q: "Can ITAT orders be appealed further?", a: "Yes, to the High Court on substantial questions of law, and then to the Supreme Court." }
    ]
  },
  "search-survey": {
    title: "Search, Survey, Seizure",
    category: "Direct Tax",
    heroTitle: "Defense During Tax Raids & Surveys",
    description: "Immediate legal assistance and representation during Income Tax searches, surveys, and seizures.",
    image: "/services_images/S_39_Search_Survey_Seizure.png",
    stats: [
      { value: "24/7", label: "Support" },
      { value: "URGENT", label: "Response" }
    ],
    definition: "Search and Survey actions by the Income Tax Department involve inspection of premises, seizure of documents/assets, and recording of statements.",
    definitionLong: "Professional assistance during these critical moments can protect your rights, prevent undue harassment, and ensure proper procedures are followed.",
    definitionQuote: "Your rights during a raid matter; we ensure they are protected.",
    benefitsRich: [
      { title: "Immediate Response", desc: "24/7 legal support during search operations." },
      { title: "Rights Protection", desc: "Ensure lawful procedures are followed by officials." },
      { title: "Statement Guidance", desc: "Proper guidance during recorded statements." },
      { title: "Post-Action Support", desc: "Handling seized assets and follow-up assessments." }
    ],
    benefits: ["24/7 Support", "Rights Protected", "Statement Help", "Post-Raid Aid"],
    audienceDesc: "Search and survey support is critical for anyone facing or anticipating departmental action.",
    targetAudience: ["Businesses", "Professionals", "Companies", "Traders", "Manufacturers", "Real Estate Developers", "Jewelers"],
    included: [
      "Immediate On-Call Support", "Legal Representation During Search", "Statement Guidance",
      "Seizure Documentation", "Post-Search Compliance", "Assessment Defense"
    ],
    process: [
      { t: "Alert", d: "Immediate deployment of legal team upon intimation." },
      { t: "Presence", d: "Physical or virtual presence during proceedings." },
      { t: "Documentation", d: "Proper recording of all seized items and statements." },
      { t: "Follow-up", d: "Post-search assessment and legal defense." }
    ],
    docs: ["Business Records", "Property Documents", "Bank Statements", "Investment Records", "Previous ITRs"],
    pricingTimeline: [
      { label: "Immediate", value: "1 Hour", desc: "On-call response." },
      { label: "On-Site", value: "2-4 Hours", desc: "Physical presence." }
    ],
    faqs: [
      { q: "What should I do during a tax raid?", a: "Remain calm, call your lawyer immediately, and cooperate while protecting your legal rights." },
      { q: "Can I refuse entry to tax officials?", a: "No, refusal can lead to forced entry and additional penalties. Always seek legal help immediately." }
    ]
  },
  "tax-litigation": {
    title: "Other Income Tax Litigation",
    category: "Direct Tax",
    heroTitle: "Comprehensive Tax Litigation Support",
    description: "End-to-end legal representation for all types of Income Tax litigation, from assessment to appellate stages.",
    image: "/services_images/S_40_Other_Income_Tax_Litigation_GST.png",
    stats: [
      { value: "FULL", label: "Spectrum" },
      { value: "LEGAL", label: "Expertise" }
    ],
    definition: "Income Tax Litigation encompasses all disputes, appeals, and legal proceedings arising under the Income Tax Act.",
    definitionLong: "From assessment proceedings to appeals before ITAT, High Court, and Supreme Court, we provide comprehensive litigation support.",
    definitionQuote: "From assessment to apex court, we stand by your side.",
    benefitsRich: [
      { title: "Full Spectrum", desc: "Handling all stages from assessment to Supreme Court." },
      { title: "Expert Team", desc: "Experienced tax lawyers and chartered accountants." },
      { title: "Strategy", desc: "Customized litigation strategy for each case." },
      { title: "Settlement", desc: "Exploring mutual agreement and settlement options." }
    ],
    benefits: ["Complete Coverage", "Expert Team", "Tailored Strategy", "Settlement Options"],
    audienceDesc: "Tax litigation support is for anyone facing disputes, assessments, or appeals under the Income Tax Act.",
    targetAudience: ["Assessees", "Businesses", "Companies", "Trusts", "HNIs", "NRIs", "Startups"],
    included: [
      "Case Analysis", "Legal Opinion", "Representation", "Drafting",
      "Hearings", "Settlement Negotiation", "High Court & Supreme Court Appeals"
    ],
    process: [
      { t: "Consultation", d: "Understand the dispute and assess legal position." },
      { t: "Strategy", d: "Develop a comprehensive litigation roadmap." },
      { t: "Execution", d: "Drafting, filing, and representation." },
      { t: "Resolution", d: "Pursue favorable orders or settlement." }
    ],
    docs: ["Relevant Orders", "ITRs", "Financial Records", "Agreements", "Correspondence"],
    pricingTimeline: [
      { label: "Consultation", value: "Same Day", desc: "Initial case review." },
      { label: "Strategy", value: "3-5 Days", desc: "Litigation roadmap." }
    ],
    faqs: [
      { q: "What types of tax litigation do you handle?", a: "Assessment, reassessment, penalty, prosecution, appeals before CIT(A), ITAT, High Court, and Supreme Court." },
      { q: "Can tax disputes be settled without litigation?", a: "Yes, through the Vivad se Vishwas scheme or mutual agreement with the department." }
    ]
  },

  // --- GST ---
  "gst-registration": {
    title: "GST Registration",
    category: "Indirect Tax",
    heroTitle: "Get Your Business GST Registered",
    description: "Complete GST registration for businesses, e-commerce operators, and service providers with end-to-end support.",
    image: "/services_images/S_41_GST_Registration.png",
    stats: [
      { value: "3-7 DAYS", label: "Approval" },
      { value: "ALL STATES", label: "Coverage" }
    ],
    definition: "GST Registration is mandatory for businesses with turnover exceeding prescribed limits or those engaged in inter-state supply of goods and services.",
    definitionLong: "A GSTIN enables businesses to collect tax from customers, claim input tax credit, and comply with India's unified indirect tax regime.",
    definitionQuote: "One nation, one tax, one registration.",
    benefitsRich: [
      { title: "ITC Benefits", desc: "Claim input tax credit on business purchases and expenses." },
      { title: "Legal Recognition", desc: "Operate as a registered supplier under GST law." },
      { title: "Inter-state Trade", desc: "Sell goods and services across India without restrictions." },
      { title: "E-commerce Ready", desc: "Mandatory for selling on platforms like Amazon and Flipkart." }
    ],
    benefits: ["ITC Claims", "Inter-state Sales", "Legal Standing", "E-commerce Ready"],
    audienceDesc: "GST registration is essential for all businesses meeting the turnover threshold or engaged in interstate supply.",
    targetAudience: ["Traders", "Manufacturers", "Service Providers", "E-commerce Sellers", "Exporters", "Restaurants", "Consultants", "Startups"],
    included: [
      "Eligibility Check", "Document Preparation", "Application Filing",
      "Query Response", "GSTIN Allotment", "Compliance Calendar Setup"
    ],
    process: [
      { t: "Eligibility", d: "Check turnover and business type for GST applicability." },
      { t: "Documents", d: "Collect PAN, address proof, and bank details." },
      { t: "Filing", d: "Submit GST REG-01 application online." },
      { t: "Verification", d: "Respond to departmental queries if any." }
    ],
    docs: ["PAN Card", "Aadhaar", "Business Address Proof", "Bank Statement", "Photo", "Rent Agreement"],
    pricingTimeline: [
      { label: "Application", value: "1 Day", desc: "Online submission." },
      { label: "Approval", value: "3-7 Days", desc: "Government processing." }
    ],
    faqs: [
      { q: "What is the GST turnover limit?", a: "Rs.40 lakhs for goods and Rs.20 lakhs for services (Rs.10 lakhs for special category states)." },
      { q: "Is GST registration free?", a: "Yes, government registration is free. Professional assistance may involve service fees." }
    ]
  },
  "gst-amendment": {
    title: "GST Amendment",
    category: "Indirect Tax",
    heroTitle: "Update Your GST Registration Details",
    description: "Amend core and non-core fields in your GST registration including address, business name, and authorized signatory.",
    image: "/services_images/S_42_GST_Amendment.png",
    stats: [
      { value: "QUICK", label: "Update" },
      { value: "COMPLIANT", label: "Records" }
    ],
    definition: "GST Amendment allows registered taxpayers to update their registration details when there are changes in business structure, address, or authorized persons.",
    definitionLong: "Keeping GST records updated is mandatory and prevents mismatches during return filing and audits.",
    definitionQuote: "An updated registration is the foundation of GST compliance.",
    benefitsRich: [
      { title: "Accurate Records", desc: "Ensure GST portal reflects current business details." },
      { title: "Penalty Prevention", desc: "Avoid penalties for incorrect or outdated information." },
      { title: "Smooth Filing", desc: "Prevent mismatches during monthly and annual return filing." },
      { title: "Quick Process", desc: "Fast online amendment with expert guidance." }
    ],
    benefits: ["Updated Records", "No Penalties", "Smooth Filing", "Fast Process"],
    audienceDesc: "GST amendment is required whenever there are changes to your registered business details.",
    targetAudience: ["Businesses", "Companies", "LLPs", "Partnerships", "Proprietors", "Trusts"],
    included: [
      "Change Analysis", "Form Preparation", "Online Filing",
      "Document Upload", "Query Response", "Updated Certificate"
    ],
    process: [
      { t: "Assessment", d: "Identify fields requiring amendment." },
      { t: "Documents", d: "Collect proof for the changes." },
      { t: "Filing", d: "Submit amendment application on GST portal." },
      { t: "Approval", d: "Track and obtain updated registration certificate." }
    ],
    docs: ["GST Certificate", "PAN", "Address Proof", "Board Resolution (for companies)", "NOC"],
    pricingTimeline: [
      { label: "Non-core", value: "1-3 Days", desc: "Immediate effect." },
      { label: "Core Fields", value: "15-20 Days", desc: "Government approval." }
    ],
    faqs: [
      { q: "What are core fields in GST?", a: "Business name, principal place of business, and additional place of business require approval for changes." },
      { q: "Can I change my GST email/mobile myself?", a: "Yes, email and mobile can be updated through OTP verification without approval." }
    ]
  },
  "gst-return-filing": {
    title: "GST Return Filing",
    category: "Indirect Tax",
    heroTitle: "Timely & Accurate GST Return Filing",
    description: "Monthly, quarterly, and annual GST return filing with reconciliation and compliance monitoring.",
    image: "/services_images/S_43_GST_Return_Filing.png",
    stats: [
      { value: "ZERO", label: "Late Fees" },
      { value: "ACCURATE", label: "Reconciliation" }
    ],
    definition: "GST Return Filing is the periodic submission of details of outward supplies, inward supplies, and tax paid to the government.",
    definitionLong: "Regular and accurate filing of GSTR-1 and GSTR-3B ensures compliance, enables ITC claims, and prevents penalties.",
    definitionQuote: "File right, file on time, stay compliant.",
    benefitsRich: [
      { title: "Penalty Avoidance", desc: "Avoid late fees and interest on delayed filings." },
      { title: "ITC Protection", desc: "Ensure no input tax credit is lost due to non-filing." },
      { title: "Reconciliation", desc: "Match sales and purchase data for accuracy." },
      { title: "Compliance Score", desc: "Maintain a high GST compliance rating." }
    ],
    benefits: ["No Penalties", "ITC Safe", "Reconciled", "High Rating"],
    audienceDesc: "GST return filing is mandatory for all registered taxpayers under the GST regime.",
    targetAudience: ["Registered Dealers", "E-commerce Operators", "Composition Dealers", "Input Service Distributors", "TDS Deductors"],
    included: [
      "Data Compilation", "GSTR-1 Filing", "GSTR-3B Filing",
      "Reconciliation", "Payment Challan", "Correction Support"
    ],
    process: [
      { t: "Data Collection", d: "Gather sales and purchase invoices." },
      { t: "Reconciliation", d: "Match GSTR-2B with purchase records." },
      { t: "Filing", d: "File GSTR-1 and GSTR-3B on GST portal." },
      { t: "Payment", d: "Pay tax liability via challan." }
    ],
    docs: ["Sales Invoices", "Purchase Invoices", "Bank Statements", "Previous Returns", "GST Portal Credentials"],
    pricingTimeline: [
      { label: "Monthly Filing", value: "1-2 Days", desc: "Per return period." },
      { label: "Annual Filing", value: "3-5 Days", desc: "GSTR-9 preparation." }
    ],
    faqs: [
      { q: "What is the due date for GSTR-3B?", a: "20th of the next month for monthly filers; 24th/31st for QRMP scheme." },
      { q: "What happens if I miss filing?", a: "Late fee of Rs.50/day (Rs.20 for nil return) plus interest at 18% per annum." }
    ]
  },
  "gst-annual-return": {
    title: "GST Annual Return",
    category: "Indirect Tax",
    heroTitle: "File Your GST Annual Return (GSTR-9)",
    description: "Comprehensive annual return filing with reconciliation statement and expert review for full-year compliance.",
    image: "/services_images/S_44_GST_Annual_Return.png",
    stats: [
      { value: "YEARLY", label: "Compliance" },
      { value: "RECONCILED", label: "Data" }
    ],
    definition: "GSTR-9 is an annual return to be filed by regular taxpayers, summarizing all outward supplies, inward supplies, and tax paid during the financial year.",
    definitionLong: "Proper filing of the annual return ensures year-end compliance and reconciliation of monthly/quarterly returns.",
    definitionQuote: "A year-end reconciliation that brings peace of mind.",
    benefitsRich: [
      { title: "Compliance Closure", desc: "Complete annual compliance requirement under GST." },
      { title: "Data Reconciliation", desc: "Match annual data with monthly returns for accuracy." },
      { title: "Penalty Avoidance", desc: "Avoid late fees for non-filing of annual return." },
      { title: "Audit Ready", desc: "Keep records organized for departmental audits." }
    ],
    benefits: ["Yearly Closure", "Reconciled", "No Penalty", "Audit Ready"],
    audienceDesc: "Annual return filing is mandatory for all regular taxpayers with turnover above specified limits.",
    targetAudience: ["Regular Taxpayers", "Companies", "LLPs", "Partnership Firms", "Large Businesses"],
    included: [
      "Full-year Data Compilation", "GSTR-9 Preparation", "Reconciliation Statement",
      "Error Correction", "Online Filing", "Acknowledgment Download"
    ],
    process: [
      { t: "Compilation", d: "Collect data from all monthly/quarterly returns." },
      { t: "Reconciliation", d: "Match sales, purchases, and tax paid." },
      { t: "Preparation", d: "Prepare GSTR-9 with accurate figures." },
      { t: "Filing", d: "Submit annual return on GST portal." }
    ],
    docs: ["All GSTR-1/3B", "Audited Financials", "Sales Register", "Purchase Register", "Tax Payment Challans"],
    pricingTimeline: [
      { label: "Preparation", value: "3-5 Days", desc: "Data compilation." },
      { label: "Filing", value: "1 Day", desc: "Online submission." }
    ],
    faqs: [
      { q: "Who needs to file GSTR-9?", a: "All regular taxpayers except those under composition scheme and certain exempt categories." },
      { q: "What is the due date for annual return?", a: "31st December following the end of the financial year, subject to extensions." }
    ]
  },
  "gst-lut-form": {
    title: "GST LUT Form",
    category: "Indirect Tax",
    heroTitle: "File Letter of Undertaking for Exports",
    description: "Submit LUT/Bond to export goods and services without payment of integrated tax.",
    image: "/services_images/import_export.png",
    stats: [
      { value: "TAX FREE", label: "Exports" },
      { value: "ANNUAL", label: "Validity" }
    ],
    definition: "A Letter of Undertaking (LUT) allows registered exporters to export goods or services without paying IGST and claim refund of input tax credit.",
    definitionLong: "Filing LUT on the GST portal is mandatory for exporters who wish to supply without payment of integrated tax.",
    definitionQuote: "Export tax-free with a simple undertaking.",
    benefitsRich: [
      { title: "Zero IGST", desc: "Export without payment of integrated tax." },
      { title: "Working Capital", desc: "No blocking of funds on export supplies." },
      { title: "Annual Filing", desc: "File once per financial year for all exports." },
      { title: "Refund Alternative", desc: "Avoid the refund process by using LUT." }
    ],
    benefits: ["No IGST", "Cash Flow", "Annual Filing", "Easy Process"],
    audienceDesc: "LUT filing is essential for exporters supplying goods or services outside India.",
    targetAudience: ["Exporters", "SEZ Suppliers", "EOU Units", "Export Houses", "Merchant Exporters", "Service Exporters"],
    included: [
      "Eligibility Check", "RFD-11 Form Preparation", "Online Filing",
      "Document Upload", "Acknowledgment", "Renewal Reminder"
    ],
    process: [
      { t: "Check", d: "Verify exporter eligibility for LUT." },
      { t: "Prepare", d: "Fill RFD-11 with export details." },
      { t: "Upload", d: "Submit LUT on GST portal with signatures." },
      { t: "Track", d: "Download acceptance acknowledgment." }
    ],
    docs: ["GST Certificate", "PAN", "IEC", "Export Order/Invoice", "Bank Details"],
    pricingTimeline: [
      { label: "Preparation", value: "1 Day", desc: "Form completion." },
      { label: "Filing", value: "Same Day", desc: "Portal submission." }
    ],
    faqs: [
      { q: "Can I file LUT every year?", a: "Yes, LUT must be filed for each financial year before the first export of that year." },
      { q: "What if LUT is rejected?", a: "You may need to export on payment of IGST or furnish a bond with bank guarantee." }
    ]
  },
  "gst-revocation": {
    title: "GST Revocation",
    category: "Indirect Tax",
    heroTitle: "Revoke Your Cancelled GST Registration",
    description: "Restore your GST registration after suo moto cancellation with expert revocation filing and compliance support.",
    image: "/services_images/S_46_GST_Revocation.png",
    stats: [
      { value: "REINSTATE", label: "Registration" },
      { value: "30 DAYS", label: "Window" }
    ],
    definition: "GST Revocation is the process of restoring a registration that was cancelled by the tax officer or voluntarily surrendered by the taxpayer.",
    definitionLong: "Timely filing of revocation application is crucial to resume business operations and avoid compliance gaps.",
    definitionQuote: "Don't let cancellation stop your business; revoke and resume.",
    benefitsRich: [
      { title: "Business Continuity", desc: "Resume GST-compliant operations without disruption." },
      { title: "ITC Recovery", desc: "Reclaim eligible input tax credit blocked due to cancellation." },
      { title: "Penalty Avoidance", desc: "Avoid penalties for operating without valid registration." },
      { title: "Compliance Restoration", desc: "Regain access to GST portal for filings." }
    ],
    benefits: ["Resume Operations", "Recover ITC", "No Penalties", "Portal Access"],
    audienceDesc: "Revocation is for taxpayers whose GST registration has been cancelled by the department or voluntarily surrendered.",
    targetAudience: ["Cancelled Taxpayers", "Businesses", "Surrendered Registrants", "Dealers", "Service Providers"],
    included: [
      "Cancellation Review", "Cause Analysis", "Revocation Application",
      "Compliance Rectification", "Query Response", "Reinstatement Tracking"
    ],
    process: [
      { t: "Review", d: "Analyze cancellation order and reasons." },
      { t: "Rectification", d: "Address compliance gaps and pending returns." },
      { t: "Application", d: "File GST REG-21 for revocation within 30 days." },
      { t: "Follow-up", d: "Track and obtain revocation order." }
    ],
    docs: ["Cancellation Order", "GST Certificate", "Pending Returns", "Compliance Proof", "Bank Details"],
    pricingTimeline: [
      { label: "Review", value: "Same Day", desc: "Case analysis." },
      { label: "Filing", value: "1-2 Days", desc: "Application submission." }
    ],
    faqs: [
      { q: "What is the time limit for revocation?", a: "Within 30 days from the date of service of cancellation order." },
      { q: "Can I revoke after 30 days?", a: "After 30 days, you may need to apply for fresh registration instead of revocation." }
    ]
  },
  "gst-consulting": {
    title: "GST Consulting Services",
    category: "Indirect Tax",
    heroTitle: "Strategic GST Advisory & Consulting",
    description: "Expert GST consulting for tax optimization, compliance structuring, and business transaction planning.",
    image: "/services_images/S_47_GST_Consulting_Services.png",
    stats: [
      { value: "STRATEGIC", label: "Advice" },
      { value: "OPTIMIZED", label: "Structure" }
    ],
    definition: "GST Consulting involves strategic advice on indirect tax planning, compliance framework design, and transaction structuring to optimize tax outcomes.",
    definitionLong: "Our consultants help businesses navigate complex GST scenarios, from supply chain restructuring to valuation and classification issues.",
    definitionQuote: "Strategic GST planning saves money and prevents disputes.",
    benefitsRich: [
      { title: "Tax Optimization", desc: "Structure transactions to minimize GST liability legally." },
      { title: "Compliance Framework", desc: "Design robust processes for GST adherence." },
      { title: "Risk Mitigation", desc: "Identify and address potential GST disputes proactively." },
      { title: "Business Efficiency", desc: "Align GST strategy with business operations." }
    ],
    benefits: ["Tax Savings", "Strong Compliance", "Risk Reduction", "Efficiency"],
    audienceDesc: "GST consulting is valuable for businesses of all sizes seeking to optimize their indirect tax position.",
    targetAudience: ["Manufacturers", "Traders", "Service Providers", "E-commerce", "Startups", "MNCs", "Real Estate", "Healthcare"],
    included: [
      "GST Health Check", "Compliance Review", "Transaction Structuring",
      "Classification Opinion", "Rate Analysis", "Advisory Report"
    ],
    process: [
      { t: "Discovery", d: "Understand business model and transactions." },
      { t: "Analysis", d: "Review current GST position and identify gaps." },
      { t: "Planning", d: "Develop customized GST strategy." },
      { t: "Implementation", d: "Guide execution of recommended changes." }
    ],
    docs: ["GST Returns", "Invoices", "Agreements", "Business Plan", "Financials"],
    pricingTimeline: [
      { label: "Health Check", value: "3-5 Days", desc: "Compliance review." },
      { label: "Strategy Report", value: "7-10 Days", desc: "Comprehensive advisory." }
    ],
    faqs: [
      { q: "Do small businesses need GST consulting?", a: "Yes, even small businesses can benefit from proper GST structuring to avoid penalties and optimize costs." },
      { q: "Can you help with GST for new business models?", a: "Absolutely, we specialize in advising on GST for emerging and complex business models." }
    ]
  },
  "gst-notice-handling": {
    title: "GST Notice Handling",
    category: "Indirect Tax",
    heroTitle: "Expert Response to GST Department Notices",
    description: "Professional handling and response to GST notices, scrutiny assessments, and department communications.",
    image: "/services_images/S_48_GST_Notice_Handling.png",
    stats: [
      { value: "FAST", label: "Response" },
      { value: "EXPERT", label: "Defense" }
    ],
    definition: "GST Notice Handling involves analyzing show cause notices, differential tax demands, and other department communications to prepare appropriate replies.",
    definitionLong: "Timely and accurate responses to GST notices can prevent penalties, interest, and adverse assessment orders.",
    definitionQuote: "A well-prepared reply is the best defense against GST demands.",
    benefitsRich: [
      { title: "Penalty Prevention", desc: "Avoid penalties by responding within the stipulated time." },
      { title: "Demand Reduction", desc: "Minimize or eliminate tax demands through proper explanation." },
      { title: "Expert Analysis", desc: "Understand the exact issue raised by the department." },
      { title: "Documentation", desc: "Submit the right evidence and reconciliations." }
    ],
    benefits: ["No Penalty", "Reduced Demand", "Expert Reply", "Proper Evidence"],
    audienceDesc: "Notice handling is essential for all GST registrants receiving department communications.",
    targetAudience: ["Registered Dealers", "Businesses", "Companies", "E-commerce Operators", "Input Service Distributors"],
    included: [
      "Notice Analysis", "Reply Drafting", "Reconciliation Support",
      "Hearing Representation", "Follow-up", "Compliance Rectification"
    ],
    process: [
      { t: "Review", d: "Analyze notice type and requirements." },
      { t: "Data", d: "Compile relevant returns, invoices, and records." },
      { t: "Reply", d: "Draft comprehensive response with evidence." },
      { t: "Submission", d: "File reply online or attend hearing." }
    ],
    docs: ["Original Notice", "GST Returns", "Invoices", "Bank Statements", "Reconciliation Sheets"],
    pricingTimeline: [
      { label: "Analysis", value: "Same Day", desc: "Notice review." },
      { label: "Reply", value: "2-4 Days", desc: "Response preparation." }
    ],
    faqs: [
      { q: "What should I do on receiving a GST notice?", a: "Read carefully, note the deadline, gather documents, and consult a GST expert immediately." },
      { q: "Can I ignore a GST notice?", a: "No, ignoring notices can lead to adverse orders, penalties, and even prosecution." }
    ]
  },
  "gst-appeal": {
    title: "GST Appeal",
    category: "Indirect Tax",
    heroTitle: "File Appeals Before GST Appellate Authority",
    description: "Expert filing and representation for GST appeals before the Appellate Authority and GST Tribunal.",
    image: "/services_images/S_49_GST_Appeal.png",
    stats: [
      { value: "APPEALS", label: "Expertise" },
      { value: "LEGAL", label: "Representation" }
    ],
    definition: "GST Appeal allows taxpayers to challenge adverse orders passed by GST officers before the Appellate Authority and Tribunal.",
    definitionLong: "Filing a well-drafted appeal with proper grounds and evidence is essential to overturn unfavorable GST orders.",
    definitionQuote: "Every GST decision can be challenged; we ensure it is done right.",
    benefitsRich: [
      { title: "Expert Drafting", desc: "Appeals prepared by experienced GST advocates." },
      { title: "Hearing Representation", desc: "Professional appearance before appellate authorities." },
      { title: "Stay Application", desc: "Apply for stay of demand during appeal." },
      { title: "Reversal Support", desc: "Maximize chances of favorable orders." }
    ],
    benefits: ["Expert Drafting", "Hearing Support", "Stay Application", "Favorable Orders"],
    audienceDesc: "GST appeals are for taxpayers aggrieved by adverse orders from GST officers.",
    targetAudience: ["Aggrieved Taxpayers", "Businesses", "Companies", "Dealers", "E-commerce Operators"],
    included: [
      "Order Analysis", "Grounds Drafting", "Appeal Filing",
      "Evidence Compilation", "Hearing Representation", "Follow-up"
    ],
    process: [
      { t: "Review", d: "Analyze the adverse order for appealable issues." },
      { t: "Drafting", d: "Prepare appeal with grounds and evidence." },
      { t: "Filing", d: "Submit appeal before Appellate Authority within 3 months." },
      { t: "Representation", d: "Attend hearings and present arguments." }
    ],
    docs: ["Adverse Order", "GST Returns", "Invoices", "Evidence", "Power of Attorney"],
    pricingTimeline: [
      { label: "Drafting", value: "3-5 Days", desc: "Appeal preparation." },
      { label: "Filing", value: "Same Day", desc: "Online submission." }
    ],
    faqs: [
      { q: "What is the time limit for GST appeal?", a: "Within 3 months from the date of communication of order, extendable by 1 month for sufficient cause." },
      { q: "Can I get a stay of demand during appeal?", a: "Yes, a stay can be sought from the Appellate Authority or Tribunal pending disposal of appeal." }
    ]
  },

  // --- Auditing ---
  "income-tax-audit": {
    title: "Income Tax Audit",
    category: "Audit",
    heroTitle: "Section 44AB Tax Audit Services",
    description: "Professional tax audit for businesses and professionals as mandated under Section 44AB of the Income Tax Act.",
    image: "/services_images/S_51_Income_Tax_Audit.png",
    stats: [
      { value: "SECTION", label: "44AB" },
      { value: "CA", label: "Conducted" }
    ],
    definition: "Tax Audit under Section 44AB requires a Chartered Accountant to examine and report on the books of accounts of specified taxpayers.",
    definitionLong: "Tax audits ensure proper maintenance of books, verification of claims, and compliance with Income Tax laws, reducing the chances of scrutiny.",
    definitionQuote: "An audit today prevents a notice tomorrow.",
    benefitsRich: [
      { title: "Compliance", desc: "Meet mandatory audit requirements under the Income Tax Act." },
      { title: "Accuracy", desc: "Ensure correct reporting of income and deductions." },
      { title: "Scrutiny Reduction", desc: "Reduce chances of departmental scrutiny." },
      { title: "Loan Support", desc: "Audited financials strengthen loan applications." }
    ],
    benefits: ["Compliant", "Accurate", "Notice Free", "Loan Ready"],
    audienceDesc: "Tax audit is mandatory for businesses and professionals exceeding prescribed turnover/receipt thresholds.",
    targetAudience: ["Business Owners", "Professionals", "Companies", "Partnership Firms", "LLPs"],
    included: [
      "Books Verification", "Form 3CD Preparation", "Audit Report",
      "Compliance Certificate", "ITR Filing Support", "Advisory"
    ],
    process: [
      { t: "Data Collection", d: "Gather books of accounts and financial records." },
      { t: "Examination", d: "CA examines income, expenses, and deductions." },
      { t: "Reporting", d: "Prepare tax audit report in Form 3CD." },
      { t: "Filing", d: "Submit report with Income Tax Department." }
    ],
    docs: ["Books of Accounts", "Bank Statements", "Invoices", "GST Returns", "Previous ITRs"],
    pricingTimeline: [
      { label: "Audit", value: "5-10 Days", desc: "Examination period." },
      { label: "Reporting", value: "2-3 Days", desc: "Form 3CD preparation." }
    ],
    faqs: [
      { q: "Who is required to get a tax audit?", a: "Businesses with turnover over Rs.1 crore and professionals with receipts over Rs.50 lakhs in a financial year." },
      { q: "What is the due date for tax audit?", a: "30th September of the assessment year, subject to government extensions." }
    ]
  },
  "company-audit": {
    title: "Company Audit",
    category: "Audit",
    heroTitle: "Statutory Audit for Companies",
    description: "Comprehensive statutory audit under the Companies Act for private limited, public limited, and Section 8 companies.",
    image: "/services_images/company.png",
    stats: [
      { value: "COMPANIES ACT", label: "Compliant" },
      { value: "STATUTORY", label: "Audit" }
    ],
    definition: "Company Audit is an independent examination of a company's financial statements as required under the Companies Act, 2013.",
    definitionLong: "Statutory audits provide assurance to shareholders, regulators, and stakeholders that financial statements present a true and fair view.",
    definitionQuote: "A true and fair view is the cornerstone of corporate transparency.",
    benefitsRich: [
      { title: "Regulatory Compliance", desc: "Meet mandatory audit requirements under the Companies Act." },
      { title: "Investor Confidence", desc: "Enhance credibility with investors and lenders." },
      { title: "Fraud Detection", desc: "Identify irregularities and potential fraud." },
      { title: "Process Improvement", desc: "Recommend improvements in internal controls." }
    ],
    benefits: ["Compliant", "Credible", "Fraud Safe", "Improved Controls"],
    audienceDesc: "Statutory audit is mandatory for all companies registered under the Companies Act, 2013.",
    targetAudience: ["Private Limited Companies", "Public Companies", "Section 8 Companies", "OPCs", "Listed Companies"],
    included: [
      "Financial Statement Audit", "Internal Control Review", "Audit Report",
      "Board Report Certification", "AGM Support", "Compliance Advisory"
    ],
    process: [
      { t: "Planning", d: "Understand business and assess audit risks." },
      { t: "Execution", d: "Test transactions, balances, and disclosures." },
      { t: "Review", d: "Evaluate findings and management representations." },
      { t: "Reporting", d: "Issue statutory audit report." }
    ],
    docs: ["Books of Accounts", "Bank Statements", "Invoices", "Contracts", "Previous Audit Reports"],
    pricingTimeline: [
      { label: "Planning", value: "2-3 Days", desc: "Risk assessment." },
      { label: "Audit", value: "10-20 Days", desc: "Field work." }
    ],
    faqs: [
      { q: "Is statutory audit mandatory for all companies?", a: "Yes, every company must get its accounts audited by a practicing Chartered Accountant." },
      { q: "What is the due date for company audit?", a: "Before the Annual General Meeting, typically within 6 months from the close of the financial year." }
    ]
  },
  "llp-audit": {
    title: "LLP Audit",
    category: "Audit",
    heroTitle: "LLP Statutory Audit Services",
    description: "Professional audit for Limited Liability Partnerships as required under the LLP Act, 2008.",
    image: "/services_images/LLP.png",
    stats: [
      { value: "LLP ACT", label: "2008" },
      { value: "COMPLIANT", label: "Audit" }
    ],
    definition: "LLP Audit is the examination of financial statements of a Limited Liability Partnership to ensure compliance with the LLP Act and accounting standards.",
    definitionLong: "Audits are mandatory for LLPs with turnover exceeding Rs.40 lakhs or contribution exceeding Rs.25 lakhs.",
    definitionQuote: "An audited LLP is a trusted LLP.",
    benefitsRich: [
      { title: "Compliance", desc: "Meet statutory audit requirements under the LLP Act." },
      { title: "Partner Confidence", desc: "Assure partners of financial accuracy." },
      { title: "Loan Eligibility", desc: "Strengthen loan and credit applications." },
      { title: "Transparency", desc: "Promote transparent financial reporting." }
    ],
    benefits: ["Compliant", "Trusted", "Loan Ready", "Transparent"],
    audienceDesc: "LLP audit is mandatory for LLPs exceeding prescribed turnover or contribution limits.",
    targetAudience: ["LLPs", "Designated Partners", "Investors", "Lenders"],
    included: [
      "Financial Statement Audit", "Contribution Verification", "Audit Report",
      "Form 11 Support", "Compliance Certificate", "Advisory"
    ],
    process: [
      { t: "Review", d: "Examine books and contribution records." },
      { t: "Verification", d: "Verify income, expenses, and partner accounts." },
      { t: "Audit", d: "Conduct statutory audit per LLP Act." },
      { t: "Report", d: "Issue audit report and compliance certificate." }
    ],
    docs: ["Books of Accounts", "Bank Statements", "Partner Agreements", "GST Returns", "Contribution Records"],
    pricingTimeline: [
      { label: "Audit", value: "5-10 Days", desc: "Examination." },
      { label: "Report", value: "2-3 Days", desc: "Preparation." }
    ],
    faqs: [
      { q: "Which LLPs require an audit?", a: "LLPs with turnover over Rs.40 lakhs or contribution over Rs.25 lakhs in a financial year." },
      { q: "Who can audit an LLP?", a: "Only a practicing Chartered Accountant can conduct an LLP statutory audit." }
    ]
  },
  "internal-audit": {
    title: "Internal Audit",
    category: "Audit",
    heroTitle: "Comprehensive Internal Audit Services",
    description: "Independent internal audits to evaluate internal controls, risk management, and operational efficiency.",
    image: "/services_images/company.png",
    stats: [
      { value: "RISK", label: "Focused" },
      { value: "CONTROLS", label: "Enhanced" }
    ],
    definition: "Internal Audit is an independent, objective assurance and consulting activity designed to add value and improve an organization's operations.",
    definitionLong: "Internal audits assess the effectiveness of risk management, control, and governance processes to help organizations achieve objectives.",
    definitionQuote: "Internal audit is the eyes and ears of management.",
    benefitsRich: [
      { title: "Risk Identification", desc: "Identify operational, financial, and compliance risks." },
      { title: "Control Improvement", desc: "Recommend enhancements to internal controls." },
      { title: "Fraud Prevention", desc: "Detect and deter fraudulent activities." },
      { title: "Efficiency Gains", desc: "Streamline processes and reduce waste." }
    ],
    benefits: ["Risk Aware", "Strong Controls", "Fraud Deterrent", "Efficient"],
    audienceDesc: "Internal audit is valuable for all organizations seeking to strengthen governance and operational effectiveness.",
    targetAudience: ["Companies", "Banks", "NBFCs", "Manufacturers", "Hospitals", "Educational Institutions", "NGOs"],
    included: [
      "Risk Assessment", "Control Testing", "Process Review",
      "Fraud Risk Analysis", "Audit Report", "Management Recommendations"
    ],
    process: [
      { t: "Planning", d: "Define audit scope and objectives." },
      { t: "Fieldwork", d: "Test controls and gather evidence." },
      { t: "Analysis", d: "Evaluate findings against benchmarks." },
      { t: "Reporting", d: "Present actionable recommendations." }
    ],
    docs: ["Policies & Procedures", "Financial Records", "Previous Audit Reports", "Organizational Charts", "Risk Registers"],
    pricingTimeline: [
      { label: "Planning", value: "2-3 Days", desc: "Scope definition." },
      { label: "Fieldwork", value: "5-15 Days", desc: "Based on organization size." }
    ],
    faqs: [
      { q: "Is internal audit mandatory?", a: "Mandatory for certain listed companies and banks; recommended for all organizations." },
      { q: "How often should internal audit be conducted?", a: "Typically quarterly or annually, depending on the organization's size and risk profile." }
    ]
  },
  "other-audit": {
    title: "Other Audit Services",
    category: "Audit",
    heroTitle: "Specialized Audit & Assurance Services",
    description: "Management audits, stock audits, bank audits, and other specialized assurance services tailored to your needs.",
    image: "/services_images/company.png",
    stats: [
      { value: "SPECIALIZED", label: "Services" },
      { value: "TAILORED", label: "Approach" }
    ],
    definition: "Other Audit Services include management audits, concurrent audits, stock audits, and bank audits as per specific institutional requirements.",
    definitionLong: "These specialized audits provide targeted assurance for specific business areas, processes, or regulatory requirements.",
    definitionQuote: "When standard audits are not enough, specialized audits provide deeper insights.",
    benefitsRich: [
      { title: "Targeted Insights", desc: "Focused examination of specific areas or processes." },
      { title: "Regulatory Compliance", desc: "Meet bank or institutional audit requirements." },
      { title: "Operational Review", desc: "Assess efficiency of specific business functions." },
      { title: "Customized Reporting", desc: "Reports designed for specific stakeholder needs." }
    ],
    benefits: ["Focused", "Compliant", "Insightful", "Custom"],
    audienceDesc: "Specialized audits are for organizations with specific audit mandates from banks, regulators, or management.",
    targetAudience: ["Banks", "NBFCs", "Manufacturers", "Retailers", "Government Agencies", "Investors"],
    included: [
      "Scope Definition", "Field Examination", "Report Preparation",
      "Management Discussion", "Action Plan", "Follow-up Review"
    ],
    process: [
      { t: "Scope", d: "Define audit objectives and boundaries." },
      { t: "Execution", d: "Conduct focused field examination." },
      { t: "Analysis", d: "Analyze findings and prepare report." },
      { t: "Presentation", d: "Present findings to management." }
    ],
    docs: ["Previous Reports", "Relevant Records", "Management Inputs", "Institutional Guidelines"],
    pricingTimeline: [
      { label: "Planning", value: "1-2 Days", desc: "Scope finalization." },
      { label: "Audit", value: "3-10 Days", desc: "Field work." }
    ],
    faqs: [
      { q: "What types of specialized audits do you offer?", a: "Stock audits, bank concurrent audits, management audits, forensic audits, and more." },
      { q: "Can audits be conducted remotely?", a: "Yes, many audits can be conducted through secure remote access and virtual meetings." }
    ]
  },

  // --- MCA Services ---
  "new-company-formation": {
    title: "New Company Formation",
    category: "Corporate Law",
    heroTitle: "Incorporate Your Private Limited Company",
    description: "End-to-end company incorporation services including name approval, DSC, DIN, and certificate of incorporation.",
    image: "/services_images/company.png",
    stats: [
      { value: "7-10 DAYS", label: "Incorporation" },
      { value: "MCA", label: "Compliant" }
    ],
    definition: "Company formation is the legal process of registering a new company under the Companies Act, 2013 with the Ministry of Corporate Affairs.",
    definitionLong: "We handle the entire incorporation journey from name reservation to obtaining the Certificate of Incorporation, PAN, and TAN.",
    definitionQuote: "Your business journey starts with the right legal foundation.",
    benefitsRich: [
      { title: "Limited Liability", desc: "Protect personal assets from business liabilities." },
      { title: "Separate Legal Entity", desc: "Company exists independently of its shareholders." },
      { title: "Funding Ready", desc: "Attract investors, VC funding, and bank loans." },
      { title: "Perpetual Existence", desc: "Company continues regardless of ownership changes." }
    ],
    benefits: ["Limited Liability", "Legal Entity", "Investor Ready", "Perpetual"],
    audienceDesc: "Company formation is ideal for entrepreneurs, startups, and businesses seeking a corporate structure.",
    targetAudience: ["Entrepreneurs", "Startups", "Partnership Firms", "Proprietors", "Investors", "Foreign Companies"],
    included: [
      "Name Approval (RUN)", "DSC for Directors", "DIN Application",
      "MOA/AOA Drafting", "Incorporation Filing (SPICe+)", "PAN & TAN"
    ],
    process: [
      { t: "Name", d: "Apply for name approval via RUN/SPICe+." },
      { t: "DSC", d: "Obtain Digital Signature for directors." },
      { t: "Incorporation", d: "File SPICe+ with MOA, AOA, and declarations." },
      { t: "Certificate", d: "Receive Certificate of Incorporation." }
    ],
    docs: ["PAN of Directors", "Aadhaar", "Address Proof", "Photo", "Rent Agreement/NOC", "Utility Bill"],
    pricingTimeline: [
      { label: "Name Approval", value: "1-2 Days", desc: "MCA processing." },
      { label: "Incorporation", value: "7-10 Days", desc: "Complete process." }
    ],
    faqs: [
      { q: "How many directors are required?", a: "Minimum 2 directors for a private limited company and 3 for a public company." },
      { q: "What is the minimum capital required?", a: "No minimum capital is required to incorporate a private limited company in India." }
    ]
  },
  "new-llp-formation": {
    title: "New LLP Formation",
    category: "Corporate Law",
    heroTitle: "Register Your Limited Liability Partnership",
    description: "Complete LLP registration with deed drafting, partner KYC, and incorporation filing under the LLP Act, 2008.",
    image: "/services_images/LLP.png",
    stats: [
      { value: "7-15 DAYS", label: "Formation" },
      { value: "LLP ACT", label: "2008" }
    ],
    definition: "LLP Formation is the process of registering a Limited Liability Partnership that combines the benefits of a company and a partnership firm.",
    definitionLong: "An LLP offers limited liability to partners, flexible management, and lower compliance burden compared to a company.",
    definitionQuote: "The flexibility of a partnership with the safety of limited liability.",
    benefitsRich: [
      { title: "Limited Liability", desc: "Partners are not personally liable for business debts." },
      { title: "Flexibility", desc: "Partners can define roles and profit-sharing in the LLP deed." },
      { title: "Lower Compliance", desc: "Fewer statutory filings compared to a private limited company." },
      { title: "Tax Benefits", desc: "No dividend distribution tax; profits taxed at partner level." }
    ],
    benefits: ["Limited Liability", "Flexible", "Low Compliance", "Tax Efficient"],
    audienceDesc: "LLP formation is ideal for professionals, small businesses, and startups seeking a flexible corporate structure.",
    targetAudience: ["Professionals", "Consultants", "Startups", "Small Businesses", "Partnership Firms", "Design Studios"],
    included: [
      "Name Reservation", "DSC for Partners", "DPIN Application",
      "LLP Deed Drafting", "Incorporation Filing (FiLLiP)", "PAN & TAN"
    ],
    process: [
      { t: "Name", d: "Reserve LLP name via RUN-LLP." },
      { t: "DSC/DPIN", d: "Obtain DSC and DPIN for designated partners." },
      { t: "Deed", d: "Draft and execute LLP partnership deed." },
      { t: "Filing", d: "File FiLLiP form with MCA." }
    ],
    docs: ["PAN of Partners", "Aadhaar", "Address Proof", "Photo", "Office Address Proof", "Capital Contribution Details"],
    pricingTimeline: [
      { label: "Name", value: "1-2 Days", desc: "Reservation." },
      { label: "Formation", value: "7-15 Days", desc: "Complete process." }
    ],
    faqs: [
      { q: "How many partners are required for an LLP?", a: "Minimum 2 partners with no maximum limit. At least 2 must be designated partners." },
      { q: "Can an LLP convert to a company?", a: "Yes, an LLP can be converted into a private limited company as per MCA guidelines." }
    ]
  },
  "company-compliance": {
    title: "Company Compliance",
    category: "Corporate Law",
    heroTitle: "Annual & Event-Based Company Compliance",
    description: "Complete ROC compliance including annual filings, board meetings, and statutory maintenance for your company.",
    image: "/services_images/company.png",
    stats: [
      { value: "ROC", label: "Compliant" },
      { value: "ANNUAL", label: "Filings" }
    ],
    definition: "Company Compliance refers to the ongoing statutory obligations under the Companies Act, 2013 including annual returns, financial statements, and board resolutions.",
    definitionLong: "Regular compliance ensures your company remains in good standing with the Registrar of Companies and avoids penalties.",
    definitionQuote: "Compliance is not a burden; it is the foundation of corporate governance.",
    benefitsRich: [
      { title: "Penalty Avoidance", desc: "Avoid late fees and prosecution for non-compliance." },
      { title: "Good Standing", desc: "Maintain active status with ROC." },
      { title: "Investor Ready", desc: "Clean compliance record attracts investors." },
      { title: "Audit Ready", desc: "Organized records for statutory audits." }
    ],
    benefits: ["No Penalties", "Active Status", "Investor Ready", "Audit Ready"],
    audienceDesc: "Company compliance is mandatory for all companies registered under the Companies Act, 2013.",
    targetAudience: ["Private Limited Companies", "Public Companies", "OPCs", "Section 8 Companies", "Listed Companies"],
    included: [
      "Annual Return (MGT-7)", "Financial Statements (AOC-4)", "DIR-3 KYC",
      "Board Meetings", "AGM Conduct", "ADT-1 Auditor Appointment"
    ],
    process: [
      { t: "Review", d: "Assess compliance calendar and pending filings." },
      { t: "Preparation", d: "Prepare returns, resolutions, and minutes." },
      { t: "Filing", d: "Submit forms with ROC within due dates." },
      { t: "Confirmation", d: "Track status and download acknowledgments." }
    ],
    docs: ["Financial Statements", "Audit Report", "Director KYC", "Share Register", "Previous Returns"],
    pricingTimeline: [
      { label: "Annual Filing", value: "5-10 Days", desc: "MGT-7 & AOC-4." },
      { label: "Event-Based", value: "2-5 Days", desc: "Per filing." }
    ],
    faqs: [
      { q: "What are the annual compliance requirements?", a: "Annual Return (MGT-7), Financial Statements (AOC-4), Income Tax Return, and GST Returns." },
      { q: "What happens if I miss ROC filings?", a: "Late fees accumulate daily, and directors may face disqualification for repeated non-compliance." }
    ]
  },
  "llp-compliance": {
    title: "LLP Compliance",
    category: "Corporate Law",
    heroTitle: "Annual LLP Compliance & Filings",
    description: "Complete ROC compliance for LLPs including annual returns, statement of accounts, and partner KYC.",
    image: "/services_images/LLP.png",
    stats: [
      { value: "ROC", label: "Compliant" },
      { value: "ANNUAL", label: "Filings" }
    ],
    definition: "LLP Compliance involves filing annual returns and statement of accounts with the Registrar as mandated under the LLP Act, 2008.",
    definitionLong: "Regular compliance ensures your LLP maintains active status and partners avoid penalties and disqualification.",
    definitionQuote: "An compliant LLP is a trusted LLP.",
    benefitsRich: [
      { title: "Penalty Avoidance", desc: "Avoid late fees for delayed annual filings." },
      { title: "Active Status", desc: "Maintain good standing with ROC." },
      { title: "Partner Protection", desc: "Prevent disqualification of designated partners." },
      { title: "Banking Ease", desc: "Clean records facilitate loans and credit." }
    ],
    benefits: ["No Penalties", "Active Status", "Partner Safe", "Loan Ready"],
    audienceDesc: "LLP compliance is mandatory for all registered Limited Liability Partnerships in India.",
    targetAudience: ["LLPs", "Designated Partners", "Professional Firms", "Startups"],
    included: [
      "Form 11 (Annual Return)", "Form 8 (Statement of Account)", "Partner KYC",
      "Audit Support", "Compliance Calendar", "Filing Tracking"
    ],
    process: [
      { t: "Review", d: "Assess annual filing requirements and due dates." },
      { t: "Preparation", d: "Compile accounts and partner details." },
      { t: "Filing", d: "Submit Form 11 and Form 8 with ROC." },
      { t: "Tracking", d: "Monitor status and download receipts." }
    ],
    docs: ["Books of Accounts", "Bank Statements", "Partner KYC", "Audit Report", "Previous Returns"],
    pricingTimeline: [
      { label: "Annual Filing", value: "3-7 Days", desc: "Form 11 & 8." },
      { label: "Audit", value: "5-10 Days", desc: "If applicable." }
    ],
    faqs: [
      { q: "What is the due date for LLP annual filing?", a: "Form 11 is due within 60 days of financial year close; Form 8 within 30 days." },
      { q: "Do all LLPs need an audit?", a: "Only LLPs with turnover exceeding Rs.40 lakhs or contribution exceeding Rs.25 lakhs require audit." }
    ]
  },
  "address-change": {
    title: "Company/LLP Address Change",
    category: "Corporate Law",
    heroTitle: "Change Your Registered Office Address",
    description: "Hassle-free address change for companies and LLPs within the same city, state, or across India.",
    image: "/services_images/company.png",
    stats: [
      { value: "SAME/OTHER", label: "State" },
      { value: "MCA", label: "Approved" }
    ],
    definition: "Address Change involves updating the registered office address of a company or LLP in MCA records through the prescribed e-forms.",
    definitionLong: "Whether moving within the same city or to another state, proper filing ensures legal recognition of the new address.",
    definitionQuote: "A change of address should not mean a change of compliance burden.",
    benefitsRich: [
      { title: "Legal Update", desc: "Ensure all government records reflect the current address." },
      { title: "Notice Receipt", desc: "Receive legal and tax notices at the correct address." },
      { title: "Bank Update", desc: "Simplify bank account address changes." },
      { title: "No Disruption", desc: "Maintain business continuity during relocation." }
    ],
    benefits: ["Legal Update", "Correct Notices", "Bank Sync", "No Disruption"],
    audienceDesc: "Address change is required when a company or LLP relocates its registered office.",
    targetAudience: ["Companies", "LLPs", "Startups", "Businesses Relocating"],
    included: [
      "Board Resolution", "Notice Preparation", "Form Filing (INC-22/LLP-III)",
      "Rent Agreement Support", "NOC Documentation", "Updated Certificate"
    ],
    process: [
      { t: "Resolution", d: "Pass board/partner resolution for address change." },
      { t: "Documents", d: "Prepare new address proof and NOC." },
      { t: "Filing", d: "File INC-22 or LLP-III with MCA." },
      { t: "Update", d: "Update address across banks, GST, and other registrations." }
    ],
    docs: ["New Address Proof", "Rent Agreement", "NOC from Owner", "Utility Bill", "Resolution"],
    pricingTimeline: [
      { label: "Same State", value: "3-5 Days", desc: "Simple change." },
      { label: "Inter-State", value: "20-30 Days", desc: "Regional Director approval." }
    ],
    faqs: [
      { q: "Can I change address to another state?", a: "Yes, but it requires Regional Director approval and may involve shifting of registered office." },
      { q: "Do I need to update GST after address change?", a: "Yes, GST registration must be amended within 15 days of address change." }
    ]
  },
  "name-change": {
    title: "Company/LLP Name Change",
    category: "Corporate Law",
    heroTitle: "Rebrand with a New Legal Name",
    description: "Complete name change services including name availability, special resolution, and MCA amendment filing.",
    image: "/services_images/company.png",
    stats: [
      { value: "REBRAND", label: "Ready" },
      { value: "MCA", label: "Approved" }
    ],
    definition: "Name Change is the process of altering the legal name of a company or LLP through shareholder/partner approval and MCA filing.",
    definitionLong: "A well-executed name change ensures continuity of business while reflecting the new brand identity in all legal records.",
    definitionQuote: "A new name for a new chapter in your business journey.",
    benefitsRich: [
      { title: "Brand Alignment", desc: "Ensure legal name matches business and brand strategy." },
      { title: "Legal Continuity", desc: "Preserve all contracts, assets, and liabilities under the new name." },
      { title: "Updated Records", desc: "All government and bank records reflect the new name." },
      { title: "Market Perception", desc: "Reposition the company with a fresh identity." }
    ],
    benefits: ["Brand Sync", "Continuity", "Updated Records", "Fresh Identity"],
    audienceDesc: "Name change is ideal for companies and LLPs undergoing rebranding or strategic repositioning.",
    targetAudience: ["Companies", "LLPs", "Startups Rebranding", "Merged Entities", "Strategic Repositioners"],
    included: [
      "Name Availability Check", "Board/Partner Resolution", "Shareholder/Partner Approval",
      "MCA Filing", "Updated COI", "PAN & Bank Update Support"
    ],
    process: [
      { t: "Check", d: "Verify name availability via RUN." },
      { t: "Resolution", d: "Pass special resolution for name change." },
      { t: "Filing", d: "File MGT-14 and INC-24 with MCA." },
      { t: "Update", d: "Update PAN, GST, banks, and other registrations." }
    ],
    docs: ["Current COI", "Board Resolution", "Name Approval Letter", "Updated MOA/AOA", "PAN"],
    pricingTimeline: [
      { label: "Approval", value: "2-3 Days", desc: "Name availability." },
      { label: "Complete", value: "10-15 Days", desc: "Full process." }
    ],
    faqs: [
      { q: "Does name change affect existing contracts?", a: "No, all rights and liabilities continue under the new name. A supplementary deed may be executed." },
      { q: "Can I choose any name?", a: "The name must be unique, not deceptive, and approved by the Registrar of Companies." }
    ]
  },
  "director-change": {
    title: "Director Change",
    category: "Corporate Law",
    heroTitle: "Add, Remove, or Change Directors",
    description: "Seamless director appointments, resignations, and removals for companies and LLPs with full MCA compliance.",
    image: "/services_images/company.png",
    stats: [
      { value: "MCA", label: "Compliant" },
      { value: "FAST", label: "Filing" }
    ],
    definition: "Director Change involves appointing new directors, accepting resignations, or removing existing directors through board and shareholder approvals.",
    definitionLong: "Proper documentation and MCA filing ensure the company's management changes are legally recorded and recognized.",
    definitionQuote: "Smooth transitions in leadership for continued growth.",
    benefitsRich: [
      { title: "Legal Compliance", desc: "Ensure all director changes are filed with MCA within statutory timelines." },
      { title: "DIN Management", desc: "Obtain or update Director Identification Numbers as needed." },
      { title: "No Disruption", desc: "Maintain business continuity during leadership changes." },
      { title: "Updated Records", desc: "All government and bank records reflect current directors." }
    ],
    benefits: ["Compliant", "DIN Ready", "No Disruption", "Updated Records"],
    audienceDesc: "Director changes are required when companies or LLPs need to update their management team.",
    targetAudience: ["Companies", "LLPs", "Startups", "Family Businesses", "Investor-backed Firms"],
    included: [
      "Board Resolution", "DIR-12 Filing", "DIN Application (if new)",
      "Consent Letter", "Resignation Letter", "Updated Master Data"
    ],
    process: [
      { t: "Resolution", d: "Pass board resolution for director change." },
      { t: "Documents", d: "Prepare consent, resignation, or removal documents." },
      { t: "Filing", d: "File DIR-12 with MCA within 30 days." },
      { t: "Update", d: "Update bank signatories and other records." }
    ],
    docs: ["PAN of New Director", "Aadhaar", "Photo", "Address Proof", "DIR-2 Consent", "Resignation Letter"],
    pricingTimeline: [
      { label: "Preparation", value: "1-2 Days", desc: "Document drafting." },
      { label: "Filing", value: "Same Day", desc: "MCA submission." }
    ],
    faqs: [
      { q: "How soon must director changes be filed?", a: "Within 30 days of the change, with late fees applicable after that." },
      { q: "Can an NRI be appointed as director?", a: "Yes, provided they have a valid DIN and at least one director is resident in India." }
    ]
  },
  "capital-increase": {
    title: "Authorised Capital Increase",
    category: "Corporate Law",
    heroTitle: "Increase Your Company's Share Capital",
    description: "Increase authorised and paid-up share capital with shareholder approval and MCA amendment filing.",
    image: "/services_images/company.png",
    stats: [
      { value: "SHG/BOARD", label: "Approval" },
      { value: "MCA", label: "Filing" }
    ],
    definition: "Capital Increase is the process of raising the authorised share capital of a company to accommodate new investments or business expansion.",
    definitionLong: "Properly executing a capital increase ensures the company can issue new shares and attract investors without legal impediments.",
    definitionQuote: "More capital means more growth opportunities.",
    benefitsRich: [
      { title: "Investment Ready", desc: "Issue new shares to investors and raise funds." },
      { title: "Expansion", desc: "Support business growth with adequate capital base." },
      { title: "Compliance", desc: "Meet MCA requirements for capital changes." },
      { title: "Valuation", desc: "Proper capital structuring improves company valuation." }
    ],
    benefits: ["Investor Ready", "Growth Support", "Compliant", "Better Valuation"],
    audienceDesc: "Capital increase is ideal for companies planning to raise funds or expand operations.",
    targetAudience: ["Companies", "Startups", "Growing Businesses", "Investor-ready Firms", "Scale-ups"],
    included: [
      "Board Resolution", "Shareholder Approval (SH-7)", "MCA Filing",
      "Stamp Duty Payment", "Updated MOA", "Share Certificate Issue"
    ],
    process: [
      { t: "Resolution", d: "Pass board and shareholder resolutions." },
      { t: "Payment", d: "Calculate and pay additional stamp duty." },
      { t: "Filing", d: "File SH-7 with MCA within 30 days." },
      { t: "Allotment", d: "Allot shares and update statutory registers." }
    ],
    docs: ["Current MOA", "Board Resolution", "SHM Resolution", "Valuation Report (if applicable)", "Bank Statements"],
    pricingTimeline: [
      { label: "Preparation", value: "2-3 Days", desc: "Resolutions and documents." },
      { label: "Filing", value: "1 Day", desc: "MCA submission." }
    ],
    faqs: [
      { q: "What is the difference between authorised and paid-up capital?", a: "Authorised is the maximum capital a company can issue; paid-up is what has actually been subscribed and paid for." },
      { q: "Is valuation required for capital increase?", a: "Valuation may be required for non-cash contributions or preferential allotments." }
    ]
  },
  "din-kyc": {
    title: "DIN KYC",
    category: "Corporate Law",
    heroTitle: "Annual DIN e-KYC Filing",
    description: "Complete DIN KYC filing for all directors to prevent deactivation and maintain MCA compliance.",
    image: "/services_images/company.png",
    stats: [
      { value: "ANNUAL", label: "Compliance" },
      { value: "DIR-3 KYC", label: "Filing" }
    ],
    definition: "DIN KYC is an annual verification process where directors confirm their personal details with the MCA to keep their DIN active.",
    definitionLong: "Failing to complete DIN KYC can lead to deactivation of the DIN, disqualification, and inability to serve as a director.",
    definitionQuote: "A small annual step that keeps your directorship active.",
    benefitsRich: [
      { title: "DIN Active", desc: "Prevent deactivation of Director Identification Number." },
      { title: "Penalty Avoidance", desc: "Avoid late fees for delayed KYC filing." },
      { title: "Compliance", desc: "Meet annual statutory requirement under the Companies Act." },
      { title: "Quick Process", desc: "Simple online filing with OTP verification." }
    ],
    benefits: ["DIN Active", "No Penalty", "Compliant", "Fast"],
    audienceDesc: "DIN KYC is mandatory for all individuals holding a Director Identification Number in India.",
    targetAudience: ["Directors", "Designated Partners", "Company Secretaries", "Compliance Officers"],
    included: [
      "Eligibility Check", "Document Verification", "DIR-3 KYC Filing",
      "Web-based KYC Support", "Status Confirmation", "Deactivation Reversal"
    ],
    process: [
      { t: "Check", d: "Verify DIN status and KYC due date." },
      { t: "Documents", d: "Collect PAN, Aadhaar, and mobile/email details." },
      { t: "Filing", d: "File DIR-3 KYC on MCA portal." },
      { t: "Confirmation", d: "Verify active status and download receipt." }
    ],
    docs: ["PAN", "Aadhaar", "Passport Photo", "Mobile Number", "Email ID"],
    pricingTimeline: [
      { label: "Filing", value: "Same Day", desc: "Online submission." },
      { label: "Status", value: "1 Day", desc: "Activation confirmation." }
    ],
    faqs: [
      { q: "When is DIN KYC due?", a: "Between April 1 and September 30 every year for all DIN holders." },
      { q: "What happens if I miss DIN KYC?", a: "Your DIN will be deactivated, and you may be disqualified from serving as a director." }
    ]
  },
  "other-changes": {
    title: "Any Other Company/LLP Changes",
    category: "Corporate Law",
    heroTitle: "All Types of MCA Amendments",
    description: "Handle any company or LLP amendment including object clause changes, MOA/AOA alterations, and restructuring.",
    image: "/services_images/company.png",
    stats: [
      { value: "ANY", label: "Amendment" },
      { value: "MCA", label: "Compliant" }
    ],
    definition: "Other Changes covers all modifications to a company's or LLP's constitutional documents, business activities, and structure beyond standard updates.",
    definitionLong: "From changing the main object clause to altering profit-sharing ratios, we handle all types of MCA amendments with precision.",
    definitionQuote: "No amendment is too complex for our expertise.",
    benefitsRich: [
      { title: "Comprehensive", desc: "Handle any type of company or LLP amendment." },
      { title: "Legal Accuracy", desc: "Ensure all changes comply with the Companies Act or LLP Act." },
      { title: "Documentation", desc: "Proper drafting of resolutions and updated deeds." },
      { title: "Seamless Update", desc: "Synchronize changes across all registrations." }
    ],
    benefits: ["Complete Coverage", "Legal", "Proper Docs", "Synced Updates"],
    audienceDesc: "Other changes are for any company or LLP requiring non-standard amendments or restructuring.",
    targetAudience: ["Companies", "LLPs", "Startups", "Restructuring Businesses", "Diversifying Firms"],
    included: [
      "Requirement Analysis", "Drafting", "Shareholder/Partner Approval",
      "MCA Filing", "Updated Documents", "Cross-registration Updates"
    ],
    process: [
      { t: "Consultation", d: "Understand the specific change required." },
      { t: "Drafting", d: "Prepare amended MOA, AOA, or LLP deed." },
      { t: "Approval", d: "Obtain necessary approvals from shareholders/partners." },
      { t: "Filing", d: "Submit with MCA and update all records." }
    ],
    docs: ["Current MOA/AOA", "Board Resolution", "SHM/Partner Resolution", "Proof of Change", "Previous Returns"],
    pricingTimeline: [
      { label: "Analysis", value: "1-2 Days", desc: "Scope definition." },
      { label: "Completion", value: "10-20 Days", desc: "Full process." }
    ],
    faqs: [
      { q: "What changes require MCA approval?", a: "Changes to MOA, AOA, business objects, capital structure, and registered office require MCA filing." },
      { q: "Can LLP deed be amended?", a: "Yes, supplementary deeds can be executed with partner consent and filed with the Registrar." }
    ]
  },
  "ccfs-scheme": {
    title: "CCFS Scheme",
    category: "Corporate Law",
    heroTitle: "Company Compliance & Filing Scheme",
    description: "Special scheme-based compliance for companies and LLPs to clear pending filings and regularize defunct status.",
    image: "/services_images/company.png",
    stats: [
      { value: "SCHEME", label: "Based" },
      { value: "COMPLIANCE", label: "Restored" }
    ],
    definition: "CCFS (Company Compliance and Filing Scheme) allows companies to file pending annual returns and financial statements with reduced late fees.",
    definitionLong: "The scheme helps defaulting companies and LLPs regularize their compliance status and avoid prosecution for past non-filings.",
    definitionQuote: "A fresh start for companies that missed their compliance deadlines.",
    benefitsRich: [
      { title: "Reduced Penalties", desc: "Pay significantly lower late fees under the scheme." },
      { title: "Regularization", desc: "Restore active status and avoid strike-off." },
      { title: "Prosecution Relief", desc: "Avoid legal action for past non-compliance." },
      { title: "Clean Record", desc: "Re-establish credibility with banks and investors." }
    ],
    benefits: ["Lower Fees", "Active Status", "No Prosecution", "Clean Record"],
    audienceDesc: "CCFS is for companies and LLPs with pending annual filings and compliance defaults.",
    targetAudience: ["Defaulting Companies", "Inactive LLPs", "Strike-off Risk Entities", "Non-compliant Firms"],
    included: [
      "Default Assessment", "Pending Filing Compilation", "Scheme Application",
      "MCA Filing", "Status Restoration", "Ongoing Compliance Setup"
    ],
    process: [
      { t: "Assessment", d: "Identify all pending filings and defaults." },
      { t: "Compilation", d: "Gather financials and prepare returns." },
      { t: "Filing", d: "Submit under the scheme with reduced fees." },
      { t: "Restoration", d: "Verify active status and set up ongoing compliance." }
    ],
    docs: ["Books of Accounts", "Bank Statements", "Previous ITRs", "GST Returns", "Director KYC"],
    pricingTimeline: [
      { label: "Assessment", value: "2-3 Days", desc: "Default review." },
      { label: "Filing", value: "5-15 Days", desc: "Depending on backlog." }
    ],
    faqs: [
      { q: "Who can avail the CCFS scheme?", a: "Companies and LLPs that have defaulted in filing annual returns and financial statements." },
      { q: "Does the scheme waive all penalties?", a: "It reduces late filing fees significantly but does not waive all statutory penalties." }
    ]
  },

  // --- Start Up ---
  "startup-registration": {
    title: "Startup Registration",
    category: "Startup India",
    heroTitle: "DPIIT Recognition for Your Startup",
    description: "Complete DPIIT startup recognition to unlock tax benefits, funding access, and regulatory exemptions.",
    image: "/services_images/startup_india.png",
    stats: [
      { value: "DPIIT", label: "Recognized" },
      { value: "80-IAC", label: "Eligible" }
    ],
    definition: "Startup India Recognition is a government initiative providing tax exemptions, self-certification, and IP benefits to eligible startups.",
    definitionLong: "DPIIT recognition opens doors to income tax exemption, reduced compliance burden, and access to the Fund of Funds.",
    definitionQuote: "A recognized startup is a funded startup.",
    benefitsRich: [
      { title: "Tax Exemption", desc: "Eligible for 3-year income tax holiday under Section 80-IAC." },
      { title: "Self-Certification", desc: "Self-certify compliance under 6 labour and 3 environment laws." },
      { title: "IP Benefits", desc: "Fast-track patent examination and 80% fee rebate." },
      { title: "Funding Access", desc: "Access to the Rs.10,000 crore Fund of Funds." }
    ],
    benefits: ["Tax Holiday", "Self-Certify", "IP Fast Track", "Funding Access"],
    audienceDesc: "Startup recognition is for innovative businesses meeting DPIIT eligibility criteria.",
    targetAudience: ["Tech Startups", "Innovative Businesses", "Biotech", "Fintech", "Agri-startups", "Social Enterprises"],
    included: [
      "Eligibility Check", "Application Preparation", "DPIIT Filing",
      "Document Compilation", "Query Response", "Recognition Certificate"
    ],
    process: [
      { t: "Eligibility", d: "Assess if business meets DPIIT startup criteria." },
      { t: "Documents", d: "Prepare pitch deck, business plan, and incorporation proof." },
      { t: "Filing", d: "Submit application on Startup India portal." },
      { t: "Recognition", d: "Receive DPIIT recognition certificate." }
    ],
    docs: ["Certificate of Incorporation", "PAN", "Business Plan", "Pitch Deck", "Director KYC"],
    pricingTimeline: [
      { label: "Application", value: "1-2 Days", desc: "Document preparation." },
      { label: "Recognition", value: "15-30 Days", desc: "DPIIT processing." }
    ],
    faqs: [
      { q: "Who is eligible for startup recognition?", a: "Companies/LLPs less than 10 years old with annual turnover not exceeding Rs.100 crore and working towards innovation." },
      { q: "Does recognition guarantee funding?", a: "No, but it significantly improves eligibility for government schemes and investor interest." }
    ]
  },
  "income-tax-exemption": {
    title: "Startup Income Tax Exemption",
    category: "Startup India",
    heroTitle: "Claim 80-IAC Tax Exemption",
    description: "Expert filing for 3-year income tax exemption under Section 80-IAC for DPIIT-recognized startups.",
    image: "/services_images/startup_india.png",
    stats: [
      { value: "3 YEARS", label: "Exemption" },
      { value: "SECTION", label: "80-IAC" }
    ],
    definition: "Section 80-IAC provides a deduction of 100% of profits for 3 consecutive years out of 10 for eligible startups.",
    definitionLong: "This tax holiday is a significant benefit for recognized startups, allowing them to reinvest profits into growth.",
    definitionQuote: "Tax savings that fuel startup growth.",
    benefitsRich: [
      { title: "100% Deduction", desc: "Full profit deduction for 3 consecutive assessment years." },
      { title: "10-Year Window", desc: "Choose any 3 years within the first 10 years of incorporation." },
      { title: "MAT Applicability", desc: "Exemption available even if Minimum Alternate Tax applies." },
      { title: "Growth Capital", desc: "Reinvest tax savings into business expansion." }
    ],
    benefits: ["100% Deduction", "10-Year Window", "MAT OK", "Growth Capital"],
    audienceDesc: "Tax exemption is for DPIIT-recognized startups seeking to minimize tax liability.",
    targetAudience: ["DPIIT Startups", "Innovative Companies", "Scale-ups", "Tech Startups"],
    included: [
      "Eligibility Check", "80-IAC Application", "DPIIT Certificate Verification",
      "IT Department Liaison", "Approval Tracking", "Compliance Advisory"
    ],
    process: [
      { t: "Check", d: "Verify DPIIT recognition and eligibility for 80-IAC." },
      { t: "Application", d: "Prepare and file Form 1 for tax exemption." },
      { t: "Verification", d: "Interact with CBDT/IT Department for approval." },
      { t: "Approval", d: "Receive exemption certificate for chosen years." }
    ],
    docs: ["DPIIT Certificate", "Incorporation Proof", "Financial Projections", "Business Plan", "PAN"],
    pricingTimeline: [
      { label: "Application", value: "3-5 Days", desc: "Preparation." },
      { label: "Approval", value: "1-3 Months", desc: "IT Department processing." }
    ],
    faqs: [
      { q: "When should I apply for 80-IAC?", a: "After obtaining DPIIT recognition, apply for 80-IAC before the due date of the first year you want exemption." },
      { q: "Can I change the 3 exemption years later?", a: "No, once chosen, the 3 consecutive years cannot be changed." }
    ]
  },

  // --- Loan ---
  "project-report": {
    title: "Project Report",
    category: "Loan Support",
    heroTitle: "Professional Project Report Preparation",
    description: "Comprehensive project reports for bank loans, subsidies, and government schemes with financial projections.",
    image: "/services_images/website_service_plan.png",
    stats: [
      { value: "BANK", label: "Ready" },
      { value: "DETAILED", label: "Projections" }
    ],
    definition: "A Project Report is a detailed document outlining a business project's technical, financial, and market feasibility for loan approval.",
    definitionLong: "Well-prepared project reports improve loan approval chances and help secure government subsidies and grants.",
    definitionQuote: "A compelling project report is the key to unlocking capital.",
    benefitsRich: [
      { title: "Loan Approval", desc: "Increase chances of bank loan sanction." },
      { title: "Subsidies", desc: "Qualify for government subsidy schemes." },
      { title: "Financial Clarity", desc: "Clear projections of costs, revenues, and profitability." },
      { title: "Investor Ready", desc: "Use the report to attract investors." }
    ],
    benefits: ["Loan Ready", "Subsidy Eligible", "Clear Projections", "Investor Ready"],
    audienceDesc: "Project reports are essential for entrepreneurs seeking loans, subsidies, or investor funding.",
    targetAudience: ["Entrepreneurs", "Manufacturers", "MSMEs", "Startups", "Farmers", "Exporters", "Industrial Projects"],
    included: [
      "Market Research", "Technical Analysis", "Financial Projections",
      "CMA Data Preparation", "Bank Format Compliance", "Presentation Support"
    ],
    process: [
      { t: "Research", d: "Study market, competition, and demand." },
      { t: "Technical", d: "Detail machinery, raw materials, and processes." },
      { t: "Financials", d: "Prepare projections for 5-7 years." },
      { t: "Compilation", d: "Structure report per bank/govt format." }
    ],
    docs: ["Business Plan", "Cost Estimates", "Market Data", "Land/Building Documents", "Promoter KYC"],
    pricingTimeline: [
      { label: "Small Project", value: "5-7 Days", desc: "Simple manufacturing." },
      { label: "Large Project", value: "10-15 Days", desc: "Complex industry." }
    ],
    faqs: [
      { q: "What is included in a project report?", a: "Executive summary, technical details, financial projections, market analysis, and implementation plan." },
      { q: "Can you prepare reports for all industries?", a: "Yes, we cover manufacturing, services, agriculture, and infrastructure projects." }
    ]
  },
  "cma-data": {
    title: "CMA Data Preparation",
    category: "Loan Support",
    heroTitle: "CMA Data for Bank Loan Applications",
    description: "Expert CMA (Credit Monitoring Arrangement) data preparation for term loans and working capital facilities.",
    image: "/services_images/website_service_plan.png",
    stats: [
      { value: "BANK", label: "Format" },
      { value: "APPROVAL", label: "Focused" }
    ],
    definition: "CMA Data is a structured financial analysis required by banks to assess a borrower's creditworthiness and repayment capacity.",
    definitionLong: "Accurate CMA data with proper ratios and projections significantly improves loan approval rates.",
    definitionQuote: "Data that convinces bankers to say yes.",
    benefitsRich: [
      { title: "Bank Compliance", desc: "Prepared in exact format required by banks." },
      { title: "Ratio Analysis", desc: "Key financial ratios that bankers evaluate." },
      { title: "Projection Accuracy", desc: "Realistic and defensible financial forecasts." },
      { title: "Faster Approval", desc: "Complete data reduces back-and-forth with banks." }
    ],
    benefits: ["Bank Format", "Ratios", "Accurate", "Fast Approval"],
    audienceDesc: "CMA data is required for all businesses applying for bank term loans or working capital limits.",
    targetAudience: ["Businesses", "Manufacturers", "Traders", "Service Providers", "Real Estate Developers"],
    included: [
      "Existing Financials", "Fund Flow Analysis", "Ratio Computation",
      "Future Projections", "Bank Format Compliance", "Revision Support"
    ],
    process: [
      { t: "Data", d: "Collect 3 years of financial statements." },
      { t: "Analysis", d: "Compute ratios and fund flows." },
      { t: "Projections", d: "Prepare 5-year financial forecasts." },
      { t: "Compilation", d: "Format as per bank CMA template." }
    ],
    docs: ["Audited Financials", "Bank Statements", "GST Returns", "ITRs", "Loan Purpose Document"],
    pricingTimeline: [
      { label: "Preparation", value: "3-5 Days", desc: "Data compilation." },
      { label: "Review", value: "1-2 Days", desc: "Banker feedback incorporation." }
    ],
    faqs: [
      { q: "What is CMA data used for?", a: "Banks use CMA data to assess repayment capacity, fund flows, and financial health before sanctioning loans." },
      { q: "How many years of projections are needed?", a: "Typically 5 years of financial projections are required in CMA data." }
    ]
  },
  "home-loan": {
    title: "Home Loan Application",
    category: "Loan Support",
    heroTitle: "Expert Home Loan Assistance",
    description: "End-to-end home loan application support including eligibility check, documentation, and bank liaison.",
    image: "/services_images/website_service_plan.png",
    stats: [
      { value: "ALL BANKS", label: "Covered" },
      { value: "FAST", label: "Processing" }
    ],
    definition: "Home Loan Assistance helps individuals navigate the complex loan application process to secure the best interest rates and terms.",
    definitionLong: "From eligibility assessment to disbursement, we guide you through every step of the home buying journey.",
    definitionQuote: "Your dream home deserves the best loan terms.",
    benefitsRich: [
      { title: "Best Rates", desc: "Compare and secure competitive interest rates." },
      { title: "Eligibility Max", desc: "Optimize eligibility for higher loan amounts." },
      { title: "Documentation", desc: "Prepare complete documents to avoid delays." },
      { title: "Bank Liaison", desc: "Coordinate with multiple banks for faster approval." }
    ],
    benefits: ["Best Rates", "Higher Eligibility", "Complete Docs", "Fast Approval"],
    audienceDesc: "Home loan assistance is for first-time buyers, investors, and those refinancing existing home loans.",
    targetAudience: ["First-time Buyers", "Property Investors", "NRI Buyers", "Refinancers", "Self-employed"],
    included: [
      "Eligibility Check", "Rate Comparison", "Document Preparation",
      "Application Filing", "Bank Follow-up", "Disbursement Support"
    ],
    process: [
      { t: "Check", d: "Assess income, credit score, and property value." },
      { t: "Compare", d: "Evaluate rates across banks and NBFCs." },
      { t: "Apply", d: "Submit application with complete documents." },
      { t: "Disbursement", d: "Coordinate valuation, legal, and final disbursement." }
    ],
    docs: ["Salary Slips/ITR", "Bank Statements", "Property Documents", "KYC", "Credit Report"],
    pricingTimeline: [
      { label: "Application", value: "1-2 Days", desc: "Document submission." },
      { label: "Approval", value: "7-15 Days", desc: "Bank processing." }
    ],
    faqs: [
      { q: "What is the maximum home loan I can get?", a: "Typically 80-90% of property value, depending on income and credit profile." },
      { q: "Can self-employed get home loans?", a: "Yes, with 2-3 years of ITRs and consistent bank statements." }
    ]
  },
  "loan-against-property": {
    title: "Loan Against Property (LAP)",
    category: "Loan Support",
    heroTitle: "Unlock Capital from Your Property",
    description: "Expert assistance for mortgage loans against residential, commercial, and industrial properties.",
    image: "/services_images/website_service_plan.png",
    stats: [
      { value: "UP TO 70%", label: "Valuation" },
      { value: "SECURED", label: "Loan" }
    ],
    definition: "Loan Against Property allows property owners to pledge their real estate as collateral to access substantial funding at lower interest rates.",
    definitionLong: "LAP is ideal for business expansion, debt consolidation, or large personal needs while retaining property ownership.",
    definitionQuote: "Your property's value, unlocked for your growth.",
    benefitsRich: [
      { title: "Lower Rates", desc: "Secured loans attract significantly lower interest than unsecured options." },
      { title: "Higher Amounts", desc: "Access larger funds based on property valuation." },
      { title: "Longer Tenure", desc: "Repay over 15-20 years for manageable EMIs." },
      { title: "Retain Ownership", desc: "Continue owning and using the property." }
    ],
    benefits: ["Low Interest", "High Amount", "Long Tenure", "Keep Property"],
    audienceDesc: "LAP is for property owners needing substantial funds for business or personal use.",
    targetAudience: ["Property Owners", "Business Owners", "Professionals", "Salaried Individuals", "NRI Property Owners"],
    included: [
      "Property Valuation", "Eligibility Check", "Document Preparation",
      "Bank Application", "Legal Verification", "Disbursement Support"
    ],
    process: [
      { t: "Valuation", d: "Get property valued by bank-approved valuer." },
      { t: "Check", d: "Assess income eligibility and loan amount." },
      { t: "Application", d: "Submit with property and income documents." },
      { t: "Disbursement", d: "Complete legal verification and receive funds." }
    ],
    docs: ["Property Documents", "Title Deed", "ITRs/Bank Statements", "KYC", "Encumbrance Certificate"],
    pricingTimeline: [
      { label: "Application", value: "1-2 Days", desc: "Document submission." },
      { label: "Disbursement", value: "10-20 Days", desc: "Valuation to funding." }
    ],
    faqs: [
      { q: "How much loan can I get against my property?", a: "Typically 50-70% of the property's market value, depending on income and property type." },
      { q: "Can I mortgage a rented property?", a: "Yes, with tenant NOC and valid lease agreements." }
    ]
  },
  "other-loan": {
    title: "Other Loan Application Support",
    category: "Loan Support",
    heroTitle: "Comprehensive Loan Advisory Services",
    description: "Assistance for business loans, personal loans, vehicle loans, and specialized financing requirements.",
    image: "/services_images/website_service_plan.png",
    stats: [
      { value: "ALL TYPES", label: "Loans" },
      { value: "EXPERT", label: "Guidance" }
    ],
    definition: "Other Loan Support covers business loans, personal loans, vehicle loans, equipment financing, and customized credit solutions.",
    definitionLong: "Our loan experts help you identify the right financing product, prepare documentation, and secure approval from banks and NBFCs.",
    definitionQuote: "The right loan at the right terms for every need.",
    benefitsRich: [
      { title: "Product Match", desc: "Identify the best loan product for your specific need." },
      { title: "Rate Negotiation", desc: "Help negotiate better interest rates and terms." },
      { title: "Documentation", desc: "Complete paperwork to avoid rejections." },
      { title: "Multiple Options", desc: "Access to banks, NBFCs, and private lenders." }
    ],
    benefits: ["Right Product", "Better Rates", "Complete Docs", "Multiple Lenders"],
    audienceDesc: "Other loan support is for any individual or business seeking specialized or non-standard financing.",
    targetAudience: ["Businesses", "Professionals", "Individuals", "Startups", "MSMEs", "Farmers"],
    included: [
      "Need Assessment", "Lender Matching", "Document Preparation",
      "Application Filing", "Follow-up", "Disbursement Coordination"
    ],
    process: [
      { t: "Consultation", d: "Understand loan requirement and profile." },
      { t: "Matching", d: "Identify suitable lenders and products." },
      { t: "Application", d: "Prepare and submit complete application." },
      { t: "Approval", d: "Liaise with lender until disbursement." }
    ],
    docs: ["KYC", "Income Proof", "Bank Statements", "Purpose Document", "Collateral Papers (if any)"],
    pricingTimeline: [
      { label: "Assessment", value: "1 Day", desc: "Need analysis." },
      { label: "Approval", value: "5-15 Days", desc: "Lender dependent." }
    ],
    faqs: [
      { q: "What types of loans do you assist with?", a: "Business loans, personal loans, vehicle loans, education loans, gold loans, and equipment financing." },
      { q: "Do you guarantee loan approval?", a: "No, but we maximize your chances with proper documentation and lender matching." }
    ]
  },

  // --- Advisory ---
  "income-tax-advisory": {
    title: "Income Tax Advisory",
    category: "Tax Advisory",
    heroTitle: "Strategic Income Tax Consulting",
    description: "Personalized tax planning and advisory for individuals, families, and businesses to optimize tax outcomes.",
    image: "/services_images/S_82_Income_Tax.png",
    stats: [
      { value: "STRATEGIC", label: "Planning" },
      { value: "LEGAL", label: "Optimization" }
    ],
    definition: "Income Tax Advisory involves analyzing financial situations and recommending strategies to minimize tax liability within the legal framework.",
    definitionLong: "Our tax experts help you navigate complex tax laws, optimize deductions, and plan transactions for maximum tax efficiency.",
    definitionQuote: "Pay what is due, save what is allowed.",
    benefitsRich: [
      { title: "Tax Savings", desc: "Identify and maximize all eligible deductions and exemptions." },
      { title: "Compliance Safety", desc: "Ensure all strategies are within legal boundaries." },
      { title: "Transaction Planning", desc: "Structure transactions to minimize tax impact." },
      { title: "Notice Prevention", desc: "Reduce chances of scrutiny and departmental notices." }
    ],
    benefits: ["Tax Savings", "Legal Safety", "Smart Planning", "Notice Free"],
    audienceDesc: "Income tax advisory is for anyone seeking to optimize their direct tax position legally.",
    targetAudience: ["Salaried Individuals", "Business Owners", "HNIs", "NRIs", "Families", "Investors"],
    included: [
      "Tax Health Check", "Deduction Optimization", "Investment Advisory",
      "Transaction Structuring", "Year-round Support", "Compliance Monitoring"
    ],
    process: [
      { t: "Review", d: "Assess current tax position and goals." },
      { t: "Plan", d: "Design customized tax optimization strategy." },
      { t: "Implement", d: "Guide execution of recommended actions." },
      { t: "Monitor", d: "Periodic review and adjustment." }
    ],
    docs: ["ITRs", "Investment Statements", "Salary Slips", "Business Financials", "Bank Statements"],
    pricingTimeline: [
      { label: "Assessment", value: "1-2 Days", desc: "Initial review." },
      { label: "Strategy", value: "3-5 Days", desc: "Planning report." }
    ],
    faqs: [
      { q: "Is tax advisory different from tax filing?", a: "Yes, advisory focuses on planning and optimization, while filing is the actual submission of returns." },
      { q: "Can advisory help with previous year issues?", a: "Yes, we can review past filings and suggest corrections or revised returns." }
    ]
  },
  "gst-advisory": {
    title: "GST Advisory",
    category: "Tax Advisory",
    heroTitle: "Expert GST Consulting & Advisory",
    description: "Strategic GST advice for classification, valuation, compliance, and dispute resolution.",
    image: "/services_images/S_83_GST.png",
    stats: [
      { value: "INDIRECT", label: "Tax" },
      { value: "STRATEGIC", label: "Advice" }
    ],
    definition: "GST Advisory provides expert guidance on GST law interpretation, transaction structuring, and compliance optimization.",
    definitionLong: "Our GST consultants help businesses navigate complex scenarios including cross-border transactions, reverse charge, and e-commerce.",
    definitionQuote: "Right classification, right rate, right compliance.",
    benefitsRich: [
      { title: "Classification Clarity", desc: "Correct HSN/SAC classification for goods and services." },
      { title: "Rate Optimization", desc: "Apply the correct GST rate to minimize liability." },
      { title: "Compliance Framework", desc: "Design robust GST compliance processes." },
      { title: "Dispute Prevention", desc: "Proactively address areas of potential conflict." }
    ],
    benefits: ["Correct Classification", "Optimal Rates", "Strong Compliance", "Dispute Free"],
    audienceDesc: "GST advisory is for businesses of all sizes seeking to optimize their indirect tax position.",
    targetAudience: ["Manufacturers", "Traders", "Service Providers", "E-commerce", "Importers", "Exporters"],
    included: [
      "GST Health Check", "Classification Opinion", "Rate Analysis",
      "Transaction Structuring", "Compliance Review", "Training Support"
    ],
    process: [
      { t: "Discovery", d: "Understand business model and transactions." },
      { t: "Analysis", d: "Review current GST position and identify issues." },
      { t: "Planning", d: "Develop customized GST strategy." },
      { t: "Implementation", d: "Guide execution and process changes." }
    ],
    docs: ["GST Returns", "Invoices", "Agreements", "Product/Service List", "Financials"],
    pricingTimeline: [
      { label: "Health Check", value: "2-3 Days", desc: "Compliance review." },
      { label: "Strategy", value: "5-7 Days", desc: "Comprehensive advisory." }
    ],
    faqs: [
      { q: "Can GST advisory help with past disputes?", a: "Yes, we provide opinions and representation for ongoing GST disputes and notices." },
      { q: "Is GST advisory useful for small businesses?", a: "Absolutely, proper GST structuring can save costs and prevent compliance issues regardless of size." }
    ]
  },
  "mca-advisory": {
    title: "MCA Advisory",
    category: "Corporate Advisory",
    heroTitle: "Ministry of Corporate Affairs Consulting",
    description: "Expert guidance on corporate law, compliance, and MCA regulations for companies and LLPs.",
    image: "/services_images/company.png",
    stats: [
      { value: "COMPANIES ACT", label: "Expertise" },
      { value: "MCA", label: "Compliant" }
    ],
    definition: "MCA Advisory involves expert consultation on corporate governance, statutory compliance, and regulatory matters under the Companies Act and LLP Act.",
    definitionLong: "Our company secretaries and legal experts help you navigate complex corporate regulations, board matters, and shareholder issues.",
    definitionQuote: "Corporate compliance made simple and strategic.",
    benefitsRich: [
      { title: "Regulatory Clarity", desc: "Understand complex MCA regulations and amendments." },
      { title: "Compliance Safety", desc: "Avoid penalties and director disqualification." },
      { title: "Governance", desc: "Improve board processes and corporate governance." },
      { title: "Strategic Structuring", desc: "Optimize capital structure and corporate changes." }
    ],
    benefits: ["Regulatory Clarity", "No Penalties", "Good Governance", "Smart Structure"],
    audienceDesc: "MCA advisory is for companies, LLPs, and directors seeking expert corporate law guidance.",
    targetAudience: ["Companies", "LLPs", "Directors", "Promoters", "Investors", "Startups"],
    included: [
      "Compliance Review", "Regulatory Opinion", "Board Advisory",
      "Restructuring Guidance", "Filing Support", "Governance Training"
    ],
    process: [
      { t: "Review", d: "Assess current corporate compliance status." },
      { t: "Analysis", d: "Identify regulatory gaps and risks." },
      { t: "Planning", d: "Develop compliance and governance roadmap." },
      { t: "Support", d: "Ongoing advisory and filing assistance." }
    ],
    docs: ["COI", "MOA/AOA", "Financials", "Director KYC", "Previous Returns"],
    pricingTimeline: [
      { label: "Review", value: "2-3 Days", desc: "Compliance check." },
      { label: "Advisory", value: "Ongoing", desc: "Retainer or per-issue." }
    ],
    faqs: [
      { q: "Do you provide company secretary services?", a: "Yes, we provide company secretarial services including compliance, board support, and filings." },
      { q: "Can you help with mergers and amalgamations?", a: "Yes, we advise on and manage corporate restructuring including mergers, demergers, and amalgamations." }
    ]
  },
  "company-law": {
    title: "Company Law Advisory",
    category: "Legal Advisory",
    heroTitle: "Expert Company Law Consulting",
    description: "Comprehensive company law advice on formation, governance, restructuring, and shareholder matters.",
    image: "/services_images/company.png",
    stats: [
      { value: "LEGAL", label: "Expertise" },
      { value: "STRATEGIC", label: "Counsel" }
    ],
    definition: "Company Law Advisory covers all legal aspects of company operations including formation, compliance, restructuring, and dispute resolution.",
    definitionLong: "Our legal team provides authoritative guidance on the Companies Act, SEBI regulations, and corporate best practices.",
    definitionQuote: "Legal counsel that protects and empowers your business.",
    benefitsRich: [
      { title: "Risk Mitigation", desc: "Identify and address legal risks proactively." },
      { title: "Compliance", desc: "Ensure adherence to all company law requirements." },
      { title: "Dispute Resolution", desc: "Handle shareholder and board disputes effectively." },
      { title: "Strategic Counsel", desc: "Guide on M&A, joint ventures, and exits." }
    ],
    benefits: ["Risk Mitigation", "Compliant", "Dispute Ready", "Strategic"],
    audienceDesc: "Company law advisory is for all companies seeking expert legal guidance on corporate matters.",
    targetAudience: ["Companies", "Boards", "Promoters", "Investors", "Startups", "MNCs"],
    included: [
      "Legal Opinion", "Contract Review", "Compliance Advisory",
      "Dispute Resolution", "M&A Support", "Board Governance"
    ],
    process: [
      { t: "Consultation", d: "Understand the legal issue or objective." },
      { t: "Research", d: "Analyze applicable laws and precedents." },
      { t: "Opinion", d: "Provide detailed legal opinion and options." },
      { t: "Execution", d: "Draft documents and implement solutions." }
    ],
    docs: ["Company Documents", "Agreements", "Correspondence", "Financial Records", "Director KYC"],
    pricingTimeline: [
      { label: "Opinion", value: "2-3 Days", desc: "Legal research." },
      { label: "Execution", value: "5-10 Days", desc: "Document drafting." }
    ],
    faqs: [
      { q: "Can you represent companies in court?", a: "We work with empanelled advocates for litigation and represent companies in NCLT and other forums." },
      { q: "Do you handle shareholder disputes?", a: "Yes, we advise on and mediate shareholder disputes, oppression claims, and mismanagement petitions." }
    ]
  },

  "llp-law": {
    title: "LLP Law Advisory",
    category: "Legal Advisory",
    heroTitle: "LLP Legal & Compliance Consulting",
    description: "Specialized legal advice for LLPs on partnership deeds, compliance, partner disputes, and restructuring.",
    image: "/services_images/LLP.png",
    stats: [
      { value: "LLP ACT", label: "2008" },
      { value: "LEGAL", label: "Expertise" }
    ],
    definition: "LLP Law Advisory provides specialized guidance on Limited Liability Partnership formation, governance, and regulatory compliance.",
    definitionLong: "Our experts help LLPs navigate partnership agreements, partner changes, profit sharing, and compliance under the LLP Act.",
    definitionQuote: "LLP expertise for partnership success.",
    benefitsRich: [
      { title: "Deed Clarity", desc: "Draft and review LLP deeds for partner protection." },
      { title: "Compliance", desc: "Ensure all ROC filings and annual requirements are met." },
      { title: "Dispute Resolution", desc: "Handle partner conflicts and dissolution matters." },
      { title: "Restructuring", desc: "Advise on partner changes, capital adjustments, and conversions." }
    ],
    benefits: ["Clear Deed", "Compliant", "Dispute Ready", "Flexible Structure"],
    audienceDesc: "LLP law advisory is for all LLPs and their partners seeking expert legal guidance.",
    targetAudience: ["LLPs", "Partners", "Designated Partners", "Professional Firms", "Startups"],
    included: [
      "Deed Drafting", "Partner Change Advisory", "Compliance Support",
      "Dispute Mediation", "Conversion Advice", "Restructuring Guidance"
    ],
    process: [
      { t: "Review", d: "Assess current LLP structure and issues." },
      { t: "Plan", d: "Develop legal and compliance strategy." },
      { t: "Draft", d: "Prepare deeds, resolutions, and filings." },
      { t: "Implement", d: "Execute changes and update records." }
    ],
    docs: ["LLP Deed", "Partner KYC", "Financials", "Previous Filings", "Agreements"],
    pricingTimeline: [
      { label: "Review", value: "1-2 Days", desc: "Initial assessment." },
      { label: "Execution", value: "5-10 Days", desc: "Full implementation." }
    ],
    faqs: [
      { q: "Can an LLP deed be amended?", a: "Yes, through supplementary deeds executed by all partners and filed with the Registrar." },
      { q: "What happens if a partner wants to exit?", a: "The deed should specify exit procedures; otherwise, mutual agreement or legal intervention may be needed." }
    ]
  },
  "trademark-advisory": {
    title: "Trademark Advisory",
    category: "IP Advisory",
    heroTitle: "Strategic Trademark Consulting",
    description: "Expert trademark strategy including search, classification, enforcement, and portfolio management.",
    image: "/services_images/S_87_Trademark.png",
    stats: [
      { value: "IP", label: "Strategy" },
      { value: "BRAND", label: "Protection" }
    ],
    definition: "Trademark Advisory involves strategic guidance on brand protection, trademark selection, registration, and enforcement against infringement.",
    definitionLong: "Our IP experts help businesses build and protect valuable trademark portfolios through comprehensive search, monitoring, and enforcement strategies.",
    definitionQuote: "Protect your brand, protect your business.",
    benefitsRich: [
      { title: "Brand Security", desc: "Prevent unauthorized use of your brand identity." },
      { title: "Portfolio Management", desc: "Manage multiple trademarks across jurisdictions." },
      { title: "Infringement Action", desc: "Take legal action against counterfeiters and infringers." },
      { title: "Valuation", desc: "Enhance brand value through proper IP management." }
    ],
    benefits: ["Brand Security", "Portfolio Management", "Enforcement", "Brand Value"],
    audienceDesc: "Trademark advisory is for businesses of all sizes seeking to protect and maximize their brand value.",
    targetAudience: ["Startups", "Brands", "E-commerce", "Manufacturers", "Service Providers", "Franchises"],
    included: [
      "Trademark Search", "Classification Strategy", "Registration Support",
      "Infringement Monitoring", "Opposition Handling", "Renewal Management"
    ],
    process: [
      { t: "Search", d: "Conduct comprehensive trademark availability search." },
      { t: "Strategy", d: "Develop trademark filing and protection plan." },
      { t: "Registration", d: "File and prosecute trademark applications." },
      { t: "Enforcement", d: "Monitor and act against infringement." }
    ],
    docs: ["Brand Logo", "Word Mark", "Business Description", "User Affidavit", "Address Proof"],
    pricingTimeline: [
      { label: "Search", value: "1-2 Days", desc: "Availability check." },
      { label: "Strategy", value: "3-5 Days", desc: "Portfolio planning." }
    ],
    faqs: [
      { q: "Should I register both word mark and logo?", a: "Yes, registering both provides comprehensive protection for your brand identity." },
      { q: "How do I enforce my trademark against infringement?", a: "Through cease and desist notices, opposition proceedings, and civil litigation if necessary." }
    ]
  },

  // --- Partnership Firm ---
  "partnership-deed-drafting": {
    title: "Partnership Deed Drafting",
    category: "Partnership",
    heroTitle: "Draft a Comprehensive Partnership Deed",
    description: "Expertly drafted partnership deeds that protect all partners and clearly define roles, profit sharing, and dispute resolution.",
    image: "/services_images/partnership.png",
    stats: [
      { value: "LEGAL", label: "Binding" },
      { value: "CUSTOM", label: "Drafted" }
    ],
    definition: "A Partnership Deed is a legal document that formalizes the agreement between partners regarding capital, profit sharing, roles, and business operations.",
    definitionLong: "A well-drafted deed prevents future disputes, ensures smooth operations, and provides legal protection for all partners.",
    definitionQuote: "A clear deed is the foundation of a successful partnership.",
    benefitsRich: [
      { title: "Dispute Prevention", desc: "Clearly defined roles and profit sharing reduce conflicts." },
      { title: "Legal Protection", desc: "Enforceable rights and obligations for all partners." },
      { title: "Bank Ready", desc: "Banks require a registered deed for opening partnership accounts." },
      { title: "Flexible Terms", desc: "Custom clauses for admission, retirement, and dissolution." }
    ],
    benefits: ["Dispute Free", "Legal Protection", "Bank Ready", "Flexible"],
    audienceDesc: "Partnership deed drafting is essential for all partnership firms formalizing their business relationship.",
    targetAudience: ["Partnership Firms", "Business Partners", "Family Businesses", "Professional Firms", "Traders"],
    included: [
      "Consultation", "Custom Deed Drafting", "Capital & Profit Share Clauses",
      "Admission & Exit Provisions", "Dispute Resolution", "Stamping & Registration Support"
    ],
    process: [
      { t: "Consultation", d: "Understand partner requirements and business model." },
      { t: "Drafting", d: "Prepare customized partnership deed." },
      { t: "Review", d: "Partner review and amendments." },
      { t: "Execution", d: "Stamping, notarization, and registration." }
    ],
    docs: ["Partner KYC", "Capital Contribution Details", "Business Address Proof", "Profit Sharing Terms"],
    pricingTimeline: [
      { label: "Drafting", value: "2-3 Days", desc: "Deed preparation." },
      { label: "Registration", value: "3-5 Days", desc: "Sub-Registrar." }
    ],
    faqs: [
      { q: "Is a partnership deed mandatory?", a: "While not mandatory, it is highly recommended to prevent disputes and is required by banks for account opening." },
      { q: "Can the deed be amended later?", a: "Yes, through a supplementary deed executed by all partners." }
    ]
  },
  "partnership-pan-registration": {
    title: "Partnership PAN Registration",
    category: "Partnership",
    heroTitle: "Get PAN for Your Partnership Firm",
    description: "Quick PAN application for partnership firms to enable tax compliance and banking operations.",
    image: "/services_images/partnership.png",
    stats: [
      { value: "FIRM", label: "PAN" },
      { value: "FAST", label: "Processing" }
    ],
    definition: "A Partnership Firm PAN is a unique tax identification number required for filing income tax returns, opening bank accounts, and conducting business.",
    definitionLong: "Obtaining a PAN for the firm is a prerequisite for all tax and financial transactions in the partnership's name.",
    definitionQuote: "The first step towards formalizing your partnership.",
    benefitsRich: [
      { title: "Tax Compliance", desc: "Mandatory for filing partnership income tax returns." },
      { title: "Banking", desc: "Required for opening current accounts in the firm's name." },
      { title: "TDS", desc: "Enable TDS compliance for the partnership." },
      { title: "Credibility", desc: "Establish the firm as a recognized tax entity." }
    ],
    benefits: ["Tax Ready", "Bank Compliant", "TDS Enabled", "Credible"],
    audienceDesc: "PAN registration is mandatory for all partnership firms conducting business in India.",
    targetAudience: ["Partnership Firms", "New Partnerships", "LLPs", "Registered Firms"],
    included: [
      "Form 49A Preparation", "Deed Verification", "Online Application",
      "Tracking", "Card Delivery", "Firm KYC Setup"
    ],
    process: [
      { t: "Documents", d: "Collect partnership deed and partner KYC." },
      { t: "Application", d: "Fill and submit Form 49A online." },
      { t: "Payment", d: "Pay application fee." },
      { t: "Delivery", d: "Receive PAN card for the firm." }
    ],
    docs: ["Partnership Deed", "Partner PAN", "Partner Aadhaar", "Office Address Proof", "Partner Photos"],
    pricingTimeline: [
      { label: "Filing", value: "Same Day", desc: "Online submission." },
      { label: "Card", value: "15-20 Days", desc: "Physical delivery." }
    ],
    faqs: [
      { q: "Can a partnership firm have the same PAN as a partner?", a: "No, the firm must have a separate PAN distinct from individual partners." },
      { q: "Is PAN required before GST registration?", a: "Yes, PAN is mandatory for obtaining GST registration for the firm." }
    ]
  },
  "partnership-gst-registration": {
    title: "Partnership GST Registration",
    category: "Partnership",
    heroTitle: "GST Registration for Partnership Firms",
    description: "Complete GST registration services tailored for partnership firms and LLPs.",
    image: "/services_images/partnership.png",
    stats: [
      { value: "PARTNERSHIP", label: "Ready" },
      { value: "GSTIN", label: "Issued" }
    ],
    definition: "GST Registration for partnerships enables the firm to collect GST, claim input tax credit, and comply with India's indirect tax regime.",
    definitionLong: "Proper GST registration is essential for partnership firms engaged in taxable supply of goods or services.",
    definitionQuote: "One registration for seamless partnership operations.",
    benefitsRich: [
      { title: "ITC Benefits", desc: "Claim input tax credit on business purchases." },
      { title: "Inter-state Trade", desc: "Sell across India without restrictions." },
      { title: "Compliance", desc: "Meet statutory GST requirements." },
      { title: "Credibility", desc: "Enhance business reputation with GST registration." }
    ],
    benefits: ["ITC Claims", "Inter-state Sales", "Compliant", "Credible"],
    audienceDesc: "GST registration is essential for partnership firms meeting the turnover threshold or engaged in interstate supply.",
    targetAudience: ["Partnership Firms", "Traders", "Service Providers", "Manufacturers", "E-commerce Sellers"],
    included: [
      "Eligibility Check", "Document Preparation", "Online Filing",
      "Query Response", "GSTIN Allotment", "Compliance Setup"
    ],
    process: [
      { t: "Check", d: "Verify eligibility based on turnover and business type." },
      { t: "Documents", d: "Collect deed, partner KYC, and address proof." },
      { t: "Filing", d: "Submit GST REG-01 application." },
      { t: "Verification", d: "Respond to queries and obtain GSTIN." }
    ],
    docs: ["Partnership Deed", "Partner PAN", "Aadhaar", "Office Address Proof", "Bank Statement", "Photo"],
    pricingTimeline: [
      { label: "Application", value: "1 Day", desc: "Online submission." },
      { label: "Approval", value: "3-7 Days", desc: "Government processing." }
    ],
    faqs: [
      { q: "Do all partnership firms need GST?", a: "Only if turnover exceeds Rs.40 lakhs (goods) or Rs.20 lakhs (services), or for interstate supply." },
      { q: "Can partners have separate GST registrations?", a: "No, the firm obtains one GST registration; partners cannot register separately for the same business." }
    ]
  },
  "partnership-msme-udyam-registration": {
    title: "Partnership MSME/Udyam Registration",
    image: "/services_images/partnership.png",
    category: "Partnership",
    heroTitle: "MSME Recognition for Partnership Firms",
    description: "Udyam registration for partnership firms to access government subsidies, collateral-free loans, and tender benefits.",
    stats: [
      { value: "MSME", label: "Recognized" },
      { value: "UDYAM", label: "Registered" }
    ],
    definition: "MSME/Udyam registration provides partnership firms with government recognition, enabling access to credit, subsidies, and procurement preferences.",
    definitionLong: "Registered MSMEs enjoy collateral-free loans under CGTMSE, interest subvention, and exclusive benefits in government e-tenders.",
    definitionQuote: "Small firm, big government support.",
    benefitsRich: [
      { title: "Collateral-Free Loans", desc: "Access credit without collateral under CGTMSE." },
      { title: "Interest Subsidy", desc: "Lower interest rates on MSME loans." },
      { title: "Tender Preference", desc: "Exclusive purchase preference in government e-tenders." },
      { title: "ISO Reimbursement", desc: "Financial support for obtaining ISO certification." }
    ],
    benefits: ["Easy Loans", "Tender Access", "Tax Rebates", "ISO Support"],
    audienceDesc: "Udyam registration is ideal for all small and medium partnership firms seeking government support.",
    targetAudience: ["Partnership Firms", "Small Manufacturers", "Traders", "Service Providers", "Micro Enterprises"],
    included: [
      "Eligibility Check", "Aadhaar-Based Filing", "Udyam Certificate",
      "PAN Linkage Support", "Classification Guidance", "Update Support"
    ],
    process: [
      { t: "Details", d: "Provide firm and partner details." },
      { t: "OTP", d: "Verify with Aadhaar-linked mobile OTP." },
      { t: "Classification", d: "Determine micro/small/medium status." },
      { t: "Certificate", d: "Download Udyam Registration Certificate." }
    ],
    docs: ["Partner Aadhaar", "Firm PAN", "GSTIN (if applicable)", "Business Address", "Investment Details"],
    pricingTimeline: [
      { label: "Filing", value: "Same Day", desc: "Instant certificate." },
      { label: "PAN Linkage", value: "1-2 Days", desc: "If needed." }
    ],
    faqs: [
      { q: "Is Udyam registration free for partnerships?", a: "Yes, government filing is free. Professional assistance may involve service fees." },
      { q: "Can a partnership have both firm and individual MSME?", a: "The firm registers as one MSME entity; individual partners do not register separately for the same business." }
    ]
  },
  "partnership-bank-account-opening": {
    title: "Partnership Bank Account Opening",
    image: "/services_images/partnership.png",
    category: "Partnership",
    heroTitle: "Open a Current Account for Your Partnership",
    description: "Expert assistance in opening current accounts for partnership firms with all major banks.",
    stats: [
      { value: "ALL BANKS", label: "Supported" },
      { value: "FAST", label: "Onboarding" }
    ],
    definition: "Partnership Bank Account Opening involves guiding the firm through KYC, documentation, and account setup with the chosen bank.",
    definitionLong: "We help partnership firms select banks with optimal features, prepare KYC documents, and fast-track the account opening process.",
    definitionQuote: "The right banking partner for your partnership.",
    benefitsRich: [
      { title: "Document Support", desc: "Ensure all KYC and firm documents are bank-compliant." },
      { title: "Bank Selection", desc: "Choose banks with best features and lowest charges." },
      { title: "Fast Onboarding", desc: "Liaison with relationship managers for quick setup." },
      { title: "Multi-signatory", desc: "Configure signing authority as per partnership deed." }
    ],
    benefits: ["Document Ready", "Best Bank", "Fast Setup", "Multi-signatory"],
    audienceDesc: "Bank account opening is essential for all partnership firms to manage business finances separately.",
    targetAudience: ["Partnership Firms", "New Partnerships", "LLPs", "Professional Firms", "Trading Firms"],
    included: [
      "Bank Selection Advice", "KYC Document Preparation", "Partnership Deed Verification",
      "Application Filing", "Signatory Setup", "Net Banking Activation"
    ],
    process: [
      { t: "Selection", d: "Choose bank based on features and charges." },
      { t: "Documents", d: "Compile firm KYC, deed, and partner proofs." },
      { t: "Application", d: "Submit account opening form with documents." },
      { t: "Activation", d: "Complete KYC and activate account." }
    ],
    docs: ["Partnership Deed", "Firm PAN", "Partner PAN", "Partner Aadhaar", "Office Address Proof", "Photos"],
    pricingTimeline: [
      { label: "Preparation", value: "1 Day", desc: "Document compilation." },
      { label: "Activation", value: "3-7 Days", desc: "Bank processing." }
    ],
    faqs: [
      { q: "Can a partnership open an account without GST?", a: "Yes, GST is not mandatory for opening a current account, though some banks may ask for it." },
      { q: "How many signatories can a partnership account have?", a: "As per the deed, typically 2 or more partners are authorized to operate the account." }
    ]
  }
};


const DEFAULT_SECTIONS = {
  image: "/services_images/registrations.png",
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

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  
  // We'll iterate through SERVICE_CATEGORIES to generate all possible paths
  const { SERVICE_CATEGORIES } = await import('../../../data/services');
  
  SERVICE_CATEGORIES.forEach(cat => {
    cat.items.forEach(item => {
      params.push({ category: cat.id, slug: item.slug });
    });
  });

  return params;
}

export default async function Page({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const data = ALL_SERVICES_DATA[slug];

  // Merge with defaults for any missing sections
  const finalData = {
    ...DEFAULT_SECTIONS,
    ...data
  };

  // If no data found for this slug, we can show a placeholder or handle it
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-20 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Service Detail Coming Soon</h1>
          <p className="text-slate-400">We are currently preparing detailed information for {slug}. Please check back later or contact us for immediate assistance.</p>
          <a href="/contact" className="inline-block bg-blue-600 px-8 py-3 rounded-full font-bold">Contact Support</a>
        </div>
      </div>
    );
  }

  return <ServiceDetailContent data={finalData} />;
}
