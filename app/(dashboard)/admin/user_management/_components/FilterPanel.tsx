"use client";

import { 
  Search, 
  Filter, 
  X, 
  Calendar, 
  ChevronDown 
} from "lucide-react";
import { UserFilters } from "./types";

interface FilterPanelProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  filters: UserFilters;
  setFilters: (filters: UserFilters) => void;
  resetFilters: () => void;
  filteredCount: number;
}

export function FilterPanel({ 
  searchQuery, 
  setSearchQuery, 
  showFilters, 
  setShowFilters, 
  filters, 
  setFilters, 
  resetFilters,
  filteredCount
}: FilterPanelProps) {
  return (
    <div className="bg-white rounded-[1rem] border border-gray-200 shadow-sm overflow-hidden mb-6">
      <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[280px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, phone or ID..."
            className="w-full h-12 pl-11 pr-4 bg-gray-50 border-none rounded-[1rem] focus:ring-2 focus:ring-[#2663eb] focus:bg-white transition-all text-gray-700 font-medium outline-none"
          />
        </div>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-5 h-12 rounded-[1rem] border font-bold transition-all ${
            showFilters ? "bg-blue-50 border-blue-200 text-[#2663eb]" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 text-sm"
          }`}
        >
          <Filter className="w-5 h-5" />
          {showFilters ? "Hide Filters" : "Advanced Filters"}
        </button>
        
        <div className="flex items-center gap-2 text-[13px] font-bold text-gray-500 bg-gray-50 px-4 py-2.5 rounded-[1rem] border border-gray-100">
          <span className="w-2 h-2 bg-emerald-500 rounded-[1rem]"></span>
          {filteredCount} Records Found
        </div>
      </div>

      {showFilters && (
        <div className="p-6 bg-gray-50/50 animate-in slide-in-from-top duration-200 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FilterDropdown 
              label="User Status" 
              value={filters.status} 
              onChange={(val) => setFilters({...filters, status: val})}
              options={[
                { label: "Any Status", value: "all" },
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
                { label: "Suspended", value: "suspended" }
              ]}
            />
            <FilterDropdown 
              label="KYC Verification" 
              value={filters.kyc} 
              onChange={(val) => setFilters({...filters, kyc: val})}
              options={[
                { label: "Any State", value: "all" },
                { label: "Verified", value: "verified" },
                { label: "Pending", value: "pending" },
                { label: "Rejected", value: "rejected" }
              ]}
            />
            <FilterDropdown 
              label="Subscription Plan" 
              value={filters.plan} 
              onChange={(val) => setFilters({...filters, plan: val})}
              options={[
                { label: "All Plans", value: "all" },
                { label: "GST Professional", value: "GST" },
                { label: "ITR Basic", value: "ITR" },
                { label: "ROC Annual", value: "ROC" }
              ]}
            />
            <FilterDropdown 
              label="Compliance Health" 
              value={filters.compliance} 
              onChange={(val) => setFilters({...filters, compliance: val})}
              options={[
                { label: "All Scores", value: "all" },
                { label: "High Range (90%+)", value: "high" },
                { label: "Safe Range (70-89%)", value: "medium" },
                { label: "Critical Range (<70%)", value: "low" }
              ]}
            />
             <FilterDropdown 
              label="Risk Profile" 
              value={filters.risk} 
              onChange={(val) => setFilters({...filters, risk: val})}
              options={[
                { label: "Any Risk", value: "all" },
                { label: "Low Risk", value: "low" },
                { label: "Medium Risk", value: "medium" },
                { label: "High Risk", value: "high" }
              ]}
            />
             <FilterDropdown 
              label="User Role" 
              value={filters.role} 
              onChange={(val) => setFilters({...filters, role: val})}
              options={[
                { label: "Any Role", value: "all" },
                { label: "Business Owner", value: "Business Owner" },
                { label: "Individual", value: "Individual" },
                { label: "Corporate", value: "Corporate" }
              ]}
            />
             <FilterDropdown 
              label="Service Frequency" 
              value={filters.frequency} 
              onChange={(val) => setFilters({...filters, frequency: val})}
              options={[
                { label: "Any Frequency", value: "all" },
                { label: "Monthly", value: "Monthly" },
                { label: "Quarterly", value: "Quarterly" },
                { label: "Annually", value: "Annually" }
              ]}
            />
            <FilterDropdown 
              label="Assigned Manager" 
              value={filters.manager} 
              onChange={(val) => setFilters({...filters, manager: val})}
              options={[
                { label: "Any Manager", value: "all" },
                { label: "Rahul Sharma", value: "Rahul Sharma" },
                { label: "Sonal Gupta", value: "Sonal Gupta" },
                { label: "Amit Singh", value: "Amit Singh" }
              ]}
            />
            <FilterDropdown 
              label="User Activity" 
              value={filters.lastActive} 
              onChange={(val) => setFilters({...filters, lastActive: val})}
              options={[
                { label: "Any Time", value: "all" },
                { label: "Active Today", value: "Today" },
                { label: "Active This Week", value: "Yesterday" },
                { label: "Inactive (>1 Week)", value: "1 week ago" }
              ]}
            />
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between font-bold text-xs uppercase tracking-wider">
             <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-[1rem] text-gray-600 hover:bg-gray-50 transition-all">
                <Calendar className="w-4 h-4 text-gray-400" />
                Last 30 Days
                <ChevronDown className="w-3.5 h-3.5 text-gray-300" />
              </button>
            <button 
              onClick={resetFilters}
              className="text-rose-600 hover:bg-rose-50 px-4 py-2 rounded-[1rem] flex items-center gap-2 transition-all border border-transparent hover:border-rose-100"
            >
              <X className="w-4 h-4" />
              Reset All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterDropdown({ label, value, onChange, options }: { label: string, value: string, onChange: (val: string) => void, options: { label: string, value: string }[] }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-1">{label}</label>
      <div className="relative group">
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 px-3 bg-white border border-gray-200 rounded-[1rem] focus:ring-2 focus:ring-[#2663eb] outline-none text-[13px] font-bold text-gray-700 appearance-none cursor-pointer transition-all hover:border-blue-200"
        >
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-[#2663eb] transition-colors" />
      </div>
    </div>
  );
}
