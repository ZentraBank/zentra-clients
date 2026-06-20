"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const adverts = [
  {
    id: 1,
    title: "Advert Card",
    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/advert-cards.png",
  },
  {
    id: 2,
    title: "Premium Card",
    description: "Secure virtual cards for online shopping.",
    image: "/images/advert-cards.png",
  },
  {
    id: 3,
    title: "Instant Payments",
    description: "Pay faster with your Zentra virtual card.",
    image: "/images/advert-cards.png",
  },
];

export default function CardsPage() {
  const [activeAdvert, setActiveAdvert] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvert((prev) => (prev + 1) % adverts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const advert = adverts[activeAdvert];

  return (
    <main className="min-h-screen overflow-x-hidden  text-[#252525]"
    style={{
      backgroundImage: "url('/images/cards-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
      <section className="mx-auto min-h-screen w-full max-w-[430px] px-6 pb-[120px] pt-14">
        <header className="relative flex items-center justify-center">
          <Link href="/dashboard" className="absolute left-0 text-[#1d2939]">
            <ArrowLeft size={20} />
          </Link>

          <h1 className="font-heading text-[13px] font-bold tracking-[0.15em]">
            Cards
          </h1>
        </header>

        <section className="mt-8 grid grid-cols-[1fr_155px] items-center gap-2">
          <div>
            <h2 className="font-heading text-[25px] font-black leading-[27px] text-white">
              Simplify Payments
              <br />
              with Virtual Cards
            </h2>

            <p className="mt-5 text-[16px] font-medium leading-[18px] text-white">
              Instantly issue secure virtual cards for online and in-store
              purchases—no physical card needed.
            </p>

            <Link
              href="/cards/get-started"
              className="mt-8 flex h-[32px] w-[186px] items-center justify-center gap-6 rounded-[10px] bg-[#1D4ED8] text-[16px] font-bold text-white shadow-md transition active:scale-[0.98]"
            >
              Get Started
              <ArrowRight size={21} />
            </Link>
          </div>

          <div className="relative h-[180px] w-[165px]">
            <Image
              src="/images/cards-avatar.png"
              alt="Virtual cards illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </section>

        <Link
          href="/cards/store"
          className="mt-7 flex h-[137px] overflow-hidden rounded-[5px] bg-gradient-to-br from-[#98b5ff] via-[#2e67ed] to-[#1D4ED8] shadow-md"
        >
          <div className="flex w-[118px] items-center justify-center">
            <div className="relative h-[100px] w-[100px] rounded-[7px] bg-white shadow-lg">
              <Image
                src="/images/virtual-card.png"
                alt="Cards"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between pr-4">
            <div className="flex items-center gap-2">
              <h3 className="font-heading text-[24px] font-black text-[#252525]">
                Cards
              </h3>

              <p className="max-w-[130px] text-center text-[14px] font-black leading-[17px] text-white">
                Open to see your available cards and choose which one you like to
                buy
              </p>
            </div>

            <ChevronRight size={22} className="text-white" />
          </div>
        </Link>

        <section className="mt-4">
          <div className="relative h-[116px] overflow-hidden rounded-[4px] bg-[#138f3d] shadow-sm">
            <Image
              src={advert.image}
              alt={advert.title}
              fill
              className="object-cover"
            />

            <div className="absolute right-0 top-[21px] h-[72px] w-[222px] bg-[#49db7f] px-4 py-2">
              <h3 className="text-center font-heading text-[25px] font-black leading-[27px] text-white">
                {advert.title}
              </h3>

              <p className="mt-1 text-[15px] font-medium leading-[17px] text-[#164226]">
                {advert.description}
              </p>
            </div>
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {adverts.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveAdvert(index)}
                className={`h-2 rounded-full transition ${
                  activeAdvert === index
                    ? "w-6 bg-[#1D4ED8]"
                    : "w-2 bg-white/70"
                }`}
                aria-label={`Go to advert ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </section>

      <BottomNav />
    </main>
  );
}

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex w-full max-w-[430px] -translate-x-1/2 items-center justify-between border-t border-black/10 bg-white px-4 py-4 shadow-[0_-8px_25px_rgba(0,0,0,0.12)]">
      <BottomItem href="/dashboard" src="/images/profile-dashboard.png" active />
      <BottomItem href="/cards" src="/images/profile-profile.png" />
      <BottomItem href="/profile" src="/images/profile-transactions.png" />
      <BottomItem href="/wallet" src="/images/profile-investment.png" />
      <BottomItem href="/transactions" src="/images/profile-more.png" />
    </nav>
  );
}

function BottomItem({
  href,
  src,
  active = false,
}: {
  href: string;
  src: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex h-[50px] w-[58px] items-center justify-center rounded-[15px] border-2 border-[#15834f] bg-white ${
        active ? "shadow-md" : ""
      }`}
    >
      <Image src={src} alt="Navigation icon" width={32} height={32} />
    </Link>
  );
}