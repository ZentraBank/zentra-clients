"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Search } from "lucide-react";

import BottomNav from "@/components/layout/BottomNav";
import ConfirmTransactionOverlay from "@/components/transfer/ConfirmTransactionOverlay";
import PinConfirmationOverlay from "@/components/transfer/PinConfirmationOverlay";

export default function SendMoneyPage() {
  const [showConfirmOverlay, setShowConfirmOverlay] = useState(false);
  const [showPinOverlay, setShowPinOverlay] = useState(false);

  const [formData, setFormData] = useState({
    beneficiary: "",
    accountNumber: "",
    amount: "",
    purpose: "",
    currency: "$",
  });

  const displayAmount = formData.amount
    ? `${formData.currency}${formData.amount}`
    : "$50,000";

  const handleSendMoney = () => {
    setShowConfirmOverlay(true);
  };

  const handleFingerprintConfirm = () => {
    setShowConfirmOverlay(false);

    console.log("Transaction confirmed with fingerprint");

    // Later:
    // router.push("/transfer/success");
  };

  const handleUsePin = () => {
    setShowConfirmOverlay(false);
    setShowPinOverlay(true);
  };

  const handlePinSubmit = (pin: string) => {
    console.log("PIN entered:", pin);

    setShowPinOverlay(false);

    // Later:
    // router.push("/transfer/success");
  };

  return (
    <main className="relative min-h-screen bg-[#E7EBF0] text-[#4A4A4A]">
      <section className="mx-auto min-h-screen w-full max-w-[430px] px-6 pb-[110px] pt-12">
        <header className="relative flex items-center justify-center">
          <Link href="/transfers" className="absolute left-0 text-black/60">
            <ArrowLeft size={21} />
          </Link>

          <h1 className="font-heading text-[13px] font-bold tracking-[0.08em]">
            Send money
          </h1>
        </header>

        <form className="mt-6">
          <div className="relative">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
            />

            <input
              type="text"
              value={formData.beneficiary}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  beneficiary: e.target.value,
                })
              }
              placeholder="Search beneficiary"
              className="h-[38px] w-full rounded-full border border-black/20 bg-transparent pl-10 pr-4 text-[13px] outline-none placeholder:text-black/25"
            />
          </div>

          <div className="mt-5">
            <label className="mb-1 block font-heading text-[12px] font-black tracking-[0.05em]">
              Account number
            </label>

            <input
              type="text"
              inputMode="numeric"
              value={formData.accountNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  accountNumber: e.target.value,
                })
              }
              placeholder="eg. 927-438-XXX"
              className="h-[35px] w-full rounded-[7px] bg-white/80 px-3 text-[15px] outline-none placeholder:text-black/25"
            />
          </div>

          <div className="mt-5 grid grid-cols-[54px_1fr] gap-4">
            <div className="pt-[21px]">
              <button
                type="button"
                className="flex h-[31px] w-[54px] items-center justify-center gap-1 rounded-full bg-white text-[13px] shadow-sm"
              >
                {formData.currency}
                <ChevronDown size={15} />
              </button>
            </div>

            <div>
              <label className="mb-1 block font-heading text-[12px] font-black tracking-[0.05em]">
                Amount
              </label>

              <input
                type="text"
                inputMode="decimal"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: e.target.value,
                  })
                }
                placeholder="eg. $50,000"
                className="h-[35px] w-full rounded-[7px] bg-white/80 px-3 text-[15px] outline-none placeholder:text-black/25"
              />

              <p className="mt-1 text-right text-[11px] font-bold tracking-[0.04em] text-black/35">
                balance:{" "}
                <span className="ml-3 text-black/45">$50, 000, 000</span>
              </p>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-1 block font-heading text-[12px] font-black tracking-[0.05em]">
              Purpose
            </label>

            <textarea
              value={formData.purpose}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  purpose: e.target.value,
                })
              }
              placeholder="What’s this for?"
              className="h-[118px] w-full resize-none rounded-[7px] bg-white/80 px-3 py-2 text-[15px] outline-none placeholder:text-black/25"
            />

            <p className="-mt-1 text-right text-[11px] font-bold text-black/20">
              Optional
            </p>
          </div>

          <button
            type="button"
            onClick={handleSendMoney}
            className="mt-[160px] flex h-[43px] w-full items-center justify-center rounded-[8px] bg-[#2458E8] text-[14px] font-bold text-white active:scale-[0.98]"
          >
            Send money
          </button>
        </form>
      </section>

      <BottomNav />

      <ConfirmTransactionOverlay
        open={showConfirmOverlay}
        amount={displayAmount}
        onClose={() => setShowConfirmOverlay(false)}
        onConfirmFingerprint={handleFingerprintConfirm}
        onUsePin={handleUsePin}
      />

      <PinConfirmationOverlay
        open={showPinOverlay}
        onClose={() => setShowPinOverlay(false)}
        onSubmit={handlePinSubmit}
      />
    </main>
  );
}