"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus } from "lucide-react";
import BottomNav from "@/components/layout/BottomNav";

const cards = [
  {
    id: 1,
    type: "Credit card",
    name: "Celebrity card",
    status: "Active",
    image: "/images/celebrity-card.png",
  },
  {
    id: 2,
    type: "Debit card",
    name: "Merchant card",
    status: "Active",
    image: "/images/merchant-card.png",
  },
  {
    id: 3,
    type: "Debit card",
    name: "Love card",
    status: "Active",
    image: "/images/love-card.png",
  },
  {
    id: 4,
    type: "Credit card",
    name: "Official card",
    status: "Active",
    image: "/images/official-card.png",
  },
  {
    id: 5,
    type: "Credit card",
    name: "Cryptocurrency card",
    status: "Active",
    image: "/images/crypto-card.png",
  },
];

export default function ActiveCardsPage() {
  return (
    <main className="min-h-screen bg-[#E7EBF0]">
      <section className="mx-auto max-w-[430px] px-4 pb-[120px] pt-12 lg:max-w-[1180px] lg:px-8 lg:pb-12 lg:pt-10">
        <header className="relative flex items-center justify-center lg:justify-between">
          <Link
            href="/cards/cards-home"
            className="absolute left-0 lg:static lg:grid lg:h-11 lg:w-11 lg:place-items-center lg:rounded-full lg:bg-white lg:shadow-sm"
          >
            <ArrowLeft size={20} />
          </Link>

          <h1 className="font-heading text-[18px] font-bold lg:text-[24px]">
            Active cards
          </h1>

          <Link
            href="/cards/cards-purchase"
            className="hidden h-11 items-center gap-2 rounded-full bg-[#2458E8] px-5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#1d46c0] lg:flex"
          >
            <Plus size={16} />
            New Card
          </Link>
        </header>

        <section className="mt-8 lg:grid lg:grid-cols-12 lg:gap-6">
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-10 rounded-[30px] bg-white p-6 shadow-sm">
              <p className="text-[13px] font-semibold text-[#2458E8]">
                Card Overview
              </p>

              <h2 className="mt-3 text-[40px] font-black leading-none text-[#252525]">
                {cards.length}
              </h2>

              <p className="mt-2 text-[14px] text-black/50">
                Active cards currently connected to your ZentraBank account.
              </p>

              <div className="mt-6 space-y-3">
                <OverviewRow label="Credit cards" value="3" />
                <OverviewRow label="Debit cards" value="2" />
                <OverviewRow label="Frozen cards" value="0" />
              </div>

              <Link
                href="/cards/cards-purchase"
                className="mt-7 flex h-[48px] items-center justify-center rounded-[16px] bg-[#2E8B57] text-[14px] font-bold text-white shadow-md transition hover:bg-[#267348]"
              >
                Create Virtual Card
              </Link>
            </div>
          </aside>

          <section className="lg:col-span-8 lg:rounded-[30px] lg:bg-white lg:p-8 lg:shadow-sm">
            <div className="lg:flex lg:items-end lg:justify-between">
              <div>
                <h2 className="text-[20px] font-bold text-[#4A4A4A] lg:text-[34px]">
                  My cards
                </h2>

                <p className="mt-2 hidden max-w-[520px] text-[15px] leading-6 text-black/50 lg:block">
                  Manage, view, and open details for all active virtual cards.
                </p>
              </div>
            </div>

            <section className="mt-4 grid grid-cols-2 gap-3 lg:mt-8 lg:grid-cols-2 lg:gap-5">
              {cards.map((card) => (
                <Link key={card.id} href={`/cards/${card.id}`} className="group">
                  <div className="relative h-[130px] overflow-hidden rounded-[8px] shadow-md lg:h-[235px] lg:rounded-[26px] lg:shadow-xl">
                    <Image
                      src={card.image}
                      alt={card.type}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute left-3 top-3 lg:left-5 lg:top-5">
                      <h3 className="text-[14px] font-bold text-white lg:text-[20px]">
                        {card.type}
                      </h3>

                      <p className="mt-1 hidden text-[13px] text-white/80 lg:block">
                        {card.name}
                      </p>
                    </div>

                    <div className="absolute right-3 top-3 hidden rounded-full bg-white/20 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur lg:block">
                      {card.status}
                    </div>

                    <div className="absolute bottom-3 left-3 lg:bottom-5 lg:left-5">
                      <p className="text-[12px] text-white lg:text-[17px]">
                        2386 **** **** 1234
                      </p>

                      <div className="mt-1 lg:flex lg:gap-5">
                        <p className="text-[11px] text-white/90 lg:text-[13px]">
                          CVV: 7XX
                        </p>

                        <p className="text-[11px] text-white/90 lg:text-[13px]">
                          expiry date: 27/XX
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 lg:bottom-5 lg:right-5">
                      <span className="text-[12px] font-semibold text-white lg:text-[15px]">
                        {card.type}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </section>
        </section>
      </section>

      <div className="lg:hidden">
        <BottomNav />
      </div>
    </main>
  );
}

function OverviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-[16px] bg-[#F7FAFC] px-4 py-3">
      <span className="text-[14px] font-medium text-black/55">{label}</span>
      <span className="text-[15px] font-bold text-[#2458E8]">{value}</span>
    </div>
  );
}