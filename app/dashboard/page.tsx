"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Bell,
  Settings,
  EyeOff,
  Phone,
  Wifi,
  SendHorizontal,
  CreditCard,
  Gift,
  HeartHandshake,
  Wallet,
  Landmark,
  ArrowDownLeft,
  ArrowUpRight,
  Info,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  BadgeDollarSign,
  Users,
  History,
  X,
} from "lucide-react";
import BottomNav from "@/components/layout/BottomNav";

const quickActions = [
  { title: "Airtime", icon: Phone },
  { title: "Data", icon: Wifi },
  { title: "Transfer", icon: SendHorizontal },
  { title: "Card Lock", icon: CreditCard },
];

const services = [
  { title: "Gift", icon: Gift },
  { title: "Donations", icon: HeartHandshake },
  { title: "Admin. services", icon: Wallet },
  { title: "Investment", icon: Landmark },
  { title: "cards", icon: CreditCard },
  { title: "bill pay", icon: Wallet },
];

const allServices = [
  { title: "Airtime", icon: Wallet },
  { title: "Send money", icon: SendHorizontal },
  { title: "Pay Bill", icon: CreditCard },
  { title: "Gift", icon: Wallet },

  { title: "Donations", icon: SendHorizontal, className: "col-span-2" },
  { title: "Admin. services", icon: BadgeDollarSign, className: "col-span-2" },

  { title: "Investment", icon: BadgeDollarSign },
  { title: "cards", icon: SendHorizontal },
  { title: "bill pay", icon: Wallet },
  { title: "Subscription", icon: BadgeDollarSign },

  { title: "Card setting", icon: Settings },
  { title: "Next-of-kin funds", icon: Users, className: "col-span-2" },
  { title: "Trans. History", icon: History },
];

const updates = [
  {
    icon: Info,
    title: "Up to $7m now convertible",
    text: "Congratulations! You have just upgraded your ZentraBa...",
  },
  {
    icon: Gift,
    title: "Charity Donation from Mark...",
    text: "Congratulations! You have just upgraded your ZentraBa...",
  },
];

export default function DashboardPage() {
  const [showMoreServices, setShowMoreServices] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#E8EDF3] pb-[92px] text-[#333]">
      <section className="mx-auto max-w-[390px] px-5 pt-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#B7D8FF] text-[#2B945D]">
              <SendHorizontal size={20} />
            </div>

            <div>
              <h1 className="text-[13px] font-semibold">Johnson Dutcher</h1>
              <p className="text-[12px] font-medium text-[#2B945D]">
                Basic Verified!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#2B945D]">
            <Bell size={17} />
            <Settings size={17} />
          </div>
        </header>

        <section className="mt-4 rounded-[9px] bg-[#2F9158] px-3 py-3 text-white shadow-sm">
          <div className="flex items-center gap-2 text-[12px]">
            <span>Balance</span>
            <EyeOff size={16} />
          </div>

          <div className="mt-2 flex items-end justify-between">
            <h2 className="text-[30px] font-semibold tracking-wide">
              $6,388,993.97
            </h2>
            <p className="text-[11px] text-black/55">Nonbank</p>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-4 gap-4">
          {quickActions.map((item) => (
            <SmallActionCard key={item.title} title={item.title} icon={item.icon} />
          ))}
        </section>

        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-[13px] font-bold tracking-wide">Services</h3>

          <button
            type="button"
            onClick={() => setShowMoreServices(true)}
            className="text-[12px] text-black/50"
          >
            View all
          </button>
        </div>

        <section className="mt-3 grid grid-cols-3 gap-4">
          {services.map((item) => (
            <DashboardServiceCard
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </section>

        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-[13px] font-bold tracking-wide">
            Transaction History
          </h3>
          <button className="text-[12px] text-black/50">View all</button>
        </div>

        <section className="mt-2 space-y-2">
          <TransactionCard
            type="in"
            name="Butcher Maxwell"
            bank="Bank of USA"
            amount="-₦5,000,..."
          />

          <TransactionCard
            type="out"
            name="McCray Jane"
            bank="ZentraBank"
            amount="-₦5,000,..."
          />
        </section>

        <section className="mt-4 overflow-hidden rounded-[8px] border border-[#55AE62] bg-white shadow-[0_0_8px_rgba(47,145,88,0.8)]">
          <div className="flex">
            <div className="relative h-[96px] w-[96px] shrink-0">
              <Image
                src="/images/redeem-girl.png"
                alt="Redeem"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center px-3 text-center">
              <h2 className="text-[22px] font-black leading-[22px] text-[#2F9158]">
                Register to Redeem Funds!
              </h2>
              <p className="mt-2 text-[11px] text-black/55">
                Get redemption code for gifts, donations
              </p>
            </div>
          </div>
        </section>

        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-[13px] font-bold tracking-wide">
            Recent Updates
          </h3>
          <button className="text-[12px] text-black/50">View all</button>
        </div>

        <section className="mt-3 space-y-2">
          {updates.map((item) => (
            <UpdateCard
              key={item.title}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </section>

        <section className="mt-8">
          <svg viewBox="0 0 330 150" className="h-[150px] w-full">
            {[0, 1, 2, 3, 4, 5, 6].map((y) => (
              <line
                key={y}
                x1="30"
                x2="320"
                y1={20 + y * 20}
                y2={20 + y * 20}
                stroke="#cbd2da"
                strokeWidth="1"
              />
            ))}

            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
              <line
                key={x}
                x1={30 + x * 32}
                x2={30 + x * 32}
                y1="20"
                y2="140"
                stroke="#cbd2da"
                strokeWidth="1"
              />
            ))}

            {[
              "40,55 70,42 102,50 135,92 168,68 200,72 230,38 265,70 300,44 320,62",
              "40,70 70,112 102,86 135,52 168,106 200,84 230,55 265,105 300,78 320,96",
              "40,92 70,60 102,120 135,62 168,115 200,52 230,74 265,78 300,64 320,88",
              "40,48 70,86 102,42 135,86 168,72 200,58 230,74 265,42 300,38 320,66",
              "40,100 70,118 102,124 135,72 168,115 200,120 230,32 265,96 300,80 320,40",
              "40,65 70,88 102,42 135,86 168,72 200,58 230,74 265,42 300,38 320,66",
            ].map((points, index) => (
              <polyline
                key={index}
                points={points}
                fill="none"
                strokeWidth="1.2"
                stroke={
                  [
                    "#2B945D",
                    "#FF6EA8",
                    "#7E39FF",
                    "#3E53D9",
                    "#A35C20",
                    "#989E31",
                  ][index]
                }
              />
            ))}
          </svg>
        </section>

        <section className="mt-2">
          <h3 className="text-[13px] font-bold tracking-wide">
            Financial Info.
          </h3>

          <div className="mt-2 flex justify-center gap-3 text-[11px]">
            <Legend color="bg-[#8B3105]" label="saving" />
            <Legend color="bg-[#E76AA5]" label="spending" />
            <Legend color="bg-[#7E39FF]" label="budgeting" />
          </div>
        </section>

        <section className="mt-7">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-bold tracking-wide">
              Recent Updates
            </h3>

            <div className="flex gap-4">
              <ChevronLeft size={18} className="text-black/30" />
              <ChevronRight size={18} />
            </div>
          </div>

          <div className="mt-3 flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {[1, 2, 3, 4].map((item) => (
              <AdvertCard key={item} />
            ))}
          </div>
        </section>
      </section>

      {showMoreServices && (
        <MoreServicesOverlay onClose={() => setShowMoreServices(false)} />
      )}

      <BottomNav />
    </main>
  );
}

function SmallActionCard({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <button type="button" className="text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-md bg-white shadow-md">
        <Icon size={25} className="text-[#2B945D]" />
      </div>
      <p className="mt-2 text-[12px] text-[#2B945D]">{title}</p>
    </button>
  );
}

function DashboardServiceCard({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <button
      type="button"
      className="h-[70px] rounded-[5px] border border-black/10 bg-gradient-to-br from-white via-[#B8E6D1] to-[#A7D0EF] shadow-md"
    >
      <div className="mx-auto mt-1 grid h-11 w-11 place-items-center rounded-md bg-white shadow-md">
        <Icon size={25} className="text-[#2B945D]" />
      </div>
      <p className="mt-1 text-[12px] leading-none">{title}</p>
    </button>
  );
}

function MoreServicesOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-[#E8EDF3] px-4 pb-[100px] pt-5">
      <section className="mx-auto max-w-[390px]">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px flex-1 bg-black/20" />

          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full bg-white shadow"
          >
            <X size={17} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {allServices.slice(0, 4).map((item) => (
            <MoreServiceCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {allServices.slice(4, 6).map((item) => (
            <MoreServiceCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </div>

        <div className="my-4 h-px bg-black/20" />

        <div className="grid grid-cols-4 gap-3">
          {allServices.slice(6, 10).map((item) => (
            <MoreServiceCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {allServices.slice(10).map((item) => (
            <MoreServiceCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function MoreServiceCard({
  title,
  icon: Icon,
  className = "",
}: {
  title: string;
  icon: React.ElementType;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`h-[74px] rounded-[5px] border border-black/10 bg-gradient-to-br from-white via-[#B8E6D1] to-[#A7D0EF] shadow-md ${className}`}
    >
      <div className="mx-auto mt-2 grid h-10 w-10 place-items-center rounded-md bg-white shadow-md">
        <Icon size={24} className="text-[#2F9158]" />
      </div>

      <p className="mt-1 text-[11px] leading-tight">{title}</p>
    </button>
  );
}

function TransactionCard({
  type,
  name,
  bank,
  amount,
}: {
  type: "in" | "out";
  name: string;
  bank: string;
  amount: string;
}) {
  const isIn = type === "in";

  return (
    <div className="flex items-center justify-between rounded-[7px] border border-black/10 bg-[#F2F5F8] px-3 py-2 shadow-sm">
      <div className="flex items-center gap-3">
        {isIn ? (
          <ArrowDownLeft size={18} className="text-[#2B945D]" />
        ) : (
          <ArrowUpRight size={18} className="text-[#E0443E]" />
        )}

        <div>
          <p className="text-[11px] text-black/35">{name}</p>
          <h4 className="text-[13px] leading-none text-black/55">{bank}</h4>
        </div>
      </div>

      <p
        className={`text-[14px] font-semibold ${
          isIn ? "text-[#2B945D]" : "text-[#E0443E]"
        }`}
      >
        {amount}
      </p>
    </div>
  );
}

function UpdateCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ElementType;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-[10px] border border-black/10 bg-[#F3F6FA] px-3 py-2 text-left shadow-sm"
    >
      <Icon size={20} className="text-[#2B945D]" />

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[13px] font-semibold">{title}</h4>
        <p className="truncate text-[11px] text-black/55">{text}</p>
      </div>

      <ChevronDown size={17} className="text-black/45" />
    </button>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <span className={`h-3 w-3 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
  );
}

function AdvertCard() {
  return (
    <article className="min-w-[108px] rounded-[5px] bg-white p-2 shadow-md">
      <div className="grid h-[68px] place-items-center rounded-md bg-white shadow-md">
        <Image
          src="/images/advert-icon.png"
          alt="Advert"
          width={42}
          height={42}
          className="object-contain"
        />
      </div>

      <h4 className="mt-3 text-center text-[14px] font-bold tracking-wide">
        Advert Card
      </h4>

      <p className="mt-2 text-[9px] font-semibold">Lorem ipsum dolor sit</p>
      <p className="mt-1 text-[8px] leading-[10px] text-black/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
    </article>
  );
}