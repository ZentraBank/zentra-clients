"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";

export default function CryptoPaymentPage() {
  const walletAddress = "shaoDLKJSIjLIDJ38793q9xn";

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy wallet address", err);
    }
  };

  return (
    <main className="min-h-screen bg-[#2F69E8] text-white">
      <section className="mx-auto max-w-[430px] px-6 pb-10 pt-14">
        {/* Header */}
        <header className="relative flex items-center justify-center">
          <Link href="/cards" className="absolute left-0">
            <ArrowLeft size={22} />
          </Link>

          <h1 className="font-heading text-[15px] font-bold tracking-[0.15em]">
            Cards
          </h1>
        </header>

        {/* Hero */}
        <section className="relative mt-10 min-h-[220px]">
          <div className="max-w-[230px]">
            <h2 className="font-heading text-[36px] font-black leading-[38px]">
              Purchase with cryptocurrency
            </h2>

            <p className="mt-6 text-center text-[16px] font-semibold leading-[20px]">
              Due to your need to upgrade your account, you have to make your
              payment via our cryptocurrency address.
            </p>
          </div>

          <div className="absolute right-[-12px] top-0 h-[200px] w-[150px]">
            <Image
              src="/images/crypto-payment.png"
              alt="Crypto illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </section>

        {/* Summary Card */}
        <section className="rounded-[10px] bg-white px-4 py-4 text-[#4D4D4D] shadow-[0_8px_16px_rgba(0,0,0,0.18)]">
          <div className="grid grid-cols-[1fr_auto] gap-y-2">
            <span className="font-heading text-[16px] font-black">
              Purchase Amount:
            </span>

            <span className="text-[20px] font-black">$30</span>

            <span className="font-heading text-[16px] font-black">
              Card Type:
            </span>

            <span className="text-[18px] font-semibold">Virtual</span>

            <span className="font-heading text-[16px] font-black">
              Payment Method:
            </span>

            <span className="text-[18px] font-semibold">
              Cryptocurrency
            </span>
          </div>
        </section>

        {/* Wallet Section */}
        <section className="mt-7 rounded-[12px] border border-white/20 bg-white/10 p-4 shadow-[0_10px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm">
          <h3 className="font-heading text-[18px] font-black">
            Crypto wallet address:
          </h3>

          <div className="mt-4 rounded-[10px] bg-white p-4 text-black">
            {/* Copy Address */}
            <button
              onClick={handleCopy}
              className="flex w-full items-center justify-between rounded-full border border-gray-300 bg-[#F6F6F6] px-4 py-3 transition hover:bg-[#EFEFEF]"
            >
              <span className="truncate text-[14px] font-medium">
                {walletAddress}
              </span>

              {copied ? (
                <Check size={20} className="text-green-600" />
              ) : (
                <Copy size={20} className="text-[#2F69E8]" />
              )}
            </button>

            {copied && (
              <p className="mt-2 text-center text-[13px] font-medium text-green-600">
                Wallet address copied successfully
              </p>
            )}

            <p className="mt-4 text-[22px] font-medium">
              TON Blockchain
            </p>

            <ul className="mt-8 list-disc space-y-4 pl-5 text-[14px] leading-[16px] text-[#666666]">
              <li>
                Please make this payment using the TON network.
              </li>

              <li>
                You will be redirected outside our application to make this
                payment using your cryptocurrency wallet. Copy the address above
                and proceed to your wallet.
              </li>

              <li>
                After successful payment, return to the cards section and
                upload your payment receipt for verification and confirmation of
                your card purchase.
              </li>
            </ul>

            <Link
              href="https://ton.org"
              target="_blank"
              className="mt-8 flex h-[48px] w-full items-center justify-center rounded-[12px] bg-[#2F69E8] text-[18px] font-bold text-white shadow-md transition hover:opacity-90"
            >
              Proceed to Pay
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}