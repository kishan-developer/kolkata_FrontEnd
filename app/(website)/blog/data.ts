export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  content?: string;
}

export const CATEGORIES = [
  "All",
  "New Business",
  "Registrations",
  "Income Tax",
  "GST",
  "Auditing",
  "MCA Services",
  "Start Up",
  "Loan",
  "Other Services",
  "Advisory"
];

export const POSTS: BlogPost[] = [
  {
    slug: "choosing-right-business-entity",
    title: "Proprietorship vs Partnership vs Company: Choosing Your Entity",
    category: "New Business",
    date: "April 26, 2026",
    author: "CA Mukesh Raj",
    excerpt: "A deep dive into the legal and tax implications of different business structures in India for 2026.",
    image: "/modern_business_audit_report_1777281104179.png",
    content: `
      <h2>The Strategic Choice of Business Entity</h2>
      <p>Launching a new venture begins with a critical decision: the legal structure. In India, founders must choose between Proprietorship, Partnership, LLP, or a Private Limited Company.</p>
      <h3>Proprietorship: Simplicity First</h3>
      <p>Ideal for solo founders with minimal risk. It's the easiest to start but carries unlimited liability.</p>
      <h3>The LLP Advantage</h3>
      <p>Limited Liability Partnerships (LLPs) offer the flexibility of a partnership with the protection of a company, making them popular for professional service providers.</p>
    `
  },
  {
    slug: "startup-india-registration-guide",
    title: "Unlocking Startup India: Benefits and Registration Guide",
    category: "Start Up",
    date: "April 24, 2026",
    author: "CS Anjali Sharma",
    excerpt: "How to leverage Startup India recognition for tax holidays and intellectual property facilitation.",
    image: "/startup_registration_dashboard_1777281126915.png",
    content: `
      <h2>The Startup India Ecosystem</h2>
      <p>Government of India's flagship initiative provides a 3-year tax holiday and 80% rebate on patent filings.</p>
      <h3>Eligibility Criteria</h3>
      <p>Your entity must be a Pvt Ltd or LLP, less than 10 years old, and have an annual turnover below ₹100 Crore.</p>
    `
  },
  {
    slug: "itr-filing-2026-strategy",
    title: "Income Tax Return Filing 2026: Maximizing Savings",
    category: "Income Tax",
    date: "April 22, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Strategic planning for ITR filing. Learn how to optimize deductions under the new tax regime.",
    image: "/tax_planning_strategy_map_1777281144082.png",
    content: `
      <h2>2026 Tax Planning Matrix</h2>
      <p>With the recent updates in direct tax slabs, systematic planning is essential to ensure you're not overpaying.</p>
      <h3>New vs Old Regime</h3>
      <p>We provide a comparative analysis for HNI investors and salaried professionals to choose the most tax-efficient route.</p>
    `
  },
  {
    slug: "gst-registration-common-pitfalls",
    title: "GST Registration: 5 Common Pitfalls to Avoid",
    category: "GST",
    date: "April 20, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Common errors during GST registration that lead to notice issuance and how to ensure a smooth approval.",
    image: "/gst_tax_reconciliation_ui_1777281374863.png",
    content: `
      <h2>Smooth GST Onboarding</h2>
      <p>Notice 01 is often issued due to clerical errors in the principal place of business documentation.</p>
      <h3>Address Proof Essentials</h3>
      <p>Always ensure the electricity bill or NOC matches the exact name of the owner as per land records.</p>
    `
  },
  {
    slug: "internal-audit-corporate-governance",
    title: "The Role of Internal Audit in Modern Corporate Governance",
    category: "Auditing",
    date: "April 18, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Why internal audits are no longer optional for growing SMEs and mid-sized firms.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    content: `
      <h2>Beyond Statutory Compliance</h2>
      <p>Internal audits focus on process efficiency and risk mitigation, not just financial accuracy.</p>
    `
  },
  {
    slug: "mca-compliance-calendar-2026",
    title: "MCA Compliance Calendar: Key Dates for FY 2026-27",
    category: "MCA Services",
    date: "April 15, 2026",
    author: "CS Anjali Sharma",
    excerpt: "Never miss a deadline. A comprehensive guide to AOC-4, MGT-7, and DIR-3 KYC filings.",
    image: "/mca_compliance_office_1777281351936.png",
    content: `
      <h2>Staying Compliant with ROC</h2>
      <p>Timely filing of annual returns is crucial to avoid heavy penalties and director disqualification.</p>
    `
  },
  {
    slug: "trademark-protection-monetization",
    title: "Trademark Protection: Securing Your Digital Brand",
    category: "Registrations",
    date: "April 12, 2026",
    author: "Adv. Rahul Singh",
    excerpt: "From logo registration to defending against infringements in the global digital economy.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    content: `
      <h2>Brand Assets as Collateral</h2>
      <p>Learn how registered trademarks are becoming valuable assets for institutional debt financing.</p>
    `
  },
  {
    slug: "loan-procurement-strategic-diagnostics",
    title: "Loan Procurement: Strategic Financial Diagnostics",
    category: "Loan",
    date: "April 10, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Preparing your CMA data and project reports for seamless institutional funding.",
    image: "/loan_approval_success_1777281448059.png",
    content: `
      <h2>Funding Your Growth</h2>
      <p>Project reports should reflect realistic growth projections while maintaining healthy debt-service coverage ratios.</p>
    `
  },
  {
    slug: "fema-compliance-global-investments",
    title: "FEMA Compliance: Navigating Global Investment Corridors",
    category: "Advisory",
    date: "April 08, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Cross-border transaction advisory for Indian startups expanding internationally.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    content: `
      <h2>Strategic Foreign Exchange</h2>
      <p>Understanding FDI reporting and ODI compliance is vital for compliant global scaling.</p>
    `
  },
  // Adding more posts to satisfy all requested sub-services
  {
    slug: "msme-registration-benefits",
    title: "MSME/Udyam Registration: Unlocking Government Subsidies",
    category: "New Business",
    date: "April 05, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Why every small business must have an Udyam certificate to access credit guarantees.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    slug: "import-export-code-iec-guide",
    title: "Step-by-Step Guide to Obtaining Import Export Code (IEC)",
    category: "Registrations",
    date: "April 03, 2026",
    author: "CS Anjali Sharma",
    excerpt: "The gateway to international trade. Learn how to apply for IEC and ICEGATE registration.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
  },
  {
    slug: "tds-on-property-purchase-compliance",
    title: "TDS on Property Purchase: Essential Compliance for Buyers",
    category: "Income Tax",
    date: "April 01, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Navigating Form 26QB and payment deadlines to avoid interest on property transactions.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    slug: "gst-annual-return-gstr-9-checklist",
    title: "GSTR-9 Annual Return: The Ultimate Filing Checklist",
    category: "GST",
    date: "March 28, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Avoid common errors in outward and inward supply reconciliation for the fiscal year.",
    image: "https://images.unsplash.com/photo-1554224155-1196b1700977?w=800&q=80",
  },
  {
    slug: "company-audit-readiness-2026",
    title: "Preparing for Your Statutory Company Audit",
    category: "Auditing",
    date: "March 25, 2026",
    author: "CA Mukesh Raj",
    excerpt: "How to organize your books and internal controls for a smooth statutory audit experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "director-change-procedure-roc",
    title: "Changing Directors: ROC Procedure and Documentation",
    category: "MCA Services",
    date: "March 22, 2026",
    author: "CS Anjali Sharma",
    excerpt: "A guide to DIR-12 filings and board resolutions for adding or removing directors.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    slug: "home-loan-application-financials",
    title: "Optimizing Your Financials for Home Loan Approval",
    category: "Loan",
    date: "March 20, 2026",
    author: "CA Mukesh Raj",
    excerpt: "How to present your ITRs and balance sheets to secure the best home loan rates.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    slug: "due-diligence-mergers-acquisitions",
    title: "Financial Due Diligence in Mergers & Acquisitions",
    category: "Other Services",
    date: "March 18, 2026",
    author: "CA Mukesh Raj",
    excerpt: "Identifying hidden liabilities and verifying asset valuations during corporate deals.",
    image: "https://images.unsplash.com/photo-1454165833767-027eea70288?w=800&q=80",
  }
];
