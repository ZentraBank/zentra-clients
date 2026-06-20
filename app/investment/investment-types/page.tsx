"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "Charity & Impact Investments",
    items: [
      {
        title: "Crowdfunded Charity Proj...",
        image: "/images/investments/charity-1.png",
      },
      {
        title: "Crowdfunded Charity Proj...",
        image: "/images/investments/charity-2.png",
      },
      {
        title: "Nonprofit Investment Pools",
        image: "/images/investments/charity-3.png",
      },
      {
        title: "Charity & Impact Investments",
        image: "/images/investments/charity-4.png",
      },
      
      {
        title: "Charity & Impact Investments",
        image: "/images/investments/charity-10.png",
      },
    ],
  },
  {
    title: "Will(Next-of-kin)",
    items: [
      {
        title: "P2P Lending (Microloans)",
        image: "/images/investments/p2p-1.png",
      },
      {
        title: "P2P Gifting Circles",
        image: "/images/investments/p2p-2.png",
      },
      {
        title: "Rotating Savings & Association (ROSCA)",
        image: "/images/investments/p2p-3.png",
      },
    ],
  },
  {
    title: "Gift & Reward-Based Investments",
    items: [
      {
        title: "Gift Savings",
        image: "/images/investments/gift-1.png",
      },
      {
        title: "Reward Investment",
        image: "/images/investments/gift-2.png",
      },
      {
        title: "Digital Gift Pool",
        image: "/images/investments/gift-3.png",
      },
    ],
  },
  {
    title: "Other Investments",
    items: [
      {
        title: "P2P Lending (Microloans)",
        image: "/images/investments/p2p-1.png",
      },
      {
        title: "P2P Gifting Circles",
        image: "/images/investments/p2p-2.png",
      },
      {
        title: "Rotating Savings & Association (ROSCA)",
        image: "/images/investments/p2p-3.png",
      },
    ],
  },
  {
    title: "Other Investments",
    items: [
      {
        title: "P2P Lending (Microloans)",
        image: "/images/investments/p2p-1.png",
      },
      {
        title: "P2P Gifting Circles",
        image: "/images/investments/p2p-2.png",
      },
      {
        title: "Rotating Savings & Association (ROSCA)",
        image: "/images/investments/p2p-3.png",
      },
    ],
  },
  {
    title: "Other Investments",
    items: [
      {
        title: "P2P Lending (Microloans)",
        image: "/images/investments/p2p-1.png",
      },
      {
        title: "P2P Gifting Circles",
        image: "/images/investments/p2p-2.png",
      },
      {
        title: "Rotating Savings & Association (ROSCA)",
        image: "/images/investments/p2p-3.png",
      },
    ],
  },
  {
    title: "Other Investments",
    items: [
      {
        title: "P2P Lending (Microloans)",
        image: "/images/investments/p2p-1.png",
      },
      {
        title: "P2P Gifting Circles",
        image: "/images/investments/p2p-2.png",
      },
      {
        title: "Rotating Savings & Association (ROSCA)",
        image: "/images/investments/p2p-3.png",
      },
    ],
  },
  {
    title: "Other Investments",
    items: [
      {
        title: "P2P Lending (Microloans)",
        image: "/images/investments/p2p-1.png",
      },
      {
        title: "P2P Gifting Circles",
        image: "/images/investments/p2p-2.png",
      },
      {
        title: "Rotating Savings & Association (ROSCA)",
        image: "/images/investments/p2p-3.png",
      },
    ],
  },
  {
    title: "Other Investments",
    items: [
      {
        title: "P2P Lending (Microloans)",
        image: "/images/investments/p2p-1.png",
      },
      {
        title: "P2P Gifting Circles",
        image: "/images/investments/p2p-2.png",
      },
      {
        title: "Rotating Savings & Association (ROSCA)",
        image: "/images/investments/p2p-3.png",
      },
    ],
  },
  {
    title: "Other Investments",
    items: [
      {
        title: "P2P Lending (Microloans)",
        image: "/images/investments/p2p-1.png",
      },
      {
        title: "P2P Gifting Circles",
        image: "/images/investments/p2p-2.png",
      },
      {
        title: "Rotating Savings & Association (ROSCA)",
        image: "/images/investments/p2p-3.png",
      },
    ],
  },
];

export default function InvestmentsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#13813d]">
      <section className="mx-auto min-h-screen w-full max-w-[430px] px-5 pb-10 pt-14">
        <header className="relative flex items-center justify-center">
          <Link href="/investment-intro" className="absolute left-0">
            <ArrowLeft size={20} />
          </Link>

          <p className="font-heading text-[13px] font-bold tracking-[0.15em] text-[#1F1F1F">
            Investments
          </p>
        </header>

        <h1 className="mt-6 text-center font-heading text-[31px] font-black text-white leading-[34px]">
          Take Financial Control
        </h1>

        <p className="mx-auto mt-4 max-w-[340px] text-center text-white  text-[13px] font-medium leading-[18px]">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-8 space-y-4">
          {sections.map((section) => (
            <InvestmentSection key={section.title} section={section} />
          ))}
        </div>
      </section>
    </main>
  );
}

function InvestmentSection({
  section,
}: {
  section: {
    title: string;
    items: {
      title: string;
      image: string;
    }[];
  };
}) {
  return (
    <section className="rounded-[8px] border border-white bg-[#16884b] text-white p-2 shadow-md">
      <h2 className="mb-3 font-heading text-[14px] font-black">
        {section.title}
      </h2>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {section.items.map((item) => (
          <InvestmentCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function InvestmentCard({
  item,
}: {
  item: {
    title: string;
    image: string;
  };
}) {
  return (
    <Link
      href="/investment/details"
      className="min-w-[122px] overflow-hidden rounded-[7px] bg-[#c9f2ee] text-[#263238] shadow-sm"
    >
      <div className="relative mx-auto mt-2 h-[209px] w-[120px] overflow-hidden rounded-[7px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-2 pb-3 pt-2">
        <h3 className="font-heading text-[13px] font-black leading-[14px]">
          {item.title}
        </h3>

        <p className="mt-2 text-[7px] font-medium leading-[9px] text-[#333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
    </Link>
  );
}