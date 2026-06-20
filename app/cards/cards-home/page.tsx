"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  CreditCard,
  ShieldCheck,
  Lock,
  Settings,
  BadgeCheck,
  ArrowRightLeft,
} from "lucide-react";

import BottomNav from "@/components/layout/BottomNav";

const actions = [
  { title: "Active Card", icon: "/images/active-cards.png" },
  { title: "Get Virtual Card", icon: "/images/virtual-cards.png" },
  { title: "Blocked Cards", icon: "/images/virtual-cards.png" },
  { title: "Limits & Controls", icon: "/images/limits-control.png" },
  { title: "Inactive cards", icon: "/images/virtual-cards.png" },
  { title: "Frozen Cards", icon: "/images/blocked-cards.png" },
  { title: "Card Lock", icon: "/images/limits-control.png" },
  { title: "Quick Setting", icon: "/images/quick-settings.png" },
];

const smallCards = [
  {
    id: 1,
    name: "Celebrity card",
    type: "Credit card",
    image: "/images/celebrity-card.png",
  },
  {
    id: 2,
    name: "Merchant card",
    type: "Debit card",
    image: "/images/merchant-card.png",
  },
  {
    id: 3,
    name: "Premium card",
    type: "Credit card",
    image: "/images/celebrity-card.png",
  },
];

const bigCards = [
  {
    id: 1,
    name: "Celebrity card",
    image: "/images/celebrity-card.png",
  },
  {
    id: 2,
    name: "Merchant card",
    image: "/images/merchant-card.png",
  },
  {
    id: 3,
    name: "Luxury card",
    image: "/images/celebrity-card.png",
  },
];

export default function CardsPage() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = () => {
    carouselRef.current?.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#E7EBF0] text-[#252525]">
      <section className="mx-auto w-full max-w-[430px] px-5 pb-[120px] pt-14">
        <header className="relative flex items-center justify-center">
          <Link href="/dashboard" className="absolute left-0 text-black/60">
            <ArrowLeft size={22} />
          </Link>

          <h1 className="font-heading text-[14px] font-bold tracking-[0.2em]">
            Cards
          </h1>
        </header>

        <section className="mt-8 grid grid-cols-[1fr_170px] items-center gap-2">
          <div>
            <h2 className="font-heading text-[24px] font-black leading-[25px] text-[#617DB7]">
              Simplify Payments
              <br />
              with Virtual Cards
            </h2>

            <p className="mt-5 text-center text-align-center text-[14px] font-medium leading-[18px] text-black/55">
              Instantly issue secure virtual cards for online and in-store
              purchases—no physical card needed.
            </p>

            <Link
              href="/cards/get-started"
              className="mt-6 flex h-[32px] w-[186px] items-center justify-center gap-4 rounded-[10px] bg-[#2458E8] text-[16px] font-semibold text-white shadow-md"
            >
              Pay right away
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative h-[185px] w-[170px]">
            <Image
              src="/images/cards-avatar.png"
              alt="Cards illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </section>

        <section className="mt-8 grid grid-cols-4 gap-x-5 gap-y-6">
  {actions.map((item) => (
    <Link
      key={item.title}
      href="/cards/action"
      className="flex flex-col items-center text-center"
    >
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[8px] ">
        {/* Replaced the <Icon /> component with Next.js <Image /> */}
        <Image 
          src={item.icon} 
          alt={item.title} 
          width={48} 
          height={48} 
          className="object-contain" 
        />
      </div>

      <p className="mt-2 text-[12px] font-medium leading-[13px] text-[#38B974]">
        {item.title}
      </p>
    </Link>
  ))}
</section>

        <section className="mt-9">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-bold text-black/60">Your Cards</h3>

            <Link href="/cards/active-cards"
              className="flex h-[25px] w-[112px] items-center justify-center gap-3 rounded-full bg-white/65 text-[13px] font-semibold text-black/45 shadow-sm"
            >
              See more
              <Plus size={12} className="text-[#38B974]" />
            </Link>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {smallCards.map((card) => (
              <Link
                key={card.id}
                href="/cards/details"
                className="relative h-[105px] min-w-[178px] overflow-hidden rounded-[5px] shadow-md"
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-2 right-3 text-right">
                  <p className="text-[11px] font-semibold text-white">
                    {card.type}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-2">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            {bigCards.map((card) => (
              <Link
                key={card.id}
                href="/cards/details"
                className="relative h-[145px] min-w-[300px] snap-start overflow-hidden rounded-[5px] shadow-lg"
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
        </section>
      </section>

      <BottomNav />
    </main>
  );
}

