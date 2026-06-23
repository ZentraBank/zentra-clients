"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, Search } from "lucide-react";

type TransferTab = "recent" | "beneficiaries";

const beneficiaries = [
  {
    id: 1,
    name: "McCatherine Thyler",
    bank: "Bank name",
    account: "9385939302",
    image: "/images/bank-icon.png",
  },
  {
    id: 2,
    name: "McCatherine Thyler",
    bank: "Bank name",
    account: "9385939302",
    image: "/images/bank-icon.png",
  },
  {
    id: 3,
    name: "McCatherine Thyler",
    bank: "Bank name",
    account: "9385939302",
    image: "/images/bank-icon.png",
  },
  {
    id: 4,
    name: "McCatherine Thyler",
    bank: "Bank name",
    account: "9385939302",
    image: "/images/bank-icon.png",
  },
  {
    id: 5,
    name: "McCatherine Thyler",
    bank: "Bank name",
    account: "9385939302",
    image: "/images/bank-icon.png",
  },
  {
    id: 6,
    name: "McCatherine Thyler",
    bank: "Bank name",
    account: "9385939302",
    image: "/images/bank-icon.png",
  },
  {
    id: 7,
    name: "McCatherine Thyler",
    bank: "Bank name",
    account: "9385939302",
    image: "/images/bank-icon.png",
  },
];

export default function TransferPage() {
  const [amount, setAmount] = useState("100");
  const [activeTab, setActiveTab] = useState<TransferTab>("recent");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredBeneficiaries = beneficiaries.filter((item) =>
    `${item.name} ${item.bank} ${item.account}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#E7EBF0] text-[#3F3F3F]">
      <section className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-5 pb-6 pt-12">
        <header className="relative flex items-center justify-center">
          <Link href="/dashboard" className="absolute left-0 text-black/60">
            <ArrowLeft size={21} />
          </Link>

          <h1 className="font-heading text-[13px] font-bold tracking-[0.08em]">
            Transfer
          </h1>
        </header>

        <section className="mt-8 flex-1 rounded-[15px] bg-white px-3 pb-5 pt-7">
          <div className="border-b border-black/20 pb-2">
            <label className="flex items-center text-[30px] font-semibold leading-none">
              <span>$</span>

              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                inputMode="decimal"
                className="w-full bg-transparent text-[30px] font-semibold outline-none"
              />
            </label>
          </div>

          <Link
            href="/transfer/add-bank"
            className="flex h-[48px] items-center justify-center gap-6 text-[13px] font-medium text-[#4F4F4F]"
          >
            Add a new bank account
            <ChevronRight size={18} />
          </Link>

          <section className="rounded-[5px] bg-[#90C5F8] px-2 pb-3 pt-3">
            <div className="grid grid-cols-2 rounded-[14px] bg-[#A9D4FF] p-1">
              <button
                onClick={() => setActiveTab("recent")}
                className={`h-[28px] rounded-[12px] text-[12px] font-medium ${
                  activeTab === "recent"
                    ? "bg-[#BBDFFF] text-[#37597A]"
                    : "text-[#3F3F3F]"
                }`}
              >
                Recent Transfers
              </button>

              <button
                onClick={() => setActiveTab("beneficiaries")}
                className={`h-[28px] rounded-[12px] text-[12px] font-medium ${
                  activeTab === "beneficiaries"
                    ? "bg-[#BBDFFF] text-[#37597A]"
                    : "text-[#3F3F3F]"
                }`}
              >
                Beneficiaries
              </button>
            </div>

            <div className="relative mt-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-black/35"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search beneficiaries"
                className="h-[30px] w-full rounded-full bg-white pl-9 pr-3 text-[12px] outline-none placeholder:text-black/45"
              />
            </div>

            <div className="mt-2 space-y-2">
              {filteredBeneficiaries.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`flex h-[54px] w-full items-center gap-3 rounded-[6px] bg-[#EEF3F8] px-2 text-left shadow-sm transition active:scale-[0.99] ${
                    selectedId === item.id
                      ? "ring-2 ring-[#2458E8]"
                      : "ring-1 ring-[#BBDFFF]"
                  }`}
                >
                  <div className="relative h-[40px] w-[40px] shrink-0">
                    <Image
                      src={item.image}
                      alt={item.bank}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-[14px] font-semibold leading-[16px] text-[#252525]">
                      {item.name}
                    </h3>

                    <p className="truncate text-[12px] leading-[14px] text-[#4F4F4F]">
                      {item.bank} - {item.account}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </section>

        <Link
          href="/transfer/confirm"
          className="mt-3 flex h-[42px] w-full items-center justify-center rounded-[8px] bg-[#2458E8] text-[14px] font-bold text-white"
        >
          Continue
        </Link>
      </section>
    </main>
  );
}