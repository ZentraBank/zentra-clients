"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, Mail, LogIn } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Forgot password email:", email);

    window.location.href = "/register/otp";
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#E8EEF3] px-4 py-6 pt-26 text-[#555] md:flex md:items-center md:justify-center md:bg-gradient-to-br md:from-[#dbe8f5] md:via-white md:to-[#cbdaf3]">
      <Link href="/login" className="absolute left-4 top-5 z-50">
        <ArrowLeft size={20} />
      </Link>

      <Link href="/" className="absolute right-4 top-5 z-50 md:hidden">
        <X size={20} />
      </Link>

      <section className="mx-auto grid w-full max-w-[960px] overflow-hidden rounded-[24px] bg-white shadow-2xl md:grid-cols-[1fr_1.05fr]">
        <div className="hidden bg-[#2458E8] p-10 text-white md:flex md:flex-col md:justify-between">
          <div>
            <h2 className="font-sf-condensed text-[44px] leading-tight">
              Reset Securely.
            </h2>

            <p className="mt-4 max-w-[360px] font-lato text-[15px] leading-6 text-white/85">
              Enter your registered email address and we’ll send you a secure
              verification code to reset your password.
            </p>
          </div>

          <div className="relative mt-10 h-[310px] w-full">
            <Image
              src="/images/register.png"
              alt="Forgot password illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative px-4 pb-6 pt-5 md:px-10 md:py-8">
          <Link
            href="/"
            className="absolute right-4 top-5 hidden md:block"
            aria-label="close"
          >
            <X size={20} />
          </Link>

          <h1 className="text-center font-sf-condensed text-[36px] md:text-[42px]">
            Forgot Password
          </h1>

          <div className="mt-5 overflow-hidden rounded-tr-[70px] bg-[#2458E8] md:hidden">
            <div className="flex h-[96px] items-center justify-center bg-gradient-to-r from-white via-white/70 to-[#2458E8]">
              <Image
                src="/images/register.png"
                alt="Forgot password illustration"
                width={150}
                height={112}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p className="mt-4 font-lato text-[14px] leading-[20px] text-[#1f1f1f]">
            No worries. Enter your email address below and we’ll help you reset
            your password.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="font-lato text-[11px] font-bold text-[#555]">
                Registered Email:
              </label>

              <div className="mt-2 flex h-[42px] items-center gap-2 border-b border-[#D6D6D6] focus-within:border-[#2458E8]">
                <Mail size={16} className="text-[#2458E8]" />

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-full flex-1 bg-transparent font-lato text-[13px] text-[#333] outline-none placeholder:text-[#C6C6C6]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-[10px] bg-[#2458E8] py-3 text-center font-sf text-[13px] font-semibold text-white shadow-lg transition hover:bg-[#1d49c9]"
            >
              Send Reset Code
              <LogIn size={16} />
            </button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-3 font-lato text-[11px] text-[#555]">
            <span>Remember your password?</span>

            <Link href="/login" className="flex items-center gap-2 text-[#2458E8]">
              Login
              <LogIn size={14} className="text-[#2E8B57]" />
            </Link>
          </div>

          <div className="mt-7 flex justify-center gap-8 font-lato text-[11px] text-[#555]">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
          </div>
        </div>
      </section>
    </main>
  );
}