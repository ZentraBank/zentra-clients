"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ChevronDown,
  Gift,
  ShieldCheck,
  Info,
} from "lucide-react";
import BottomNav from "@/components/layout/BottomNav";

const notifications = [
  {
    type: "dropdown",
    title: "Charity Donation from Mark...",
    subtitle:
      "Congratulations! You have just upgraded your ZentraBa...",
    icon: "gift",
  },

  {
    type: "action",
    title: "Transaction update",
    subtitle:
      "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "gift",
  },

  {
    type: "action",
    title: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle:
      "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "gift",
  },

  {
    type: "dropdown",
    title: "Up to $7m now convertible",
    subtitle:
      "Congratulations! You have just upgraded your ZentraBa...",
    icon: "info",
  },

  {
    type: "action",
    title: "Payable-on-Death (POD)",
    subtitle:
      "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "gift",
  },

  {
    type: "action",
    title: "Security Alerts",
    subtitle:
      "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "security",
  },

  ...Array.from({ length: 15 }).map((_, index) => ({
    type: "dropdown",
    title:
      index % 2 === 0
        ? "Up to $7m now convertible"
        : "Charity Donation from Mark...",
    subtitle:
      "Congratulations! You have just upgraded your ZentraBa...",
    icon: index % 2 === 0 ? "info" : "gift",
  })),
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-[#E8EDF3] pb-[90px]">
      <section className="mx-auto max-w-[390px] px-5 pt-11">
        {/* Header */}
        <header className="relative mb-4 flex items-center justify-center">
          <Link
            href="/profile"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <ArrowLeft size={20} className="text-[#666]" />
          </Link>

          <h1 className="text-[20px] font-semibold text-[#444]">
            Notification
          </h1>
        </header>

        {/* Notification List */}
        <div className="space-y-3">
          {notifications.map((item, index) =>
            item.type === "action" ? (
              <ActionNotification
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
              />
            ) : (
              <DropdownNotification
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
              />
            )
          )}
        </div>
      </section>

      <BottomNav />
    </main>
  );
}

function NotificationIcon({
  type,
}: {
  type: string;
}) {
  if (type === "gift") {
    return <Gift size={22} className="text-[#2962FF]" />;
  }

  if (type === "security") {
    return <ShieldCheck size={22} className="text-[#2F9158]" />;
  }

  return <Info size={22} className="text-[#2F9158]" />;
}

function DropdownNotification({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl border border-[#D6D9DE] bg-[#F3F5F8] px-3 py-2 shadow-sm">
      <div className="flex items-center gap-3">
        <NotificationIcon type={icon} />

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[14px] font-medium text-[#444]">
            {title}
          </h3>

          <p className="truncate text-[12px] text-[#8A8A8A]">
            {subtitle}
          </p>
        </div>

        <ChevronDown size={18} className="text-[#777]" />
      </div>
    </div>
  );
}

function ActionNotification({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <div className="rounded-xl border border-[#D6D9DE] bg-[#F3F5F8] px-3 py-3 shadow-sm">
      <div className="flex gap-3">
        <NotificationIcon type={icon} />

        <div className="flex-1">
          <h3 className="text-[14px] font-medium leading-tight text-[#444]">
            {title}
          </h3>

          <div className="mt-3 flex items-center gap-3">
            <p className="flex-1 text-[12px] leading-4 text-[#7C7C7C]">
              {subtitle}
            </p>

            <button className="h-[34px] min-w-[150px] rounded-full bg-[#2852D8] px-5 text-[14px] font-medium text-white">
              Take action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}