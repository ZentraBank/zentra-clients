"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

import BottomNav from "@/components/layout/BottomNav";

const actions = [
  { title: "Active Card", icon: "/images/active-cards.png", href: "/cards/active-cards" },
  { title: "Get Virtual Card", icon: "/images/virtual-cards.png", href: "/cards/cards-purchase" },
  { title: "Blocked Cards", icon: "/images/virtual-cards.png", href: "/cards/blocked" },
  { title: "Limits & Controls", icon: "/images/limits-control.png", href: "/cards/limits" },
  { title: "Inactive cards", icon: "/images/virtual-cards.png", href: "/cards/inactive" },
  { title: "Frozen Cards", icon: "/images/blocked-cards.png", href: "/cards/frozen" },
  { title: "Card Lock", icon: "/images/limits-control.png", href: "/card-lock" },
  { title: "Quick Setting", icon: "/images/quick-settings.png", href: "/cards/settings" },
];

const smallCards = [
  { id: 1, name: "Celebrity card", image: "/images/celebrity-card.png" },
  { id: 2, name: "Merchant card", image: "/images/merchant-card.png" },
  { id: 3, name: "Premium card", image: "/images/celebrity-card.png" },
];

const bigCards = [
  { id: 1, name: "Celebrity card", image: "/images/celebrity-card.png" },
  { id: 2, name: "Merchant card", image: "/images/merchant-card.png" },
  { id: 3, name: "Luxury card", image: "/images/celebrity-card.png" },
];

export default function CardsHomePage() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = () => {
    carouselRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#E7EBF0] text-[#252525]">
      <section className="mx-auto w-full max-w-[430px] px-5 pb-[120px] pt-14 lg:max-w-[1180px] lg:px-8 lg:pb-12 lg:pt-10">
        <header className="relative flex items-center justify-center lg:justify-between">
          <Link
            href="/cards"
            className="absolute left-0 text-black/60 lg:static lg:grid lg:h-11 lg:w-11 lg:place-items-center lg:rounded-full lg:bg-white lg:shadow-sm"
          >
            <ArrowLeft size={22} />
          </Link>

          <h1 className="font-heading text-[14px] font-bold tracking-[0.2em] lg:text-[24px] lg:tracking-normal">
            Cards
          </h1>

          <button
            type="button"
            onClick={scrollCards}
            className="hidden h-11 items-center gap-2 rounded-full bg-white px-5 text-[14px] font-semibold text-[#2458E8] shadow-sm transition hover:bg-[#F3F7FF] lg:flex"
          >
            
          </button>
        </header>

        <div className="lg:mt-10 lg:grid lg:grid-cols-12 lg:gap-6">
          <section className="mt-8 grid grid-cols-[1fr_170px] items-center gap-2 lg:col-span-7 lg:mt-0 lg:min-h-[430px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:rounded-[30px] lg:bg-white lg:p-8 lg:shadow-sm">
            <div>
              <h2 className="font-heading text-[24px] font-black leading-[25px] text-[#617DB7] lg:text-[54px] lg:leading-[58px]">
                Simplify Payments
                <br />
                with Virtual Cards
              </h2>

              <p className="mt-5 text-center text-[14px] font-medium leading-[18px] text-black/55 lg:max-w-[460px] lg:text-left lg:text-[18px] lg:leading-8">
                Instantly issue secure virtual cards for online and in-store
                purchases—no physical card needed.
              </p>

              <Link
                href="/cards/cards-purchase"
                className="mt-6 flex h-[32px] w-[186px] items-center justify-center gap-4 rounded-[10px] bg-[#2458E8] text-[16px] font-semibold text-white shadow-md lg:h-[54px] lg:w-[230px] lg:rounded-[16px] lg:hover:bg-[#1d46c0]"
              >
                Pay right away
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="relative h-[185px] w-[170px] lg:h-[360px] lg:w-full">
              <Image
                src="/images/cards-avatar.png"
                alt="Cards illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </section>

          <aside className="lg:col-span-5 lg:space-y-6">
            <section className="mt-8 grid grid-cols-4 gap-x-5 gap-y-6 lg:mt-0 lg:rounded-[30px] lg:bg-white lg:p-6 lg:shadow-sm">
              {actions.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex flex-col items-center text-center transition hover:-translate-y-1"
                >
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[8px] lg:h-[64px] lg:w-[64px] lg:rounded-[18px] lg:bg-[#F3FFF8]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="object-contain lg:h-[42px] lg:w-[42px]"
                    />
                  </div>

                  <p className="mt-2 text-[12px] font-medium leading-[13px] text-[#38B974] lg:text-[13px] lg:leading-4">
                    {item.title}
                  </p>
                </Link>
              ))}
            </section>

            <section className="mt-9 lg:mt-0 lg:rounded-[30px] lg:bg-white lg:p-6 lg:shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-bold text-black/60 lg:text-[20px]">
                  Your Cards
                </h3>

                <Link
                  href="/cards/active-cards"
                  className="flex h-[25px] w-[112px] items-center justify-center gap-3 rounded-full bg-white/65 text-[13px] font-semibold text-black/45 shadow-sm lg:h-[36px] lg:w-[130px] lg:bg-[#F3F7FF]"
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
                    className="relative h-[105px] min-w-[178px] overflow-hidden rounded-[5px] shadow-md lg:h-[125px] lg:min-w-[210px] lg:rounded-[16px]"
                  >
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute bottom-2 right-3 text-right">
                      <p className="text-[11px] font-semibold text-white lg:text-[13px]">
                        {card.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-2 lg:mt-6 lg:rounded-[30px] lg:bg-white lg:p-6 lg:shadow-sm">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            {bigCards.map((card) => (
              <Link
                key={card.id}
                href="/cards/details"
                className="relative h-[145px] min-w-[300px] snap-start overflow-hidden rounded-[5px] shadow-lg lg:h-[260px] lg:min-w-[500px] lg:rounded-[26px]"
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

      <div className="lg:hidden">
        <BottomNav />
      </div>
    </main>
  );
}