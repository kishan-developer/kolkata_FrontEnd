"use client";

import { ChevronDown } from "lucide-react";

interface PaginationProps {
  totalResults: number;
  currentPage: number;
}

export function Pagination({ totalResults, currentPage }: PaginationProps) {
  return (
    <div className="p-6 border-t border-gray-100 bg-gray-50/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-black uppercase tracking-widest">
      <p className="text-gray-400">
        Page
        <span className="text-gray-900">{currentPage}</span>
        of
        <span className="text-gray-900">42</span>
        &bull;
        <span className="text-[#2663eb]">{totalResults}</span>
        Results found
      </p>
      <div className="flex items-center gap-1.5">
        <PageButton icon={<ChevronDown className="w-4 h-4 rotate-90" />} />
        {[1, 2, 3].map((i) => (
          <PageButton
            key={i}
            label={i.toString()}
            active={i === currentPage}
          />
        ))}
        <PageButton icon={<ChevronDown className="w-4 h-4 -rotate-90" />} />
      </div>
    </div>
  );
}

function PageButton({ icon, label, active }: { icon?: React.ReactNode, label?: string, active?: boolean }) {
  return (
    <button
      className={`w-9 h-9 flex items-center justify-center rounded-[1rem] text-xs font-black transition-all border ${active
          ? "bg-[#2663eb] text-white shadow-lg shadow-blue-100 border-[#2663eb]"
          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 active:scale-90"
        }`}
    >
      {icon || label}
    </button>
  );
}
