"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function RegisterOtpPage() {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#E8EEF3] px-5 py-10">
      <Link href="/register" className="absolute left-4 top-5 z-30 text-[#555]">
        <ArrowLeft size={22} />
      </Link>

      <section className="relative w-full max-w-[360px] rounded-[18px] bg-white px-5 pb-8 pt-5 shadow-xl md:max-w-[430px] md:px-6">
        <Link
          href="/register"
          className="absolute right-4 top-5 text-[#555]"
          aria-label="close"
        >
          <X size={18} />
        </Link>

        <h1 className="mb-5 text-center font-sf text-[30px] font-bold text-[#555]">
          OTP Verification
        </h1>

        <div className="flex justify-center">
          <Image
            src="/images/otp.png"
            alt="OTP verification"
            width={220}
            height={160}
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-5 text-center">
          <p className="font-lato text-[15px] leading-5 text-[#555]">
            We&apos;ve sent a verification code to your registered email or
            phone number.
          </p>

          <p className="mt-2 font-lato text-[14px] leading-5 text-[#888]">
            Enter the 6-digit code below to continue.
          </p>
        </div>

        <div className="mx-auto my-5 h-[1px] w-[90%] bg-[#E5E7EB]" />

        <label className="font-lato text-[13px] font-bold text-[#555]">
          Enter OTP
        </label>

        <div className="mt-3 grid grid-cols-6 gap-2">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              title={`OTP digit ${i + 1}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="h-[44px] rounded-lg border border-[#D6D6D6] bg-white text-center text-lg font-bold text-[#2458E8] outline-none focus:border-[#2458E8]"
            />
          ))}
        </div>

        <button
          type="button"
          disabled={countdown > 0}
          onClick={() => setCountdown(30)}
          className={`ml-auto mt-4 flex h-[38px] items-center justify-center rounded-full px-5 text-[13px] font-bold transition-all ${
            countdown > 0
              ? "cursor-not-allowed bg-[#E5E7EB] text-[#888]"
              : "bg-[#2458E8] text-white"
          }`}
        >
          {countdown > 0 ? `Resend OTP (${countdown}s)` : "Resend OTP"}
        </button>

        <Link
          href="/dashboard"
          className="mt-8 block w-full rounded-[10px] bg-[#2458E8] py-3 text-center font-sf text-[15px] font-bold text-white shadow-lg"
        >
          Verify & Continue
        </Link>
      </section>
    </main>
  );
}