"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  { id: 1, title: "Celebrity card", image: "/images/celebrity-card.png" },
  { id: 2, title: "Merchant card", image: "/images/merchant-card.png" },
  { id: 3, title: "Love card", image: "/images/love-card.png" },
];

const sections = [
  {
    title: "Basic Features",
    items: [
      "Credit Limit – Maximum amount you can borrow.",
      "Card Number – Unique 16-digit identification number.",
      "Expiry Date – Validity of the card.",
      "CVV/CVC Code – Security code for online transactions.",
      "Issuer Name & Logo – Bank or financial institution providing the card.",
      "Card Network – Visa, Mastercard, American Express, Discover, etc.",
    ],
  },
  {
    title: "Financial Features",
    items: [
      "Interest Rate (APR) – Percentage charged on unpaid balances.",
      "Grace Period – Interest-free period for full payments.",
      "Minimum Payment – Smallest amount due to avoid default.",
      "Balance Transfer Option – Ability to move balances from other cards.",
      "Cash Advance – Withdrawing cash using the credit card.",
      "Fees – Annual fee, late fee, foreign transaction fee, balance transfer fee, etc.",
    ],
  },
  {
    title: "Security Features",
    items: [
      "EMV Chip – Protects against fraud with encrypted transactions.",
      "Magnetic Stripe – Traditional swipe method.",
      "Contactless/NFC Tap-to-Pay – Touchless payment feature.",
      "PIN Protection – Required for ATM and some in-store payments.",
      "Fraud Monitoring & Alerts – Detects suspicious activity.",
      "Zero Liability Protection – No responsibility for unauthorized charges.",
      "Virtual Card Numbers – For safe online shopping.",
    ],
  },
  {
    title: "Digital & Convenience Features",
    items: [
      "Mobile Wallet Integration – Apple Pay, Google Pay, Samsung Pay.",
      "Online/Mobile Banking Access – Track spending, statements, and payments.",
      "E-statements – Digital monthly account statements.",
      "Autopay Option – Automatic bill payments.",
      "Card Lock/Freeze – Temporarily disable if lost/stolen.",
    ],
  },
];

export default function CardDetailsPage() {
  return (
    <main className="min-h-screen bg-[#E7EBF0] text-[#4A4A4A]">
      <section className="mx-auto max-w-[430px]">
        <div className="sticky top-0 z-30 bg-[#E7EBF0] px-6 pb-4 pt-14">
          <header className="relative flex items-center justify-center">
            <Link href="/cards" className="absolute left-0 text-black/60">
              <ArrowLeft size={21} />
            </Link>

            <h1 className="font-heading text-[15px] font-bold tracking-[0.12em]">
              Cards
            </h1>
          </header>

          <div className="relative mx-auto mt-5 h-[220px] w-full">
            <Image
              src="/images/cards-avatar.png"
              alt="Cards illustration"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-2 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {cards.map((card) => (
              <Link
                key={card.id}
                href={`/cards/${card.id}`}
                className="relative h-[126px] min-w-[178px] snap-start overflow-hidden rounded-[5px] shadow-md"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
        </div>

        <section className="px-6 pb-[110px] pt-3">
          {sections.map((section) => (
            <div key={section.title} className="mb-5">
              <h2 className="mb-3 font-heading text-[16px] font-black tracking-[0.04em]">
                {section.title}
              </h2>

              <ul className="list-disc space-y-1 pl-6 text-[14px] font-medium leading-[17px]">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </section>

      <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 border-t border-white/50 bg-[#E7EBF0]/90 px-6 py-4 backdrop-blur-md">
        <Link
          href="/subscribe/checkout?plan=card"
          className="flex h-[42px] w-full items-center justify-center gap-4 rounded-[10px] bg-[#2458E8] text-[16px] font-bold text-white shadow-md active:scale-[0.98]"
        >
          Buy card $30
          <ArrowRight size={21} />
        </Link>
      </div>
    </main>
  );
}