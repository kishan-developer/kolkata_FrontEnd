import {
  Building2, ClipboardCheck, FileText, Landmark,
  ShieldCheck, Briefcase, Rocket, Banknote,
  Layers, TrendingUp,
  Users
} from 'lucide-react';

export interface ServiceItem {
  name: string;
  description: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: any;
  description: string;
  items: { name: string; description: string; slug: string }[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "new-business",
    title: "New Business",
    icon: Building2,
    description: "Launch your enterprise with the right institutional framework.",
    items: [
      { 
        name: "Proprietorship",
        description: "A proprietorship is a single-owner business offering simplicity, direct control, and minimal compliance.", 
        slug: "proprietorship" 
      },
      
      { 
        name: "Virtual CFO Service", 
        description: "A virtual CFO provides strategic financial guidance without the cost of a full-time executive.",
        slug: "virtual-cfo-service" 
      },
      { 
        name: "Private/Public Limited Company", 
        description: "A private/public limited company offers limited liability and is ideal for growing businesses.",
        slug: "private-limited-company" 
      },
      
      { 
        name: "LLP", 
        description: "A Limited Liability Partnership (LLP) combines the benefits of a partnership and a company.",
        slug: "llp-registration" 
      },
      
      { 
        name: "Trust", 
        description: "A trust is a legal arrangement where a trustee holds and manages property for the benefit of beneficiaries.",
        slug: "trust" 
      },
      { 
        name: "Society", 
        description: "A society is a registered association of people formed for a common purpose.",
        slug: "society" 
      },
     
    ]
  },
  {
    id: "registrations",
    title: "Registrations",
    icon: ClipboardCheck,
    description: "Statutory mandates and domain-specific regulatory filings.",
    items: [
      { 
        name: "Startup India", 
        description: "Startup India is a government initiative to promote entrepreneurship and innovation.",
        slug: "startup-india" 
      },
      { 
        name: "Legal Entity Identifier (LEI)", 
        description: "A Legal Entity Identifier (LEI) is a unique code assigned to legal entities for financial transactions.",
        slug: "lei" 
      },
      { 
        name: "12A and 80G Registration", 
        description: "12A and 80G registrations are required for non-profit organizations to claim tax exemptions.",
        slug: "12a-80g" 
      },
      { 
        name: "Digital Signature", 
        description: "A digital signature is a cryptographic mechanism used to validate the authenticity and integrity of digital messages.",
        slug: "digital-signature" 
      },
      { 
        name: "ISO Registration", 
        description: "ISO registration is a certification process that ensures an organization meets international standards.",
        slug: "iso" 
      },
      { 
        name: "Shop Act Registration", 
        description: "Shop Act registration is required for businesses operating under the Shop and Establishment Act.",
        slug: "shop-act" 
      },
      { 
        name: "Udyam Registration", 
        description: "Udyam Registration is a government initiative to promote entrepreneurship and innovation.",
        slug: "udyam" 
      },
      { 
        name: "MSME Registration", 
        description: "MSME Registration is a government initiative to promote entrepreneurship and innovation.",
        slug: "msme" 
      },
      { 
        name: "Import Export Code", 
        description: "Import Export Code is a government initiative to promote entrepreneurship and innovation.",
        slug: "iec" 
      },
      { 
        name: "Darpan Registration", 
        description: "Darpan Registration is a government initiative to promote entrepreneurship and innovation.",
        slug: "darpan" 
      },
      { 
        name: "ICEGATE Registration", 
        description: "ICEGATE Registration is a government initiative to promote entrepreneurship and innovation.",
        slug: "icegate" 
      },
      { 
        name: "Trademark Registration", 
        description: "Trademark Registration is a government initiative to promote entrepreneurship and innovation.",
        slug: "trademark" 
      },
      { 
        name: "Logo Registration", 
        description: "Logo Registration is a government initiative to promote entrepreneurship and innovation.",
        slug: "logo" 
      }
    ]
  },
  {
    id: "income-tax",
    title: "Income Tax",
    icon: FileText,
    description: "Systematic direct tax compliance and strategic planning.",
    items: [
      { 
        name: "Income Tax Return Filing (ITR Filing)", 
        description: "Income Tax Return Filing is a government initiative to promote entrepreneurship and innovation.",
        slug: "itr-filing" 
      },
      { 
        name: "Revised Return Filing", 
        description: "Revised Return Filing is a government initiative to promote entrepreneurship and innovation.",
        slug: "revised-return" 
      },
      { 
        name: "Updated Return Filing", 
        description: "Updated Return Filing is a government initiative to promote entrepreneurship and innovation.",
        slug: "updated-return" 
      },
      { 
        name: "TDS/TCS Return Filing", 
        description: "TDS/TCS Return Filing is a government initiative to promote entrepreneurship and innovation.",
        slug: "tds-tcs-filing" 
      },
      { 
        name: "Lower Deduction Certificate", 
        description: "Lower Deduction Certificate is a government initiative to promote entrepreneurship and innovation.",
        slug: "lower-deduction" 
      },
      {
        name: "15CA/15CB Filing", 
        description: "15CA/15CB Filing is a government initiative to promote entrepreneurship and innovation.",
        slug: "15ca-15cb" 
      },
      {
        name: "PAN Application", 
        description: "PAN Application is a government initiative to promote entrepreneurship and innovation.",
        slug: "pan-application" 
      },
      {
        name: "TAN Application", 
        description: "TAN Application is a government initiative to promote entrepreneurship and innovation.",
        slug: "tan-application" 
      },
      {
        name: "Income Tax Consulting Services", 
        description: "Income Tax Consulting Services is a government initiative to promote entrepreneurship and innovation.",
        slug: "tax-consulting" 
      },
      {
        name: "Income Tax Audit", 
        description: "Income Tax Audit is a government initiative to promote entrepreneurship and innovation.",
        slug: "tax-audit" 
      },
      {
        name: "Income Tax Notice Handling", 
        description: "Income Tax Notice Handling is a government initiative to promote entrepreneurship and innovation.",
        slug: "tax-notice" 
      },
      {
        name: "First Appeal Filing", 
        description: "First Appeal Filing is a government initiative to promote entrepreneurship and innovation.",
        slug: "first-appeal" 
      },
      {
        name: "Second Appeal Filing", 
        description: "Second Appeal Filing is a government initiative to promote entrepreneurship and innovation.",
        slug: "second-appeal" 
      },
      {
        name: "Search, Survey, Seizure", 
        description: "Search, Survey, Seizure is a government initiative to promote entrepreneurship and innovation.",
        slug: "search-survey" 
      },
      {
        name: "Other Income Tax Litigation", 
        description: "Other Income Tax Litigation is a government initiative to promote entrepreneurship and innovation.",
        slug: "tax-litigation" 
      }
    ]
  },
  {
    id: "gst",
    title: "GST",
    icon: Landmark,
    description: "End-to-end indirect tax management and advisory.",
    items: [
      {
        name: "GST Registration", 
        description: "GST Registration is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-registration" 
      },
      {
        name: "GST Amendment", 
        description: "GST Amendment is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-amendment" 
      },
      {
        name: "GST Return Filing", 
        description: "GST Return Filing is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-return-filing" 
      },
      {
        name: "GST Annual Return", 
        description: "GST Annual Return is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-annual-return" 
      },
      {
        name: "GST LUT Form", 
        description: "GST LUT Form is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-lut-form" 
      },
      {
        name: "GST Revocation", 
        description: "GST Revocation is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-revocation" 
      },
      { 
        name: "GST Consulting Services", 
        description: "GST Consulting Services is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-consulting" 
      },
      { 
        name: "GST Notice Handling", 
        description: "GST Notice Handling is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-notice-handling" 
      },
      { 
        name: "GST Appeal", 
        description: "GST Appeal is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-appeal" 
      },
      { 
        name: "GST Refund", 
        description: "GST Refund is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-refund" 
      }
    ]
  },
  
  {
    id: "mca-services",
    title: "MCA Services",
    icon: Briefcase,
    description: "Corporate law mandates and Ministry of Corporate Affairs liaison.",
    items: [
      { 
        name: "New Company Formation", 
        description: "New Company Formation is a government initiative to promote entrepreneurship and innovation.",
        slug: "new-company-formation" 
      },
      { 
        name: "New LLP Formation", 
        description: "New LLP Formation is a government initiative to promote entrepreneurship and innovation.",
        slug: "new-llp-formation" 
      },
      { 
        name: "Company Compliance", 
        description: "Company Compliance is a government initiative to promote entrepreneurship and innovation.",
        slug: "company-compliance" 
      },
      { 
        name: "LLP Compliance", 
        description: "LLP Compliance is a government initiative to promote entrepreneurship and innovation.",
        slug: "llp-compliance" 
      },
      { 
        name: "Address Change", 
        description: "Address Change is a government initiative to promote entrepreneurship and innovation.",
        slug: "address-change" 
      },
      {
         name: "Name Change", 
         description: "Name Change is a government initiative to promote entrepreneurship and innovation.",
         slug: "name-change" 
        },
      { 
        name: "Director Change", 
        description: "Director Change is a government initiative to promote entrepreneurship and innovation.",
        slug: "director-change" 
      },
      { 
        name: "Authorised Capital Increase", 
        description: "Authorised Capital Increase is a government initiative to promote entrepreneurship and innovation.",
        slug: "capital-increase" 
      },
      { 
        name: "DIN KYC", 
        description: "DIN KYC is a government initiative to promote entrepreneurship and innovation.",
        slug: "din-kyc" 
      },
      { 
        name: "Any other Changes", 
        description: "Any other Changes is a government initiative to promote entrepreneurship and innovation.",
        slug: "other-changes" 
      },
      { 
        name: "CCFS Scheme", 
        description: "CCFS Scheme is a government initiative to promote entrepreneurship and innovation.",
        slug: "ccfs-scheme" 
      }
    ]
  },
  {
    id: "start-up",
    title: "Start Up",
    icon: Rocket,
    description: "Specialized frameworks for high-growth ventures.",
    items: [
      { 
        name: "Startup Registration", 
        description: "Startup Registration is a government initiative to promote entrepreneurship and innovation.",
        slug: "startup-registration" 
      },
      { 
        name: "Income Tax Exemption", 
        description: "Income Tax Exemption is a government initiative to promote entrepreneurship and innovation.",
        slug: "income-tax-exemption" 
      },
    ]
  },
  {
    id: "loan",
    title: "Loan",
    icon: Banknote,
    description: "Strategic capital procurement and financial diagnostics.",
    items: [
      { 
        name: "Project Report", 
        description: "Project Report is a government initiative to promote entrepreneurship and innovation.",
        slug: "project-report" 
      },
      { 
        name: "CMA Data", 
        description: "CMA Data is a government initiative to promote entrepreneurship and innovation.",
        slug: "cma-data" 
      },
      { 
        name: "Home Loan Application", 
        description: "Home Loan Application is a government initiative to promote entrepreneurship and innovation.",
        slug: "home-loan"
      },
      { 
        name: "Loan Against Property Application", 
        description: "Loan Against Property Application is a government initiative to promote entrepreneurship and innovation.",
        slug: "loan-against-property" 
      },
      { 
        name: "Other Loan", 
        description: "Other Loan is a government initiative to promote entrepreneurship and innovation.",
        slug: "other-loan" 
      }
    ]
  },
  {
    id: "other-services",
    title: "Other Services",
    icon: Layers,
    description: "Ancillary support for your financial operations.",
    items: [
      { 
        name: "Accounting", 
        description: "Accounting is a government initiative to promote entrepreneurship and innovation.",
        slug: "accounting" 
      },
      { 
        name: "Due Diligence", 
        description: "Due Diligence is a government initiative to promote entrepreneurship and innovation.",
        slug: "due-diligence" 
      },
      { 
        name: "Bank Account Assistance", 
        description: "Bank Account Assistance is a government initiative to promote entrepreneurship and innovation.",
        slug: "bank-account-assistance" 
      }
    ]
  },
  {
    id: "advisory",
    title: "Advisory",
    icon: TrendingUp,
    description: "Bespoke strategic consulting for complex mandates.",
    items: [
      { 
        name: "Income Tax", 
        description: "Income Tax is a government initiative to promote entrepreneurship and innovation.",
        slug: "income-tax-advisory" 
      },
      { 
        name: "GST", 
        description: "GST is a government initiative to promote entrepreneurship and innovation.",
        slug: "gst-advisory" 
      },
      { 
        name: "MCA", 
        description: "MCA is a government initiative to promote entrepreneurship and innovation.",
        slug: "mca-advisory" 
      },
      { 
        name: "Company Law", 
        description: "Company Law is a government initiative to promote entrepreneurship and innovation.",
        slug: "company-law" 
      },
      { 
        name: "LLP Law", 
        description: "LLP Law is a government initiative to promote entrepreneurship and innovation.",
        slug: "llp-law" 
      },
      { 
        name: "Trademark", 
        description: "Trademark is a government initiative to promote entrepreneurship and innovation.",
        slug: "trademark-advisory" 
      }
    ]
  },
];
