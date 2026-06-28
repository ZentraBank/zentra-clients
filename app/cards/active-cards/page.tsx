"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/layout/BottomNav";

const cards = [
  {
    id: 1,
    // title: "Celebrity card",
    type: "Credit card",
    image: "/images/celebrity-card.png",
  },
  {
    id: 2,
    // title: "Merchant card",
    type: "Debit card",
    image: "/images/merchant-card.png",
  },
  {
    id: 3,
    // title: "Love card",
    type: "Debit card",
    image: "/images/love-card.png",
  },
  {
    id: 4,
    // title: "Official card",
    type: "Credit card",
    image: "/images/official-card.png",
  },
  {
    id: 5,
    // title: "Cryptocurrency card",
    type: "Credit card",
    image: "/images/crypto-card.png",
  },
];

export default function ActiveCardsPage() {
  return (
    <main className="min-h-screen bg-[#E7EBF0]">
      <section className="mx-auto max-w-[430px] px-4 pb-[120px] pt-12">
        <header className="relative flex items-center justify-center">
          <Link href="/cards" className="absolute left-0">
            <ArrowLeft size={20} />
          </Link>

          <h1 className="font-heading text-[18px] font-bold">
            Active cards
          </h1>
        </header>

        <h2 className="mt-8 text-[20px] font-bold text-[#4A4A4A]">
          My cards
        </h2>

        <section className="mt-4 grid grid-cols-2 gap-3">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={`/cards/${card.id}`}
              className="group"
            >
              <div className="relative h-[130px] overflow-hidden rounded-[8px] shadow-md">
                <Image
                  src={card.image}
                  alt={card.type}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute left-3 top-3">
                  <h3 className="text-[14px] font-bold text-white">
                    {card.type}
                  </h3>
                </div>

                <div className="absolute bottom-3 left-3">
                  <p className="text-[12px] text-white">
                    2386 **** **** 1234
                  </p>

                  <p className="text-[11px] text-white/90">
                    CVV: 7XX
                  </p>

                  <p className="text-[11px] text-white/90">
                    expiry date: 27/XX
                  </p>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="text-[12px] font-semibold text-white">
                    {card.type}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </section>

      <BottomNav />
    </main>
  );
}