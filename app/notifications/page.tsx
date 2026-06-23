"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  Gift,
  Info,
  ShieldCheck,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "gift",
    title: "Tier-1 funds redemption OTP",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    action: "Redeem funds",
  },
  {
    id: 2,
    type: "gift",
    title: "Charity Donation from Mark...",
    description: "Congratulations! You have just upgraded your ZentraBa...",
  },
  {
    id: 3,
    type: "gift",
    title: "Up to $7m now convertible",
    description: "Congratulations! You have just upgraded your ZentraBa...",
  },
  {
    id: 4,
    type: "security",
    title: "Security Alerts",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    action: "Redeem funds",
  },
  {
    id: 5,
    type: "info",
    title: "Up to $7m now convertible",
    description: "Congratulations! You have just upgraded your ZentraBa...",
  },
  {
    id: 6,
    type: "gift",
    title: "Charity Donation from Mark...",
    description: "Congratulations! You have just upgraded your ZentraBa...",
  },
  {
    id: 7,
    type: "info",
    title: "Up to $7m now convertible",
    description: "Congratulations! You have just upgraded your ZentraBa...",
  },
  {
    id: 8,
    type: "info",
    title: "Up to $7m now convertible",
    description: "Congratulations! You have just upgraded your ZentraBa...",
  },
  {
    id: 9,
    type: "info",
    title: "Up to $7m now convertible",
    description: "Congratulations! You have just upgraded your ZentraBa...",
  },
  {
    id: 10,
    type: "gift",
    title: "Charity Donation from Mark...",
    description: "Congratulations! You have just upgraded your ZentraBa...",
  },
];

export default function NotificationPage() {
  return (
    <main className="min-h-screen bg-[#23D84B] px-5 pb-8 pt-10 text-[#4a4a4a]">
      <section className="mx-auto w-full max-w-[430px]">
        <header className="relative flex items-center justify-center">
          <Link href="/dashboard" className="absolute left-0 text-[#444]">
            <ArrowLeft size={20} />
          </Link>

          <h1 className="font-heading text-[13px] font-bold tracking-[0.08em] text-[#4a4a4a]">
            Notification
          </h1>
        </header>

        <div className="mt-6 space-y-3">
          {notifications.map((item) => (
            <NotificationCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

function NotificationCard({
  item,
}: {
  item: {
    id: number;
    type: string;
    title: string;
    description: string;
    action?: string;
  };
}) {
  const isLarge = Boolean(item.action);

  return (
    <article
      className={`rounded-[7px] shadow-sm ${
        isLarge
          ? "bg-white px-2 py-3"
          : "bg-white/35 px-2 py-2 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-start gap-2">
        <div className="mt-1 flex h-[24px] w-[24px] shrink-0 items-center justify-center">
          {item.type === "gift" && (
            <Gift size={22} className="text-[#2458E8]" />
          )}

          {item.type === "security" && (
            <ShieldCheck size={22} className="text-[#1B9B5C]" />
          )}

          {item.type === "info" && (
            <Info size={22} className="text-[#1B9B5C]" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h2
            className={`truncate font-medium ${
              isLarge ? "text-[15px]" : "text-[14px]"
            }`}
          >
            {item.title}
          </h2>

          <p
            className={`mt-1 leading-[13px] ${
              isLarge ? "text-[12px]" : "text-[11px]"
            }`}
          >
            {item.description}
          </p>
        </div>

        {item.action ? (
          <button
            type="button"
            className="mt-7 flex h-[25px] w-[138px] shrink-0 items-center justify-center rounded-full bg-[#2458E8] text-[12px] font-bold text-white active:scale-95"
          >
            {item.action}
          </button>
        ) : (
          <button type="button" className="mt-3 shrink-0 text-[#566]">
            <ChevronDown size={17} />
          </button>
        )}
      </div>
    </article>
  );
}