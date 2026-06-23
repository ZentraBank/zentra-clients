"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const podItems = [
  {
    id: 1,
    title: "Certified death certificate",
    image: "/images/pod-certificates.png",
    card: true,
  },
  {
    id: 2,
    title: "Your valid ID",
    image: "/images/pod-id.png",
    card: false,
  },
  {
    id: 3,
    title: "Claim form",
    image: "/images/pod-claim-form.png",
    card: true,
  },
];

export default function PodRedemptionPage() {
  return (
    <main className="min-h-screen bg-[#E7EBF0] px-6 pb-10 pt-12 text-[#4A4A4A]">
      <section className="mx-auto w-full max-w-[430px]">
        <header className="relative flex items-center justify-center">
          <Link href="/dashboard" className="absolute left-0 text-[#555]">
            <ArrowLeft size={20} />
          </Link>

          <h1 className="font-heading text-[13px] font-black tracking-[0.08em]">
            POD Redemption
          </h1>
        </header>

        <div className="mt-9 flex justify-center">
          <Image
            src="/images/pod-phone.png"
            alt="POD redemption"
            width={130}
            height={90}
            priority
            className="object-contain"
          />
        </div>

        <div className="mt-10 space-y-6">
          {podItems.map((item) => (
            <div key={item.id}>
              <div
                className={
                  item.card
                    ? "flex h-[143px] items-center justify-end rounded-[8px] bg-white px-5"
                    : "flex h-[115px] items-center justify-center"
                }
              >
                <p className="mt-3 text-[15px] font-medium">
                {item.id}.{" "}
                <span className="ml-2">{item.title}</span>
              </p>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.card ? 120 : 115}
                  height={item.card ? 95 : 105}
                  className="object-contain"
                />
                
              </div>

              
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-[6px] border border-[#D8DEE8] bg-white px-4 py-4">
  <button
    type="button"
    className="
      flex
      h-[42px]
      w-full
      items-center
      justify-center
      rounded-[12px]
      bg-[#2458E8]
      text-[16px]
      font-medium
      text-white
      shadow-sm
      transition
      active:scale-[0.98]
    "
  >
    Proceed
  </button>
</div>
      </section>
    </main>
  );
}