"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import HelpCenterOverlay from "@/components/HelpCenterOverlay";
import ReportIssueOverlay from "@/components/ReportIssueOverlay";
import TicketCaseTrackingOverlay from "@/components/TicketCaseTrackingOverlay";
import CustomerSupportOverlay from "@/components/ContactSupportOverlay";


const supportLinks = [
  { title: "Contact Support", href: "", type: "overlay" },
  { title: "Help Center", href: "", type: "overlay" },
  { title: "Report an Issue", href: "", type: "overlay" },
  { title: "Ticket / Case\nTracking", href: "", type: "overlay" },
];

const faqItems = [
  {
    title: "Forgot Password?",
    content:
      "Go to the login page, click Forgot Password, enter your email or phone number, then follow the OTP verification steps.",
  },
  {
    title: "Account & KYC",
    content:
      "Complete your personal information, identification details, contact information, and submit your documents for review.",
  },
  {
    title: "Transfers & payments",
    content:
      "You can make transfers, view payment history, and track pending transactions from your dashboard.",
  },
  {
    title: "Card issues",
    content:
      "For lost, blocked, declined, or stolen cards, use the card support option or contact support immediately.",
  },
];

export default function HelpSupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showHelpCenter, setShowHelpCenter] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#e9eef4] px-4 pb-10 pt-10 text-[#252525]">
      <div
        className={`mx-auto max-w-[430px] transition-opacity duration-200 `}
      >
        <header className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="flex h-8 w-8 items-center justify-center"
          >
            <ArrowLeft size={24} className="text-[#5b5f66]" />
          </Link>

          <h1 className="font-heading text-[13px] font-black tracking-[0.04em] text-[#5d5d5d]">
            Help/Support
          </h1>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9cf4d] bg-white/40">
            <Image
              src="/images/help.png"
              alt="Support icon"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
        </header>

        <div className="relative mx-auto mt-8 h-[180px] w-[260px]">
          <Image
            src="/images/profile-setting-2.png"
            alt="Settings support"
            fill
            priority
            className="object-contain"
          />
        </div>

        <section className="mt-6">
          <h2 className="text-[12px] font-black text-black">Support Links</h2>

          <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-4">
            {supportLinks.map((item) => {
              const content = item.title.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ));

              const className =
                "flex h-[36px] items-center justify-center rounded-[10px] bg-white/55 px-3 text-center text-[14px] font-semibold leading-[16px] text-[#55585f] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]";

              if (item.type === "overlay") {
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setShowHelpCenter(true)}
                    className={className}
                  >
                    {content}
                  </button>
                );
              }

              return (
                <Link key={item.title} href={item.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-4 rounded-t-[10px] rounded-b-[18px] bg-[#2865f2] px-2 pb-3 pt-2">
          <h2 className="text-[12px] font-black text-black">
            Frequently Asked Questions
          </h2>

          <div className="relative mt-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#BDC3C7]"
            />

            <input
              type="text"
              placeholder="Search Questions"
              className="h-[28px] w-full rounded-[9px] border border-white/70 bg-white/25 pl-9 pr-3 text-[14px] text-white outline-none placeholder:text-[#BDC3C7]"
            />
          </div>

          <div className="mt-2 space-y-2">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[9px] bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex h-[36px] w-full items-center justify-between px-4 text-left"
                  >
                    <span className="text-[13px] font-medium text-[#3f434a]">
                      {item.title}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`text-[#4b5563] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[#e8edf5] px-4 py-3 text-[12px] leading-5 text-[#60646c]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <HelpCenterOverlay

        open={showHelpCenter}
        onClose={() => setShowHelpCenter(false)}
      />

      <ReportIssueOverlay
        open={showHelpCenter}
        onClose={() => setShowHelpCenter(false)}
      />
      <TicketCaseTrackingOverlay
        open={showHelpCenter}
        onClose={() => setShowHelpCenter(false)}
      />
      <CustomerSupportOverlay
        open={showHelpCenter}
        onClose={() => setShowHelpCenter(false)}
      />
    
    </main>
  );
}