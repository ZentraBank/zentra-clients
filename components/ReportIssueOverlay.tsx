"use client";

import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";


const helpItems = [
  {
    title: "Report Failed Transaction",
    href: "/support/help-center/report-failed-transaction",
  },
  {
    title: "Report Unauthorized Transaction",
    href: "/support/help-center/report-unauthorized-transaction",
  },
  {
    title: "Dispute a Transaction",
    href: "/support/help-center/card-issues",
  },
//   {
//     title: "Security & fraud",
//     href: "/support/help-center/security-fraud",
//   },
//   {
//     title: "Fees & charges",
//     href: "/support/help-center/fees-charges",
//   },
];

type ReportIssueOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function ReportIssueOverlay({
  open,
  onClose,
}: ReportIssueOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/20 px-5 pt-[218px] backdrop-blur-[1px]">
      <section className="min-h-[296px] w-full max-w-[342px] rounded-[24px] bg-white px-4 pt-5 shadow-[0_4px_10px_rgba(0,0,0,0.28)]">
        <header className="relative flex h-8 items-center justify-center">
          <button title="Close"
            type="button"
            onClick={onClose}
            className="absolute left-0 flex h-8 w-8 items-center justify-center"
          >
            <ArrowLeft size={20} className="text-[#60646b]" />
          </button>

          <h2 className="font-heading text-[13px] font-black tracking-[0.03em] text-black">
            Report an Issue
          </h2>
        </header>

        <div className="mt-9 overflow-hidden rounded-[10px] bg-[#d8dde2] p-2">
          <button
            type="button"
            className="flex h-[32px] w-full items-center justify-between rounded-[8px] bg-white px-3 text-left"
          >
            <span className="text-[13px] font-bold text-black">
              Report an Issue
            </span>
            <ChevronDown size={17} className="rotate-180 text-[#3f444a]" />
          </button>

          <div className="mt-2 space-y-[6px] px-2 pb-1">
            {helpItems.map((item) => (
            <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="
                flex
                h-[22px]
                w-full
                items-center
                rounded-[6px]
                bg-white
                px-4
                text-left
                text-[12px]
                font-semibold
                text-[#4b4f56]
                shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                transition-all
                hover:bg-[#f5f7fa]
                hover:text-[#2865f2]
                "
            >
                {item.title}
            </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}